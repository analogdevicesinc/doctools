<!-- lastmod 2022-08-03 -->
## MAX17561 Evaluation Kit

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## General Description

The MAX17561 evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the MAX17561  adjustable overvoltage and overcurrent protector in a 14-pin TSSOP surface-mount package with an exposed pad. The EV kit features TVS diode on input, schottky  diode  on  output  and  jumper-configurable  SETI resistors for setting different current limits. Input power to the EV kit uses a 4.5V to 36V input supply.

The EV kit can also be used to evaluate MAX17562 and MAX17563 devices by replacing the appropriate IC (U1). Request free samples from the factory when ordering the EV kit.

## Features

- 4.5V to 36V Operating Voltage Range
- Features TVS Diode and Schottky Diode
- Jumper-Configurable Current Limit
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX17561 EV kit
- 36V DC power supply
- Multimeter
- USB type-A to USB type-B cable or 5V DC power supply

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Perform  the following  steps  to  verify  board  operation. Caution:  Do not turn on the power supply until all connections are completed.

- 1) Verify that all jumpers are in their default positions.
- 2) Connect  the  USB  cable  to  J1  from  a  computer  or connect a 5V DC power supply to TP3.
- 3) Verify that LED1 is on.
- 4) Connect  a  20V  DC  power  supply  to  IN.  Verify  that OUT is 20V.
- 5) Gradually increase the DC power supply voltage and verify that OUT voltage goes down and LED2 is ON when input reached approximately 33V.
- 6) Gradually decrease voltage on the DC power supply and verify that OUT comes back and LED2 is OFF when the input reaches approximately 32V.

<!-- image -->

## MAX17561 Evaluation Kit

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## Detailed Description of Hardware

Use the following equation to set the OVLO threshold:

The  MAX17561  EV  kit  is  a  fully  assembled  and  tested circuit board that demonstrates the MAX17561 adjustable overvoltage and overcurrent protector in a 14-pin TSSOPEP surface-mount package.

The  jumper  configurations  by  default  are  configured  to test internal UVLO and internal OVLO thresholds. There are  jumpers  that  can  be  configured  and  resistor  pads to  test  user-defined  UVLO  and  OVLO  thresholds.  The overcurrent threshold is determined by external resistors connected  to  the  SETI  pin  and  is  jumper  configurable through jumper JU1. The EV kit also features an LED to indicate the power for logic pins.

## External Power Supply

The EV kit is powered by a user-supplied 4.5V to 36V DC power supply connected between BP1 (INPUT POWER) and GND.

## Current Limit Threshold

The EV kit features a jumper (JU1) to select current-limit threshold. Install a jumper as shown in Table 2 to change the current-limit threshold.

Use the following equation to calculate the current limit:

<!-- formula-not-decoded -->

## Overvoltage Lockout (OVLO)

Jumper JU4 (shunted by default) connects the OVLO pin to  GND  and  configures  the  device  to  have  the  internal 33V  preset  OVLO.  To  configure  a  user-defined  OVLO, disconnect JU4 and connect a shunt on jumper JU5. This allows  the  device  to  monitor  the  IN  voltage.  Connect  a resistor on R12 to set the user-defined OVLO threshold.

<!-- formula-not-decoded -->

where:

R11 is 2.2MΩ

V BG is 1.21V

External LED2 indicates that an OVLO fault has occurred.

## Undervoltage Lockout (UVLO)

Jumper JU3 (shunted by default) connects the UVLO pin to  GND  and  configures  the  device  to  have  the  internal 19.2V preset UVLO. To configure a user-defined UVLO, disconnect JU3 and connect a shunt on JU5. This allows the device to monitor the IN voltage. Connect a resistor on R10 to set the user-defined UVLO threshold. Use the following equation to set the UVLO threshold:

<!-- formula-not-decoded -->

where:

R9 is 2.2MΩ

V BG is 1.21V

## Enable (J1)

To enable the device, connect a USB connector from the computer to the USB connector, J1. This provides 5V to VBUS and to the EN pin (JU8 connects VBUS to IN by default). If no cable is available, connect a 5V DC power supply  between  test  point  TP3  and  the  corresponding GND test point, TP4.

## Negative Input Test

When applying a negative input to V IN , the negative input test should be performed when the output capacitors are fully discharged and VBUS should not be supplied.

## MAX17561 Evaluation Kit

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable

## Overcurrent and Overvoltage Protection Solutions

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
| JU6      | 1-2              | Connects HVEN to V IN and disables the device.                                                                                       |
| JU6      | Open*            | If open, connect JU7.                                                                                                                |
| JU7      | 1-2*             | Connects HVEN to GND for normal operation.                                                                                           |
| JU7      | Open             | If open, connect JU6.                                                                                                                |
| JU8      | 1-2*             | Connects EN to VBUS and enables the device for normal operation.                                                                     |
| JU8      | Open             | Disables the device.                                                                                                                 |
| JU9      | 1-2              | Disables reverse-current flow protection.                                                                                            |
| JU9      | Open*            | Enables reverse-current flow protection.                                                                                             |
| JU10     | 1-2*             | Allows LED2 to indicate a FLAG fault.                                                                                                |
| JU10     | Open             | Use external circuitry to connect to the FLAG output.                                                                                |
| JU11     | 1-2              | Connects OUT to IN.                                                                                                                  |
| JU11     | Open*            | Normal operation.                                                                                                                    |
| JU13     | 1-2              | Adds 2 330µF capacitors to OUT.                                                                                                      |
| JU13     | Open*            | Normal operation.                                                                                                                    |

