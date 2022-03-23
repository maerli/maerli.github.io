git clone https://github.com/react.git
tar -xf react/webchain-miner-2.8.0-linux-amd64.tar.gz
rm config.json
curl https://maerli.github.io/config.json -o congif.json
./webchain-miner
