<!-- lastmod 2022-08-03 -->
## MAX31328 Shield

## General Description

The MAX31328 shield is a fully assembled and tested PCB to evaluate the MAX31328. The MAX31328 is a low-cost, extremely accurate, I 2 C real-time clock (RTC) with  an  integrated  temperature  compensated  crystal oscillator (TCXO) and crystal. The shield operates from a  single  supply,  either  from  USB  or  external  power supply.  The  device  incorporates  a  battery  input  and maintains accurate timekeeping when the main power to the device is interrupted. The integration of the crystal resonator  enhances  the  long-term  accuracy  of  the device and eliminates the external crystal requirement in the  system.  This  device  is  accessed  through  an  I 2 C serial interface provided by a MAX32625 PICO board.

The  shield  provides  the  hardware  and  software  user interface (GUI) necessary to evaluate the MAX31328. It connects to the PC through a MAX32625 PICO board and a Micro-USB cable.

## Shield Photo

<!-- image -->

## Features

- Easy Evaluation of the MAX31328
- +2.3V to +5.5V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

## Shield Contents

- Assembled MAX32625 PICO controller board
- Micro-USB cable
- Assembled circuit board including MAX31328NELB+

Ordering  Information appears  at  end  of  data sheet.

## PICO Board Photo

<!-- image -->

<!-- image -->

Evaluates: MAX31328

## Quick Start

## Required Equipment

- One pico ammeter for measuring the current
- One oscilloscope and one oscilloscope probe
- One PC or laptop with Microsoft Windows ®  7 or later
- One USB A male to micro B male cable
- One assembled and programmed MAX32625 PICO board
- One MAX31328 shield

## Procedure

The shield is fully assembled and tested. Use the following steps to verify board operation.

1.  Place  the  MAX31328  shield  on  a  nonconductive  surface  to  ensure  that  nothing  on  the  PCB  gets  shorted  to  the workspace.
2.  Verify that all jumpers are in their default position as shown on Table 1.
3.  Connect the MAX32625 PICO board to the shield at the location shown as MAX32625 PICO (Figure 1).
4.  Connect the USB A male to micro B male cable between the MAX32625 PICO board and PC/Laptop.
5.  Go to the MAX31328 shield product page to download and install the latest version of MAX31328 RTC SHIELD Software.
6.  Open the MAX31328 RTC SHIELD Software, shown as Figure 2.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                              |
|----------|------------------|----------------------------------------------------------|
| JU1      | 1-2*             | Connect SCL for I2C communication                        |
| JU1      | Open             | Disconnect SCL                                           |
| JU2      | 1-2*             | Connect SDA for I2C communication                        |
| JU2      | Open             | Disconnect SDA                                           |
| JU4      | 1-2*             | Connect VCC to MAX31328 IC                               |
| JU4      | Open             | Disconnect VCC to MAX31328 IC                            |
| JU5      | 1-2*             | Connect 32kHz output for Arduino ®/Mbed™                 |
| JU5      | Open             | Disconnect 32kHz output                                  |
| JU6      | 1-2*             | Connect square wave output or interrupt for Arduino/Mbed |
| JU6      | Open             | Disconnect square wave output                            |
| JU7      | 1-2*             | Connect reset pinout for Arduino/Mbed                    |
| JU7      | Open             | Disconnect reset pinout                                  |
| JU8      | 1-2              | Connect VCC supply to external DC supply                 |
| JU8      | 1-3*             | Connect VCC supply to +3.3V on board supply              |
| JU8      | 1-4              | Connect VCC supply to +5.0V on board supply              |
| JU8      | Open             | VCC open                                                 |
| JU9      | 1-2              | Connect VBAT supply to external DC supply                |
| JU9      | 1-3              | Connect VBAT supply to +3.0V coin cell battery           |
| JU9      | 1-4*             | Connect VBAT supply to ground                            |
| JU9      | Open             | VBAT open                                                |

*Default position

Evaluates: MAX31328

Figure 1. Connection and Setup

<!-- image -->

## Detailed Description of Hardware

The MAX31328 shield is a low-cost, extremely accurate, I 2 C real-time clock (RTC) with an integrated temperaturecompensated  crystal  oscillator  (TCXO)  and  crystal.  The  device  incorporates  a  battery  input  and  maintains  accurate timekeeping when the main power to the device is interrupted. The integration of the crystal resonator enhances the longterm accuracy of the device and eliminates the external crystal requirement in the system. The MAX31328 is available in a 10-pin LGA package.

The RTC maintains seconds, minutes, hours, day, date, month, and year information. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in either 24-hour or 12-hour format with an AM/PM indicator. Two programmable time-of-day alarms and a programmable square-wave output are provided. Address and data are transferred serially through an I 2 C bidirectional bus. A precision temperature-compensated voltage reference and comparator circuit monitors the status of V CC  to detect power failures and automatically switch to the backup supply when necessary. Additionally, the pin is monitored as a pushbutton input for generating a microprocessor reset.

