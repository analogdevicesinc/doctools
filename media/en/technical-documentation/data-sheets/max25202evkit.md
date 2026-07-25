<!-- lastmod 2022-08-02 -->
## MAX25202 Evaluation Kit

## General Description

The MAX25202 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  that  simplifies  the  evalu -ation  of  the  MAX25202  400kHz,  36V  boost  controller. All  installed  components  are  rated  for  the  automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the installed MAX25202 (24V,  400kHz)  and  can  also  be  used  to  evaluate  other MAX25202  variants  with  minimal  component  changes shown in the MAX25202 EV Kit Bill of Materials.

## Benefits and Features

- 4.5V to 36V Input Supply Range
- Input Voltage Range Extended Down to 2V after Initial Startup
- Boost Output Voltages Adjustable between 4.5V and 60V via External Resistors
- Boost Fixed Output Voltage Available with Minor Component Changes
- ±2% Output Voltage Accuracy
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX25202

## Quick Start

## Required Equipment

- MAX25202 EV kit
- 30V, 25A DC power supply (PS1)
- One voltmeter (VM1)
- One electronic load, 200W capable (EL1)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Preset the output voltage of PS1 to 14V. Disable PS1 output.
- 3) Turn off the EL1 and preset the load to 8A.
- 4) Connect the positive terminal of EL1 to the OUT screw terminal; connect the negative terminal of EL1 to GND2 screw terminal.
- 5) Connect the positive terminal of PS1 to the SUP screw terminal; connect the negative terminal of PS1 to GND1 screw terminal.
- 6) Connect the positive terminal of VM1 to the OUT test point loop; connect the negative terminal of VM1 to the GND2 test point loop.
- 7) Enable the power supply output.
- 8) Enable the electronic load EL1.
- 9) Verify that the voltmeter on OUT measures approximately 24V.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                                                                   |
|----------|------------------|--------------------------------------------------------------------------------------------|
| J1       | 1-2              | Boost controller enabled                                                                   |
| J2       | 1-2              | FSYNC is pulled to VBIAS enabling forced-pulse-width modulation (FPWM) mode                |
| J3       | Installed        | PGOOD is pulled up to VBIAS when OUT is in regulation                                      |
| J4       | 1-2              | OUT is shorted around the 20Ω resistor in the feedback network used for frequency analysis |

## Detailed Description

The  MAX25202  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX25202 family  of  current-mode-controlled  boost  controller  ICs. The  controller  accepts  supply  voltages  as  high  as  36V and supply transients up to 42V.

## Switching Frequency and External Synchronization

The IC can operate in two modes: forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during light-load conditions. When FSYNC is pulled low, the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the  device  is  forced  to  operate  in  PWM  across  all  load conditions.

The FSYNC pin can be used to synchronize the switching  frequency  of  the  IC  to  an  external  clock  source  by applying an external clock signal ranging from 220kHz to 2.2MHz. The device is forced to operate in PWM mode when FSYNC is connected to a clock source.

## Boost Output Monitoring (PGOOD)

The  EV  kit  provides  an  output  test  point  (PGOOD)  to monitor  the  status  of  the  boost  output  voltage  at  OUT. The PGOOD pin goes to a state of high impedance and pulls high through a pullup resistor when the boost output voltage rises above 94.5% (typ) of its regulation voltage.

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX25202EVKIT# | 24V/400kHz EV Kit |

# Denotes RoHS compliant.

PGOOD pulls low when the output voltage drops below 92.5% (typ) of its nominal regulated voltage.

To obtain logic signals, pull up PGOOD to BIAS by installing the shunt on jumper J3.

The EV kit also provides an LED to monitor PGOOD visually. The LED illuminates when PGOOD is low, implying the converter has fallen out of regulation.

## Setting the Output Voltage in the Boost Converter

The EV kit comes assembled to provide 24V regulation on OUT. To adjust the output voltage, remove and replace appropriate resistors in positions R9 and R10 according to the following equation:

