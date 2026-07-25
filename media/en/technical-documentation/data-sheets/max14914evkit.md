<!-- lastmod 2022-08-02 -->
## MAX14914 Evaluation Kit

## General Description

The MAX14914 evaluation kit  (EV  kit)  provides  a  proven design to  evaluate  the  MAX14914/MAX14914A/ MAX14914B,  configurable  industrial  digital  output  drivers/ digital inputs. The EV kit allows controlling of the MAX14914 as either a digital output (in either High-Side or Push-Pull mode) or digital input with simple jumper settings.

The EV kit must be powered from an external +24V power supply and can consume up to 1.3A (minimum) when fully loaded.

The  MAX14914EVKIT  comes  with  a  MAX14914ATE+ installed in a 16-pin, 4x4mm TQFN-EP package.

MAX14914B  overcurrent  interrupt  output  is  not  directly supported.  For  the  MAX14914B  application  refer  to  the MAX14914 IC data sheet.

## MAX14914 EV Kit Board Photo

<!-- image -->

<!-- image -->

## Features

- Robust Operation with Wide Range of Input Voltages and Load Conditions
- -40°C to +125°C Temperature Range
- On-Board LED Indication of Status and Fault Conditions
- Reverse Supply Voltage Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14914/

## MAX14914A/MAX14914B

## MAX14914 Evaluation Kit

## MAX14914 EV Kit Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

- MAX14914 EV kit
- +24V power supply
- Voltmeter
- Function generator (optional)
- Oscilloscope (optional)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions for the digital output (DO), high-side operation (Table 1 ).
- 2) Power up the EV kit with +24V from an external power supply. Apply +24V to the TP16 banana jack and 0V to the TP15 banana jack.
- 3) Use TP11 (DOI) and TP12 (PGND) to check that the DOI level is high-Z by voltmeter or oscilloscope.
- 4) Move the J4 shunt to 1-2 position (IN = high). Observe that the DOI level becomes high and DS2 LED lights up.
- 5) Move the J4 shunt back to the 2-3 position (IN = low).
- 6) Move the J5 shunt to 1-2 position (PP = high, enable Push-Pull mode).
- 7) Repeat steps 4 and 5 to verify that the DOI output and check that the DS2 LED follows the IN settings.
- 8) Move J3 shunt to 1-2 position (DI\_EN = high, enable DI mode). Note that the shunts position of J4 is ignored.
- 9) Apply  static  24V  between  TP11  (DOI)  and  TP12 (PGND).
- 10) Observe that the DS2 LED follows the level of the DOI input.

## Evaluates: MAX14914 MAX14914A/MAX14914B

## MAX14914 Evaluation Kit

Table 1. MAX14914 Board Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                  |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connected V L to V 5 and set input logic level to 5V                                                                        |
| J1       | Open             | Connect an external supply between TP5 (V L ) and TP4 (GND) to provide the user-defined input logic level from 2.5V to 5.5V |
| J2       | 1-2*             | Input to the internal 5V regulator (REGIN) is from V DD source                                                              |
| J2       | 2-3              | Bypass the external voltage regulator and apply an external 5V supply to TP3 to power up the device.                        |
| J2       | Open             | Provide an external 6~40V supply to J2.2                                                                                    |
| J3       | 2-3*             | Set DI_EN low to enable digital output (DO) operation                                                                       |
| J3       | 1-2              | Set DI_EN high to enable digital input (DI) operation                                                                       |
| J3       | Open             | DO operation is enabled by internal weak pulldown resistor                                                                  |
| J4       | 2-3*             | Set IN low and DOI three-state/low                                                                                          |
| J4       | 1-2              | Set IN high and DOI high                                                                                                    |
| J4       | Open             | Provide square wave from function generator to TP10                                                                         |
| J5       | 2-3*             | Set PP low and DO High-Side mode or DI Type 1, 3 mode in conjunction with J3 setting                                        |
| J5       | 1-2              | Set PP high and DO Push-Pull mode or DI Type 2 mode in conjunction with J3 setting                                          |
| J5       | Open             | Set PP low and DO High-Side mode or DI Type 1, 3 Mode by internal pulldown resistor in conjunction with J3 setting          |
| JMP1     | 1-3*             | Select C LIM = 51k and set current limit to ~900mA                                                                          |
| JMP1     | 1-2              | Select C LIM = 27k and set current limit to ~1.6A                                                                           |
| JMP1     | 1-4              | Select C LIM = 220k and set current limit to ~200mA                                                                         |
| JMP1     | Open             | Current limit internally set to ~1.1A                                                                                       |

