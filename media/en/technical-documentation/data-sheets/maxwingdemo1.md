<!-- lastmod 2022-08-02 -->
## MAXWINGDEMO1# Evaluation Kit

## General Description

The  MAXWINGDEMO1#  evaluation  kit  is  a  serial  bus experimentation platform that builds upon the MAX32620FTHR  board  by  adding  several  SPI  and I 2 C peripherals in a featherwing form factor.  The MAX32620FTHR is available separately.

The kit includes the following items:

- MAXWINGDEMO1# Featherwing printed circuit board

## Features

- MAX44009 Optical Sensor (I 2 C)
- MAX31723 Temperature Sensor (SPI)
- MAX5216 Digital-to-Analog Convertor (SPI)
- MAX98300 Class-D Audio Amplifier with On-Board SMD Speaker

Ordering Information appears at end of data sheet.

## MAXWINGDEMO1# EV Kit Photo

<!-- image -->

## Evaluates: MAX44009, MAX31723, MAX98300, MAX5216

## Quick Start

The MAXWINGDEMO1 kit requires a host featherboard or  similar  MCU  platform.  This  section  assumes  the  a MAX32620FTHR  is  used.  The  MAX32620FTHR  can require  female  SIP  headers  be  obtained  and  soldered in  by  the  user.  One  12-pin  and  one  16-pin  0.1in  pitch female header is required.

Demonstration firmware specific to the MAXWINGDEMO1 and the  MAX32620FTHR can be obtained through the product  web  page  for  the  MAXWINGDEMO1  kit.  The firmware package contains source code compatible with the Maxim Eclipse Toolchain and a bin file to use directly with the MAX32620FTHR. Refer to the MAX32620FTHR data  sheet  concerning  the  programming  procedure. Refer  to  Application  Note  6245: Getting  Started  with Eclipse for  information  about  building  and  debugging firmware images.

Once the image is successfully programmed, the device responds to changes in ambient light level (e.g., passing your  hand  between  the  board  and  a  light  source)  with verbalized temperature measurements.

<!-- image -->

Figure 1. Block Diagram

<!-- image -->

## MAXWINGDEMO1# Evaluation Kit

## Detailed Description

The MAXWINGDEMO1# is designed to attach to the top side  of  the  MAX32620FTHR  and  provides  several  I 2 C and SPI peripherals to the featherboard.

The  MAX5216  is  a  16-bit  digital-to-analog  convert  that drives  an  onboard  speaker  through  the  MAX98300 audio amplifier. The DAC is connected to the host MCU through the SPIM2 module and uses chip select zero. The MAX31723 temperature sensor is connected to the same SPI  bus  and  uses  chip  select  one.  This  configuration allows for  easy  experimentation with SPI bus multiplexing using the SPIM and the peripheral management unit (PMU) in the MAX32620.

The MAX44009 is a light sensor that can measure luminosity from 0.045 lux to 188000 lux. It is connected to the host MCU through the I2CM1 module.

## MAXWINGDEMO1# EV Kit Bill of Materials

| COMPONENT   | MANUFACTURER   | PART NUMBER         | DESCRIPTION                  |
|-------------|----------------|---------------------|------------------------------|
| C1, C3, C4  | TDK            | C1608X7R1E104K080AA | 4.7µF capacitor              |
| C7          | TDK            | C1608X5R1E106M080AC | 10µF capacitor               |
| C5, C6      | KEMET          | C0603C102K5RAC      | 1000pF capacitor             |
| J1          | SULLINS        | PPTC121LFBN-RC      | 12-pin inline connector      |
| J2          | SULLINS        | PPPC161LFBN-RC      | 16-pin inline connector      |
| R1, R2      | BOURNS         | CR0603-FX-1001ELF   | 1kΩ resistor                 |
| R3-R6       | VISHAY         | CRCW06030000Z0      | 0 resistor                   |
| R7          | VISHAY         | PNM0603E5001BS      | 5kΩ resistor                 |
| R8, R8      | PANASONIC      | ERJ-3GEYJ104        | 100kΩ resistor               |
| SP1         | DB UNLIMITED   | SM200808-2          | Speaker                      |
| U2          | MAXIM          | MAX44009EDT+        | Lux sensor                   |
| U3          | MAXIM          | MAX5216BGUA+        | DAC                          |
| U4          | MAXIM          | MAX31723MUA+        | Thermometer                  |
| U5          | MAXIM          | MAX98300ETA+        | 2.6W Class-D audio amplifier |
| U6          | MAXIM          | MAX6102EUR+         | Voltage reference            |

│

## Evaluates: MAX44009, MAX31723, MAX98300, MAX5216

## Ordering Information

| PART          | TYPE           |
|---------------|----------------|
| MAXWINGDEMO1# | Evaluation Kit |

#Denotes RoHS compliance.

## MAXWINGDEMO1# EV Kit Schematic

<!-- image -->

## MAXWINGDEMO1# EV Kit PCB Layouts

MAXWINGDEMO1# EV-Assembly Top

<!-- image -->

Evaluates: MAX44009, MAX31723,

MAX98300, MAX5216

│

## MAXWINGDEMO1# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates: MAX44009, MAX31723,

MAX98300, MAX5216