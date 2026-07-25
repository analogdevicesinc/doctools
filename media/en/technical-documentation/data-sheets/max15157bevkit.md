<!-- lastmod 2022-08-02 -->
## MAX15157B Evaluation Kit

## General Description

The MAX15157B evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  contains  all  components necessary to evaluate the performance of the MAX15157B. The device is a high-efficiency step-down and/or step-up regulator. The EV kit is powered from a 15V to 60V DC supply. It is capable of delivering from 5V to 32V at 15A or  200W  (max)  and  at  a  600kHz  switching  frequency. Refer to the MAX15157B data sheet to set the switching frequency and input/output voltage ranges for the EV kit.

## Features

- 15V to 60V Input-Voltage Range (Changeable from 8V to 60V)
- 5V to 32V Output-Voltage Range (Changeable from 3V to 52V)
- Adjustable Slope Compensation Ramp
- Precision High-Side Current Sense for Output Current Monitor
- Multiphase Operation Up to 4 Phases
- Adjustable Switching Frequency: 120kHz to 1MHz Range
- External Switching Frequency Clock Synchronization
- External REFIN Input for Output Adjustment
- Hiccup Fault Protection for Overcurrent
- Thermal Shutdown
- POW-OK Output (Power-Good Output)
- Adjustable Input UVLO, and Output OVP Voltage
- Adjustable Soft-Start, and Soft-Stop
- Monotonic Startup into Prebiased Output

Ordering Information appears at end of data sheet.

Evaluates: MAX15157B

## Quick Start

## Recommended Equipment

- MAX15157B EV kit
- 8V to 60V, 10A DC power supply V1 (for VIN)
- 2V, 100mA DC power supply V2 (for external reference input connected to REFIN)
- Loads capable of sinking 10A
- Five digital voltmeters (DVM)
- Function generator, square wave 0V-5V at frequency range from 200kHz to 2MHz
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 1-2 of jumper JU1 (external reference to REFIN for FB tracking mode).
- 2) Install shunts at jumpers JU10 and JU11 (DRV = 8.8V on board from VIN).
- 3) Leave the following jumpers open (no shunts): JU2 to JU9.
- 4) With power supplies off:
- a)  Connect the positive terminal of the power supply V1 to the VIN connector and the negative terminal of the power supply to the PGND connector, which is near the VIN connector.
- b)  Connect the positive terminal of the power supply V2 to REFINX, and the negative terminal to AGND, which is near REFINX.
- 5) Connect a 5A electronic load to the VOUT and PGND banana jack connectors and disable the load.
- 6) Reference to PGND, connect five voltmeters to VOUT, VDRV,  ENABLE,  TP11  (4V6\_BIAS),  and  POW-OK (power good).

<!-- image -->

## MAX15157B Evaluation Kit

## 7) Power on:

- a)  Turn both V1 (VIN) and V2 (REFINX) on at 0V.
- b)  Ramp up VIN to 13V, check VDRV for 8.8V (powered by U2), and ENABLE &gt; 0.7V (EN threshold).
- c)  Ramp up VIN to 30V or higher, UVLO should exceed 1V (threshold), and 4V6 pin (TP11) is around 4.55V.
- d)  Ramp REFINX from 0V to 1.05V, VOUT is ap -proximately 16.8V, and POW-OK (power good) about 4.55V (same voltage level as TP11).

## Detailed Description of Hardware

The MAX15157B EV kit is a fully assembled and tested board  to  evaluate  the  performance  of  the  MAX15157B at 150W synchronous step-down and/or step-up regulator. With the wide range of input and output voltage (input  from  8V  to  60V,  and  output  from  3V  to  0.94%  of input), the MAX15157B is well suited for telecommunication and industrial equipment applications.

## Regulator Enable (EN)

The MAX15157B features a shutdown mode to minimize the  IC  quiescent  current.  To  shut  down  the  IC,  pull  EN below 0.55V or install a shunt on the jumper JU3.

## Table 1. Default Setting of MAX15157B EV Kit

| JUMPER     | SHUNT POSITION   | FUNCTION                                             |
|------------|------------------|------------------------------------------------------|
| JU1        | 1-2              | Output tracking mode: set external voltage to REFINX |
| JU2 to JU9 | Open             |                                                      |
| JU10, JU11 | 1-2              | Using U2 = MAX17552 on board to provide 8.8V for DRV |

