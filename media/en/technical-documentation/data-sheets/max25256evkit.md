<!-- lastmod 2022-08-02 -->
## MAX25256 Evaluation Kit

## General Description

The MAX25256 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  contains  the  MAX25256  10W  isolated  H-bridge  DC-DC  converter.  The  EV  kit  operates from an 8V to 36V DC power source and the on-board 1:1 turns-ratio transformer from HALO sets the output voltage range from 6.8V to 34.8V with a 215mA current limit.

The  EV  kit  provides  greater  than  90%  overall  efficiency  at  +24V  between  2.2W  and  up  to  8.3W  output Input-ripple  current  and  radiated  noise  are  minimized by  the  inherent  balanced  nature  of  the  design  with no interruption in the input current. Undervoltage lockout  (UVLO),  adjustable  current  limit,  and  thermal shutdown provide for a robust 10W isolated supply. The surface-mount  transformer  provides  galvanic  isolation with the output powered from a full-wave rectifier circuit, reducing the output-voltage ripple.

The  EV  kit  circuit  is  configured  as  a  full-wave  rectifier, with an output voltage that follows the input voltage but is  configurable  for  other  topologies  including  a  voltage doubler,  bipolar  outputs,  half-wave  rectification,  and    a push-pull rectifier.

The device is available in a 10-pin (3mm x 3mm) TDFN package with an exposed pad.

## Features

- 8V to 36V Input Supply Range
- Up to 90% Efficiency
- Full-Wave Rectified Output
- Configurable for a Voltage Doubler, Bipolar Half-Wave Rectifier, and Push-Pull Rectifier Outputs
- Internal or External Clock Operation Option
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX25256

## Quick Start

## Required Equipment

- MAX25256 EV kit
- +24V, 1A DC power supply
- Electronic load capable of 150mA
- Ammeter
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power until all connections are completed.

- 1) Verify that jumpers JU2, and JU3 are in their default positions, as shown in Table 1 and Table 2.
- 2) Set the DC power supply to 24V.
- 3) Set  the  electronic  load  to  150mA  and  disable the output.
- 4) Connect  the  voltmeter  between  the  +VOUT  and SGND PCB pads on the EV kit.
- 5) Connect  the  ammeter  between  the  +VOUT  PCB pad on the EV kit and the positive terminal on the electronic load.  The negative terminal on the electronic load is connected to the SGND PCB pad on the EV kit.
- 6) Connect  the  power  supply  between  the  VDD  and GND PCB pads on the EV kit.
- 7) Turn on the power supply.
- 8) Enable the electronic load.
- 9) Verify that the ammeter reads approximately 150mA.
- 10)  Verify that the voltmeter reads approximately 22.8V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description

The  MAX25256  EV  kit  is  a  10W,  isolated  H-bridge DC-DC  converter  that  provides  an  unregulated  output that is two diode-voltage drops less than its input supply, with  respect  to  the  isolated  ground.  In  the  default configuration, the maximum load is limited by the device and the on-board transformer.

The  device is an integrated primary-side controller and  H-bridge  driver  for  isolated  power-supply  circuits. The  device  contains  an  on-board  oscillator,  protec  tion circuitry,  and  internal  MOSFETs to provide up to 215mA of  current  to  the  transformer's  primary  winding.  The device can be operated using the internal 425kHz oscillator,  or  driven  by  an  external  clock  to  synchronize multiple  devices  and  control  EMI  behavior.  Regardless of  the  clock  source  being  used,  an  internal  flip-flop stage guarantees a fixed 50% duty cycle, preventing DC current  flow  in  the  transformer  as  long  as  the  clock's period is constant.

The  device  operates  from  a  single-supply  voltage  and includes  UVLO  and  an  active-low  enable  input  for controlled startup. If the input voltage at VDD falls below 6.3V, or the EN input is pulled above 2V, the device shuts down and ST1 and ST2 are high impedance.

The  device  features  an  adjustable  output  current  limit at  the  transformer  driver  outputs  (ST1  and  ST2).  When the  current  reaches  the  limit  for  longer  than  the  1.2ms blanking  time,  the  drive  outputs  are  disabled  and  the FAULT output asserts. The drivers are reenabled after  the  38.2ms  autoretry  time.  If  a  continuous  fault condition is present, the duty cycle of the fault current is approximately 3%.

The bottom PCB GND plane under device U1 is utilized as a thermal heatsink for power dissipation of the device's thermally  enhanced  TDFN  package  with  exposed  pad. Test points GND and SGND are provided on the PCB for probing the respective ground planes, or to connect the GND and SGND planes for nonisolated evaluation of the circuit.

## Clock Source

The device has two modes  of operation: internal oscillator  or  external  clock.  To  use  the  internal  425kHz oscillator,  place  a  shunt  in  the  1-2  position  on  jumper JU2.  When  using  an  external  clock,  remove  the  shunt from  JU2  and  apply  a  clock  signal  on  the  CLK  PCB pad  on  the  EV  kit.  An  internal  flip-flop  divides  the external clock by two, generating a switching signal with a guaranteed  50%  duty  cycle.  As  a  result,  the  device outputs switch at 1/2 the external clock frequency.

