<!-- lastmod 2022-08-02 -->
## MAX15157D Evaluation Kit

## General Description

The MAX15157D  evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all of the components necessary to evaluate the performance of the MAX15157D high-efficiency step-down regulator. The EV kit is powered from a 40V to 60V DC supply. It is capable of  delivering  12V/20A  output  at  a  150kHz  switching frequency. Refer to the MAX15157D data sheet to set the switching  frequency  and  input/output  voltage  ranges  for the EV kit.

## Features and Benefits

- 40V to 60V Input Voltage Range (Configurable from 8V to 60V)
- 12V Output Voltage (Configurable from 3V to 0.95 × VIN)
- Adjustable Slope Compensation Ramp
- Multiphase Operation up to 8 Phases
- Adjustable 60kHz to 1MHz Switching Frequency
- External Switching Frequency Clock Synchronization
- External REFIN Input for Output Adjustment
- Hiccup Fault Protection for Overcurrent and Thermal Shutdown
- PGOOD Output (Power-Good Output)
- Adjustable Input UVLO and Output OVP Voltage
- Adjustable Soft-Start
- Monotonic Startup into Prebiased Output

Ordering Information appears at end of data sheet.

## MAX15157D EV Kit Photo

<!-- image -->

Evaluates: MAX15157D

## Quick Start

## Required Equipment

- MAX15157D EV Kit
- 40V to 60V, 10A DC Power Supply V1 for VIN
- E-Load Capable of Sinking 25A
- Digital Voltmeters
- Oscilloscope

<!-- image -->

## Setup and Operation

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 2-3 of jumper JU1. (The internal 2.0V reference voltage is used for regulation.)
- 2) Install shunts at jumpers JU10 and JU11 (DRV = 10V on board from VIN).
- 3) Leave the following jumpers open (no shunts): JU3, JU4, JU7, JU8, JU9, JU12, and JU13.
- 4) Switch SW1 to the OFF position to disable the MAX15157D.
- 5) Turn on power supply V1 and set its voltage to 48V and current limit to 10A, then disable the power supply.
- 6) Connect the positive terminal of power supply V1 to the VIN connector and the negative terminal of the power supply to the GND connector, which is next to the VIN connector.
- 7) Connect the E-load to the VOUT and GND connectors and disable the load.
- 8) Connect voltmeters to VOUT and PGND\_VOUT, VIN and PGND\_VIN for voltage measurement.
- 9) Connect the probes of an oscilloscope to VOUT, ENABLE, and PGOOD for waveform measurement.
- 10) Enable the power supply and switch SW1 to the ON position.
- 11) Verify that the voltage between the VOUT and PGND\_VOUT test points is 12V.

The EV kit is now ready for additional evaluation.

Evaluates: MAX15157D

## Detailed Description of Hardware

The MAX15157D EV kit is a fully assembled and tested board for evaluating the performance of the MAX15157D 240W synchronous step-down regulator. The EV kit operates from 40V and 60V inputs and has a 12V output by default. Output voltage can be changed by the changing resistor-divider (R7 and R8) at the FB pin or by using an external REFIN (shunt at pins 1-2 of jumper JU1 and the 1V to 2.2V input between REFINX and AGND). Make sure that the correct compensation is selected for stable operation.

## Regulator Enable (ENABLE)

The MAX15157D features a shutdown mode to minimize the IC quiescent current. To shut down the IC, pull ENABLE below 0.54V or switch SW1 to the OFF position.

## Table 1. Regulator Enable (SW1)

| SW1 POSITION   | EN PIN CONNECTION                        | MAX15157D FUNCTION   |
|----------------|------------------------------------------|----------------------|
| ON             | Connect resistor-divider from DRV to GND | Enabled              |
| OFF            | GND                                      | Disabled             |

## Reference Voltage (REFIN)

The MAX15157D uses an internal 2V reference or an external reference input. The IC regulates feedback (FB) to the internal 2V or external voltage at REFINX, as shown in Table 2.

## Configuring the Input Voltage Range (VIN)

The minimum input voltage (VIN\_min) can be set as low as 8V by adjusting the external resistor-divider at the UVLO pin of the MAX15157D (U1) using the equation:

VIN\_min = V UVLO  x (R12 + R13)/R12

where V UVLO  is the UVLO threshold of MAX15157D (1.0V (typ, rising), with 100mV hysteresis).

In addition, to guarantee the DRV supply voltage when operating in a low input voltage range, it is suggested to select the resistor-divider at EN/UVLO pin of the MAX15062C (U2) so that:

