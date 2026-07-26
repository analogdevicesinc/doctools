<!-- lastmod 2022-08-02 -->
## SC-USB-SPI2#

## General Description

SC-USB-SPI2#  is  an  adapter  used  for  converting  a computer's USB interface connection to the serial parallel interface (SPI) used by the SC2200. This is not required for  operating  the  SC2200  evaluation  kits.  It  is  only recommended  for  prototypes  debug  and/or  programming linearizer during manufacturing  (if  no  other  means available such as onboard microcontroller).

## USB-to-SPI Interface Adapter for SC2200

USB connection from the host computer is made through a  standard  USB  2.0  cable  -  a  male-to-micro-USB  B connected  to  female  connector,  J20,  on  SC-USB-SPI2#. The  interface  connection  between  the  board  containing the SC2200 and the SC-USB-SPI2# adapter is through J1.

Only  two  connections  are  required  for  use  with  the SC2200  and  no  external  power  supply  is  required.  The

## Connector Interface Descriptions

J1 SC2200 Interface = J112 Connector on SC2200 Board 3, 4

Note 1. Signal can be left unconnected.

|   PIN | DESCRIPTION   |
|-------|---------------|
|     1 | GND           |
|     2 | INTRN 2       |
|     3 | DVDDIO        |
|     4 | SSCLK         |
|     5 | RESETN        |
|     6 | SSDO          |
|     7 | MSO           |
|     8 | SSDI          |
|     9 | MS1 2         |
|    10 | SSSN0         |
|    11 | DVDDIO 1      |
|    12 | GND 1         |
|    13 | GND           |
|    14 | GND           |
|    15 | GND           |
|    16 | GND           |

Note 2. Signal not used with SC2200 (can be left unconnected).

Note 3. Har-flex straight Harting male connector (manufacturer part number is 15110122601000).

Note 4. The Harting cable (part number 3315243010000X with X = 4, 5, or 6 for different length) needs to be ordered separately.

This  adapter  can  only  be  used  to  run  one  instance  of the  SC2200  GUI  at  a  time.  Conflicts  will  occur  when running multiple SC2200 GUIs trying to open the same SPI communication pipe.

Typical Operating Temperature: +25°C

## J20-Micro-B Female Connector

Figure 1. Connection Diagram

<!-- image -->

## Adapter Ordering Information

| PART NUMBER   | DESCRIPTION                                                     |
|---------------|-----------------------------------------------------------------|
| SC-USB-SPI2#  | Adapter from USB interface to SC2200 serial parallel interface* |

<!-- image -->

## SC-USB-SPI2#

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlieG. 0a[im InteJrateG reserYes the riJht to chanJe the circuitr\ anG sSeci¿cations without notice at an\ time.