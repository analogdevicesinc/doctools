<!-- lastmod 2022-08-03 -->
## MAX210 Evaluation Board

## Adapter

## General Description

The  MAX21000  evaluation  board  (EV  board)  adapter provides  the  hardware  necessary  to  easily  connect  the MAX21000 ultra-accurate, low-power, 3-axis digital output gyroscope to an existing system.

The EV board includes the MAX21000, an LDO regulator (MAX1819), and jumpers.

## EV Board Contents

- Assembled circuit board, including:
- MAX21000 inertial measurement unit
- MAX1819 low dropout regulator

## Features

- Easy Evaluation of the MAX21000 in an Existing System
- All Device Pins Are Available on a Standard Connector
- On-Board LDO That Can Be Used for Voltage Regulation
- Evaluation Software Tool Available
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX21000 EV Board Photo: Top View (left), Bottom View (right)

<!-- image -->

Evaluates: MAX210

<!-- image -->

## MAX21000 Evaluation Board Adapter

## Quick Start

## Required Equipment

- MAX21000 EV board
- System able to communicate through the I 2 C or SPI interface
- 1.8V to 3.3V power supply

## Procedure

The EV board is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Using connector P1, connect to SPI or I 2 C. Other I 2 C/ SPI lines can be reached at connectors P2 and P3, if necessary.
- 2) Supply the EV board adapter through the P1 connector, providing directly VDD\_CORE and VDD\_IO.
- 3) Connector JP4 gives the option where to connect the analog supply of the MAX21000. The V DD  pin can also be  supplied  directly  from  the  VDD\_CORE  or  VDD\_ REG (regulated voltage through MAX1819 LDO).
- 4) The device is now able to communicate with the  system.

## Jumper Descriptions

## JP2 Jumper

The JP2 jumper is used to set the CS\_MAIN manually to VDD\_IO.

Note: This  jumper can be shorted in case I 2 C interface is used. The board also lets the user populate I 2 C pullup resistors R6, R7 in case these pullup resistors are missing in the main system. R6 and R7 are unpopulated by default.

## JP3 Jumper

The  JP3  jumper  is  used  to  set  the  SDO\_SA0\_MAIN manually to either VDD\_IO or GND.

## Table 3. JP4 Jumper Setting

| SHUNT POSITION   | VDD_CORE_DUT   | VDD_CORE     | VDD_IO       | DESCRIPTION                                                                                                                                                                                              |
|------------------|----------------|--------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | VDD_IO         | -            | 1.8V to 3.3V | Analog supply of the device (VDD_CORE_DUT) is connected to the digital supply (VDD_IO).                                                                                                                  |
| 3-4              | VDD_CORE       | 1.8V to 3.3V | -            | Analog supply of the device (VDD_CORE_DUT) is connected to the VDD_CORE input (default setting) .                                                                                                        |
| 5-6              | VDD_REG        | -            | -            | Analog supply of the device (VDD_CORE_DUT) is connected to the regulated power output. The output voltage of the regulator can be adjusted via resistors R1 and R2 (VDD_REG = 1.8V at default setting) . |

│

## JP4 Jumper

JP4 jumper is used to set the V DD  pin of the MAX21000 to one of the VDD\_IO, VDD\_CORE or VDD\_REG voltages. By default, the jumper configuration is set to connect V DD pin  of  the  MAX21000  to  VDD\_CORE.  JP4  jumper  can also be used to measure the power consumption of the MAX21000 in case the digital multimeter is used in current mode and connected between pins 3-4.

Note: For proper operation of the MAX21000, the potential  on V DDIO  needs to be set lower than V DD . Refer to the Electrical Characteristics table in the MAX21000 data sheet. In case JP4 is set, connect pins 5-6 as shown in Table 3.  VDD\_CORE is supplied by the on-board regulator  (MAX1819),  VDD\_REG,  and  in  this  configuration, VDDIO has to be set lower than 1.8V for proper operation of the MAX21000.