## Table 3. Reference Voltage (JU1)

| SHUNT POSITION      | REFIN PIN CONNECTION            | REFERENCE VOLTAGE                                  | VOUT RANGE                                               |
|---------------------|---------------------------------|----------------------------------------------------|----------------------------------------------------------|
| 1-2 (Tracking mode) | To external Voltage (at REFINX) | User-supplied reference voltage Range: 1.05V to 2V | VOUT = 16.8V to 32V (Increase R7 to get the higher VOUT) |
| 2-3 (Preset mode)   | To BIAS 4V6 pin                 | Internal 2V reference                              | VOUT = 32V (Increase R7 to get the higher VOUT)          |

Evaluates: MAX15157B

## Reference Voltage (REFIN)

The  MAX15157B  uses  an  internal  2V  reference  or  an external reference input. The IC regulates FB to the internal 2V or external voltage at REFINX, as shown at Table 3.

## Switching Frequencies (FREQ/CLK)

The  controller  supports  120kHz  to  1MHz  switching frequencies. The EV kit comes preset at a 600kHz switching frequency with the CLOCKIN (FREQ/CLK) unconnected. To adjust the switching frequency, either replace resistor R3  (connected  from  FREQ/CLK  to  GND)  by  using  the following equation:

<!-- formula-not-decoded -->

or drive the FREQ/CLK (CLOCKIN) with an external clock at twice speed of the switching frequency (it is not necessary to remove R3 when applying the external clock).

## Configuring the Output Voltage (VOUT)

VOUT voltage can be set between 3V to 0.94 x VIN, and externally programmed by using the following equation:

<!-- formula-not-decoded -->

where  V REFINX is  the  reference  voltage  in  Table  3 (2V for preset mode, 1.05V to 2V for tracking mode).

## Table 2. Regulator Enable (JU3)

| SHUNT POSITION   | EN PIN CONNECTION         | MAX15157B FUNCTION   |
|------------------|---------------------------|----------------------|
| Not installed    | Pull up to DRV through R4 | Enabled              |
| Installed        | GND                       | Disabled             |

## Soft-Start (SS)

The  MAX15157B  offers  the  SS  pin  to  adjust  soft-start time to limit inrush current during startup. Soft-start times are controlled by C13 for VOUT. An internal 5µA current source charges the capacitor at the SS pin to provide a linear  ramping  voltage  for  the  output  voltage  reference. The soft-start  time  of  VOUT  is  calculated  based  on  the following equation:

<!-- formula-not-decoded -->

where  V REFINX is  the  reference  voltage  in  Table  3 (2V for preset mode, 1.05V to 2V for tracking mode).

Note that during the initialization, the SS pin is held low until  UVLO  exceeds  its  threshold  voltage  of  1V.  The drivers start switching once SS exceeds 50mV, and the controller  enables  the  fault-protection  circuitry  when  SS exceeds 1V.

## Current-Limit Thresholds and Current Monitor

The low- and high-side current sensing can be set by R1 and R2, respectively. R1 is used for cycle-by-cycle current limit threshold. R2 is used for current monitor at a slower control loop. Refer to the Output Fault Protection section of MAX15157B data sheet for calculating the resistor R1 value and the Current Monitor section for the R2 resistor value.

## POW-OK (Power Good)

The  MAX15157B  EV  kit  provides  the  POW-OK  output (power-good  output)  test  point.  The  POW-OK  signal  is pulled up to the 4V6 BIAS by resistor R9, and POW-OK is high when VOUT is above 90% of its programmed output voltage.  When  VOUT  is  below  90%  of  its  programmed output voltage, POW-OK is pulled low.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15157BEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX15157B EV Kit Bill of Materials

