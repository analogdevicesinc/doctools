<!-- lastmod 2022-08-03 -->
## MAX14571 Evaluation Kit

## General Description

The  MAX14571  evaluation  kit  (EV  kit)  demonstrates the  MAX14571  adjustable  overvoltage  and  overcurrent protector in a 14-pin TSSOP surface-mount package with an exposed pad. The EV kit features jumper-configurable SETI resistors and can handle up to 36V input supply.

The EV kit can also be used to evaluate the MAX14572 and  MAX14573  devices  with  IC  replacement  of  U1. Request free samples from the factory when ordering the EV kit.

## MAX14571 EV Kit Photo

<!-- image -->

<!-- image -->

## Evaluates: MAX14571 -MAX14573

## Features

- 6V to 36V Operating Voltage Range
- Jumper-Configurable Current Limit
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX14571 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14571 EV kit
- 6V to 36V DC power supply
- 5V DC power supply
- Voltage meter
- USB type-A to USB type-B cable

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that the default jumper configurations are as in Table 1.
- 2) Connect  a  voltage  meter  to  the  EV  kit's  OUTPUT POWER  red  banana  jack  and  the  corresponding black GND banana jack.
- 3) Connect the DC power supply to the EV kit's INPUT POWER  red  banana  jack  and  the  corresponding black GND banana jack.
- 4) Turn on the DC power supply and set it to 24V, then enable the power-supply output.
- 5) Connect a USB cable from a computer to the USB connector J1 to enable the device. If a cable is not available,  connect  a  5V  DC  power  supply  between the  EV  kit's  TP3  test  point  and  the  corresponding GND test point, TP4.
- 6) Verify that the voltage meter reads approximately 24V.
- 7) Set the input power supply to 17V. The switch turns off and the voltmeter reading should slowly decrease to 0V.
- 8) Set the input power supply to 24V and verify that the voltmeter reads approximately 24V.
- 9) Set the input power supply to 35V. The switch turns off and the voltmeter reading should slowly decrease to 0V.

## Evaluates: MAX14571-MAX14573

## Detailed Description of Hardware

The  MAX14571  EV  kit  demonstrates  the  MAX14571 adjustable  overvoltage  and  overcurrent  protector.  The jumper  configurations  by  default  are  configured  to  test internal  UVLO  and  internal  OVLO  thresholds.  There are  jumpers  that  can  be  configured  and  resistor  pads to  test  user-defined  UVLO  and  OVLO  thresholds.  The overcurrent threshold is determined by external resistors connected  to  the  SETI  pin  and  is  jumper  configurable through jumper JU1.

## External Power Supply

The EV kit is powered by a user-supplied 6V to 36V DC power supply connected between BP1 (INPUT POWER) and GND.

## Programmable Current Limit

Jumper  JU1  configures  the  RSETI  resistor  value  that is  connected  to  the  SETI  pin  and  sets  the  current limit/threshold  for  the  switch  (see  Table  2).  Refer  to the MAX14571/MAX14572/MAX14573 IC data sheet for more information.

No shunt connected to JU1 or JU2 forces the SETI pin to be unconnected, with the current limit set to 0A.

## Overvoltage Lockout (OVLO)

Jumper JU4 (shunted by default) connects the OVLO pin to  GND  and  configures  the  device  to  have  the  internal 33V  preset  OVLO.  To  configure  a  user-defined  OVLO, disconnect JU4 and connect a shunt on jumper JU5. This allows  the  device  to  monitor  the  IN  voltage.  Connect  a resistor on R12 to set the user-defined OVLO threshold. Use the following equation to set the OVLO threshold:

<!-- formula-not-decoded -->

where:

R11 is 2.2MΩ

VBG is 1.21

External LED2 indicates that an OVLO fault has occurred.

│

## MAX14571 Evaluation Kit

## Undervoltage Lockout (UVLO)

Jumper JU3 (shunted by default) connects the UVLO pin to  GND  and  configures  the  device  to  have  the  internal 19.2V preset UVLO. To configure a user-defined UVLO, disconnect JU3 and connect a shunt on JU5. This allows the device to monitor the IN voltage. Connect a resistor on R10 to set the user-defined UVLO threshold. Use the following equation to set the UVLO threshold:

<!-- formula-not-decoded -->

where:

R9 is 2.2MΩ

VBG is 1.21

External LED2 indicates that an UVLO fault has occurred.