VIN\_min &gt; V EN/UVLO  x (R33 + R35)/R35

where  V EN/UVLO   is  the  EN/UVLO  threshold  of  the  MAX15062C  (1.215V  (typ,  rising),  with  125mV  hysteresis).  If necessary, apply an external 10V DRV voltage between the VDRV and PGND connectors to supply the MAX15157D; in this case, jumpers JU10 and JU11 must be removed.

## Configuring the Output Voltage (VOUT)

VOUT can be set between 3V to 0.95 × VIN and externally programmed using the following equation:

VOUT = V REF  × (R7 + R8)/R8

where V REF  is the reference voltage in Table 2 (2V for preset mode, 1V to 2.2V for tracking mode).

## Table 2. Reference Voltage (JU1)

| SHUNT POSITION      | REFIN PIN CONNECTION            | REFERENCE VOLTAGE (V REF )                        | VOUT RANGE                                              |
|---------------------|---------------------------------|---------------------------------------------------|---------------------------------------------------------|
| 1-2 (tracking mode) | To external voltage (at REFINX) | User-supplied reference voltage; 1V to 2.2V range | VOUT = 6V to 13.2V (increase R7 to get the higher VOUT) |
| 2-3 (preset mode)   | To BIAS 4V6 pin                 | Internal 2V reference                             | VOUT = 12V (increase R7 to get the higher VOUT)         |

## Switching Frequency (FREQ/CLK)

The controller supports a 60kHz to 1MHz switching frequency. The EV kit operates at a 150kHz switching frequency with a 24.9kΩ resistor (R3) at the FREQ/CLK pin.

Evaluates: MAX15157D

To adjust the switching frequency (f SW ), either replace R3 (connected from FREQ/CLK to GND) by using the following equation:

<!-- formula-not-decoded -->

or drive the FREQ/CLK (CLOCKIN) with an external 0 to 5V clock at twice the switching frequency (it is not necessary to remove R3 when applying the external clock).

## Soft-Start (SS)

The MAX15157D offers the SS pin to adjust the soft-start time to limit inrush current during startup. The VOUT soft-start time is controlled by C13. An internal 5μA current source charges the capacitor at the SS pin to provide a linear ramping voltage for the output voltage reference. The VOUT soft-start time (t SS ) is calculated based on the following equation:

<!-- formula-not-decoded -->

where V REF  is the reference voltage in Table 2 (2V for preset mode, 1V to 2.2V for tracking mode).

Note that the drivers start switching once SS exceeds 50mV, and the controller enables the fault-protection circuitry when SS exceeds 1V.

## Power Good (PGOOD)

The MAX15157D EV kit provides the PGOOD output test point. The PGOOD signal is pulled up to the 4V6 BIAS by resistor R9, and PGOOD is high when VOUT is above 90% of its programmed output voltage. When VOUT is below 90% of its programmed output voltage, PGOOD is pulled low.

## Connecting Multiple EV Kits

The EV kit provides connectors J1, J2, J3, J4,  J6,  and  J7  for  connecting  up  to  eight  EV  kits  to  support  multiphase operation, as shown in Figure 1-one EV kit is configured as a master board and other EV kits are configured as slave boards. J4, J6, and J7 of the master EV kit are connected to J1, J2, and J3 of the slave1 EV kit; J4, J6, and J7 of the slave1 EV kit are connected to J1, J2, and J3 of the slave2 EV kit; and so on.

Figure 1. Connecting Multiple EV Kits

<!-- image -->

See Table 3 for peripheral circuit configurations of the MAX15157D controller on the master EV kit and slave EV kits based on the EV kit schematic.

## Table 3. Configurations on Master EV Kit and Slave EV Kits

| COMPONENTS                              | MASTER EV KIT                                                                                        | SLAVE EV KITS                                                                                        |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Jumpers                                 | JU1(2:3), JU4(2:3), JU8(1:2), JU10(1:2), JU11(1:2); No jumpers on JU3, JU7, JU9, JU12, JU13          | JU3(1:2), JU4(1:2), JU9(2:3); No jumpers on JU1, JU7, JU8, JU10, JU11, JU12, JU13                    |
| R3, R4, R7, R8, R16, R18, C11, C12, C13 | No change                                                                                            | Do not install (DNI)                                                                                 |
| R10                                     | Refer to Table 1 in the MAX15157D data sheet for R10 selection (68kΩ, 100kΩ, 133kΩ, 169kΩ, or 210kΩ) | Refer to Table 1 in the MAX15157D data sheet for R10 selection (68kΩ, 100kΩ, 133kΩ, 169kΩ, or 210kΩ) |
| R27, R28                                | RES, SMT (0612), 0Ω                                                                                  | RES, SMT (0612), 0Ω                                                                                  |
| R29                                     | RES, SMT (0603), 0Ω                                                                                  | RES, SMT (0603), 0Ω                                                                                  |