|   ITEM |   QTY | DES REF                                                | # PART MFG                                                                                      | MANUFACTURER                     | VALUE    | DESCRIPTION                                                                                                     |
|--------|-------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------------------------------|----------|-----------------------------------------------------------------------------------------------------------------|
|      1 |     8 | AGND, CLOCKIN, ENABLE, GND, IREP, POW-OK, REFINX, VDRV | 9020 BUSS                                                                                       | WEICO WIRE                       | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                        |
|      2 |    42 | C0-C4, C7, C8, C34-C48, C60- C79                       | C5750X7S2A106M230KB                                                                             | TDK                              | 10UF     | CAPACITOR; SMT (2220); CERAMIC CHIP; 10UF; 100V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7S              |
|      3 |     2 | C6 C5,                                                 | EEE-FK1H221P                                                                                    | PANASONIC                        | 220UF    | CAPACITOR; SMT (CASE_G); ALUMINUM-ELECTROLYTIC; 220UF; 50V; TOL=20%; MODEL=FK SERIES; TG=-55 DEGC TO +105 DEGC  |
|      4 |     3 | C9, C10, C58                                           | EEV-FK1K151Q                                                                                    | PANASONIC                        | 150UF    | CAPACITOR; SMT (CASE_H13); ALUMINUM- ELECTROLYTIC; 150UF; 80V; TOL=20%; MODEL=; TG=-55 DEGC TO +105 DEGC        |
|      5 |     1 | C11                                                    | GRM188R71H683KA93                                                                               | MURATA                           | 0.068UF  | CAP; SMT (0603); 0.068UF; 10%; 50V; X7R; CERAMIC CHIP                                                           |
|      6 |     1 | C12                                                    | GRM1885C1H121JA01                                                                               | MURATA                           | 120PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 120PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                       |
|      7 |     1 | C13                                                    | C1608X5R1H104K080AA                                                                             | TDK                              | 0.1UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R       |
|      8 |     5 | C14, C19-C22                                           | C0603X7R500103JNP; C0603C103J5RAC                                                               | VENKEL LTD; KEMET                | 0.01UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/            |
|      9 |     4 | C17, C18, C24, C26                                     | UMK107AB7105KA; CC0603KRX7R9BB105                                                               | TAIYO YUDEN; YAGEO               | 1UF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                        |
|     10 |     1 | C23                                                    | GRM188R71E474KA12; GCM188R71E474KA64                                                            | MURATA; MURATA                   | 0.47UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R   |
|     11 |     1 | C25                                                    | EEE-FK2A220P                                                                                    | PANASONIC                        | 22UF     | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL=20%; MODEL=EEV SERIES; TG=-55 DEGC TO +105 DEGC |
|     12 |     3 | C27, C56, C57                                          | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                       | MURATA; TDK; MURATA              | 1000PF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                              |
|     13 |     2 | C28, CX1                                               | C0805C104K1RAC; C2012X7R2A104K125AA; GCM21BR72A104KA37; GRM21BR72A104KAC4; CGA4J2X7R2A104K125AA | KEMET; TDK; MURATA; MURATA; TDK  | 0.1UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
|     14 |     1 | C49                                                    | GRM31CR72A105KA01; C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH                       | MURATA; TDK; MURATA; TAIYO YUDEN | 1UF      | CAPACITOR; SMT; 1206; CERAMIC; 1uF; 100V; 10%; X7R; 55 DEGC TO +125 DEGC                                        |
|     15 |     1 | C50                                                    | GRM155R71C224KA12                                                                               | MURATA                           | 0.22UF   | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R        |

Evaluates: MAX15157B

## MAX15157B EV Kit Bill of Materials (continued)

