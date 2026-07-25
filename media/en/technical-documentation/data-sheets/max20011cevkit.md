<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX20011C/MAX20011D

## General Description

The MAX20011C EV kit is a fully assembled and tested PCB  intended  to  demonstrate  the  capability  of  the MAX20011C  step-down  (buck)  voltage  regulator.  The MAX20011C  has  an  output  current  rating  of  16A.  The IC operates at 3V to 5.5V input supply voltage and can regulate to a voltage range of 0.5V to 1.275V.

The  MAX20011C  features  a  2.2MHz  fixed-frequency pulse-width-modulation  (PWM)  mode  for  better  noise immunity and load transient response. The 2.2MHz frequency operation allows for the use of all ceramic capaci -tors  and  minimizes  external  components.  The  spreadspectrum  frequency  modulation  option  minimizes  elec -tromagnetic emissions. Integrated low R DS(ON)  switches improve efficiency at heavy loads and simplifies layout.

The  MAX20011C  is  offered  with  factory-preset  output voltage.  The  I 2 C  interface  supports  dynamic  voltage adjustment with programmable slew rates. Other features include programmable soft-start, over-current protection, and over-temperature protection.

The  MAX20011D  can  be  evaluated  by  replacing  the installed IC (U1).

## Features

- High Efficiency DC-DC Converter
- Up to 16A Peak Output Current
- Differential Remote Voltage Sensing
- 3V to 5.5V Input Supply Voltage
- I 2 C User Configurable
- Excellent Load Transient Performance
- 2.2MHz or 1.1MHz Operation
- Test Points for Bode Plot Measurement
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX20011C Evaluation Kit

## Quick Start

## Required Equipment

- MAX20011C EV kit
- 8V, 20A power supply
- Load resistor or an electronic load
- Voltmeters
- Ammeter

## Procedure

The EV kit comes fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to PV (TP1) and GND (TP2). Enable the supply.
- 2) Place jumper (J5) between EN and PV to enable the IC.
- 3) Measure the output voltage at the sense point (J10).
- 4) Connect load between banana sockets TP3 (VOUT) and TP4 (GND).
- 5) Verify that the output voltage at the sense point (J10) remains within specification.
- 6) Verify that RESETB (J8) is at logic-high level.

## Test Setup

<!-- image -->

319-100574; Rev 2; 7/21

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. © 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Detailed Description of Hardware

## EV Kit Interface

The  banana  sockets  TP1  (PV)  and  TP2  (GND)  are  the main input power supply points on the board. Connect a 5V power supply across these connectors. Use J32 (PV) as a test point for monitoring the input power supply. The banana  sockets  TP3  (VOUT)  and  TP4  (GND)  serve  as outputs to an external load. The MAX20011C is enabled by a jumper placed across the EN and PV pins on jumper J5. The enable signal (EN) can be monitored at test point J2, and the RESET signal (RESETB) is monitored at test point J8. The 20-pin connector J1 is a socket for an optional I 2 C interface board (not included). The I 2 C SDA and SCL sig -nals are monitored at test points J6 (SDA) and J7 (SCL). Use test points J27 (Bode+) and J28 (Bode-) for bode plot measurements, and J10 for measuring output voltage at the  sense point (a differential  probe  is  recommended for ripple and transient measurements).

## I 2 C Interface

The MAX20011C EV kit is designed to be used with an I 2 C interface, such as the MINIQUSB or MAX32625PICO board, and a PC software that can read and write to the device,  for  example:  SimpleI2C.    The  IC  has  a  packet error checking (PEC) feature.  This option can be disabled through CONFIG register 0x05, bit 7 (PEC). In order to write to a register when the PEC is enabled, the I 2 C transaction must be followed by a PEC byte.  The SimpleI2C software has the option to enable this for all transactions.

## Frequency Adjustment with External SYNC

J4 allows an external synchronization pulse to be applied to the device's SYNC pin to set the switching frequency. Use 50% duty cycle for the square wave and follow the SYNC input  frequency  guideline  in  the  MAX20011C  IC data sheet.