## Evaluates: MAX15157D

| R31   | DNI                      | RES, SMT (0603), 10kΩ   |
|-------|--------------------------|-------------------------|
| R32   | RES, SMT (0603), 10kΩ    | DNI                     |
| SW1   | Used for ENABLE function | ON position             |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15157DEVKIT# | EV Kit |

#Denotes RoHS-compliant.

## MAX15157D EV Kit Bill of Materials

|   ITEM | REF DES                                                       | DNP   |   QTY | MFG PART #                                                                                      | MANUFACTURER                     | VALUE                | DESCRIPTION                                                                                                             |
|--------|---------------------------------------------------------------|-------|-------|-------------------------------------------------------------------------------------------------|----------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | AGND, CLOCKIN, ENABLE, IREP, PGND, PGOOD, REFINX, VDRV        | -     |     8 | 9020 BUSS                                                                                       | WEICO WIRE                       | MAXIMP AD            | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
|      2 | BIAS, BODE+, BODE-, EXT_DRI, REFIN, SS, SYNCIN, SYNCOUT, UVLO | -     |     9 | 5013                                                                                            | KEYSTONE                         | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      3 | C1-C4, C7, C8, C34-C48, C60, C61, C74-C79, C82                | -     |    30 | GRM32EC72A106KE05                                                                               | MURATA                           | 10UF                 | CAP; SMT (1210); 10UF; 100V; X7S; CERAMIC                                                                               |
|      4 | C5, C6                                                        | -     |     2 | EEH-ZA1V271P                                                                                    | PANASONIC                        | 270UF                | CAP; SMT (CASE_G); 270UF; 20%; 35V; CONDUCTIVE POLYMER HYBRID ALUMINUM-ELECTROLYTIC                                     |
|      5 | C9, C10, C58                                                  | -     |     3 | EEV-FK1K151Q; EEE-FK1K151AQ                                                                     | PANASONIC                        | 150UF                | CAP; SMT (CASE_H13); 150UF; 20%; 80V; ALUMINUM- ELECTROLYTIC                                                            |
|      6 | C11                                                           | -     |     1 | GRM188R71H683KA93                                                                               | MURATA                           | 0.068UF              | CAP; SMT (0603); 0.068UF; 10%; 50V; X7R; CERAMIC                                                                        |
|      7 | C12                                                           | -     |     1 | GRM1885C1H121JA01                                                                               | MURATA                           | 120PF                | CAP; SMT (0603); 120PF; 5%; 50V; C0G; CERAMIC                                                                           |
|      8 | C13                                                           | -     |     1 | C1608X5R1H104K080AA                                                                             | TDK                              | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                          |
|      9 | C14, C19, C21, C22                                            | -     |     4 | C0603X7R500103JNP; C0603C103J5RAC                                                               | VENKEL LTD; KEMET                | 0.01UF               | CAP; SMT (0603); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                          |
|     10 | C17, C18, C24, C26, C55, C80                                  | -     |     6 | UMK107AB7105KA; CC0603KRX7R9BB105                                                               | TAIYO YUDEN; YAGEO               | 1UF                  | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                            |
|     11 | C20, C56, C57                                                 | -     |     3 | C0603C222K1RAC                                                                                  | KEMET                            | 2200PF               | CAP; SMT (0603); 2200PF; 10%; 100V; X7R; CERAMIC                                                                        |
|     12 | C23                                                           | -     |     1 | C1608X7R1H224K080; GRM188R71H224KAC4                                                            | TDK; MURATA                      | 0.22UF               | CAP; SMT (0603); 0.22UF; 10%; 50V; X7R; CERAMIC                                                                         |
|     13 | C25                                                           | -     |     1 | EEE-FK2A220P                                                                                    | PANASONIC                        | 22UF                 | CAP; SMT (CASE_F); 22UF; 20%; 100V; ALUMINUM- ELECTROLYTIC                                                              |
|     14 | C27, C59                                                      | -     |     2 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                       | MURATA; TDK; MURATA              | 1000PF               | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                          |
|     15 | C28, C81                                                      | -     |     2 | C0805C104K1RAC; C2012X7R2A104K125AA; GRM21BR72A104KAC4; CGA4J2X7R2A104K125AA; GCD21BR72A104KA01 | KEMET; TDK; MURATA; TDK; MURATA  | 0.1UF                | CAP; SMT (0805); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                         |
|     16 | C49                                                           | -     |     1 | GRM31CR72A105KA01; C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH                       | MURATA; TDK; MURATA; TAIYO YUDEN | 1UF                  | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                                                           |
|     17 | C51, C52                                                      | -     |     2 | GRM219R6YA475KA73                                                                               | MURATA                           | 4.7UF                | CAP; SMT (0805); 4.7UF; 10%; 35V; X5R; CERAMIC                                                                          |
|     18 | C54                                                           | -     |     1 | C0603C100J5GAC; GRM1885C1H100JA01; 06035A100JAT2A                                               | KEMET; MURATA; AVX               | 10PF                 | CAP; SMT (0603); 10PF; 5%; 50V; C0G; CERAMIC                                                                            |
|     19 | D1, D5                                                        | -     |     2 | BAS16-E3                                                                                        | VISHAY                           | BAS16- E3            | DIODE; SWT; SMT (SOT-23); PIV=75V; IF=0.15A                                                                             |
|     20 | D2                                                            | -     |     1 | BAS21J                                                                                          | NXP                              | BAS21J               | DIODE; SS; GENERAL PURPOSE DIODE; SMT (SOD-323); PIV=300V; IF=0.25A                                                     |
|     21 | D3                                                            | -     |     1 | BZT52C10S-7-F                                                                                   | DIODES INCORPORATED              | 10V                  | DIODE; ZNR; SMT (SOD-323); VZ=10V; IZ=0.005A                                                                            |
|     22 | D4                                                            | -     |     1 | SMBJ100A                                                                                        | LITTELFUSE                       | 100V                 | DIODE; TVS; SMB (DO-214AA); VRM=100V; IPP=3.7A                                                                          |
|     23 | J1-J3                                                         | -     |     3 | LS2-110-01-S-D-RA1                                                                              | SAMTEC                           | LS2-110- 01-S-D- RA1 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD DOWN; RIGHT ANGLE; 20PINS                              |

