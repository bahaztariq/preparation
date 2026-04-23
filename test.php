<?php

namespace App\Core;

class Product{
    protected $name;
    protected $price;
    protected $quantity;

    public function __construct($name,$price,$quantity){
        $this->price = $price; 
        $this->quantity = $quantity;
        $this->name = $name; 
    }


    public function SetPrice($price){
       if($price < 0) return;
       $this->price = $price;
    }

    public function getPrice(){
      return $this->price ;
    }

    public function Setquantity($quantity){
       $this->quantity = $quantity;
    }

    public function getquantity(){
      return $this->quantity ;
    }

    public function Setname($name){
       $this->name = $name;
    }

    public function getname(){
      return $this->name ;
    }

    public function getDetails(){
        return [
              'price' => $this->price,
              'quantity' => $this->quantity,
              'name' => $this->name
              ]; 
    }

}


class ElectronicProduct extends Product implements Exportable{
    private $warranty;


    public function __construct($name,$price,$quantity,$warranty){
      parent::__construct($name,$price,$quantity);
      $this->warranty =$warranty;
    }

    public function getDetails(){
      $details = parent::getDetails();
      $details['warranty'] = $this->warranty;
      return $details;
    }

    public function toJSON(){
        return json_encode($this->getDetails());
    }
}

abstract class Device{
    
   abstract public function turnOn();

}

interface Exportable{
    public function toJSON();
}

interface Authenticatable{
    public function getId();
}

$objects = [
    new ElectronicProduct('tilifon1',150,15,1),
    new ElectronicProduct('tilifon2',140,14,1)
];

foreach($objects as $obj){
    echo $obj->toJSON() . PHP_EOL;
}


class Calculator{
    public static $counter = 0 ;

    public function __construct(){
        self::$counter++;
    }

    public static function sum($a,$b){
        return $a + $b;
    }

    public static function divide($a,$b){
        try{
            if($b != 0) return $a / $b;
            else throw new \Exception("Division by zero");
        }catch(\Exception $error){
            echo "Error: " . $error->getMessage() . PHP_EOL;
            return null;
        }
    }
}

class Billing{

    const TAX_RATE = 1;
}

trait Logger{
  
}

class User{

  use Logger;
}

class UserRepository{

  private $database;

  public function __construct($database){
    $this->database = $database;
  }

  public function auth(Authenticatable $auth){}


}

$database = Database::getInstance();
$userRepo = new UserRepository($database);


final class Employee{
}


class Database{

  private static $instance = null;
  public static $connection = null;


  private function __construct($dsn = null ,$user = null,$pass = null){
      try {
          self::$connection = new \PDO($dsn, $user, $pass);
      } catch (\PDOException $e) {
          self::$connection = null;
      }
  }

  public static function getInstance($dsn = "sqlite::memory:", $user = null, $pass = null){
    if(self::$instance === null){
        self::$instance = new Database($dsn, $user, $pass);
    }
    return self::$instance;
  }

  public function getConnection(){
      return self::$connection;
  }
}