|   ITEM |   QTY | DES REF                | # PART MFG                                                                         | MANUFACTURER                                | VALUE               | DESCRIPTION                                                                                              |
|--------|-------|------------------------|------------------------------------------------------------------------------------|---------------------------------------------|---------------------|----------------------------------------------------------------------------------------------------------|
|     16 |     2 | C51, C52               | GRM219R6YA475KA73                                                                  | MURATA                                      | 4.7UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
|     17 |     1 | C54                    | C0603C100J5GAC; GRM1885C1H100JA01; 06035A100JAT2A                                  | KEMET; MURATA; AVX                          | 10PF                | CAPACITOR; SMT; 0603; CERAMIC; 10pF; 50V; 5%; C0G; - 55degC to + 125degC, USE 20-0010p-E4 FOR NEW DESIGN |
|     18 |     1 | C59                    | CL05B102KO5NNN; C0402C102K4RAC                                                     | SAMSUNG; KEMET                              | 1000PF              | CAPACITOR; SMT (0402); CERAMIC; 1000PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                   |
|     19 |     1 | D2                     | BAS21J                                                                             | NXP                                         | BAS21J              | DIODE; SS; GENERAL PURPOSE DIODE; SMT (SOD-323); PIV=300V; IF=0.25A                                      |
|     20 |     1 | D4                     | SMBJ100A                                                                           | LITTELFUSE                                  | 100V                | VRM=100V (DO-214AA); SMB TVS; DIODE; ; IPP=3.7A                                                          |
|     21 |     3 | J1-J3                  | LS2-110-01-S-D-RA1                                                                 | SAMTEC                                      | LS2-110-01-S- D-RA1 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD DOWN; RIGHT ANGLE; 20PINS               |
|     22 |     4 | J3-1, J3-2, J4-1, J4-2 | 111-2223-001                                                                       | EMERSON NETWORK POWER                       | 111-2223-001        | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                |
|     23 |     3 | J4, J6, J7             | LS2-110-01-S-D-RA2                                                                 | SAMTEC                                      | LS2-110-01-S- D-RA2 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD UP; RIGHT ANGLE; 20PINS                 |
|     24 |     4 | JU1, JU4, JU8, JU9     | PEC03SAAN                                                                          | SULLINS                                     | PEC03SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                |
|     25 |     4 | JU3, JU7, JU10, JU11   | PEC02SAAN                                                                          | SULLINS                                     | PEC02SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                |
|     26 |     1 | L1                     | SER2915H-472KL                                                                     | COILCRAFT                                   | 4.7UH               | INDUCTOR; SMT; FERRITE CORE; 4.7UH; TOL=+/-10%; 30A                                                      |
|     27 |     1 | L2                     | LPS5030-154MR                                                                      | COILCRAFT                                   | 150UH               | 150UH; SHIELDED; SMT; INDUCTOR; TOL=+/-20%; 0.57A                                                        |
|     28 |     2 | M1, M2                 | BSC037N08NS5ATMA1                                                                  | INFINEON                                    | BSC037N08NS 5ATMA1  | TRAN; NCH; PG-TDSON8; PD-(114W); I-(100A); V-(80V)                                                       |
|     29 |     4 | MH1-MH4                | 9032                                                                               | KEYSTONE                                    | 9032                | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                |
|     30 |     1 | Q1                     | IRLR3110ZTRPBF                                                                     | INTERNATIONAL RECTIFIER                     | IRLR3110ZTRP BF     | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(140W); I-(63A); V-(100V)                                       |
|     31 |     1 | R1                     | WSL25121L000F                                                                      | DALE VISHAY                                 | 0.001               | RESISTOR; 2512; 0.001 OHM; 1%; 275PPM; 1.0W; METAL FILM                                                  |
|     32 |     1 | R3                     | CRCW060341K2FK                                                                     | DALE VISHAY                                 | 41.2K               | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                 |
|     33 |     1 | R4                     | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC; YAGEO | 100K                | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                      |
|     34 |     3 | R7, R12, R15           | CRCW060310K0FK; ERJ-3EKF1002                                                       | VISHAY DALE; PANASONIC                      | 10K                 | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                       |
|     35 |     1 | R8                     | CRCW06032K0FK; ERJ-3EKF2001                                                        | VISHAY DALE; PANASONIC                      | 2K                  | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                    |
|     36 |     2 | R9, R19                | ERJ-3GEYJ104; CRCW0603100KJN                                                       | PANASONIC; VISHAY                           | 100K                | RESISTOR; 0603; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                  |
|     37 |     1 | R10                    | CRCW0603270KFK;ERJ- 3EKF2703                                                       | VISHAY DALE; PANASONIC                      | 270K                | RESISTOR; 0603; 270K; 1%; 100PPM; 0.10W; THICK FILM                                                      |
|     38 |     7 | R11, R37, R38, R48-R51 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG; BOURNS; YAGEO PH                   | 0                   | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                     |

Evaluates: MAX15157B

## MAX15157B EV Kit Bill of Materials (continued)