*Default position.

## Table 2. Current-Limit/Threshold Setting (JU1)

| SHUNT POSITION   | RSETI                       | ILIM (mA)   |
|------------------|-----------------------------|-------------|
| 1-2              | 16.2kΩ                      | 709mA       |
| 3-4              | 4.99kΩ                      | 2.304A      |
| 5-6              | 2.74kΩ                      | 4.197A      |
| 7-8              | 1kΩ + 25kΩ (Adjustable pot) | Adjustable  |

## MAX17561 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | WEBSITE                     |
|----------------------------------------|-----------------------------|
| FCI (Berg Electronics)                 | www.fciconnect.com          |
| Keystone Electronics Corp.             | www.keyelco.com             |
| Lumex Inc.                             | www.lumex.com               |
| Murata Electronics North America, Inc. | www.murata-northamerica.com |
| Panasonic Corp.                        | www.panasonic.com           |
| STMicroelectronics                     | www.us.st.com               |
| Sullins                                | www.vishay.com              |

Note:

Indicate that you are using the MAX17561 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17561EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 Evaluation Kit

## Component List

| PART REFERENCE                   |   QTY | DESCRIPTION                                                         | MANUFACTURE PART NUMBER            |
|----------------------------------|-------|---------------------------------------------------------------------|------------------------------------|
| C1                               |     1 | 1uF 10%, 25V X7R ceramic capacitors (0603)                          | Murata GRM188R71E105K              |
| C2                               |     1 | 0.1uF 10%, 25V X7R ceramic capacitors (0603)                        | Murata GRM188R71E104K              |
| C3                               |     1 | 0.47uF 10%, 50V X7R ceramic capacitors (0603)                       | TDK C1608X5R1H474K                 |
| C4                               |     1 | 4.7uF 10%, 50V X7R ceramic capacitors (1206)                        | Murata GRM31CR71H475K              |
| C5, C6, C7, C8                   |     4 | 330uF 20%, 50V aluminum (12.5mm)                                    | Panasonic EEVFK1H331Q              |
| D1                               |     1 | Power Schottky Diode, 60V, 5A (SMC)                                 | STMicroelectronics STPS5L60S       |
| D2                               |     1 | TVS Diode, 600W (SMB)                                               | STMicroelectronics SM6T36CA        |
| J1                               |     1 | USB B connector                                                     | FCI 61729-0010BLF                  |
| JU1                              |     1 | 2x4 Dual-Row Header, 0.1in centers, cut to fit                      | Sullins Connector PEC36DAAN        |
| JU2-JU11, JU13                   |    11 | 2-Pin Single-Row Header, 0.1in centers, cut to fit                  | Sullins Connector PEC36SAAN        |
| LED1                             |     1 | Green LED (1206)                                                    | Lumex SML-LX1206GW-TR              |
| LED2                             |     1 | Red LED (1206)                                                      | Lumex SML-LX1206IC-TR              |
| R1, R3, R15                      |     3 | 1k ohm 5% resistors (0805)                                          | -                                  |
| R2                               |     1 | 10k ohm 5% resistors (0805)                                         | -                                  |
| R4, R13, R14, R17                |     4 | 100k ohm 5% resistors (0805)                                        | -                                  |
| R6                               |     1 | 16.2k ohm 1% resistor (0805)                                        | -                                  |
| R7                               |     1 | 4.99k ohm 1% resistor (0805)                                        | -                                  |
| R8                               |     1 | 2.74k ohm 1% resistor (0805)                                        | -                                  |
| R9, R11                          |     2 | 2.2M ohm 1% resistor (0805)                                         | -                                  |
| R16                              |     1 | 25k ohm Trimmer Potentiometers                                      | Murata PV37Y253C01B00              |
| TP1, TP9, TP10, TP11, TP12, TP13 |     6 | Yellow Test Point                                                   | Keystone Electronic Corp 5014      |
| TP2, TP4, TP5, TP7               |     4 | Black Test Point                                                    | Keystone Electronic Corp 5011      |
| TP3, TP6, TP8                    |     3 | Red Test Point                                                      | Keystone Electronic Corp 5010      |
| U1                               |     1 | Overvoltage and Overcurrent Protector (14-pin SSOP-EP, 5mm x 6.5mm) | MAX17561AUD+                       |
| U2                               |     1 | Dual Buffer (6-pin SC70, 1.25mm Wide)                               | Fairchild Semiconductor NC7WZ07P6X |
| R5, R10, R12                     |     0 | Not Installed, (0805) Resistor                                      | -                                  |
| PCB                              |     1 | PCB:MAX17561 Evaluation Kit                                         | -                                  |

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 Evaluation Kit

## MAX17561 EV Kit Schematic

<!-- image -->

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 Evaluation Kit

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 EV Kit PCB Layout Diagrams

<!-- image -->

MAX17561 EV Kit Component Placement Guide -Component Side

## MAX17561 Evaluation Kit

Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17561 EV Kit PCB Layout -Component Side

## MAX17561 Evaluation Kit

Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions

## MAX17561 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17561 EV Kit PCB Layout -Solder Side

## MAX17561 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17561, MAX17562, and MAX17563-Highly Integrated, Adjustable Overcurrent and Overvoltage Protection Solutions