## Overcurrent Limiting

Resistor R2 sets the current-limit threshold to 650mA. To change  the  current-limit  threshold,  replace  resistor  R2 with  a  0603  surface-mount  resistor  using  the  following equation:

<!-- formula-not-decoded -->

where I LIM is the desired current threshold in the range of 215mA &lt; I LIM &lt; 650mA.

An  overcurrent  or  overtemperature  condition  triggers  a fault on the device and the red LED (D5) turns on.

## Evaluating Other Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to reconfigure transformer T1 secondary windings for other configurations,  including  a  half-wave  rectifier,  voltage doubler,  bipolar  outputs,  and  other  full-wave-rectifier configurations. Use Table 3 to reconfigure the device for the appropriate output configuration.

## Output Snubbers

For  VDD  greater  than  27V,  use  a  simple  RC  snubber circuit  on ST1 and ST2 to ensure that the peak voltage is  less  than  40V  during  switching.  Maxim  recommends installing 91Ω 0603 surface-mount resistors at R5 and R6, and 330pF 0603 surface-mount capacitors at C2 and C3 when operating under these conditions.

## MAX25256 Evaluation Kit

## Table 1. EN (JU3)

| SHUNT POSITION   | EN PIN          | DEVICE OPERATION    |
|------------------|-----------------|---------------------|
| 1-2              | Connects to 5V  | Disables the device |
| 2-3*             | Connects to GND | Enables the device  |

## Table 2. Clock Mode (JU2)

| SHUNT POSITION   | CLK PIN          | OSCILLATOR/CLOCK OPERATION                                            |
|------------------|------------------|-----------------------------------------------------------------------|
| Installed*       | Connected to GND | Internal oscillator                                                   |
| Not installed    | Not connected    | External clock; apply a clock signal to the CLK PCB pad on the EV kit |

## Table 3. Output Configurations

| CONFIGURATION        | C7            | C9            | D1            | D2        | D3            | D4            | R5            | R6            | R7            | R9   |
|----------------------|---------------|---------------|---------------|-----------|---------------|---------------|---------------|---------------|---------------|------|
| Full-wave rectifier* | Not installed | Not installed | Installed     | Installed | Installed     | Installed     | 0Ω            | Not installed | Not installed | 0Ω   |
| Half-wave rectifier  | Not installed | Not installed | Not installed | Installed | Not installed | Not installed | 0Ω            | Not installed | 0Ω            | 0Ω   |
| Voltage doubler      | Installed     | Not installed | Installed     | Installed | Not installed | Not installed | Not installed | Not installed | 0Ω            | 0Ω   |
| Bipolar outputs      | Not installed | 1µF           | Installed     | Installed | Installed     | Installed     | 0Ω            | Installed     | Not installed | 10kΩ |
| Push-pull rectifier  | Not installed | Not installed | Not installed | Installed | Not installed | Installed     | 0Ω            | 0Ω            | Not installed | 0Ω   |

## Component Suppliers

| SUPPLIER                               | WEBSITE                      |
|----------------------------------------|------------------------------|
| Fairchild Semiconductor                | www.fairchildsemi.com        |
| HALO Electronics, Inc.                 | www.haloelectronics.com      |
| Murata Electronics North America, Inc. | www.murata-northamerica.com  |
| Panasonic                              | www.industrial.panasonic.com |
| TDK Corporation                        | www.tdk.com                  |
| Vishay Intertechnology                 | www.vishay.com               |

Note:

Indicate that you are using the MAX25256 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25256EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX25256

│

## MAX25256 EV Kit Bill of Materials

