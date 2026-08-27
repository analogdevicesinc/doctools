<!-- lastmod 2022-08-03 -->
## MAX30205 Human Body

## Temperature Sensor Evaluation Kit

## General Description

The  MAX30205  evaluation  kit  (EV  kit) provides a convenient way to evaluate the MAX30205 human body temperature sensor. The sensor uses a high-resolution, sigma-delta,  analog-to-digital  converter  to  accurately measure temperature and convert it to digital form. The kit includes a USB-to-I 2 C controller and GUI program to simplify evaluation.

## Features

- Quick Evaluation of the MAX30205
- USB Powered
- Full Assembled and Tested
- Windows ®  7, 8, and 10-Compatible Software

Figure 1. MAX30205 EV Kit Temperature Sensor and USBDTMB Controller PCB

<!-- image -->

Windows is a registered trademark and service mark of Microsoft Corp.

Evaluates: MAX30205

## Quick Start

## Required Equipment

- MAX30205 EV kit temperature sensor PCB
- MAX30205 EV kit USBDTMB PCB
- MAX30205 EV kit 10-pin flex cable
- Micro-USB cable
- MAX30205 EV kit GUI program
- Windows PC

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX30205 Human Body Temperature Sensor Evaluation Kit

## Procedure

The  MAX30205  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkit-software to download the most recent version of the EV kit software, MAX30205EVKitSetupVx.x.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Open up MAX30205EVKitSetupVx.x.exe and follow the instructions from the pop-up windows.
- 3) Insert one end of the ribbon cable to the J3 connector

Evaluates: MAX30205

- of the USBDTMB and the other end of the ribbon cable to the J1 connector of the MAX30205 EV kit. Make sure that both connectors and blue ends of the ribbon cable is facing the user.
- 4) Connect the USB cable from the PC to the EV kit board. Windows automatically installs all drivers.
- 5) Open the MAX30205EVKit.exe and verify that the EV kit is connected by observing the status bar at the lower left corner of the GUI. See Figure 2.
- 6) The GUI program updates the temperature every 20s.

Figure 2. MAX30205 EV Kit GUI Main Window

<!-- image -->

## MAX30205 Human Body Temperature Sensor Evaluation Kit

## Detailed Description

The  MAX30205  EV  kit  provides  a  convenient  way  to evaluate the MAX30205 human body temperature sensor.

The  sensor  PCB  contains  a  MAX30205  human  body temperature sensor to allow for temperature data to be sampled and transferred to the GUI. The MAX30205 EV kit USBDTMB PCB is used to do I 2 C to HID transaction translation, transporting the raw temperature data to the PC through the USB.

## Units

Temperature units can be displayed in either Celsius or Fahrenheit.

## Table 1. Slave Address Configuration

| LOGIC INPUTS   | LOGIC INPUTS   | LOGIC INPUTS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   |
|----------------|----------------|----------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|
| A2             | A1             | A0             | B7                    | B6                    | B5                    | B4                    | B3                    | B2                    | B1                    | R/W                   | READ ADD              | WRITE ADD             |
| 0              | 0              | 0              | 1                     | 0                     | 0                     | 1                     | 0                     | 0                     | 0                     | 1/0                   | 0x91                  | 0x90                  |

## Table 2. Temperature Register Definition

| UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | UPPER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   | LOWER BYTE   |
|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
| D15          | D14          | D13          | D12          | D11          | D10          | D9           | D8           | D7           | D6           | D5           | D4           | D3           | D2           | D1           | D0           |
| S            | 64           | 32           | 16           | 8            | 4            | 2            | 1            | 1/2          | 1/4          | 1/8          | 1/16         | 1/32         | 1/64         | 1/128        | 1/256        |
| S            | 2 6          | 2 5          | 2 4          | 2 3          | 2 2          | 2 1          | 2 0          | 2 -1         | 2 -2         | 2 -3         | 2 -4         | 2 -5         | 2 -6         | 2 -7         | 2 -8         |

(S sign bit, Units in °C)

## Table 3. Connector J1

|   PIN | SIGNAL   | DESCRIPTION   |
|-------|----------|---------------|
|     1 | GND      | Ground        |
|     2 | N.C.     | -             |
|     3 | N.C.     | -             |
|     4 | GND      | Ground        |
|     5 | SDA      | I 2 C Data    |
|     6 | GND      | Ground        |
|     7 | SCL      | I 2 C Clock   |
|     8 | GND      | Ground        |
|     9 | N.C.     | -             |
|    10 | V DD     | 3.0V Power    |

## Refresh Rate

Use the GUI to set the temperature sample refresh rate. A minimum of 10sps should be used to avoid self-heating of the sensor.

## Configuration Register

The MAX30205 temperature sensor configuration register can be set by selecting the check boxes in the GUI.

Refer to the MAX30205 IC data sheet for detailed information regarding the operation of the IC.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX30205EVSYS# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX30205

## MAX30205 Human Body Temperature Sensor Evaluation Kit

## MAX30205 EV Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                           | MANUFACTURER             | VALUE          | DESCRIPTION                                                                                 |
|--------|-----------|-----------|-------|--------------------------------------|--------------------------|----------------|---------------------------------------------------------------------------------------------|
| 1      | C1        | -         |     1 | GRM188R72A104KA35; CC0603KRX7R0BB104 | MURATA; TDK              | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R |
| 2      | J1        | -         |     1 | 68711014522                          | WURTH ELECTRONICS INC.   | 68711014522    | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS     |
| 3      | U1        | -         |     1 | MAX30205MTA+                         | MAXIM                    | MAX30205MTA+   | IC; SNSR; HUMAN BODY TEMPERATURE SENSOR; TDFN8-EP                                           |
| 4      | J2        | DNP       |     0 | TSW-105-07-L-S                       | SAMTEC                   | TSW-105-07-L-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                            |
| 5      | R1, R2    | DNP       |     0 | CR0402-16W-4871FT; CRCW04024K87FK    | VENKEL LTD./ VISHAY DALE | 4.87K          | RESISTOR; 0402; 4.87K OHM; 1%; 100PPM; 0.063W; THICK FILM                                   |
| 6      | PCB       | -         |     1 | MAX30205                             | MAXIM                    | PCB            | PCB Board:MAX30205 EVALUATION KIT                                                           |
| TOTAL  |           |           |     4 |                                      |                          |                |                                                                                             |

NOTE: DNI--&gt; DO NOT INSTALL ; DNP--&gt; DO NOT PROCURE

## MAX30205 EV Schematic

<!-- image -->

Evaluates: MAX30205

## MAX30205 Human Body Temperature Sensor Evaluation Kit

## MAX30205 EV PCB Layout Diagrams

MAX30205 EV-Top Silkscreen

<!-- image -->

MAX30205 EV-Top

<!-- image -->

Evaluates: MAX30205

MAX30205 EV-Bottom Silkscreen

<!-- image -->

MAX30205 EV-Bottom

<!-- image -->

## MAX30205 Human Body

## Temperature Sensor Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitry and specifications Zithout notice at any time.

Evaluates: MAX30205