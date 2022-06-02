# discovergy-ocpp-pm2-relay

<a href="https://stromdao.de/" target="_blank" title="STROMDAO - Digital Energy Infrastructure"><img src="./static/stromdao.png" align="right" height="85px" hspace="30px" vspace="30px"></a>

**Relay electricity meter readings for wallboxes/chargepoints that do not have an internal compliant meter.**

[![npm](https://img.shields.io/npm/dt/discovergy-ocpp-pm2-relay.svg)](https://www.npmjs.com/package/discovergy-ocpp-pm2-relay)
[![npm](https://img.shields.io/npm/v/discovergy-ocpp-pm2-relay.svg)](https://www.npmjs.com/package/discovergy-ocpp-pm2-relay)
[![CO2Offset](https://api.corrently.io/v2.0/ghgmanage/statusimg?host=discovergy-ocpp-pm2-relay&svg=1)](https://co2offset.io/badge.html?host=discovergy-ocpp-pm2-relay)
[![Join the chat at https://gitter.im/stromdao/tydids-p2p](https://badges.gitter.im/stromdao/tydids-p2p.svg)](https://gitter.im/stromdao/tydids-p2p?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

MicroAction based on [PM2](https://pm2.io) [TX2](https://github.com/pm2/tx2) to start/stop EV charging on a OCPP 1.6 backend based on Smart Meter Readings

## Configuration
Rename `sample.env` to `.env`. OCPP_TAG might be specified as parameter.

## Running

`pm2 start --name chargepoint1 index.js`

## Samples
Start charging with Tag-ID from configuration
```
pm2 trigger chargepoint1 StartTransaction
```

Stop charging with Tag-ID from configuration
```
pm2 trigger chargepoint1 StopTransaction
```

Start charging with Tag-ID from configuration
```
pm2 trigger chargepoint1 StartTransaction
```

Start charging with Tag-ID 1000
```
pm2 trigger chargepoint1 StartTransaction 1000
```



## Maintainer / Imprint

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
kontakt@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)
</addr>


## [CONTRIBUTING](https://github.com/energychain/tydids-p2p/blob/main/CONTRIBUTING.md)

## [CODE OF CONDUCT](https://github.com/energychain/tydids-p2p/blob/main/CODE_OF_CONDUCT.md)
