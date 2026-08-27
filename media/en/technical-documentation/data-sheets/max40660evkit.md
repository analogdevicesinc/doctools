<!-- lastmod 2022-08-03 -->
## MAX40660 Evaluation Kit

## General Description

The MAX40660 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to evaluate the MAX40660 trans-impedance amplifiers.

Note  that  the  MAX40660  EV  kit  provides  an  electrical interface to the IC that is similar, but not the same as a photodiode.

The MAX40660 EV kit PCB comes with a MAX40660ATB/ VY+ installed.

## MAX40660 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Electrical Evaluation of the MAX40660
- EV Kit Designed for 50Ω Interfaces
- -40°C to +125°C Temperature Range
- Tested 10-TDFN-EP MAX40660ATB/VY+ device
- Accommodates Easy-to-Use components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40660

## Quick Start

## Required Equipment

- +3.6V, 100mA DC Power Supply
- Signal Source Up to 1GHz
- 500MHz to 2.5GHz Oscilloscope

## Procedure

The  MAX40660  EV  kit  is  fully  assembled  and  tested. Follow the below to verify board operation:

## Caution: Do not turn on the power supply or the electronic load until all the connections are complete.

- 1) Connect a +3.3V supply and ground to VIN\_SUPPLY connector and GND return pad of the EV kit, respectively. Disable the output of the power supply.
- 2) Install a shunt on 2-3 of jumper J1 to enable the TIA. (Installing a shunt on 1-2 of jumper J1 will force the TIA into low-power disable mode.)
- 3) Install a shunt on 2-3 of jumper J2 to selects the low gain mode (25kΩ transimpedance) (Installing a shunt on 1-2 of jumper J2) selects the high gain mode (50kΩ transimpedance)).
- 4) Connect a signal source to IN\_AC (J4) edge-mount SMA input. Set the signal amplitude to 12.5mV P-P (4.4mV RMS or  -34dBm),  which  corresponds  to  5μA P-P .  Set  the frequency  to  300MHz.  Disable  the  signal  generator output.
- 5) Connect  OUT1+  (J7)  and  OUT-  (J6)  edge-mount SMA  outputs  to  the  50Ω  inputs  of  a  high-speed oscilloscope.
- 6) Verify all the shunts are in default positions, as shown in Table 1 .

## Table 1. Jumper Function

| JUMPER LABEL   | POSITION   | FUNCTIONS                                        |
|----------------|------------|--------------------------------------------------|
| J1             | 2-3* 1-2   | Enables U1. Active Mode Disables U1 or Low Power |
| J2             | 2-3*       | Low Gain Mode Selected (25kΩ Transimpedance)     |
|                | 1-2        | High Gain Mode Selected (50kΩ Transimpedance)    |

* Default position

## Evaluates: MAX40660

- 7) Enable the power supply and signal generator output. Observe for outputs from OUT+ and OUT- on the oscilloscope.
- 8) The differential signal at the oscilloscope should be approximately 62.5mV P-P at 300MHz.
- 9) Enable the power supply and signal generator output. Observe for outputs from OUT+ and OUT- on the oscilloscope.
- 10) The differential signal at the oscilloscope should be approximately 125mV P-P at 300MHz.

## Detailed Description of Hardware

The  MAX40660  accepts  AC  and  DC-coupled  input from  a  high-speed  photodiode.  The  EV  kit  facilitates evaluation  of  the  MAX40660  TIA  without  a  photodiode. The  MAX40660  TIA  is  designed  to  be  used  with optical  transceiver  systems  when  the  detector's  (APD, PIN diodes) cathode connected to the IN input of the IC. The device is to be used when AC input currents are flowing out of the device at IN input of the IC.

When an APD with negative bias voltage is connected to the TIA input the signal current flows out of the amplifier's summing node. The input current flows through an internal load resistor to develop a voltage that is then applied to the input of the second stage. An internal clamp circuit protects against input currents up to 100mA up to 100ns and up to 2A for 10ns pulses at low duty cycles. For more information about the device, please refer to the IC data sheet.

## Theory of Operation

The  MAX40660  EV  kit  provides  photodiode  emulation using a simplified electrical photodiode model. The model provides a 50Ω electrical input termination, and resistors that  convert  the  high-speed  input  voltage  to  high-speed current.  A  DC  path  is  provided  to  model  the  average photodiode current.

## Test Interface

The  MAX40660  outputs  are  back  terminated  with  50Ω. When  terminating  the  outputs  to  50Ω  oscilloscope,  the ac-coupling  capacitors  C6  and  C7  are  present  and resistor R0 is not installed. When interfacing with subsequent amplifiers or LVDS- capable devices, ac-coupling capacitors (C6,C7)  and  100Ω  resistor  (R0)  are  installed  when  the subsequent device has internal bias. Replace C6 and C7 ac  coupling  capacitors  with  0Ω  resistors  in  case  of  DC coupling into the device.

