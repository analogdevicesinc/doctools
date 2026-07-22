<!-- lastmod 2022-08-05 -->
## MAX15093/MAX15093A Evaluation Kits

## General Description

The  MAX15093/MAX15093A  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX15093/ MAX15093A hot-swap controllers with an integrated 15A MOSFET. The EV kits are configured to pass 15A in a 2.7V to 18V hot-swap application, thus providing a fully integrated solution. The EV kits use the MAX15093GWL+/ MAX15093AGWL+T in a 2.57mm x 4.03mm, 40-bump, 0.5mm  pitch  wafer-level  package  (WLP)  with  a  proven four-layer  PCB  design.  As  configured,  the  EV  kits  are optimized to operate at 12V.

The  two  EV  kit  versions  (MAX15093AEVKIT#  and MAX15093EVKIT#) are built on the same PCB fabrication and can be used interchangeably to evaluate either the MAX15093  or  MAX15093A  by  replacing  U1  with  the desired device.

## Features

- 2.7V to 18V Operating-Voltage Range
- Up to 15A Configurable Load-Current Capability
- Banana Jacks for Input and Output Voltage
- Programmable Slew-Rate Control
- Selectable/Configurable Circuit-Breaker Threshold
- Configurable Overvoltage/Undervoltage Lockout
- Programmable Timeout Delay
- FAULT and PG Outputs
- Defined Safe Operation Area
- Proven PCB Layout
- Fully Assembled and Tested

Evaluate: MAX15093/MAX15093A

## Quick Start

## Required Equipment

- MAX15093 or MAX15093A EV kit
- 12V, 15A DC power supply
- Voltmeter

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify that a shunt is installed across pins 1-2 on the following jumpers: J1, J3, J4, J5, UV\_IN, and CB.
- 2) Turn on the power supply and set the supply to 12V, then disable the power supply.
- 3) Connect  the  positive  terminal  of  the  power  supply to  the  IN  banana  jack  on  the  EV  kits.  Connect  the negative  terminal  of  the  power  supply  to  the  GND banana jack.
- 4) Enable the power supply.
- 5) Verify  that  the  voltage  between  the  OUT  and  GND banana jacks is 12V.
- 6) Verify that the internal regulator voltage (REG) is 3.3V.
- 7) The EV kits are now ready for additional evaluation.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX15093/MAX15093A Evaluation Kits

## Detailed Description of Hardware

The  MAX15093  EV  kit  provides  a  proven  design  to evaluate the MAX15093. The MAX15093 EV kit can be conveniently connected between the system power and the load using the banana jacks provided for the input and output. PCB pads are provided to monitor and control the device signals. The MAX15093 EV kit operates between 2.7V and 18V up to 15A load current capability.

## Evaluating the MAX15093 or MAX15093A

The  MAX15093  EV  kit  can  be  used  to  evaluate  the MAX15093A with the MAX15093AGWL+T installed, while the  MAX15093A  EV  kit  can  be  used  to  evaluate  the MAX15093  with  the  MAX15093GWL+  installed.  The MAX15093A is pin-to-pin compatible with the MAX15093. Refer  to  the  MAX15093/MAX15093A  IC  data  sheet  for details on the MAX15093A.

## Circuit Breaker (CB)

Jumper  CB  sets  the  current  limit  for  the  internal  circuit breaker (CB) of the device. The CB pin can be connected to a fixed resistor (R5) or a potentiometer (R11) to set the current limit. See Table 1 for shunt positions.

The circuit-breaker threshold can be set according to the following formula:

<!-- formula-not-decoded -->

where I CB  is in A and R CB  (the resistor between CB and ground) is in Ω.

## Setting Timeout Delay for TIMEOUT (CDLY)

Capacitor  C4  is  used  to  set  the  timeout  delay  for TIMEOUT to  go  low  to  prevent  internal  MOSFET  shutdown after power-up. This is set at a rate of 1s/µF. The EV kit is configured for a 47ms timeout delay.

## Delayed TIMEOUT