<!-- formula-not-decoded -->

## Evaluating Other Variants

The MAX25202EVKIT# comes installed with the synchronous boost variant (MAX25202ATEA/VY+).

Maxim  Integrated  offers  additional  variations  of  the MAX25202 including  spread-spectrum  options.  See  the MAX25202 IC datasheet for part variant details and contact the factory to request any additional variants.

│

## MAX25202 EV Kit Bill of Materials

| ITEM     | QTY   | REF DES                                    | MFG PART #                                | MANUFACTURER               | VALUE             | DESCRIPTION                                                                                                                                  | COMMENTS   |
|----------|-------|--------------------------------------------|-------------------------------------------|----------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | 9     | BIAS, FSYNCIN, GND1- GND4, OUT, PGOOD, SUP | 9020 BUSS                                 | WEICO WIRE                 | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                     |            |
| 2        | 2     | C1, C22                                    | EEE-FP1H101AP                             | PANASONIC                  | 100UF             | CAP; SMT (CASE_F); 100UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                                    |            |
| 3        | 6     | C3, C4, C11, C40, C46, C47                 | CGA5L3X7R1H475K160AB                      | TDK                        | 4.7UF             | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF ; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                            |            |
|          |       | C5, C19, C26, C27                          |                                           |                            | 0.015uF           |                                                                                                                                              |            |
| 4        | 2     | C6, C33                                    | CGA4J3X7R1H225K125AB                      | TDK                        | 2.2UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                             |            |
| 5        | 1     | C7                                         | CGA3E2C0G1H100D080AA                      | TDK                        | 10PF              | CAP; SMT (0603); 10PF; +/-0.50PF; 50V; C0G; CERAMIC CHIP; AUTO                                                                               |            |
| 6        | 1     | C8                                         |                                           |                            | 0.012UF           |                                                                                                                                              |            |
| 7        | 2     | C9, C32                                    | CGA3E3X7S2A104K080AB                      | TDK                        | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                  |            |
| 8        | 1     | C10                                        | GCM188R71H473KA55; CGA3E2X7R1H473K080AA   | MURATA;TDK                 | 0.047UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOTE: AUTOMOTIVE PART ONLY             |            |
| 9        | 6     | C16, C24, C25, C48, C49, C51               | EEH-ZC1H121P                              | PANASONIC                  | 120UF             | CAP; SMT (CASE_G); 120UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                                    |            |
|          |       | C39, C50                                   |                                           |                            | DNI               |                                                                                                                                              |            |
| 10       | 2     | C17, C34                                   | CGA2B1X7R1C104K050BC; GCM155R71C104KA55   | TDK;MURATA                 | 0.1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                             |            |
|          |       | C18, C29                                   |                                           |                            | 4700pF            |                                                                                                                                              |            |
| 11       | 1     | C41                                        | GCM1555C1H220JA16                         | MURATA                     | 22PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 22PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G; NOTE: AUTOMOTIVE PART ONLY                         |            |
| 12       | 2     | D1, D2                                     | 1N4148WS-7-F                              | DIODES INCORPORATED        | 1N4148WS-7-F      | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                                                  |            |
| 13       | 1     | DS1                                        | LTST-C190KRKT                             | LITE-ON ELECTRONICS INC.   | LTST-C190KRKT     | DIODE; LED; ULTRA BRIGHT AlInCaP CHIP LED; RED; SMT; VF=2V; IF=0.025A                                                                        |            |
| 14       | 2     | J1, J2                                     | PBC03SAAN                                 | SULLINS                    | PBC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                             |            |
| 15       | 1     | J3                                         | TSW-102-07-T-S                            | SAMTEC                     | TSW-102-07-T-S    | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                      |            |
| 16       | 2     | L1, L2                                     | XAL1060-222ME                             | COILCRAFT                  | 2.2UH             | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 20A; NOTE: SET TO OBSOLETE FOR FOOTPRINT CORRECTION BASED ON LATEST DATASHEET                          |            |
| 17       | 4     | MH1-MH4                                    | 9032                                      | KEYSTONE                   | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                    |            |
| 18       | 6     | Q1-Q3, Q5-Q7                               | DMTH6009LPS                               | DIODES INCORPORATED        | DMTH6009LPS       | TRAN; NCH; ENHANCEMENT MODE MOSFET; POWERDI5060-8; PD-(2.8W); I-(11.76A); V-(60V)                                                            |            |
|          |       | Q4, Q8                                     |                                           |                            | DNI               |                                                                                                                                              |            |
| 19       | 2     | R1, R5                                     | PML100HZPJV1L5                            | ROHM SEMICONDUCTOR         | 0.0015            | RES; SMT (1225); 0.0015; 5%; +/-100PPM/DEGC; 2W                                                                                              |            |
| 20       | 1     | R2                                         |                                           |                            | 39k               |                                                                                                                                              |            |
| 21       | 1     | R19                                        | CRCW06030000ZS; MCR03EZPJ000;ERJ-3GEY0R00 | VISHAY DALE;ROHM;PANASONIC | 0                 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                         |            |
|          | 8     | R3, R4, R7, R8, R13, R11, R17, R18         |                                           |                            | 1                 |                                                                                                                                              |            |
| 22       | 1     | R9                                         | CRCW0603115KFK                            | VISHAY                     | 115K              | RES; SMT (0603); 115K; 1%; +/-100PPM/DEGC; 0.1W                                                                                              |            |
| 23       | 1     | R10                                        | CRCW06034K99FK;ERJ-3EKF4991V              | VISHAY DALE;PANASONIC      | 4.99K             | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                         |            |
| 24       | 1     | R14                                        | CRCW060320R0FK; ERJ-3EKF20R0V             | VISHAY DALE;PANASONIC      | 20                | RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                        |            |
| 25       | 1     | R20                                        | CRCW06031K00FK;ERJ-3EKF1001V              | VISHAY DALE;PANASONIC      | 1K                | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                            |            |
| 26       | 1     | R21                                        | CRCW060310K0FK;ERJ-3EKF1002               | VISHAY DALE;PANASONIC      | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                           |            |
| 27       | 3     | SU1-SU3                                    | SNT-100-BK-G                              | SAMTEC                     | SNT-100-BK-G      | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                    |            |
| 28       | 1     | U1                                         | MAX25202MATEA/VY+                         | MAXIM                      | MAX25202MATEA/VY+ | EVKIT PART - IC; MAX25202MATEA/VY+; 16L WETQFN; PACKAGE OUTLINE DRAWING: 21- 100108; LAND PATTERN NUMBER: 90-100046; PACKAGE CODE: T1633Y+4C |            |
| 29       | 1     | U2                                         | MAX25202SATEA/VY+                         | MAXIM                      | MAX25202SATEA/VY+ | EVKIT PART - IC; MAX25202SATEA/VY+; 16L WETQFN; PACKAGE OUTLINE DRAWING: 21-100108; LAND PATTERN NUMBER: 90-100046; PACKAGE CODE: T1633Y+4C  |            |
| 30 TOTAL | 1 78  | PCB                                        | MAX25202EVK                               | MAXIM                      | PCB               | PCB:MAX25202EVK                                                                                                                              | -          |

Evaluates: MAX25202

## MAX25202 EV Kit Schematic

<!-- image -->

│

## MAX25202 EV Kit Schematic (continued)

<!-- image -->

│

## MAX25202 EV Kit PCB Layouts

MAX25202 EV Kit-Silkscreen Top

<!-- image -->

MAX25202 EV Kit Component Placement-Top View

<!-- image -->

│

## MAX25202 EV Kit PCB Layouts (continued)

MAX25202 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX25202 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX25202 EV Kit PCB Layouts (continued)

<!-- image -->

MAX25202 EV Kit Component Placement-Bottom View

MAX25202 EV Kit-Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX25202