Table 1. Default Jumper Settings (JU1 -JU11, JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                          |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Sets current threshold to 0.709A.                                                                                                    |
| JU1      | 3-4              | Sets current threshold to 2.304A.                                                                                                    |
| JU1      | 5-6              | Sets current threshold to 4.197A.                                                                                                    |
| JU1      | 7-8              | Adjustable current limit using a potentiometer.                                                                                      |
| JU2      | 1-2              | Connects the SETI pin to GND, asserts the FLAG output, and sets the current limit to 0A.                                             |
| JU2      | Open*            | Allows the user to connect JU1 shunts to configure the current limit.                                                                |
| JU3      | 1-2*             | Connects the UVLO pin to GND and enables the internal UVLO threshold.                                                                |
| JU3      | Open             | Allows the user to connect an external resistor-divider to set a user-defined UVLO threshold. Note: JU5 should also be connected.    |
| JU4      | 1-2*             | Connects the OVLO pin to GND and enables the internal OVLO threshold.                                                                |
| JU4      | Open             | Allows the user to connect an external resistor-divider to set a user-defined OVLO thresh - old. Note: JU5 should also be connected. |
| JU5      | 1-2              | Allows the user to connect an external resistor-divider to set a user-defined OVLO and UVLO threshold.                               |
| JU5      | Open*            | Connect JU3 and JU4 or connect an external resistor-divider for normal UVLO/OVLO operation.                                          |

│

## Evaluates: MAX14571-MAX14573

## Enable (J1)

To enable the device, connect a USB connector from the computer to the USB connector, J1. This provides 5V to VBUS and to the EN pin (JU8 connects VBUS to IN by default). If no cable is available, connect a 5V DC power supply  between  test  point  TP3  and  the  corresponding GND test point, TP4.

## Negative Input Test

When applying a negative input to V IN , the negative input test should be performed when the output capacitors are fully discharged and VBUS should not be supplied.

Evaluates: MAX14571-MAX14573

Table 1. Default Jumper Settings (JU1 -JU11, JU13) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU6      | 1-2              | Connects HVEN to V IN and disables the device.                   |
| JU6      | Open*            | If open connect JU7.                                             |
| JU7      | 1-2*             | Connects HVEN to GND for normal operation.                       |
| JU7      | Open             | If open, connect JU6.                                            |
| JU8      | 1-2*             | Connects EN to VBUS and enables the device for normal operation. |
| JU8      | Open             | Disables the device.                                             |
| JU9      | 1-2*             | Enables reverse-current flow protection.                         |
| JU9      | Open             | Disables reverse-current flow protection.                        |
| JU10     | 1-2*             | Allows LED2 to indicate a FLAG fault.                            |
| JU10     | Open             | Use external circuitry to connect to the FLAG output.            |
| JU11     | 1-2              | Connects OUT to IN.                                              |
| JU11     | Open*            | Normal operation.                                                |
| JU13     | 1-2              | Adds 2 330µF capacitors to OUT.                                  |
| JU13     | Open*            | Normal operation.                                                |

## Table 2. Current-Limit/Threshold Setting (JU1)

| SHUNT POSITION   | RSETI                       | ILIM (mA)   |
|------------------|-----------------------------|-------------|
| 1-2              | 16.2kΩ                      | 709mA       |
| 3-4              | 4.99kΩ                      | 2.304A      |
| 5-6              | 2.74kΩ                      | 4.197A      |
| 7-8              | 1kΩ + 25kΩ (Adjustable pot) | Adjustable  |

│

## MAX14571 Evaluation Kit

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                              |
|----------------|-------|--------------------------------------------------------------------------|
| C1             |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K         |
| C2             |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K       |
| C3             |     1 | 0.47µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X5R1H474K         |
| C4             |     1 | 4.4µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H475K       |
| C5-C8          |     4 | 330µF ±20%, 50V aluminum (12.5mm) Panasonic EEVFK1H331Q                  |
| D1             |     1 | 60V, 5A power Schottky diode (SMC) STMicroelectronics STPS5L60S          |
| D2             |     1 | 600W TVS diode (SMB) STMicro SM6T36CA                                    |
| GND            |     2 | Black banana jacks Keystone 7007                                         |
| IN, OUT        |     2 | Red banana jacks Keystone 7006                                           |
| J1             |     1 | USB type-B connector FCI 61729-0010BLF                                   |
| JU1            |     1 | 8-pin (2 x 4) dual-row header, 0.1in centers Sullins Connector PEC36DAAN |
| JU2-JU11, JU13 |    11 | 2-pin single-row headers Sullins PEC36SAAN                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| FCI (Berg Electronics)                 | 717-938-7200 | www.fciconnect.com          |
| Keystone Electronics Corp.             | 209-796-2032 | www.keyelco.com             |
| Lumex Inc.                             | 800-278-5666 | www.lumex.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| Sullins                                | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX14571 when contacting these component suppliers.

Evaluates: MAX14571-MAX14573

*EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                            |
|--------------------|-------|------------------------------------------------------------------------|
| LED1               |     1 | Green LED (1206) Lumex SML-LX1206GW-TR                                 |
| LED2               |     1 | Red LED (1206) Lumex SML-LX1206IC-TR                                   |
| R1, R3, R15        |     3 | 1kΩ ±5% resistors (0805)                                               |
| R2                 |     1 | 10kΩ ±5% resistor (0805)                                               |
| R4, R13, R14, R17  |     4 | 100kΩ ±5% resistors (0805)                                             |
| R5, R10, R12       |     0 | Not installed, resistors (0805)                                        |
| R6                 |     1 | 16.2kΩ ±1% resistor (0805)                                             |
| R7                 |     1 | 4.99kΩ ±1% resistor (0805)                                             |
| R8                 |     1 | 2.74kΩ ±1% resistor (0805)                                             |
| R9, R11            |     2 | 2.2MΩ ±1% resistors (0805)                                             |
| R16                |     1 | 25kΩ trimmer potentiometer Murata PV37Y253C01B00                       |
| TP1, TP9- TP12     |     5 | Yellow test points Keystone 5014                                       |
| TP2, TP4, TP5, TP7 |     4 | Black test points Keystone 5011                                        |
| TP3, TP6, TP8      |     3 | Red test points Keystone 5010                                          |
| U1                 |     1 | Overvoltage and overcurrent protector (14 SSOP-EP*) Maxim MAX14571EUD+ |
| U2                 |     1 | Dual buffer (6 SC70, 1.25mm wide) Fairchild NC7WZ07P6X                 |
| -                  |    13 | Shunts                                                                 |
| -                  |     1 | PCB: MAX14571 EVKIT                                                    |

Figure 1. MAX14571 EV Kit Schematic

<!-- image -->

Figure 2. MAX14571 EV Kit Component Placement Guide -Component Side

<!-- image -->

│

Figure 3. MAX14571 EV Kit PCB Layout -Component Side

<!-- image -->

Figure 4. MAX14571 EV Kit PCB Layout -Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14571EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14571 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14571-MAX14573