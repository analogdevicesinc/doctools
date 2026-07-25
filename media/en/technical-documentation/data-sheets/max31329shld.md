<!-- lastmod 2022-08-03 -->
## MAX31329 Shield

## General Description

The MAX31329 shield is a fully assembled and tested PCB to evaluate the MAX31329, low-cost, I 2 C real-time clock (RTC) with an integrated crystal oscillator and a crystal. The shield operates from a single  supply, either from  a USB or an external power supply. The device incorporates a battery input and maintains accurate timekeeping when the main power to the device is interrupted. The integration of the crystal resonator enhances the long-term accuracy of the device and eliminates the external crystal requirement  in  the  system.  This  device  is  accessed through an I 2 C serial interface provided by a MAX32625 PICO board.

The  shield  provides  the  hardware  and  software  user interface  (GUI)  necessary  to  evaluate  the  MAX31329. It  connects to the PC through a MAX32625 PICO board and a Micro-USB cable.

## MAX31329 Shield Photo

<!-- image -->

<!-- image -->

Evaluates: MAX31329

## Features and Benefits

- Easy Evaluation of the MAX31329
- +1.6V to +5.5V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

## Shield Contents

- Assembled MAX32625 PICO controller board
- Micro-USB cable
- Assembled circuit board including MAX31329ELB+

Ordering Information appears at end of data sheet.

## MAX31329 Shield

## Quick Start

## Required Equipment

- One pico ammeter for measuring the current
- One oscilloscope and one oscilloscope probe
- One PC or laptop with Microsoft Windows ®  7 or later
- One USB Type A male to Micro-USB Type B male cable
- One assembled and programmed MAX32625 PICO board
- One MAX31329 shield

## Procedure

The MAX31329 shield is fully assembled and tested. Use the following steps to verify board operation.

1.  Place the shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2.  Verify that all the jumpers are in their default position as shown in Table 1 .
3.  Connect the MAX32625 PICO board and a +1.6V to +5.5V supply to the shield at the location shown as in Connection and Setup as shown in Figure 1 .
4.  Connect the USB Type A male to Micro-USB Type B male cable between the MAX32625 PICO board and PC/Laptop.
5.  Go to the MAX31329 shield product page to download and install the latest version of MAX31329 RTC SHIELD Software.
6.  Open the MAX31329 RTC SHIELD Software, as shown in Figure 2 .
7.  On the Device tab, Click Reconnect to link the GUI to MAX31329 Shield after powering up the supply.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                       |
|----------|------------------|---------------------------------------------------|
| JU1      | 1-2              | INTB/CLKOUT to the Header for Arduino ® /Mbed ®   |
| JU1      | Open*            | INTB/CLKOUT Not to Arduino/mbed                   |
| JU2      | 1-2 *            | Connect Backup Supply to external DC Supply       |
| JU2      | 1-3              | Connect Backup Supply to Ground                   |
| JU2      | 1-4              | Connect Backup Supply to Super Capacitor          |
| JU2      | Open             | Backup Supply Open                                |
| JU4      | 1-2              | Connect VCC Supply to +1.8V on board supply       |
| JU4      | 1-3              | Connect VCC Supply to +3.3V on board supply       |
| JU4      | 1-4              | Connect VCC Supply to +5.0V on board supply       |
| JU4      | 1-5 *            | Connect VCC Supply to external DC supply          |
| JU4      | Open             | VCC open                                          |
| JU5      | 1-2              | DIN Pin to VCC                                    |
| JU5      | 2-3*             | DIN Pin to Ground                                 |
| JU6      | 1-2*             | INTA/CLKIN to TP4                                 |
| JU6      | 1-3              | INTA/CLKIN to the Header for Arduino/Mbed         |
| JU6      | 1-4              | INTA/CLKIN to Ground                              |
| JU7      | 1-2*             | Connect VCC to U1                                 |
| JU7      | Open             | Disconnect VCC to U1 for IC current measurement   |
| TP1      |                  | INTB/CLKOUT                                       |
| TP2      |                  | VBAT from External Supply                         |
| TP4      |                  | INTA/CLKIN                                        |
| TP5      |                  | External Power Supply for VCC from +1.6V to +5.5V |
| TP6      |                  | Ground                                            |

Figure 1. Connection and Setup

<!-- image -->

## Detailed Description of Hardware

The MAX31329 low-current, real-time clock (RTC) is a time-keeping device that provides nano amperes timekeeping current, extending battery life. The MAX31329 incorporates an integrated 32.768kHz crystal, eliminating the need for an external crystal. This device is accessed through an I 2 C serial interface. The device features one digital Schmitt trigger input (DIN) and generates an interrupt output on a falling or rising edge of this digital input. An integrated power-on reset function  ensures  deterministic  default  register  status  upon  power-up.  Other  features  include  two  time-of-day  alarms, interrupt outputs, a programmable square-wave output, a serial bus timeout mechanism. The clock/calendar provides seconds, minutes, hours, day, date, month, and year information. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in either 24-hour or 12-hour format. The MAX31329 also includes a clock input for synchronization. When a reference clock (e.g., 32kHz, 50Hz/60Hz Power Line, GPS 1PPS) is present at the CLKIN pin and the enable external clock input bit (ENCLKIN) is set to 1, the MAX31329 RTC is frequency-locked to the external clock and the clock accuracy is determined by the external source. The device is available in a lead (Pb)-free/RoHS-compliant, 10-pin, 5mm x 5mm LGA package.