The  IC's TIMEOUT pin  must  be  pulled  low  before  the timeout  delay  set  by  capacitor  C4  elapses.  The  EV  kit provides a simple timer circuit comprised of U2, R7, and C5 to pull the TIMEOUT pin low before the timeout delay. Once PG asserts as open-drain, R7 begins to charge C5 to the output voltage (OUT). When C5 charges to 2/3 x

## Table 1. CB Jumper Selection

| SHUNT POSITION   | CB PIN CONNECTED TO   | CURRENT LIMIT   |
|------------------|-----------------------|-----------------|
| 1-2*             | R5                    | 16.5A           |
| 2-3              | R11                   | Adjustable      |

* Default position.

## Evaluate: MAX15093/MAX15093A

OUT, U2 pulls the TIMEOUT pin low. The EV kit is configured to have TIMEOUT pulled low after ~22ms.

Jumper TIMEOUT is also provided to bypass the timeout delay and force TIMEOUT low, if installed. See Table 2 for TIMEOUT settings.

## Setting the Output Slew Rate

An  external  capacitor  (C3)  is  connected  from  GATE  to GND  on  the  IC  to  reduce  the  output  slew  rate  during startup. During startup, a 5.7µA (typ) current is sourced to enhance the internal MOSFET with 28V/ms (typ). C3 can be calculated according to the following formula:

<!-- formula-not-decoded -->

where  I GATE   is  5.7µA  (typ),  t ON   is  the  desired  output ramp-up time, and V OUT  is assumed to start from zero.

## Undervoltage Lockout

The EV kit provides an option to configure the undervoltagelockout threshold. The undervoltage-lockout threshold for the device is configured by the IN voltage level divided by R1  and  (R2  +  R3)  at  the  UV  pin.  By  default,  the undervoltage-lockout threshold is set to 10.8V. The EV kit also provides an option to externally provide a UV threshold. Remove  the  jumper  for  UV\_IN,  then  connect  a  power supply with the desired voltage to the UV pin. Remove R2 to make UV independent from OV.

## Overvoltage Lockout

The EV kits provide an option to configure the overvoltage-lockout  threshold.  The  overvoltage-lockout  threshold  for  the  device  is  configured  by  the  IN  voltage  level divided by (R1 + R2) and R3 at the OV pin. By default, the overvoltage-lockout  threshold  is  set  to  14V.  The  EV  kit also  provides  an  option  to  externally  provide  an  OV threshold.  Remove the jumper for UV\_IN, then connect a  power  supply  with  the  desired  voltage  to  the  OV  pin. Remove R2 to make OV independent from UV.

## Current-Sense Output (ISENSE)

The  IC's  ISENSE  pin  is  the  output  of  an  accurate current-sense  amplifier  and  provides  a  source  current proportional  to  the  load  current  flowing  into  the  main switch. The factory-trimmed current ratio is set to 157µA/A. On the EV kit, this allows producing a scaled voltage by routing resistor R6 from ISENSE to GND.

│

## MAX15093/MAX15093A Evaluation Kits

## Table 2. TIMEOUT Jumper Selection

| SHUNT POSITION   | EN PIN                                                          | TIMEOUT DELAY    |
|------------------|-----------------------------------------------------------------|------------------|
| Installed        | Forced to GND                                                   | Bypassed         |
| Not installed*   | Set low when C5 is charged to 2/3 x OUT; timing is set by R7/C5 | 47ms (set by C4) |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE                |
|-------------------------|--------------|------------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com  |
| Murata Americas         | 770-436-1300 | www.murataamericas.com |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com  |

Note:

Indicate that you are using the MAX15093/MAX15093A when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   | DESCRIPTION                  |
|------------------|--------|------------------------------|
| MAX15093 EVKIT#  | EV Kit | Latched-off fault management |
| MAX15093A EVKIT# | EV Kit | Auto-retry fault management  |

# Denotes RoHS compliant.

Evaluate: MAX15093/MAX15093A

│

## MAX15093/MAX15093A Evaluation Kits

## MAX15093/93A EV Component List