## Input and OFFSET Input DC Evaluation

The MAX40660 EV kit features DC evaluation of IN input and OFFSET input.

When evaluating the MAX40660's IN input in DC mode at  I\_DC\_IN  (J3)  using  a  calibrator  with  voltage  output option, 0Ω is installed at resistor R3, capacitors CIN1 and CIN2 are removed. Current value set in microamperes will provide a differential voltage output function of transimpedance selected.

When evaluating the MAX40660's IN input in DC mode at  I\_DC\_IN  (J3)  using  a  calibrator  with  voltage  output option,  0Ω is  installed  at  resistor  R3,  and  capacitor  C8, CIN1 and CIN2 are removed. Resistors R1 and R2 sets the input resistance (R S ),  the bias voltage at IN (V IN ) is 855mV. The voltage value set at the calibrator will dictate the input current by the following equation:

<!-- formula-not-decoded -->

Current value in microamperes will provide a differential voltage output function of transimpedance selected.

When evaluating the MAX40660's IN input in DC mode at  I\_OFFSET(J5)  using  a  calibrator  with  current  output option, resistor R4 is replaced with 0Ω. Current value set in microamperes will provide a differential voltage output function of transimpedance selected.

When evaluating the MAX40660's IN input in DC mode at I\_DC\_IN (J3) using a calibrator with voltage output option, capacitor  C9  is  removed.  Resistor  R4  sets  the  input resistance and the bias voltage at OFFSET (V OFFSET ) is 855mV. The voltage value set at the calibrator will dictate the input current by the following equation:

<!-- formula-not-decoded -->

Current value in microamperes will provide a differential

voltage output function of transimpedance selected.

## Table 2. Different Values of RS (R1+R2) for Different Input Current Pulse Amplitudes.

|   INPUT SERIES RESISTANCE R S (Ω) |   GENERATOR INPUT HIGH VOLTAGE (V) |   GENERATOR INPUT LOW VOLTAGE (V) |   GENERATED INPUT CURRENT STEP FROM IN (mA) |
|-----------------------------------|------------------------------------|-----------------------------------|---------------------------------------------|
|                                 1 |                              0.855 |                              0.65 |                                           1 |
|                                 1 |                              0.855 |                              0.15 |                                          10 |
|                                 1 |                              0.855 |                             -1.06 |                                          50 |
|                                 1 |                              0.855 |                             -2.46 |                                         100 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40660EVKIT# | EV kit |

# Denotes RoHS compliant

Evaluates: MAX40660

The  outputs  are  observed  with  ac-coupling  capacitors C6 and C7 replaced with 0Ω and resistor R0 with 100Ω installed. The transimpedance is measured with ac-coupled setup, hence with the above method the transimpedance observed will seem to be twice as what it is.

More information about the transfer function curve for IN and OFFSET input can be referred to TOC9 and TOC10 in  datasheet. This  is  useful  in  determining  the  load  line curve for optimized performance for a given diode.

## Current Pulse Measurements

To perform pulse measurements, the current pulses are created by providing a voltage pulse at the J4 input. The input series resistance combination (R1+R2) respectively determines the amplitude of the current pulse.

Both AC and DC coupling at the IN input may be used for this test. When using DC blocking capacitors, C1 and C2 is used in conjunction with the test. When providing the input voltage pulse at IN\_AC edge mount SMA , the DC blocking capacitors C1 and C2 are replaced with 0Ω short to DC couple the input to the MAX40660. Make sure resistor R3 is not installed.

The following resistor settings R S = (R1 + R2) is shown in  Table  2  to  create  the  large  signal  current  amplitude pulses.

To generate &lt; 100μA small signal currents, see Equation 1.

## Noise measurements

Remove  the  input  resistors  and  shunt  capacitor  before attempting  noise  measurement.  With  the  input  resistors and shunt capacitor removed, the total capacitance at the IN-input is equal to 0.5pF.

│

## MAX40660 Evaluation Kit

## MAX40660 EV Kit Bill of Materials