## MAX20011C EV Kit Jumpers, Test Points, and Connectors

| JUMPER   | SIGNAL        | DEFAULT POSITION   | FUNCTION                                                         |
|----------|---------------|--------------------|------------------------------------------------------------------|
| J1       | NA            | NA                 | Connector for optional I 2 C communication module                |
| J2       | EN            | NA                 | Test point for device enable (EN) signal                         |
| J3       | SYNC          | NA                 | Test point for external synchronization (SYNC) signal            |
| J4       | SYNC          | NA                 | Connection point for applying an external synchronization signal |
| J5       | EN            | OFF                | Jumper for device enable (EN) signal                             |
| J6       | SDA           | NA                 | Test point for I 2 C SDA signal                                  |
| J7       | SCL           | NA                 | Test point for I 2 C SCL signal                                  |
| J8       | RESETB        | NA                 | Test point for RESET (RESETB)                                    |
| J9       | VOUT          | NA                 | Test point for output voltage                                    |
| J10      | RS+           | NA                 | Test point for output sense point                                |
| J12      | VOUT          | NA                 | Test point for output voltage                                    |
| J13      | GND           | NA                 | Ground                                                           |
| J18      | VDD           | NA                 | VDD to PV connector (Not required for MINIQUSB)                  |
| J22      | GND           | NA                 | Ground                                                           |
| GND      | GND           | NA                 | Ground                                                           |
| J26      | LX            | NA                 | Test point for LX signal with R-C filter                         |
| J27      | Bode+         | NA                 | Test point for bode plot measurement                             |
| J28      | Bode-         | NA                 | Test point for bode plot measurement                             |
| J29      | GND           | NA                 | Ground                                                           |
| J30      | Plugin socket | NA                 | Socket for optional load transient board (MAXLDBD)               |
| J31      | GND           | NA                 | Ground                                                           |
| J32      | PV            | NA                 | Test point for input voltage during efficiency measurement       |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20011CEVKIT# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX20011C/ MAX20011D

## MAX20011C Evaluation Kit

## MAX20011C EV Kit Bill of Materials

| REFERENCE                         | VALUE   | DESCRIPTION                                                                                | MANUFACTURER            | MFG PART #           |
|-----------------------------------|---------|--------------------------------------------------------------------------------------------|-------------------------|----------------------|
| C1, C3, C15, C16                  | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7S; | TDK                     | CGA4J3X7S1A106M125AB |
| C2, C4                            | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | TDK                     | CGA3E1X7R1E105K      |
| C5                                | 2.2UF   | CAPACITOR, 0603,CERAMIC, 2.2UF, 10V, X7S                                                   | TDK                     | CGA3E3X7S1A225K080AE |
| C6                                | 0.1UF   | CAPACITOR, 0603, CERAMIC, 0.1UF, 25V, X7R                                                  | TDK                     | C1608X7R1E104K080AA  |
| C7 - C14                          | 47UF    | CAP; SMT (1206); 47UF; 20%; 4V; CERAMIC CHIP                                               | TDK                     | CGA5L1X7T0G476M      |
| C17                               | 470UF   | CAPACITOR, 7343, TANTALUM POLYMER, 470UF, 6.3V                                             | KEMET                   | T530X477M006ATE004   |
| C18 - C21                         | 47UF    | 47µF ±20% 10V Ceramic Capacitor X7S 1210                                                   | TDK                     | CGA6P1X7S1A476M      |
| GND                               | -       | TEST POINT; PIN DIA=0.094IN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                      | KEYSTONE                | 5020                 |
| J1                                | -       | CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHT ANGLE; 20PINS                     | SULLINS ELECTRONIC CORP | PPTC102LJBN-RC       |
| J2, J3, J6-J8, J10, J18, J22, J26 | -       | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS                     | SAMTEC                  | TSW-101-07-L-D       |
| J4, J5                            | -       | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                | SAMTEC                  | TSW-103-23-G-S       |
| J9                                | -       | MICROMATE FEMALE SURFACE MOUNT MMCX CONNECTOR                                              | AMPHENOL                | 908-22101            |