## JP5 Jumper

The JP5 jumper is used to set the regulator input voltage to either VDD\_CORE or VDD\_AUX.

## Table 1. JP2 Jumper Setting

| SHUNT POSITION   | DESCRIPTION                                                               |
|------------------|---------------------------------------------------------------------------|
| 1-2              | Chip select pin for I 2 C/SPI (CS_MAIN) is shorted to VDD_IO (logic-high) |

## Table 2. JP3 Jumper Setting

| SHUNT POSITION   | DESCRIPTION                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| 1-2              | SPI serial data out or I 2 C slave address LSB (SDO_SA0_MAIN) is shorted to VDD_IO (logic 1). |
| 2-3              | SPI serial data out or I 2 C slave address LSB (SDO_SA0_MAIN) is shorted to GND (logic 0).    |

Evaluates: MAX21000

## MAX21000 Evaluation Board Adapter

## Table 4. JP5 Jumper Setting

Figure 2. MAX21000 EV Board Schematic

| SHUNT POSITION   | DESCRIPTION                                                                     |
|------------------|---------------------------------------------------------------------------------|
| 1-2              | Voltage regulator input is shorted to the VDD_AUX voltage.                      |
| 2-3              | Voltage regulator input is shorted to the VDD_CORE voltage ( default setting ). |

<!-- image -->

Evaluates: MAX21000

│

## MAX21000 Evaluation Board Adapter

Evaluates: MAX21000

<!-- image -->

Figure 3. 3D View of the MAX21000 EV Board Layout

Figure 4. MAX21000 EV Board Layout-Top View

<!-- image -->

Figure 5. MAX21000 EV Board Layout-Bottom View

<!-- image -->

│

## MAX21000 Evaluation Board Adapter

## Component List

| DESIGNATOR   |   COUNT | DESCRIPTION                         |
|--------------|---------|-------------------------------------|
| C1, C2       |       2 | Capacitors 100nF (10V 10% X7R 0402) |
| C4           |       1 | Capacitor 1µF (10V 10% X6S 0402)    |
| C5           |       1 | Capacitor 3.3µF (6.3V 10% X5R 0402) |
| P1, P3       |       2 | Headers 4x2, 2.54mm pitch           |
| P2, P4       |       2 | Headers 3x2, 2.54mm pitch           |
| U1           |       1 | MAX21000 IMU                        |
| FL1          |       1 | Inductor 2.7µF (10µA 10% 2Ω 0402)   |
| JP2          |       1 | Jumper, 2-pin through hole          |
| JP3          |       1 | Jumper, 3-pin through hole          |

## Ordering Information

| PART           | PIN-PACKAGE   |
|----------------|---------------|
| MAX21000EVBRD# | EV board      |

Evaluates: MAX21000

| DESIGNATOR   |   COUNT | DESCRIPTION                                           |
|--------------|---------|-------------------------------------------------------|
| JP4          |       1 | Header 3x2 (2.54mm) or 0805 surface mount 0Ω resistor |
| JP5          |       1 | Jumper, 3-pin (0402 surface mount 0Ω resistor)        |
| U2           |       1 | MAX1819 regulator (500mA LDO)                         |
| R4           |       1 | Resistor 0Ω (1/10W 0603)                              |
| R3           |       1 | Resistor 100kΩ (1% 1/16W 0402)                        |
| R1           |       1 | Resistor 22kΩ (1% 1/10W 0603)                         |
| R2           |       1 | Resistor 49.9kΩK (1% 1/10W 0603)                      |
| R5, R6, R7   |       3 | Resistors (do not mount)                              |

│

## MAX21000 Evaluation Board

## Adapter

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 3/13            | Initial release           | -               |
|                 1 | 3/15            | Revised EV kit data sheet | 1-5             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSOieG. 0a[im ,nteJrateG reserYes tKe riJKt to cKanJe tKe circuitr\ anG sSeci¿cations ZitKout notice at an\ time.

│

Evaluates: MAX21000