## MAX15157D Evaluation Kit

Evaluates: MAX15157D

|   ITEM | REF DES                                               | DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                          | VALUE                | DESCRIPTION                                                                                                            |
|--------|-------------------------------------------------------|-------|-------|------------------------------------------------------------------------------------|---------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------|
|     24 | J3-1, J3-2, J4-1, J4-2                                | -     |     4 | 111-2223-001                                                                       | EMERSON NETWORK POWER                 | 111- 2223-001        | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                              |
|     25 | J4, J6, J7                                            | -     |     3 | LS2-110-01-S-D-RA2                                                                 | SAMTEC                                | LS2-110- 01-S-D- RA2 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD UP; RIGHT ANGLE; 20PINS                               |
|     26 | JU1, JU4, JU9                                         | -     |     3 | PEC03SAAN                                                                          | SULLINS                               | PEC03S AAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                              |
|     27 | JU3, JU7, JU8, JU10-JU13                              | -     |     7 | PEC02SAAN                                                                          | SULLINS                               | PEC02S AAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                              |
|     28 | L1                                                    | -     |     1 | SER2915H-682KL                                                                     | COILCRAFT                             | 6.8UH                | INDUCTOR; SMT; FERRITE CORE; 6.8UH; TOL=+/-10%; 30A                                                                    |
|     29 | L2                                                    | -     |     1 | 74408943101                                                                        | WURTH ELECTRONICS INC.                | 100UH                | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; 100UH; TOL=+/-20%; 0.52A; -40 DEGC TO +125 DEGC              |
|     30 | M1, M2                                                | -     |     2 | BSC037N08NS5ATMA1                                                                  | INFINEON                              | BSC037N 08NS5AT MA1  | TRAN; NCH; PG-TDSON8; PD-(114W); I-(100A); V-(80V)                                                                     |
|     31 | MH1-MH4                                               | -     |     4 | 9032                                                                               | KEYSTONE                              | 9032                 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                              |
|     32 | PGND_VIN, PGND_VOUT                                   | -     |     2 | 5011                                                                               | KEYSTONE                              | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|     33 | Q1                                                    | -     |     1 | IRLR3110ZTRPBF                                                                     | INTERNATIONAL RECTIFIER               | IRLR311 0ZTRPBF      | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(140W); I- (63A); V-(100V)                                                    |
|     34 | Q2                                                    | -     |     1 | PZT2222AT1; PZT2222AT1G                                                            | ON SEMICONDUCTOR                      | PZT2222 AT1G         | TRAN; NPN SILICON PLANAR EPITAXIAL TRANSISTOR; NPN; SOT-223; PD-(1.5W); IC-(0.6A); VCEO-(40V)                          |
|     35 | Q3                                                    | -     |     1 | SI2328DS-T1-E3                                                                     | VISHAY SILICONIX                      | SI2328D S-T1-E3      | TRAN; N-CHANNEL 100V MOSFET; NCH; SOT-23; PD-(0.73W); I-(1.5A); V-(100V)                                               |
|     36 | R2                                                    | -     |     1 | RC0603FR-0784K5L                                                                   | YAGEO PHYCOMP                         | 84.5K                | RES; SMT (0603); 84.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
|     37 | R3                                                    | -     |     1 | CRCW060324K9FK; ERJ-3EKF2492                                                       | VISHAY DALE; PANASONIC                | 24.9K                | RES; SMT (0603); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
|     38 | R4, R9, R19, R44                                      | -     |     4 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC  | 100K                 | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     39 | R6, R52                                               | -     |     2 | CRCW06034R02FK; RC0603FR-074R02L                                                   | VISHAY DALE; YAGEO                    | 4.02                 | RES; SMT (0603); 4.02; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     40 | R7                                                    | -     |     1 | CRCW060349K9FK; ERJ-3EKF4992                                                       | VISHAY DALE; PANASONIC                | 49.9K                | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
|     41 | R8, R12, R15, R16                                     | -     |     4 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC; YAGEO         | 10K                  | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
|     42 | R10                                                   | -     |     1 | CRCW0603270KFK; ERJ-3EKF2703                                                       | VISHAY DALE; PANASONIC                | 270K                 | RES; SMT (0603); 270K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     43 | R11, R37, R38, R41, R45, R48- R51, R58, R61, R62, R64 | -     |    13 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | 0                    | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                |
|     44 | R13                                                   | -     |     1 | ERJ-PA3F3653                                                                       | PANASONIC                             | 365K                 | RES; SMT (0603); 365K; 1%; +/-100PPM/DEGC; 0.2500W                                                                     |
|     45 | R14                                                   | -     |     1 | CRCW060360K4FK                                                                     | VISHAY DALE                           | 60.4K                | RES; SMT (0603); 60.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
|     46 | R17, R20                                              | -     |     2 | ERJ-3GEYJ102                                                                       | PANASONIC                             | 1K                   | RES; SMT (0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                                       |
|     47 | R18                                                   | -     |     1 | CRCW06033K65FK                                                                     | VISHAY DALE                           | 3.65K                | RES; SMT (0603); 3.65K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
|     48 | R21, R22, R25, R30, R34, R39                          | -     |     6 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY DALE; ROHM                     | 10                   | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
|     49 | R23, R24                                              | -     |     2 | CRCW080510R0FK; ERJ-6ENF10R0                                                       | VISHAY DALE; PANASONIC                | 10                   | RES; SMT (0805); 10; 1%; +/-100PPM/DEGC; 0.1250W                                                                       |
|     50 | R33                                                   | -     |     1 | CRCW06033M30FK                                                                     | VISHAY DALE                           | 3.3M                 | RES; SMT (0603); 3.3M; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |

## MAX15157D Evaluation Kit

## Evaluates: MAX15157D

|   ITEM | REF DES                                          | DNP   |   QTY | MFG PART #                                     | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                                  |
|--------|--------------------------------------------------|-------|-------|------------------------------------------------|---------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|     51 | R35                                              | -     |     1 | CRCW0603210KFK                                 | VISHAY DALE                           | 210K           | RES; SMT (0603); 210K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                           |
|     52 | R36                                              | -     |     1 | CRCW060354K9FK; ERJ-3EKF5492                   | VISHAY DALE; PANASONIC                | 54.9K          | RES; SMT (0603); 54.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                          |
|     53 | R42                                              | -     |     1 | CRCW06034023FK; ERJ-3EKF4023                   | VISHAY; PANASONIC                     | 402K           | RES; SMT (0603); 402K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                           |
|     54 | R43                                              | -     |     1 | CRCW060340K2FK; RC0603FR-0740K2L; ERJ-3EKF4022 | VISHAY DALE; YAGEO; PANASONIC         | 40.2K          | RES; SMT (0603); 40.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                          |
|     55 | R53                                              | -     |     1 | CRCW1206100KFK; ERJ-8ENF1003                   | VISHAY DALE; PANASONIC                | 100K           | RES; SMT (1206); 100K; 1%; +/-100PPM/DEGC; 0.2500W                                                                                           |
|     56 | R54                                              | -     |     1 | CRCW120620K0FK; RM12F2002CT                    | VISHAY DALE; CAL-CHIP ELECTRONIC INC. | 20K            | RES; SMT (1206); 20K; 1%; +/-100PPM/DEGC; 0.2500W                                                                                            |
|     57 | RS1, RS2                                         | -     |     2 | CRCW20100000ZS                                 | VISHAY DALE                           | 0              | RES; SMT (2010); 0; JUMPER; 0.75W                                                                                                            |
|     58 | RS3, RS4                                         | -     |     2 | WSL25124L000FEA18                              | VISHAY DALE                           | 0.004          | RES; SMT (2512); 0.004; 1%; +/-150PPM/DEGC; 2W                                                                                               |
|     59 | SU1-SU3                                          | -     |     3 | S1100-B; SX1100-B; STC02SYAN                   | KYCON; KYCON; SULLINS ELECTRONICS     | SX1100- B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                     |
|     60 | SW1                                              | -     |     1 | GT21MCBE                                       | C&K COMPONENTS                        | GT21MC BE      | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS |
|     61 | U1                                               | -     |     1 | MAX15157DATJ+                                  | MAXIM                                 | MAX1515 7DATJ+ | IC; 60V CURRENT MODE BUCK CONTROLLER; TQFN32-EP                                                                                              |
|     62 | U2                                               | -     |     1 | MAX15062CATA+                                  | MAXIM                                 | MAX1506 2CATA+ | IC; CONV; ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN8                                                         |
|     63 | VIN, VOUT                                        | -     |     2 | 5010                                           | KEYSTONE                              | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL                                         |
|     64 | PCB                                              | -     |     1 | MAX15157D                                      | MAXIM                                 | PCB            | PCB:MAX15157D                                                                                                                                |
|     65 | C15, C29-C33, C50                                | DNP   |     0 | -                                              | -                                     | -              | CAP; SMT (0603)                                                                                                                              |
|     66 | C16                                              | DNP   |     0 | -                                              | -                                     | -              | CAP; SMT (0805)                                                                                                                              |
|     67 | C62-C73                                          | DNP   |     0 | -                                              | -                                     | -              | CAP; SMT (1210)                                                                                                                              |
|     68 | COMP, FB, OVP                                    | DNP   |     0 | -                                              | -                                     | -              | TEST POINT; PIN DIA=0.125IN                                                                                                                  |
|     69 | D6, D7                                           | DNP   |     0 | -                                              | -                                     | -              | DIODE; SMT (SOD-323)                                                                                                                         |
|     70 | J9                                               | DNP   |     0 | -                                              | -                                     | -              | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                    |
|     71 | JU2, JU5, JU6                                    | DNP   |     0 | -                                              | -                                     | -              | CONNECTOR; MALE; THROUGH HOLE                                                                                                                |
|     72 | M3-M6                                            | DNP   |     0 | -                                              | -                                     | -              | TRAN; NCH; PG-TDSON8                                                                                                                         |
|     73 | R29, R31, R32, R40, R46, R55- R57, R59, R60, R63 | DNP   |     0 | -                                              | -                                     | -              | RES; SMT (0603)                                                                                                                              |
|     74 | R27, R28                                         | DNP   |     0 | -                                              | -                                     | -              | RES; SMT (0612)                                                                                                                              |
|     75 | R47                                              | DNP   |     0 | -                                              | -                                     | -              | RES; SMT (1225)                                                                                                                              |

## MAX15157D EV Kit Schematic

<!-- image -->

## MAX15157D EV Kit PCB Layout

MAX15157D EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX15157D EV Kit PCB Layout-Layer 2

<!-- image -->

Evaluates: MAX15157D

MAX15157D EV Kit PCB Layout-Top

<!-- image -->

MAX15157D EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX15157D EV Kit PCB Layout (continued)

<!-- image -->

MAX15157D EV Kit PCB Layout-Layer 4

<!-- image -->

MAX15157D EV Kit PCB Layout-Bottom

MAX15157D EV Kit PCB Layout-Layer 5

<!-- image -->

MAX15157D EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX15157D Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX15157D