|   ITEM |   QTY | DES REF                                   | # PART MFG                                   | MANUFACTURER                 | VALUE          | DESCRIPTION                                                                                                                                                                 |
|--------|-------|-------------------------------------------|----------------------------------------------|------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     39 |     1 | R13                                       | CRCW0603191KFK                               | DALE VISHAY                  | 191K           | RESISTOR; 0603; 191K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                     |
|     40 |     1 | R14                                       | CRCW060360K4FK                               | DALE VISHAY                  | 60.4K          | RESISTOR, 0603, 60.4KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                                                                                     |
|     41 |     1 | R16                                       | CRCW060315K0FK                               | DALE VISHAY                  | 15K            | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                                                                       |
|     42 |     2 | R17, R20                                  | ERJ-3GEYJ102                                 | PANASONIC                    | 1K             | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                       |
|     43 |     1 | R18                                       | CRCW06031K18FK; ERJ-3EKF1181                 | VISHAY DALE; PANASONIC       | 1.18K          | RESISTOR; 0603; 1.18K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                    |
|     44 |     4 | R21, R22, R25, R30                        | ERJ-3GEYJ100                                 | PANASONIC                    | 10             | RESISTOR; 0603; 10 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                       |
|     45 |     2 | R23, R24                                  | CRCW08054R70FK                               | VISHAY DALE                  | 4.7            | RESISTOR; 0805; 4.7 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                                                     |
|     46 |     1 | R34                                       | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0 | VISHAY DALE; ROHM; PANASONIC | 10             | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                       |
|     47 |     1 | R35                                       | CRCW04023M01FK                               | DALE VISHAY                  | 3.01M          | RESISTOR; 0402; 3.01M OHM; 1%; 100PPM; 0.063W; METAL FILM                                                                                                                   |
|     48 |     1 | R36                                       | ERJ-3EKF5902                                 | PANASONIC                    | 59K            | RESISTOR; 0603; 59K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                       |
|     49 |     1 | R39                                       | CRCW0402432KFK                               | DALE VISHAY                  | 432K           | RESISTOR; 0402; 432K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                    |
|     50 |     1 | R40                                       | CRCW0402110KFK                               | DALE VISHAY                  | 110K           | RESISTOR; 0402; 110K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                    |
|     51 |     1 | R42                                       | CRCW0402287KFK                               | DALE VISHAY                  | 287K           | RESISTOR, 0402, 287K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                   |
|     52 |     1 | R43                                       | TNPW040224K9BE                               | VISHAY                       | 24.9K          | +/ 0.1%; 24.9K; (0402); SMT RES; -25PPM/DEGC; 0.1W                                                                                                                          |
|     53 |     1 | R44                                       | CR0603-16W-5492FT                            | LTD. VENKEL                  | 54.9K          | RESISTOR; 0603; 54.9K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                   |
|     54 |     1 | R53                                       | WSL25123L000F                                | DALE VISHAY                  | 0.003          | RESISTOR; 2512; 0.003 OHM; 1%; 150PPM; 1.0W; METAL FILM                                                                                                                     |
|     55 |     8 | SU1-SU8                                   | S1100-B; SX1100-B; STC02SYAN                 | KYCON; KYCON; SULLINS        | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                     |
|     56 |    10 | TP1, TP2, TP4-TP7, TP11, TP12, TP15, TP16 | 5000                                         | KEYSTONE                     | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     57 |     1 | U1                                        | MAX15157BATJ+                                | MAXIM                        | MAX15157BA TJ+ | IC; CTRL; CURRENT MODE BUCK CONTROLLER WITH ACCURATE CURRENT REPORT; TQFN32-EP                                                                                              |
|     58 |     1 | U2                                        | MAX17552AUB+                                 | MAXIM                        | MAX17552AU B+  | IC; CONV; 60V; 100MA; ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH 22UA NO-LOAD SUPPLY CURRENT; UMAX10                                          |
|     59 |     1 | PCB                                       | MAX15157B                                    | MAXIM                        | PCB            | PCB:MAX15157B                                                                                                                                                               |

TOTAL

168

Evaluates: MAX15157B

## MAX15157B EV Kit Schematic

<!-- image -->

Evaluates: MAX15157B

## MAX15157B EV Kit PCB Layout Diagrams

MAX15757B EV Kit PCB Silkscreen Top Side

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

MAX15757B EV Kit PCB Silkscreen Top View

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

MAX15757B EV Kit PCB Layout-Internal Layer 2

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

MAX15757B EV Kit PCB Layout-Internal Layer 3

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

MAX15757B EV Kit PCB Layout-Internal Layer 4

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

MAX15757B EV Kit PCB Layout-Internal Layer 5

<!-- image -->

## MAX15157B EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15757B EV Kit PCB Layout Bottom Side

## MAX15157B EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15757B EV Kit PCB Silkscreen Bottom Side

## MAX15157B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------|-----------------|
|                 0 | 12/17           | Initial release                                                  | -               |
|                 1 | 2/18            | Updated Bill of Materials                                        | 4               |
|                 2 | 11/19           | Replaced Bill of Materials , Schematic , and PCB Layout Diagrams | 4-15            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX15157B