<!-- lastmod 2022-08-02 -->
## MAX17682 Evaluation .it %

## Evaluates: MAX17682 for Isolated +24V 2utput Configuration

## General Description

The MAX17682 EV kit B is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17682  high-efficiency,  iso-buck  DC-DC  Converter. The EV kit operates over a wide input-voltage range of 17V  to  36V  and  uses  primary-side  feedback  to  regulate  the  output  voltage.  The  EV  kit  has  isolated  output, programmed to +24V at 400mA, with  10% output voltage regulation.

The EV kit comes installed with the MAX17682 in a 20-pin (4mm x 4mm) TDFN package.

## Features

- 17V to 36V Input Voltage Range
- +24V, 400mA Continuous Current
- EN/UVLO Input
- 250kHz Switching Frequency
- 96% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 10W Output Power
- Overtemperature Protection
- Proven PCB layout

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- One 15V - 60V DC, 1A Power Supply
- One resistive load 400mA sink capacity
- Two Digital Multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  the  default  secondary  output programmed to +24V.

- 1) Verify that the J1 is open
- 2) Set  the  power  supply  output  to  24V.  Disable  the power supply
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 400mA resistive  load  across  the  +24V  PCB  pad  and  the GND0 PCB pad.
- 4) Connect a DMM configured in voltmeter mode across the +24V PCB pad and the nearest GND0 PCB pad.
- 5) Enable the input power supply.
- 6) Verify that output voltage is at +24V (with allowable tolerance of  10%) with respect to GND0.
- 7) If  required,  vary  the  input  voltage  from  17V  to  36V, and the load current from 40mA to 400mA and verify that output voltage is at +24V (with allowable tolerance of  10%).

<!-- image -->

## MAX17682 Evaluation Kit B

## Detailed Description

The MAX17682EVKITB evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the performance of the MAX17682 high-efficiency, isobuck, DC-DC converter designed to provide an isolated power up to 10W. The EV kit generates +24V, 400mA voltages  from  a  17V  to  36V  input  supply.  The  EV  kit features  a  forced-PWM  control  scheme  that  provides constant switching-frequency of 250kHz operation at all load and line conditions.

## Evaluates: MAX17682 for Isolated +24V 2utput Configuration

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power level without using an opto-coupler. The detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17682 IC data sheet.

## Enable Control (J1)

The EV Kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17682. The VPRI PCB pad helps measure the regulated primary output voltage (V PRI ). An additional RESETB PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESETB pulls  low  if  FB  voltage  drops  below  92%(typ) of its set value and RESETB goes high impedance 1024 clock cycles after FB voltage rises above 95% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

The  EN/UVLO  pin  on  the  device  serves  as  an  on/ off  control  while  also  allowing  the  user  to  program  the input undervoltage lockout (UVLO) threshold. Jumper J1 configures the EV kit's output for turn-on/turn-off control. Install a shunt across jumper J1 pins 2-3 to disable VOUT. See Table 1 for proper J1 jumper configurations.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT OUTPUT          |
|------------------|--------------------------------------------------|-----------------------|
| 1-2              | Connected to V IN                                | Always Enabled        |
| 2-3              | Connected to GND                                 | Always Disabled       |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15V |

* Default position.

Note 1: The secondary output diodes D1 is rated to carry short-circuit current only for few hundredths of a millisecond and is not rated to carry the continuous short-circuit current.

Note 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the +24V rail is healthy, U2 sinks the minimum load current required to regulate the output voltages within ±10% regulation.

## EV Kit B Performance Report

<!-- image -->

LOAD TRANSIENT RESPONSE (LOAD CURRENT STEPPED FROM 200mA TO 400mA)

<!-- image -->

## Evaluates: MAX17682 for Isolated +24V 2utput Configuration

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Wurth Electronik | www.we-online.com      |
| Murata Americas  | www.murataamericas.com |
| Panasonic Corp.  | www.panasonic.com      |

Note: Indicate that you are using the MAX17682 when contacting these component suppliers.

