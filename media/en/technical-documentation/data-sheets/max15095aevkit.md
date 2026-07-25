<!-- lastmod 2022-08-03 -->
## MAX15095A Evaluation Kit

## General Description

The MAX15095A evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15095A  hot-swap  controller with an integrated 6.6A MOSFET. The EV kit is configured to pass 6.6A in a 2.7V to 18V hot-swap application, thus providing a fully integrated solution. The EV kit uses the MAX15095AGFC+ in a 2.5mm X 2.5mm, 12-pin, 0.5mm pitch  FC2QFN  package  with  a  proven  four-layer  PCB design. As configured, the EV kit is optimized to operate at 12V.

The EV kit can be used to evaluate all MAX15095 and MAX15095D variants.

Ordering Information appears at end of data sheet.

## Evaluates: MAX15095A/MAX15095/MAX15095D

## Features

- 2.7V to 18V Operating Voltage Range
- Up to 6.6A Configurable Load Current Capability
- Banana Jacks for Input and Output Voltage
- Programmable Slew-Rate Control
- Selectable/Configurable Circuit-Breaker Threshold
- Configurable Overvoltage/Undervoltage Lockout
- Programmable Fast Comparator Response
- PG Output
- Defined Safe Operation Area
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX15095A Evaluation Kit

## Quick Start

## Required Equipment

-  MAX15095A	EV	kit
- 12V,	6.6A	DC	power	supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU1. Also ensure that jumpers JU2 and JU4 are opened and jumpers JU3 and JU5 are closed.
- 2)  Turn on the power supply and set the supply to 12V, then disable the power supply.
- 3)  Connect the positive terminal of the power supply to the IN banana jack on the EV kit. Connect the negative terminal of the power supply to the GND banana jack.
- 4)  Enable the power supply.
- 5)  Verify  that  the  voltage  between  the  OUT  and  GND banana jacks is 12V.
- 6)  Verify that the internal regulator voltage (REG) is 3.3V.
- 7)  The EV kit is now ready for additional evaluation.

## Detailed Description of Hardware

The  MAX15095A  EV  kit  provides  a  proven  design  to evaluate the MAX15095A. The EV kit can be conveniently connected between the system power and the load using the banana jacks provided for the input and output. PCB pads are provided to monitor and control the device signals. The EV kit operates between 2.7V and 18V up to 6.6A load current capability.

## Evaluates: MAX15095A/MAX15095/MAX15095D

## Evaluating the MAX15095A

The  EV  kit  can  be  used  to  evaluate  the  MAX15095A, with  the  MAX15095AGFC+  installed.  The  MAX15095/ MAX15095D are pin-to-pin compatible with the MAX15095A. Refer to the device data sheet for details on the MAX15095/MAX15095D.

## Circuit Breaker (CB)

Jumper JU1 sets the current limit for the internal circuit breaker (CB) of the device. The CB pin can be connected to a fixed resistor (R5) or a potentiometer (R11) to set the current limit. See Table 1 for shunt positions.

The circuit-breaker threshold can be set according to the following formula:

<!-- formula-not-decoded -->

where I CB  is in A and R CB  (the resistor between CB and ground)	is	in	Ω.

## Setting the Output Slew Rate

An  external  capacitor  (C3)  is  connected  from  GATE  to GND  on  the  IC  to  reduce  the  output  slew  rate  during startup. During startup, a 5.9µA (typ) current is sourced to enhance the internal MOSFET with 10V/ms (typ). C3 can be calculated according to the following formula:

<!-- formula-not-decoded -->

where I GATE is	 5.9µA	 (typ),	 ∆t	 is	 the	 desired	 slew	 rate, and	 ∆V GATE  is  the  voltage  at  the  gate  of  the  internal MOSFET at turn-on.

## Table 1. JU1 Jumper Selection (CB)

| SHUNT POSITION   | CB PIN CONNECTED TO   | CURRENT LIMIT   |
|------------------|-----------------------|-----------------|
| 1-2*             | R5                    | 6.6A            |
| 2-3              | R11                   | Adjustable      |

*Default position.

│

## MAX15095A Evaluation Kit

## Evaluates: MAX15095A/MAX15095/MAX15095D

## Enable/Present-Detect Inputs

The  EV  kit  features  jumpers  JU2  and  JU3  to  enable/ disable the output. JU3 allows simulation of PC Express card being plugged in. OUT is enabled when PRSNT is pulled low and EN is pulled high . If PRSNT is high, OUT is not enabled, regardless of EN logic state See Table 2 for jumper positions.

## Undervoltage/Overvoltage Lockout

The  EV  kit  provides  an  option  to  configure  the  undervoltage/overvoltage-lockout  threshold  using  a  resistive divider, R1 and R2 from IN to ground with the center tap connected  to  UVOV.  The  EV  kit's  undervoltage-lockout threshold is set to 7.1V (typ) and the overvoltage-lockout threshold is set to 15.8V (typ). Refer to the device data sheet for mor details.

Table 2. JU2 and JU3 Jumpers Selection

