# -*- mode: ruby -*-
# vi: set ft=ruby :

BOX = "hashicorp/bionic64"

Vagrant.configure("2") do |config|
  config.vm.define "master" do |subconfig|
    subconfig.vm.box = BOX
    subconfig.vm.hostname = "master"
    subconfig.vm.network :private_network, ip: "192.168.56.101"
    subconfig.vm.synced_folder ".", "/home/vagrant/sharefiles", :nfs => { :mount_options => ["dmode=777","fmode=666"] }
  end

  config.vm.define "worker1" do |subconfig|
    subconfig.vm.box = BOX
    subconfig.vm.hostname = "worker1"
    subconfig.vm.network :private_network, ip: "192.168.56.102"
  end

  config.vm.define "worker2" do |subconfig|
    subconfig.vm.box = BOX
    subconfig.vm.hostname = "worker2"
    subconfig.vm.network :private_network, ip: "192.168.56.103"
  end

  # Provision
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nginx
    apt-get install -y docker.io
    echo "Hello Docker Machine" > /var/www/html/index.html
  SHELL

end