|   ITEM | REF_DES                          |     |   QTY | MFG PART #                                                           | MANUFACTURER                               | VALUE            | DESCRIPTION                                                                                                                                                                                    |
|--------|----------------------------------|-----|-------|----------------------------------------------------------------------|--------------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | +5V, CLK, FAULT, GND2, ITH, SGND |     |     6 | 5012                                                                 | KEYSTONE                                   | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                        |
|      2 | +VOUT, -VOUT, GND1, SGND1, VDD   |     |     5 | 575-4                                                                | KEYSTONE                                   | 575-4            | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                                                                                          |
|      3 | C1                               |     |     1 | GCM21BR71H104KA37                                                    | MURATA                                     | 0.1UF            | CAP; SMT (0805); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                 |
|      4 | C2                               |     |     1 | CGA4J3X7R1H105M125AB                                                 | TDK                                        | 1UF              | CAP; SMT (0805); 1UF; 20%; 50V; X7R; CERAMIC                                                                                                                                                   |
|      5 | C3                               |     |     1 | EEE-FK1H470P                                                         | PANASONIC                                  | 47UF             | CAP; SMT (CASE_E); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                                                                                       |
|      6 | C4                               |     |     1 | 08053C225KAT2A;TMK212B7225KG; GRM21BR71E225KA73;GRT21BR71E2 25KE13   | AVX;TAIYO YUDEN;MURATA;MURATA              | 2.2UF            | CAP; SMT (0805); 2.2UF; 10%; 25V; X7R; CERAMIC                                                                                                                                                 |
|      7 | C8                               |     |     1 | GRM21BR71H105KA12;CL21B105KBF NNN;C2012X7R1H105K085AC;UMK21 2B7105KG | MURATA;SAMSUNG ELECTRONICS;TDK;TAIYO YUDEN | 1UF              | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                   |
|      8 | D1-D4                            |     |     4 | BYS10-45HE3_A                                                        | VISHAY                                     | BYS10-45HE3_A    | DIODE; SCH; SMA (DO-214AC); PIV=45V; IF=1.5A                                                                                                                                                   |
|      9 | D5                               |     |     1 | SML-LXT0805GW                                                        | LUMEX OPTOCOMPONENTS INC.                  | SML-LXT0805GW-TR | DIODE; LIGHT EMITTING GREEN; SMT (0805); IF(PEAK)=0.15A; I(STEADY)=0.025A; PD=0.105W; VF=2.0V                                                                                                  |
|     10 | JU1, JU2, JU4                    |     |     3 | PEC02SAAN                                                            | SULLINS                                    | PEC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                      |
|     11 | JU3                              |     |     1 | PEC03SAAN                                                            | SULLINS                                    | PEC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                      |
|     12 | MH1-MH4                          |     |     4 | 9032                                                                 | KEYSTONE                                   | 9032             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER;NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                       |
|     13 | R1                               |     |     1 | RNCP0603FTD2K00                                                      | STACKPOLE ELECTRONICS INC.                 | 2K               | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                               |
|     14 | R2                               |     |     1 | CRCW08053K01FK                                                       | VISHAY DALE                                | 3.01K            | RES; SMT (0805); 3.01K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                            |
|     15 | R5, R9                           |     |     2 | CRCW08050000ZS;RC2012J000                                            | VISHAY;SAMSUNG ELECTRONICS                 | 0                | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                                    |
|     16 | R8                               |     |     1 | ERJ-6GEYJ103;RMCF0805JG10K0                                          | PANASONIC;STACKPOLE ELECTRONICS            | 10K              | RES; SMT (0805); 10K; 5%; +/-200PPM/DEGC; 0.1250W                                                                                                                                              |
|     17 | SU1-SU4                          |     |     4 | SNT-100-BK-G                                                         | SAMTEC                                     | SNT-100-BK-G     | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                                      |
|     18 | T1                               |     |     1 | TGMR-511V6LF                                                         | HALO ELECTRONICS, INC                      | TGMR-511V6LF     | TRANSFORMER; SMT; 1:1CT; POWER TRANSFORMER                                                                                                                                                     |
|     19 | U1                               |     |     1 | MAX25256ATBA/V+                                                      | MAXIM                                      | MAX25256ATBA/V+  | EVKIT PART - IC; DRV; AUTOMOTIVE; 36V H- BRIDGE TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; PACKAGE CODE: T1033Y+1C; PACKAGE OUTLINE DRAWING; 21-0137; PACKAGE LAND PATTERN: 90- 0003; TDFN10-EP |
|     20 | PCB                              |     |     1 | MAX25256                                                             | MAXIM                                      | PCB              | PCB:MAX25256                                                                                                                                                                                   |
|     21 | R3, R4, R6, R7                   | DNP |     0 | N/A                                                                  | N/A                                        | OPEN             | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                                               |
|     22 | C5-C7, C9                        | DNP |     0 | N/A                                                                  | N/A                                        | OPEN             | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                        |

TOTAL

41

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE.

Evaluates: MAX25256

## MAX25256 EV Kit Schematic

<!-- image -->

│

## MAX25256 EV Kit PCB Layout Diagrams

MAX25256 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX25256 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX25256 EV Kit PCB Layout-Top View

<!-- image -->

MAX25256 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX25256 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX25256 EV Kit PCB Layout-Mask Top

<!-- image -->

MAX25256 EV Kit PCB Layout-Mask Bottom

MAX25256 EV Kit PCB Layout-Paste Top

<!-- image -->

MAX25256 EV Kit PCB Layout-Bottom View

<!-- image -->

│

## MAX25256 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/20           | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -               |
|                 1 | 4/21            | General Description - removed paragraph reference to HALO's transformer; Fea- tures and Detailed Description - removed reference to 1500V RMS Isolation; removed section On-Board LDO for Disabling the MAX25256; Table 3 renumbered the column headers (C7 to C9; C8 to C7, R8 to R6, R10 to R5); Component Suppliers table - added suppliers; MAX25256 EV Kit Bill of Materials - corrected line 2, added line 3; MAX25256 EV Kit PCB Layout Diagrams - replaced all layouts | 1-4, 6, 7       |
|                 2 | 5/21            | MAX25256 EV Kit Bill of Materials updated                                                                                                                                                                                                                                                                                                                                                                                                                                      | 4               |
|                 3 | 5/21            | Replaced Bill of Materials                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 4               |
|                 4 | 6/21            | Updated General Description , Quick Start , and Detailed Description                                                                                                                                                                                                                                                                                                                                                                                                           | 1, 2            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im ,ntegrated reserYes the right to change the circuitr\ and specifications Zithout notice at an\ time

│

Evaluates: MAX25256