| SHUNT POSITION      | EN/ PRSNT CONNECTIONS                | EV KIT OPERATION           |
|---------------------|--------------------------------------|----------------------------|
| Not installed (JU2) | EN pulled to REG with a 100kΩ pullup | OUT enabled with PRSNT low |
| Installed (JU3)     | PRSNT forced to GND                  | OUT enabled with EN high   |

*Default position.

## Table 3. JU4 and JU5 Jumpers Selection

| SHUNT POSITION      | TIMER CONNECTED TO   | t FCD      |
|---------------------|----------------------|------------|
| Not installed (JU4) | R6                   | Adjustable |
| Installed (JU5)     | REG                  | 200ns      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX15095A when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15095AEVKIT# | EV Kit |

#Denotes RoHS compliant.

## TIMER

Jumper  JU5  connects  TIMER  to  REG,  which  sets  the total response time of the fast-trip comparator to less than 200ns (typ). For adjustable response time, open JU5 and close	JU4.	JU4	connects	TIMER	to	a	500kΩ	potentiom -eter (R6).See Table 3 for shunt positions.

Use the following formula to set the fast-trip comparator's response time:

<!-- formula-not-decoded -->

where t FCD  is the fast-trip comparator response time in µs and	R6	is	the	total	resistance	from	TIMER	to	ground	in	kΩ set	by	the	500kΩ	potentiometer.	Refer	to	the	device	data sheet for more details.

│

## MAX15095A Evaluation Kit

## Evaluates: MAX15095A/MAX15095/MAX15095D

## MAX15095A EV Kit Bill of Materials

|   ITEM |   QTY | REFERENCE DESIGNATOR                            | MFG PART NUMBER                                                    | DESCRIPTION                                                                                                             |
|--------|-------|-------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C1, C2                                          | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
|      2 |     1 | C3                                              | C0603X7R500562KNP; GRM188R71H562K                                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 5600PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
|      3 |     6 | C6-C11                                          | GRM31CR71E106KA12L; CL31B106KAHNNN                                 | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
|      4 |     1 | D1                                              | SMBJ18A                                                            | DIODE; TVS; SMB (DO-214AA); PIV=18V; IF=20.6A                                                                           |
|      5 |     6 | REG, VCC, GATE, GDRV, TIMER, UV/OV              | 5010                                                               | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                       |
|      6 |     2 | GND, GND_1                                      | 7007                                                               | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                      |
|      7 |     2 | IN, OUT                                         | 7006                                                               | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                        |
|      8 |     1 | JU1                                             | PEC03SAAN                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |
|      9 |     5 | JU2-JU6                                         | PEC02SAAN                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
|     10 |     4 | MTH1-MTH4                                       | P440.375                                                           | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                       |
|     11 |     4 | MTH1-MTH4                                       | 1902B                                                              | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                    |
|     12 |    14 | PG, XIN1-XIN3, PRSNT, XGND1-XGND6, XOUT1- XOUT3 | 9020 BUSS                                                          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
|     13 |     1 | Q1                                              | IRLR8721TRPBF                                                      | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(65W); I- (65A); V-(30V)                                                       |
|     14 |     1 | R1                                              | ERJ-3EKF1783V                                                      | RESISTOR; 0603; 178K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |
|     15 |     1 | R2                                              | CRCW060315K0FK                                                     | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                   |
|     16 |     2 | R3, R4                                          | ERA-V15J100V                                                       | RESISTOR; 0603; 10 OHM; 5%; 1500PPM; 0.063W; METAL FILM                                                                 |
|     17 |     1 | R5                                              | CRCW060341K2FK                                                     | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                |
|     18 |     1 | R6                                              | 3296Y-1-504LF                                                      | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 500K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER                          |
|     19 |     3 | R7-R9                                           | RC0603JR-07100KL                                                   | RESISTOR; 0603; 100K OHM; 5%; 100PPM; 0.1W; THICK FILM                                                                  |
|     20 |     1 | R10                                             | CRCW060349R9FK                                                     | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |
|     21 |     1 | R11                                             | 3296W-1-503LF                                                      | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 50K OHM; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM                          |
|     22 |     1 | R12                                             | CRCW06030000Z0                                                     | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                     |
|     23 |     5 | SU1-SU5                                         | STC02SYAN                                                          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
|     24 |     1 | U1                                              | MAX15095A                                                          | EVKIT PART-IC; MAX15095A; PKG. OUTLINE DWG.:21- 100198; PKG. LAND PATTERN: 90-XXXX                                      |
|     25 |       | 1 PCB                                           | MAX15095                                                           | PCB:MAX15095                                                                                                            |

## MAX15095A EV Kit Schematic

<!-- image -->

│

## MAX15095A Evaluation Kit

## MAX15095A EV Kit PCB Layout

<!-- image -->

MAX15095A EV Kit Component Placement Guide-Component Side

MAX15095A EV Kit PCB Layout-Component Side

<!-- image -->

MAX15095A EV Kit PCB Layout- Layer 2

<!-- image -->

│

## MAX15095A Evaluation Kit

## MAX15095A EV Kit PCB Layout (continued)

MAX15095A EV Kit PCB Layout-Layer 3

<!-- image -->

MAX15095A EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX15095A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluates: MAX15095A/MAX15095/MAX15095D