|   ITEM | REF_DES                | DNI/DNP   |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                               | VALUE           | DESCRIPTION                                                                                                                                                           |
|--------|------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, CIN1               | -         |     2 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                              | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK | 100PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                             |
|      2 | C2                     | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                                                        | VENKEL LTD.;MURATA                                         | 2200PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                           |
|      3 | C3                     | -         |     1 | C0402X5R100-105KNE; GRM155R61A105KE15                                                                                                        | VENKEL LTD.;MURATA                                         | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL = 10%; MODEL =; TG = -55°C TO +85°C; TC = X5R                                                                      |
|      4 | C4, C6-C8              | -         |     4 | GRM155R61C104KA88                                                                                                                            | MURATA                                                     | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +85°C; TC = X5R                                                              |
|      5 | C5                     | -         |     1 | C0402X5R6R3-225MNP; C0402C225M9PAC; GRM155R60J225ME15; \JMK105BJ225MV                                                                        | VENKEL;KEMET;MURATA; TAIYO YUDEN                           | 2.2UF           | CAPACITOR; SMT; 0402; CERAMIC; 2.2µF; 6.3V; 20%; X5R; -55°C to + 85°C; 0 ± 15% °C MAX.                                                                                |
|      6 | CIN2                   | -         |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA;MURATA; TDK;TAIYO YUDEN;TDK                 | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                            |
|      7 | GND1, GND2, VIN_SUPPLY | -         |     3 | 9020 BUSS                                                                                                                                    | WEICO WIRE                                                 | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                              |
|      8 | J1, J2                 | -         |     2 | PCC03SAAN                                                                                                                                    | SULLINS                                                    | PCC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                                                                    |
|      9 | J3, J5                 | -         |     2 | 131-3701-266                                                                                                                                 | JOHNSON COMPONENTS                                         | 131-3701-266    | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                                                                           |
|     10 | J4, J6, J7             | -         |     3 | 32K243-40ML5                                                                                                                                 | ROSENBERGER                                                | 32K243-40ML5    | CONNECTOR; FEMALE; SMT; SMA JACK PCB; RIGHT ANGLE; 2PINS                                                                                                              |
|     11 | L1                     | -         |     1 | BLM15BD601SN1                                                                                                                                | MURATA                                                     | 600             | INDUCTOR; SMT (0402); FERRITE-BEAD; 600; TOL = ± 25%; 0.2A                                                                                                            |
|     12 | MH1-MH4                | -         |     4 | P440.375                                                                                                                                     | GENERIC PART                                               | N/A             | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                                                     |
|     13 | MH1-MH4                | -         |     4 | 1902B                                                                                                                                        | GENERIC PART                                               | N/A             | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                                  |
|     14 | R1, R2                 | -         |     2 | ERJ-2RKF1241                                                                                                                                 | PANASONIC                                                  | 1.24K           | RESISTOR; 0402; 1.24K ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                 |
|     15 | R4, RCL                | -         |     2 | ERJ-2GE0R00                                                                                                                                  | PANASONIC                                                  | 0               | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                   |
|     16 | RT                     | -         |     1 | TNPW040249R9BE; RG1005P-49R9-B-T; ERA-2AEB49R9                                                                                               | SUSUMU CO LTD.; PANASONIC;VISHAY                           | 49.9            | RESISTOR; 0402; 49.9 Ω ; 0.1%; 25PPM; 0.063W; THICK FILM                                                                                                              |
|     17 | SU1, SU2               | -         |     2 | S1100-B;SX1100-B; STC02SYAN                                                                                                                  | KYCON;KYCON; SULLINS ELECTRONICS CORP.                     | SX1100-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                         |
|     18 | U1                     | -         |     1 | MAX40660ATB/VY+                                                                                                                              | MAXIM                                                      | MAX40660ATB/VY+ | EVKIT PART - IC; TRANSIMPEDANCE AMPLIFIER WITH 100 MILLI-AMPERE INPUT CURRENT CLAMP FOR AUTOMOTIVE LIDAR; PACKAGE OUTLINE DRAWING: 21-100317; PACKAGE CODE: T1033Y+4C |
|     19 | PCB                    | -         |     1 | MAX40660                                                                                                                                     | MAXIM                                                      | PCB             | PCB:MAX40660                                                                                                                                                          |
|     20 | C9, C12                | DNP       |     0 | C0402X5R100-105KNE; GRM155R61A105KE15                                                                                                        | VENKEL LTD.;MURATA                                         | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R                                                                     |
|     21 | C10                    | DNP       |     0 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                              | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK | 100PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                             |
|     22 | C11                    | DNP       |     0 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                                                        | VENKEL LTD.;MURATA                                         | 2200PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                           |
|     23 | R0                     | DNP       |     0 | ERJ-2RKF1000                                                                                                                                 | PANASONIC                                                  | 100             | RESISTOR; 0402; 100 ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                   |
|     24 | R3                     | DNP       |     0 | ERJ-2GE0R00                                                                                                                                  | PANASONIC                                                  | 0               | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                   |
|     25 | CD                     | DNP       |     0 | N/A                                                                                                                                          | N/A                                                        | OPEN            | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                                              |

│

Evaluates: MAX40660

## MAX40660 EV Kit Schematic

<!-- image -->

Evaluates: MAX40660

## MAX40660 EV Kit PCB Layout Diagrams

MAX40660 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX40660 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX40660 EV Kit PCB Layout-Layer 2 Ground

<!-- image -->

## MAX40660 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX40660 EV Kit PCB Layout-Layer 3 Power

MAX40660 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX40660 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40660