docker run -d --name hotel-container --network hotel-net -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=hotel_app -p 8080:8080 ankitchaure1998/hotel-image:v2

docker run -d --name mysql-container --network hotel-net -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=hotel_app -e MYSQL_PASSWORD=root -p 3306:3306 ankitchaure1998/mysql-custome:8.0

http://localhost:8080/test --- Testing
http://localhost:8080/api/users ---- List Users
http://localhost:8080/api/auth/register --- post data

{
    "name": "Ankit",
    "email": "ankit@gmail.com",
    "pincode": "440001",
    "role": "HOTEL_OWNER",
    "password": "123456"
}

{
    "name": "Ankit",
    "email": "ankit@gmail.com",
    "pincode": "440001",
    "role": "CUSTOMER",
    "password": "123456"
}