## Detailed Description of Hardware

The MAX14914 EV kit allows the user to evaluate all the features and operational modes of the MAX14914 digital High-Side/Push-Pull driver. It also can be configured as a digital input level translator.

## External Power Supply/Supplies

The EV kit is  powered  from  a  single  power  supply  and accepts  a  wide  range  of  input  voltages,  from  10V  to 40V.  The  power  is  applied  through  two  banana  jacks, TP16  (+)  and  TP15  (-).  The  MAX14914  can  drive  up to  1.5A  of  current  to  the  external  load.  The  load  is connected to the EV kit through the J7 terminal block.

Evaluates: MAX14914

MAX14914A/MAX14914B

The 24V field supply is reverse-voltage protected and toler -ant up to 60V supply spikes. Reverse-voltage protection is achieved in the Q1 transistor. Refer to the MAX14914 EV kit  schematic. The MAX14914 is immune to ±2.0kV 1.2/50µs  surge  pulses  applied  between  the  DOI  and PGND load lines.

A  power  to  the  5V  internal  regulator  can  be  provided directly from either the V DD pin or from an external supply; selectable at the J2 header. Refer to Table 1 for details.

If a logic interface of less than 5V is used from a micro -controller (3.3V, for example), a secondary power supply is  needed to power up the V L pin  through  the TP5  test point with the correct voltage. In this case, the J1 header should be left open.

## Digital Output Operation

The user can manually control the IN input either by shunt position on the J4 header (refer to Table 1) or by apply -ing  square  wave  to  the  TP10  from  an  external  function generator or microcontroller. The J5 shunt sets either the High-Side or Push-Pull mode of operation. The High-Side mode is mostly used with the high current-resistive and inductive  loads,  while  Push-Pull  is  often  used  for  highspeed  resistive  and  capacitive  loads.  The  MAX14914 supports up to a 100kHz switching frequency. When using high-frequency push-pull mode switching, be aware that the  10nF  (C8)  capacitor  charging/discharging  current generates very high power dissipation in the MAX14914.

## Digital Input Operation

When the  DI\_EN  is  high  (J3  shunt  in  position  1-2)  the MAX14914 works as digital input. In this mode, the input signal  applied  between  the  DOI  pin  (J7.2  or TP11)  and PGND (J7.1 or TP12) is level-shifted and inverted to the output on TP8 ( DOI\_LVL ).  Note  that  the DOI\_LVL is  an open-drain output and needs a pullup to the V L  voltage level. DOI\_LVL is logically inverted to the DOI input. So, the LED DS2 reflects the real logic state of the DOI input.

In  digital  input  mode, the MAX14914 supports both IEC Type 1/3 as well as Type 3 inputs. Set J5/PP logic input high for Type 2 input characteristics.

## Fault Indication

The fault  LED  (DS1)  turns  on  when  the  driver  exceeds 170°C or a loss of ground is detected. The DOI output is three-stated and the device will not operate until the fault condition disappears.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14914EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14914 Evaluation Kit

## MAX14914 EV Kit Bill of Materials