## Detailed Description of Software

## Real Time Monitoring

To monitor the time and date, on the Configuration and Time tab, in the RTC Configuration group box, enable the Oscillator  Enable  toggle button , and  in  the Real  Time  Monitoring group  box,  check Auto  Update checkbox  for continuous reading.

## Battery current draw in Timekeeping Mode

To measure the backup battery current draw under normal real-time clock conditions, without any interrupt or CLKOUT output and without probe being connected to any IOs.

- 1) Remove the jumper from JU2.
- 2) Connect the negative terminal of the pico ammeter to the pin 4 of the JU9 and the positive terminal to pin 1 of JU9.
- 3) On the Configuration and Time tab, in the RTC Configuration group box, make sure CLKOUT Frequency is 1Hz selected. In the Real Time Monitoring group box , uncheck the Auto Update check box as shown in Figure 2 .
- 4) Under Power Management , in the Supply Select and Fail Enable group box, select Force VBAT and PWR Fail Disable as shown in Figure 2 .
- 5) The reading in the pico ammeter is the battery current consumed by the MAX31329 IC only. It should be around 240nA.

## 32kHz Output Frequency

On the Configuration and Time tab of the software, in the RTC Configuration group box, click the CLKOUT button. The clock output can be monitored using an oscilloscope connected to INTB/CLKOUT test point (TP1). The clock output frequency has a selection for 1Hz/4.096kHz/8.192kHz/32.768kHz. A frequency counter can also be used to measure the clock frequency accurately.

## Alarm and Timer Configuration

On the Alarms and Timer tab, use the Alarm 1 Configuration and Alarm 2 Configuration to configure Alarm 1 and Alarm 2.

Figure 2. MAX31329 RTC Shield Software-Configuration and Time Page

<!-- image -->

Figure 3. MAX31329 RTC Shield Software-Registers Page

<!-- image -->

## Ordering Information

#Denotes RoHS-compliant.

<!-- image -->

| PART          | TYPE   |
|---------------|--------|
| MAX31329SHLD# | Shield |

## MAX31329 Shield

## MAX31329 Shield Bill of Materials

|   ITEM |   QTY | REF DES            |   QTY | DESCRIPTION                                                                                |
|--------|-------|--------------------|-------|--------------------------------------------------------------------------------------------|
|      1 |     4 | C2, C4, C5, C8     |     4 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R  |
|      2 |     4 | C3, C7, C9, C10    |     4 | CAP; SMT (0402); 0.1UF; 10%; 6.3V; X7R; CERAMIC CHIP                                       |
|      3 |     4 | C11, C13, C15, C17 |     4 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R |
|      4 |     4 | C12, C14, C16, C18 |     4 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R |
|      5 |     2 | J1, J2             |     2 | CONNECTOR; FEMALE; THROUGH HOLE; STRAIGHT; 10PINS                                          |
|      6 |     1 | J3                 |     1 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS                   |
|      7 |     1 | J4                 |     1 | CONNECTOR; MALE; THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET ; STRAIGHT; 6PINS          |
|      8 |     1 | J6                 |     1 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                    |
|      9 |     1 | J7                 |     1 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                    |
|     10 |     2 | JU1, JU7           |     2 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                       |
|     11 |     2 | JU2, JU6           |     2 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS          |
|     12 |     1 | JU4                |     1 | EVKIT PART-CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                |
|     13 |     1 | JU5                |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                  |
|     14 |     4 | R3, R8, R9, R13    |     4 | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                       |
|     15 |     1 | R7                 |     1 | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                      |
|     16 |     1 | SUPER-C            |     1 | CAP; THROUGH HOLE-RADIAL LEAD; 0.33F; +80%/-20%; 5.5V; ALUMINUM-ELECTROLYTIC               |
|     17 |     4 | TP1, TP2, TP4, TP5 |     4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED                 |
|     18 |     1 | TP6                |     1 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK               |
|     19 |     1 | U1                 |     1 | EVKIT PART - IC; MAX31329; LOW-CURRENT; REAL-TIME CLOCK WITH I 2 C                         |
|     20 |     2 | U2, U3             |     2 | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; NSOIC8                              |

## MAX31329 Shield Schematic Diagram

<!-- image -->

## MAX31329 Shield PCB Layout Diagrams

MAX31329 Shield PCB Layout Diagram-Top Silkscreen

<!-- image -->

MAX31329 Shield PCB Layout Diagram-Top View

<!-- image -->

MAX31329 Shield PCB Layout Diagram-Bottom View

<!-- image -->

MAX31329 Shield PCB Layout Diagram-Bottom Silkscreen

<!-- image -->

## MAX31329 Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 5/21            | Release for Market Intro | -               |

Windows is a registered trademark and registered service mark of Microsoft Corporation. Arduino is a registered trademark of Arduino, LLC. Mbed is a registered trademark of Arm Limited.

or pricing, delivery, and ordering information, please visit  axim  ntegrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX31329