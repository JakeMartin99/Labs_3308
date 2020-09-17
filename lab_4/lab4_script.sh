#!/bin/bash
# Authors : Jake Martin
# Date: 09/16/2020

sudo cp /var/log/syslog /home
sudo egrep -i --color=always "error" /home/syslog | tee error_log_check.txt
sudo echo "This is an error log email" | mail -s "Error Log" -A error_log_check.txt jama6904@colorado.edu

