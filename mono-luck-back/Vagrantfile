# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/focal64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port

  # port for mysql server
  config.vm.network "forwarded_port", guest: 3306, host: 3306

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"
 
  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
    vb.memory = "4096"
	  vb.cpus = "4"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
   # Installing MySQL
   sudo apt-get -y install mysql-server mysql-client
   # MySQL init & setting
   sudo mysql -u root -e "
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
   
   create database mono; 
   
   use mono; 
   
   create table USER(
   userId int NOT NULL AUTO_INCREMENT,
   userName varchar(40) NOT NULL,
   userCardId varchar(10) NOT NULL UNIQUE,
   phone varchar(15) NOT NULL UNIQUE,
   PRIMARY KEY (userId)
   );
   
   create table REGISTRATION(
   registerId int NOT NULL AUTO_INCREMENT,
   phone varchar(15) NOT NULL,
   lockerNo varchar(10),
   PRIMARY KEY (registerId),
   FOREIGN KEY(phone) REFERENCES USER (phone)
   );
   
   create table LUCKER(
   luckerId int NOT NULL AUTO_INCREMENT,
   luckerEncoding varchar(20) NOT NULL,
   userCardId varchar(10),
   PRIMARY KEY (luckerId),
   FOREIGN KEY(userCardId) REFERENCES USER (userCardId)
   );
   
   INSERT INTO USER (userName, userCardId, phone)
   VALUES('王小明','0192836475','0911111111'),
   ('John Cena','1829384756','0922222222'),  
   ('Neil Patrick Harris','6152635142','0933333333'),  
   ('阿巴','5473182736','0944444444'),  
   ('王力宏','4736281948','0955555555'),  
   ('蔡依林','3812334567','0966666666'),  
   ('晨陳','1273647898','0977777777'),  
   ('大哥哥','8887263789','0988888888'),  
   ('大姊姊','5377618273','0999999999'),  
   ('小妹妹','1622346589','0912345678'); 
   "
  SHELL
end