Evaluates: MAX20011C/

MAX20011D

## MAX20011C Evaluation Kit

## MAX20011C EV Kit Bill of Materials (continued)

| REFERENCE                   | VALUE     | DESCRIPTION                                                        | MANUFACTURER          | MFG PART #          |
|-----------------------------|-----------|--------------------------------------------------------------------|-----------------------|---------------------|
| J12, J13, J27-J29, J31, J32 | -         | TEST POINT; SMT; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT | KEYSTONE              | 5016                |
| J30                         | -         | CONNECTOR; FEMALE; SMT; MINI SLAMMER SOCKET; STRAIGHT; 20PINS      | SAMTEC                | HSEC8-110-01-S-DV-A |
| L1                          | 70nH      | EVKIT PART - INDUCTOR; SMT; FERRITE; 70NH; 20%; 34A                | TDK                   | HPL505028F070MRD3P  |
| R1, R2, R8                  | 1K        | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                  | PANASONIC             | ERJ-3EKF1001        |
| R3                          | 2.2       | RESISTOR, 0603, 2.2 OHM, 1%, 100PPM, 0.10W, THICK FILM             | PANASONIC             | ERJ-3RQF2R2         |
| R4, R5                      | 10K       | RESISTOR; 0603; 10K; 1%, 100PPM, 0.10W, THICK FILM                 | PANASONIC             | ERJ-3EKF1002        |
| R6                          | 10        | RESISTOR; 0402; 10 OHM, 1%; 100PPM; 0.063W, THICK FILM             | VISHAY DALE           | CRCW040210R0FK      |
| R7                          | 0         | RESISTOR; 0402; 0 OHM; 0%, 0.10W, THICK FILM                       | PANASONIC             | ERJ-2GE0R00         |
| TP1, TP2                    | -         | RECEPTACLE; JACK; BANANA; NICKEL PLATED BRASS                      | KEYSTONE              | 575-8               |
| TP3, TP4                    | -         | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN           | EMERSON NETWORK POWER | 108-0740-001        |
| U1                          | MAX20011C | IC; AUTOMOTIVE SINGLE 16A STEP- DOWN CONVERTER FAMILY              | MAXIM INTEGRATED      | MAX20011CAFOA/VY+   |

│

Evaluates: MAX20011C/

MAX20011D

## MAX20011C Evaluation Kit

## MAX20011C EV Kit Schematic

Figure 1. MAX20011C EV Kit Schematic

<!-- image -->

Evaluates: MAX20011C/

│

## MAX20011C EV Kit PCB Layout Diagrams

Figure 2. MAX20011C EV Kit PCB Layout-Top Assembly

<!-- image -->

Figure 3. MAX20011C EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20011C EV Kit PCB Layout Diagrams (continued)

Figure 4. MAX20011C EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX20011C EV Kit PCB Layout-Inner Layer 3

<!-- image -->

│

## MAX20011C EV Kit PCB Layout Diagrams (continued)

Figure 6. MAX20011C EV Kit PCB Layout-Inner Layer 4

<!-- image -->

Figure 7. MAX20011C EV Kit PCB Layout-Inner Layer 5

<!-- image -->

## MAX20011C EV Kit PCB Layout Diagrams (continued)

Figure 8. MAX20011C EV Kit PCB Layout-Inner Layer 6

<!-- image -->

Figure 9. MAX20011C EV Kit PCB Layout-Inner Layer 7

<!-- image -->

## MAX20011C EV Kit PCB Layout Diagrams (continued)

Figure 10. MAX20011C EV Kit PCB Layout-Bottom Layer

<!-- image -->

Figure 11. MAX20011C EV Kit PCB Layout-Bottom Assembly

<!-- image -->

│

## MAX20011C Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                                       | -               |
|                 1 | 12/20           | Removed MAX20011CEVKITSYS# from Ordering Information  | 2               |
|                 2 | 7/21            | Added MAX20011D to title; updated General Description | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX20011C/

MAX20011D