| ITEM     | REF_DES                        | DNI/DNP   | QTY   | MFG PART #                                                       | MANUFACTURER                  | VALUE                    | DESCRIPTION                                                                                                                     | COMMENTS   |
|----------|--------------------------------|-----------|-------|------------------------------------------------------------------|-------------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1                             | -         | 1     | GRM32ER71J106KA12                                                | MURATA                        | 10UF                     | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 63V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |            |
| 2        | C2, C3                         | -         | 2     | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA | KEMET/MURATA/TDK/ TAIYO YUDEN | 1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP;1UF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                               |            |
| 3        | C5, C7                         | -         | 2     | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AE          | MURATA; TDK                   | 0.1UF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                                |            |
| 4        | C8                             | -         | 1     | GRM2195C1H103JA01                                                | MURATA                        | 0.01UF                   | CAPACITOR; SMT; 0805; CERAMIC; 0.01uF; 50V; 5%; COG; -55 ° C to + 125°C; 0?30ppm/?C from -55°C to +125°C                        |            |
| 5        | D1                             | -         | 1     | MM3Z12VT1G                                                       | ON SEMICONDUCTOR              | 12V                      | DIODE; ZNR; SMT (SOD-323); PIV = 12V; IZ = 0.005A                                                                               |            |
| 6        | D2                             | -         | 1     | SMBJ40A                                                          | BOURNS                        | 40V                      | DIODE; TVS; SMB (DO-214AA); VRM = 40V; IPP = 9.3A                                                                               |            |
| 7        | DS1                            | -         | 1     | LTST-C191KRKT                                                    | LITE-ON ELECTRONICS INC.      | LTST-C191KRKT            | DIODE; LED; SMD LED; RED; SMT (0603); VF = 2V; IF = 0.02A                                                                       |            |
| 8        | DS2                            | -         | 1     | LGL29K-G2J1-24-Z                                                 | OSRAM                         | LGL29K-G2J1-24-Z         | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                            |            |
| 9        | J1                             | -         | 1     | PCC02SAAN                                                        | SULLINS                       | PCC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65°C TO +125°C                                              |            |
| 10       | J2-J5                          | -         | 4     | PCC03SAAN                                                        | SULLINS                       | PCC03SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                              |            |
| 11       | J7                             | -         | 1     | ED555/2DS                                                        | ON-SHORE TECHNOLOGY INC       | ED555/2DS                | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                             |            |
| 12       | JMP1                           | -         | 1     | PEC04SAAN                                                        | SULLINS ELECTRONICS CORP.     | PEC04SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                       |            |
| 13       | Q1                             | -         | 1     | DMP6023LE                                                        | DIODES INCORPORATED           | DMP6023LE                | TRAN; 60V P-CHANNEL ENHANCEMENT MODE MOSFET; PCH; SOT223-4; PD-(2W); I-(-7A); V-(-60V)                                          |            |
| 14       | R1                             | -         | 1     | CRCW040227K0FK                                                   | VISHAY DALE                   | 27K                      | RESISTOR, 0402, 27K Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                          |            |
| 15       | R2                             | -         | 1     | ERJ-2RKF5102                                                     | PANASONIC                     | 51K                      | RESISTOR; 0402; 51K Ω; 1%; 100PPM; 0.1W; THICK FILM                                                                             |            |
| 16       | R3                             | -         | 1     | MCR03EZPFX2002; ERJ-3EKF2002                                     | ROHM; PANASONIC               | 20K                      | RESISTOR; 0603; 20K Ω; 1%; 100PPM; 0.10W; THICK FILM                                                                            |            |
| 17       | R4                             | -         | 1     | CRCW0402220KFK; 9C04021A2203FLHF3                                | VISHAY DALE; YAGEO PHYCOMP    | 220K                     | RESISTOR; 0402; 220K Ω; 1%; 100PPM; 0.063W; THICK FILM                                                                          |            |
| 18       | R5                             | -         | 1     | RC1005F2802                                                      | SAMSUNG ELECTRONICS           | 28K                      | RESISTOR; 0402; 28K Ω; 1%; 100PPM; 0.063W; THICK FILM                                                                           |            |
| 19       | R6, R7                         | -         | 2     | CRCW06033K30FK                                                   | VISHAY DALE                   | 3.3K                     | RESISTOR, 0603, 3.3K Ω, 1%, 100PPM, 0.10W, THICK FILM                                                                           |            |
| 20       | R8-R10                         | -         | 3     | CRCW04021K00FK; RC0402FR-071KL                                   | VISHAY DALE; YAGEO PHICOMP    | 1K                       | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                             |            |
| 21       | SU1-SU5                        | -         | 5     | STC02SYAN                                                        | SULLINS ELECTRONICS CORP.     | STC02SYAN                | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL   |            |
| 22       | TP1, TP9                       | -         | 2     | 5010                                                             | KEYSTONE                      | N/A                      | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                              |            |
| 23       | TP2, TP4, TP12                 | -         | 3     | 5011                                                             | KEYSTONE                      | N/A                      | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
| 24       | TP3, TP5-TP8, TP10, TP13, TP14 | -         | 8     | 5003                                                             | KEYSTONE                      | N/A                      | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE =0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
| 25       | TP11                           | -         | 1     | 5013                                                             | KEYSTONE                      | N/A                      | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
| 26       | TP15, TP16                     | -         | 2     | 6095                                                             | KEYSTONE                      | 6095                     | CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN                                  |            |
| 27       | U1                             | -         | 1     | MAX14914ATE+                                                     | MAXIM                         | MAX14914ATE+             | EVKIT PART - IC; SWITCH; HIGH-SIDE SWITCH WITH SETTABLE CURRENT LIMIT AND PUSH-PULL DRIVER OPTION; NO. OF LEADS-(16); TQFN16-EP |            |
| 28       | J6, J8-J10                     | DNI       | 4     | EVKIT_STANDOFF_4-40_3/8                                          | ?                             | EVKIT_STANDOFF_ 4-40_3/8 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON                  |            |
| 29       | C4                             | DNP       | 0     | GRM32ER71J106KA12                                                | MURATA                        | 10UF                     | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 63V; TOL = 10%; TG = -55 ° C TO +125°C; TC = X7R                                     | DNI        |
| 30       | C6                             | DNP       | 0     | C2012X7S2A105K125; GRJ21BC72A105KE11                             | TDK/MURATA                    | 1UF                      | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL = 10%; TG=-55°C TO +125°C; TC = X7S                                         | DNI        |
| 31       | D3                             | DNP       | 0     | SMBJ40CA                                                         | BOURNS                        | 40V                      | DIODE; TVS; SMB (DO-214AA); VRM=40V; IPP = 9.3A                                                                                 | DNI        |
| 32       | R11                            | DNP       | 0     | CRCW0805150KFK                                                   | VISHAY DALE                   | 150K                     | RESISTOR; 0805; 150K; 1%; 100PPM; 0.125W; THICK FILM                                                                            | DNI        |
| 33 TOTAL | PCB                            | -         | 1 55  | MAX14914                                                         | MAXIM                         | PCB                      | PCB Board:MAX14914 EVALUATION KIT                                                                                               |            |

## MAX14914 Evaluation Kit

## MAX14914 EV Kit Schematics

<!-- image -->

## MAX14914 Evaluation Kit

## MAX14914 EV Kit PCB Layouts

MAX14914 EV Kit-Top Silkscreen

<!-- image -->

MAX14914 EV Kit-Top

<!-- image -->

Evaluates: MAX14914

## MAX14914  EV Kit PCB Layouts (continued)

MAX14914 EV Kit-Level 2 GND

<!-- image -->

MAX14914 EV Kit-Level 3 Power

<!-- image -->

Evaluates: MAX14914

## MAX14914 Evaluation Kit

## MAX14914  EV Kit PCB Layouts (continued)

MAX14914 EV Kit-Bottom

<!-- image -->

MAX14914 EV Kit-Bottom Silkscreen

<!-- image -->

Evaluates: MAX14914

## MAX14914 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------|-----------------|
|                 0 | 2/17            | Initial release                                   | -               |
|                 1 | 8/20            | Updated the title and General Description section | 1-10            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14914

MAX14914A/MAX14914B