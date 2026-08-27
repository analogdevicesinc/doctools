<!-- lastmod 2022-08-03 -->
## MAXWSNEV

## General Description

The  MAXWSNENV  demo  kit  provides  a  convenient platform evaluating the capabilities of the environmental sensor version of Maxim's wireless sensor node (WSN). The kit provides an excellent foundation for the Internet of Things (IoT) applications.

The  WSN  board  includes  a  microcontroller,  BLE  transceiver,  multiple  environmental  sensors  and  coin-cell holder. The WSN kit also includes a programming adapter compatible with the ARM mbed HDK specification.

## Kit Contents

- MAXWSNENV environmental sensor board with a preprogrammed demo
- MAXHDK, ARM mbed HDK-compatible hardware development board
- USB standard A-to-micro-B cable (for connecting MAXHDK to a PC)
- Coin-cell battery

## Block Diagram

<!-- image -->

<!-- image -->

## Wireless Sensor Node Environmental Sensor Demo Kit

## Benefits and Features

- Microcontroller Plus BLE Transceiver Provides a Convenient Development Platform
- On-Board Sensors for Temperature, Ambient Light, Humidity, and Barometric Pressure Measure Environmental Data
- Low-Power Operation Extends Battery Life
- ARM mbed-Compatible HDK Interface Provides Quick Connection to Toolchain
- General-Purpose Pushbutton Switch and Tri-Color LED Allow for Real-Time Input and Feedback
- On-Board Battery Holder Provides Convenient and Replaceable Power Source

## MAXWSNENV

## Detailed Description

This demo kit is general purpose in nature, however, the included  sensors  allow  for  the  development  of  sophisticated wireless sensor network and IoT nodes. This section describes each major function or component on the MAXWSNENV board.

Use the MAXWSNENV board with the following separate documents:

- MAXWSNENV data sheet (this document)
- MAX32600 data sheet
- MAX32600 user guide
- MAXWSNENV board schematic
- MAXWSNENV board bill-of-materials

## Board Power

The demo board is powered by on-board coin-cell battery or by a connected MAXHDK.

## Bluetooth Low-Energy (BLE) Controlle r

The  Bluetooth®  low-energy  controller  is  Bluetooth  V4.0 compliant.

## Sensors

The MAXWSNENV is fitted with four environmental sensors. Digital sensors are connected to the MAX32600 I2C master  interface.  Analog  sensors  are  connected  to  the MAX32600 ADC interface.  The  MAXWSNENV  includes the following sensors:

- BMP180 pressure sensor
- SI7020-A10 humidity sensor
- RPM-075PTT86 phototransistor
- NPN diode temperature sensor

## Pushbuttons

Pushbutton SW1 can be used to generate an input for test purposes on port  pin  P1.5.  SW1  is  normally  open,  and therefore, provides a logic 0 when depressed. Firmware defines the action taken on this switch closure.

Pushbutton  SW2  provides  a  power-on-reset  function  to the MAX32600 microcontroller.

## USB

The MAXWSNENV  board  provides  access  to the MAX32600 USB D+ and D- signals on connector J1 pins 16 and 18, respectively.

## LEDs

A single, tri-color LED with series resistors is connected to GPIO pins P1.4, P1.6, and P1.7.

## Component List and Schematic

Refer to the following files attached to this data sheet for component information and schematic:

- MAXWNENV\_BOM.xls
- MAXWNENV\_Schematic.pdf

## Ordering Information

| PART       | TYPE     |
|------------|----------|
| MAXWSNENV# | Demo kit |

#Denotes RoHS compliant.

Bluetooth is a registered trademark of Bluetooth SIG, Inc.

## Wireless Sensor Node Environmental Sensor Demo Kit

## MAXWSNENV

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe implied. Maxim ,QteJUated UeseUYes the UiJht tR chaQJe the ciUcXitU\ aQd speci¿catiRQs ZithRXt QRtice at aQ\ time.

## Wireless Sensor Node Environmental Sensor Demo Kit