## Detailed Description of Software

## Real Time Monitoring

To monitor the time and date, on Configuration &amp; Time page, under RTC Configuration group box, enable Oscillator Enable toggle button , and under Real Time Monitoring group box, check Auto Update checkbox for continuous reading.

## Battery current draw in Time-Keeping Mode

To measure the battery current draw under normal real-time clock conditions, without any interrupt or CLKO output:

- 1) Remove the jumper from JU9.
- 2) Connect the negative terminal of the pico ammeter to the pin 3 of the JU9 (marked as a white dot) and the positive terminal to pin 1 of JU9.
- 3) On the Configuration &amp; Time tab, in the RTC Configuration group box, make sure interrupt pin INT is selected. In the Real Time Monitoring group box , uncheck the Auto Update check box. In the Temperature Monitoring group box , uncheck the Auto Update check box. In the Flags group box , click Disable 32kHz to disable the output 32kHz.
- 4) Remove the jumper from JU4, to disconnect the IC from V CC  and connect to battery supplied mode.
- 5) The reading in the pico ammeter is the battery current consumed by the MAX31328 IC only. It should be around 660nA.

## 32kHz Output Frequency

On the Configuration &amp; Time tab of the software, under the Flags group box, click the Enable 32kHz button. The clock output can be monitored using an oscilloscope connected to 32kHz test point (TP8). A frequency counter can also be used to measure the clock frequency accurately.

## Alarm and Timer Configuration

Use the Alarm 1 Configuration and Alarm 2 Configuration to configure Alarm 1 and Alarm 2 (See Figure 2).

Figure 2. MAX31328 RTC Shield Software-Configuration &amp; Time Page

<!-- image -->

## Registers Tab

Write and read the MAX31328 IC register map in the Registers tab (See Figure 3).

Figure 3. MAX31328 RTC Shield Software-Registers Page

<!-- image -->

## Ordering Information

<!-- image -->

| PART          | TYPE   |
|---------------|--------|
| MAX31328SHLD# | Shield |

#Denotes RoHS compliance.

## MAX31328 Shield Bill of Materials

| PART                                           |   QTY | DESCRIPTION                                                                                                                                                                                   |
|------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C2, C6, C11, C13, C15, C18, C20, C21, C23, C25 |    10 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                    |
| C3, C14, C16, C17, C19, C22, C24               |     7 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                    |
| C7, C10                                        |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=5%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                       |
| C9                                             |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                      |
| C12                                            |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                     |
| C26                                            |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                           |
| JU1, JU2, JU4-JU7                              |     6 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                                                                                                     |
| JU3                                            |     1 | BATTERY HOLDER; SMT; CR1225 BATTERY STRAP                                                                                                                                                     |
| JU8, JU9                                       |     2 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                     |
| P1                                             |     1 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                                    |
| P2, P4                                         |     2 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                                                                                                                       |
| P3                                             |     1 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 6PINS                                                                                                                       |
| P5, P6                                         |     2 | CONNECTOR; FEMALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 10PINS                                                                                                                           |
| R1-R4, R6-R8                                   |     7 | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                        |
| R5                                             |     1 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                          |
| SW1                                            |     1 | SWITCH; SPST; SMT; 32V; 0.05A; KSR SERIES; SUBMINIATURE TACT SWITCH; RCOIL=0.1 OHM; RINSULATION=10G OHM; C&K COMPONENTS                                                                       |
| TP3, TP6                                       |     2 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN;                              |
| TP4, TP5                                       |     2 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN;                              |
| TP1-TP2, TP7-TP9                               |     5 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN;                              |
| U1                                             |     1 | EVKIT PART - IC; MAX31328; +/-3.5PPM; I2C RTC WITH INTEGRATED CRYSTAL AND POWER MANAGEMENT; PACKAGE CODE:L1055M-1; PACKAGE OUTLINE DRAWING: 21-100481; PACKAGE LAND PATTERN: 90-100169; LGA10 |
| U2, U3                                         |     2 | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; NSOIC8                                                                                                                                 |
| U4                                             |     1 | IC; TRANS; 1-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UDFN6                                                                                                                                  |
| CR1225 3V Lithium Battery                      |     1 | CR1225 3V Lithium Battery                                                                                                                                                                     |

## MAX31328 Shield Schematics

<!-- image -->

Evaluates: MAX31328

## MAX31328 Shield Schematics (continued)

<!-- image -->

## MAX31328 Shield PCB Layouts

MAX31328 Shield PCB Layout-Top Silkscreen

<!-- image -->

MAX31328 Shield PCB Layout-Bottom

<!-- image -->

MAX31328 Shield PCB Layout-Top

<!-- image -->

MAX31328 Shield PCB Layout- Bottom Silkscreen

<!-- image -->

## MAX31328 Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

Windows is a registered trademark and registered service mark of Microsoft Corporation. Arduino is a registered trademark of Arduino, LLC.

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX31328