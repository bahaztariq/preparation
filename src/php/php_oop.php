<?php

/**
 * Interface for authenticatable entities
 */
interface Authenticatable {
    public function login();
    public function logout();
}

/**
 * Abstract Base Model class (Abstraction)
 */
abstract class BaseModel {
    protected $id;
    protected $createdAt;

    public function __construct($id = null) {
        $this->id = $id;
        $this->createdAt = date('Y-m-d H:i:s');
    }

    abstract public function save();
    abstract protected function delete();

    public function getId() {
        return $this->id;
    }
}



/**
 * User class (Encapsulation and Inheritance)
 */
class User extends BaseModel implements Authenticatable {
    private $username;
    private $email;
    private $password;
    const user= 1;

    public function __construct($username, $email, $password, $id = null) {
        parent::__construct($id);
        $this->username = $username;
        $this->email = $email;
        $this->password = password_hash($password, PASSWORD_DEFAULT);
    }

    // Encapsulation: Getters and Setters
    public function getUsername() {
        return $this->username;
    }

    public function setUsername($username) {
        if (strlen($username) < 3) {
            throw new Exception("Username too short.");
        }
        $this->username = $username;
    }

    public function save() {
        // Demonstration of PDO usage
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=soutenance", "root", "");
            $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$this->username, $this->email, $this->password]);
            echo "User saved to database.\n";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage() . "\n";
        }
    }

    public function delete() {
        echo "User {$this->username} deleted.\n";
    }

    public function login() {
        echo "User {$this->username} logged in.\n";
    }

    public function logout() {
        echo "User {$this->username} logged out.\n";
    }

    // Method overriding demo (Polymorphism)
    public function displayProfile() {
        echo "Profile: {$this->username} ({$this->email})\n";
    }
}

/**
 * AdminUser class (Inheritance and Polymorphism)
 */
class AdminUser extends User {
    private $permissions;

    public function __construct($username, $email, $password, $permissions = [], $id = null) {
        parent::__construct($username, $email, $password, $id);
        $this->permissions = $permissions;
    }

    // Overriding the displayProfile method (Polymorphism)
    public function displayProfile() {
        echo "ADMIN Profile: " . parent::getUsername() . " | Permissions: " . implode(', ', $this->permissions) . "\n";
    }

    public function manageSystem() {
        echo "Admin is managing the system.\n";
    }
}

// Usage Example
try {
    $user = new User("jdoe", "jdoe@example.com", "secret123");
    $user->displayProfile();

    $admin = new AdminUser("admin", "admin@example.com", "adminpass", ["all", "delete_users"]);
    $admin->displayProfile();

} catch (Exception $e) {
    echo "Caught: " . $e->getMessage() . "\n";
}