## MAX17682 EV Kit B Bill of Materials

| S. No. Designation   | Description                                      | Maufacturer Part No.              |
|----------------------|--------------------------------------------------|-----------------------------------|
| 1 C1                 | 1 10µF ±10%, 50V X7R                             | Murata GRM32ER71H106KA12          |
| 2 C2                 | 1 47µF, 80V aluminum electrolytic capacitor      | Panasonic EEEFK1K470P             |
| 3 C3                 | 1 0.10µF ±10% , 100V X7R                         | Murata GRM319R72A104KA01          |
| 4 C5,C6              | 2 22µF ±10%, 16V X7R                             | Murata GRM32ER71C226KEA8          |
| 5 C4                 | 1 10µF ±10%, 35V X7R                             | Murata GRM32ER7YA106MA12          |
| 6 C7                 | 1 22nF±10%,25V, X7R                              | Murata GRM155R71E223KA61D         |
| 7 C8                 | 1 470pF ±10%, 50V, X7R                           | Murata GRM155R71H471KA01D         |
| 8 C9                 | 1 10nF ±10%, 25V, X7R                            | Murata GRM155R71E103KA01J         |
| 9 C10                | 1 0.1µF ±10%, 16V X7R                            | Murata GRM155R71C104K             |
| 10 C11               | 1 2.2µF ±10%, 10V X7R                            | Murata GRM188R71A225K             |
| 11 C12               | 1 2700PF 3KV X7R                                 | AVX 1812HC272KAZ1A                |
| 12 T1                | 1 33µH                                           | Wurth Electronik Inc. 750343672   |
| 13 D1                | 1 Diode Schottky 200V 1A                         | Micro Commercial Co. SMD1200PL-TP |
| 14 U1                | 1 MAX17682 TQFN10 4*4mm Iso buck DC-DC converter | MAX17682                          |
| 15 U2                | 1 Shunt regulator SOT25                          | ST MICROELECTRONICS TL431AIYDT    |
| 16 R1                | 1 3.3M OHM1%1/10W                                | Vishay CRCW06033M30FKEB           |
| 17 R2                | 1 274K OHM1%1/10W                                | Vishay CRCW0603240KFKEB           |
| 18 R3                | 1 91K OHM1%1/16W                                 | Vishay CRCW040278K7FKED           |
| 19 R10               | 1 10K OHM1%1/16W                                 | Vishay CRCW040210K0FKEE           |
| 20 R4                | 1 10.5K OHM1%1/16W                               | Vishay CRCW040210K0FKEE           |
| 21 R5                | 1 6.04K OHM1%1/16W                               | Vishay CRCW04026K04FKED           |
| 22 R6                | 1 10K OHM1%1/16W                                 | Vishay CRCW040210K0FKEE           |
| 23 R7                | 1 OPEN                                           | - -                               |
| 24 R8                | 1 22OHM1%1/10W                                   | Panasonic ERJ-2RKF22R0X           |
| 25 R9                | 1 90.9K OHM1%1/16W                               | Vishay CRCW040290K9FKED           |
| 26 R10               | 1 10K OHM1%1/16W                                 | Vishay CRCW040210K0JNEE           |

## MAX17682 EV Kit B Schematics

<!-- image -->

## MAX17682 EV Kit B PCB Layout Diagrams

MAX17682 EV Kit B-Top Silkscreen

<!-- image -->

MAX17682 EV Kit B-Top

<!-- image -->

│

## MAX17682 EV Kit B PCB Layout Diagrams (continued)

MAX17682 EV Kit B-Level 2 SGND

<!-- image -->

MAX17682 EV Kit B-Level 3 SGND

<!-- image -->

│

## MAX17682 EV Kit B PCB Layout Diagrams (continued)

MAX17682EV Kit B-Bottom

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART            | TYPE   |
|-----------------|--------|
| MAX17682EVKITB# | EVKIT  |

## MAX17682 Evaluation .it %

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX17682 for Isolated +24V

2utput Configuration