| TITLE: Bill of Materials DESIGN: max15093_evkit_a   | TITLE: Bill of Materials DESIGN: max15093_evkit_a            |                                   |                                             |                                                                     |                                                     |                                                                         |                                                                                                                                                                                                                               |
|-----------------------------------------------------|--------------------------------------------------------------|-----------------------------------|---------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ITEM                                                | QTY REF DES                                                  | Var Status                        | MAXINV                                      | MFG PART #                                                          | MANUFACTURER                                        | VALUE                                                                   | DESCRIPTION CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55                                                                                                                                                    |
| 1                                                   | 2 C1, C2                                                     | Pref                              | 20-0001U-Z51                                | C1005X5R1E105K050                                                   | TDK                                                 | 1UF                                                                     | DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT; 0402; CERAMIC; 8200pF; 50V; 10%; X7R; -55degC to                                                                                                                                     |
| 2                                                   | 1 C3                                                         | Pref                              | 20-8200P-14                                 | C0402X7R500822KNP                                                   | VENKEL LTD.                                         | 8200PF                                                                  | + 125degC; 0 +/-15% degC MAX. CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55                                                                                                                              |
| 3                                                   | 1 C4                                                         | Pref                              | 20-0U047-03                                 | C1005X7R1E473K; GRM155R71E473K                                      | TDK/MURATA                                          | 0.047UF                                                                 | DEGC TO +125 DEGC                                                                                                                                                                                                             |
| 4                                                   | 1 C5                                                         | Pref                              | 20-00U22-12                                 | C0603C224K3RAC; GMC10X7R224K25; GRM188R71E224KA88; C1608X7R1E224K08 | KEMET; MURATA; TDK                                  | 0.22UF                                                                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                   |
| 5                                                   | 6 C6-C11                                                     | Pref                              | 20-0010U-A4                                 | GRM31CR71E106KA12L; CL31B106KAHNNN                                  | MURATA; SAMSUNG ELECTRONICS                         | 10UF                                                                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                     |
| 6                                                   | 1 CB                                                         | Pref                              | 01-PEC03SAAN3P-21                           | PEC03SAAN                                                           | SULLINS                                             | PEC03SAAN                                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                     |
| 7                                                   | 6 OV, UV, REG, VCC, CDLY, GATE                               | Pref                              | 02-TPMINI5000-00                            |                                                                     | 5000 KEYSTONE                                       | N/A                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                   |
| 8 9 10                                              | 10 CGATE, FAULT, UV_IN, ISENSE, TIMEOUT 1 D1 1 D2 INX, GDRV, | Pref Pref Pref                    | 01-PEC02SAAN2P-21 30-SMBJ18A-00 30-B330A-00 | PEC02SAAN SMBJ18A B330A                                             | SULLINS LITTLE FUSE DIODES INCORPORATED             | PEC02SAAN 18V B330A                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS DIODE; TVS; SMB (DO-214AA); PIV=18V; IF=20.6A DIODE; SCH; SMT; PIV=30V; IF=3A                                                                                       |
| 11                                                  | 5 OUTX, GNDX1, GNDX2 2 GND, GND1                             | Pref                              | 01-9020BUSS20AWG-00                         | 9020 BUSS                                                           | WEICO WIRE                                          | MAXIMPAD                                                                | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG 7007 CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; |
| 12                                                  |                                                              | Pref                              | 01-70071P-80                                | 7007                                                                | KEYSTONE                                            |                                                                         |                                                                                                                                                                                                                               |
| 13                                                  | 2 IN, OUT                                                    | Pref                              | 01-70061P-80                                |                                                                     | 7006 KEYSTONE                                       |                                                                         | 7006 RED                                                                                                                                                                                                                      |
| 14                                                  | 1 J2                                                         | Pref                              | 01-PEC02DAAN4P-21                           | PEC02DAAN                                                           | SULLINS ELECTRONIC CORP.                            | PEC02DAAN                                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS TRAN; POWER MOSFET; SINGLE N-CHANNEL; NCH; TO-252; PD-(1.38W); I- (54A); V-(30V)                                                                                    |
| 15 16                                               | 1 Q1 1 R1                                                    | Pref Pref                         | 90-NTD4906NT4G-21 80-017K8-23               | NTD4906NT4G CRCW040217K8FK                                          | ON SEMICONDUCTOR VISHAY DALE                        | NTD4906NT4G 17.8K                                                       | RESISTOR; 0402; 17.8K OHM; 1%; 100PPM; 0.063W; THICK FILM RESISTOR; 0402; 523 OHM; 1%; 100PPM; 0.063W; THICK FILM 3-LAYER                                                                                                     |
| 17 18 19                                            | 1 R2 1 R3 1 R4                                               | Pref Pref Pref                    | 80-0523R-23 80-01K78-23                     | ERJ-2RKF5230X ERJ-2RKF1781X CRCW040210R0JN                          | VISHAY DALE/PANASONIC PANASONIC VISHAY DALE         | 1.78K                                                                   | 523 ELECTRODE RESISTOR; 0402; 1.78K OHM; 1%; 100PPM; 0.10W; THICK FILM 10 RESISTOR; 0402; 10 OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                              |
| 20 21                                               | 1 R5                                                         | Pref                              | 80-0010R-49 80-040K2-24                     | CRCW060340K2FK; RC0603FR-0740K2L; ERJ-                              | VISHAY DALE/YAGEO/PANASONIC VISHAY DALE / Panasonic | 40.2K                                                                   | RESISTOR; 0603; 40.2K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                          |
|                                                     | 1 R6                                                         | Pref Pref                         | 80-0499R-23                                 | 3EKF4022V CRCW0402499RFK / ERJ-2RKF4990X ERJ-3GEYJ102V              | PANASONIC PANASONIC                                 | 1K                                                                      | 499 RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                 |
| 22                                                  | 1 R7 1 R8                                                    | Pref                              | 80-0001K-53 80-0100K-53                     | ERJ-3GEYJ104V ERJ-2GEJ104X                                          |                                                     | 100K                                                                    | RESISTOR; 0603; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM RESISTOR; 0402; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                               |
| 23 24                                               | 1 R9 1 R10                                                   | Pref Pref                         | 80-0100K-Q6                                 | CRCW060349R9FK                                                      | PANASONIC VISHAY DALE                               | 100K                                                                    | 49.9 RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                  |
| 25 26                                               | 1 R11                                                        | Pref                              | 80-049R9-24 80-0050K-AA19                   | 3296Y-1-503LF                                                       | BOURNS                                              | 50K                                                                     | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 50K OHM; 10%; 100PPM; 0.5W                                                                                                                                                   |
| 28 29                                               | 6 1 U1                                                       | Pref Pref                         | 02-JMPFS1100B-00 MAX15093                   | SX1100-B MAX15093                                                   | KYCON MAXIM MAXIM                                   |                                                                         | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED EVKIT PART - IC; MAX15093; WLP20; PKG CODE W402B3+1 IC; TIMR; GENERAL PURPOSE TIMER; NSOIC8 150MIL                    |
| 30 31 TOTAL                                         | SU1-SU6 1 U2 1                                               | Pref                              | ICM7555ISA+                                 | ICM7555ISA+                                                         |                                                     | SX1100-B MAX15093 ICM7555ISA+ PCB                                       | PCB: MAX15093                                                                                                                                                                                                                 |
| DO NOT ITEM                                         | PURCHASE(DNP) QTY REF DES                                    | Var Status                        | MAXINV                                      | MFG PART #                                                          | MAXIM                                               | VALUE                                                                   | DESCRIPTION CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55                                                                                                                                                   |
|                                                     | 62                                                           | Pref                              | EPCB15093                                   | MAX15093                                                            |                                                     |                                                                         |                                                                                                                                                                                                                               |
| 1 2                                                 | 1 C12 1 C13                                                  | DNP DNP                           | 20-0010U-P7 20-0180U-57                     | C1608X5R1E106M080AC; CL10A106MA8NRNC 25SEPF180M GRM155R71E104KE14   | MANUFACTURER TDK/SAMSUNG ELECTRONICS PANASONIC      | 10UF 180UF                                                              | DEGC TO +85 DEGC; TC=X5R CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 180UF; 25V; TOL=20% CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R         |
| 3                                                   | 2 C14, C15                                                   | DNP                               | 20-000U1-B68                                | C0402C103K5RAC;GRM155R71H103KA88                                    | MURATA                                              | 0.1UF                                                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55                                                                                                                                                             |
| 4 5                                                 | 2 C17, C18 7                                                 | DNP                               | 20-00U01-B60 20-0470U-39                    | ECA-1EM471                                                          | PANASONIC                                           | 0.01UF                                                                  | DEGC TO +125 DEGC; TC=X7R CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 470UF; 25V; TOL=20%                                                                                                                     |
| TOTAL                                               | 1 C16                                                        | DNP                               |                                             |                                                                     | KEMET/MURATA                                        | 470UF                                                                   |                                                                                                                                                                                                                               |
| PACKOUT ITEM                                        |                                                              |                                   | assembled on PCB and will MFG PART #        | be shipped with PCB) MANUFACTURER                                   | VALUE                                               | DESCRIPTION                                                             |                                                                                                                                                                                                                               |
| 1 2                                                 | (These are purchased QTY REF DES                             | parts but not MAXINV 88-00711-SML | 88-00711-SML 87-02162-00                    | N/A N/A                                                             | ? ?                                                 | 3/16X7X1 1/4 - ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD PACKOUT PINK | COMMENTS 9 -                                                                                                                                                                                                                  |
|                                                     | 1 PACKOUT 1 PACKOUT                                          | 87-02162-00                       |                                             |                                                                     |                                                     | BOX;SMALL BROWN                                                         | PACKOUT                                                                                                                                                                                                                       |
|                                                     |                                                              |                                   |                                             |                                                                     |                                                     | STATIC PE 12inX12inX5MM -                                               | LOGO FOR                                                                                                                                                                                                                      |
| 3                                                   | 1 PACKOUT                                                    | 85-MAXKIT-PNK                     | 85-MAXKIT-PNK                               |                                                                     |                                                     | FOAM;FOAM;ANTI- PACKOUT                                                 |                                                                                                                                                                                                                               |
| 4                                                   |                                                              |                                   |                                             | N/A                                                                 | ?                                                   |                                                                         |                                                                                                                                                                                                                               |
| 5 TOTAL                                             | 1 PACKOUT                                                    | EVINSERT                          | EVINSERT                                    |                                                                     | ?                                                   | WEB INSTRUCTIONS MAXIM DATA SHEET LABEL(EV KIT BOX) -                   |                                                                                                                                                                                                                               |
|                                                     |                                                              |                                   |                                             | N/A                                                                 |                                                     |                                                                         |                                                                                                                                                                                                                               |
|                                                     | 1 PACKOUT 5                                                  | 85-84003-006                      | 85-84003-006                                | N/A                                                                 | ?                                                   | PACKOUT                                                                 |                                                                                                                                                                                                                               |

## MAX15093/93A EV Schematic

<!-- image -->

## MAX15093/93A EV PCB Layout

Figure 1. Component Placement Guide (Component Side)

<!-- image -->

Figure 2. PCB Layout (Component Side)

<!-- image -->

## MAX15093/93A EV PCB Layout (continued)

Figure 3. PCB Layout (Layer 2 (GND))

<!-- image -->

Figure 4. PCB Layout (Layer 3 (PWR))

<!-- image -->

Evaluate: MAX15093/MAX15093A

## MAX15093/93A EV PCB Layout (continued)

Figure 5. PCB Layout (Solder Side)

<!-- image -->

Evaluate: MAX15093/MAX15093A

## MAX15093/MAX15093A Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/17            | Initial release                                                                                 | -               |
|                 1 | 7/19            | Describe interchangeability of the two EV kit versions to evaluate either MAX15093 or MAX15093A | 1, 2, 3         |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied. 0a[iP ,ntegrated reserYes the right to change the circuitr\ and sSeci¿cations Zithout notice at an\ tiPe.

<!-- image -->

│

Evaluate: MAX15093/MAX15093A