<!-- lastmod 2023-12-15 -->
<!-- image -->

## General Description

The MAX15159 evaluation kit (EV kit) provides a proven design to evaluate the MAX15159, a high-voltage multiphase  boost/flyback  controller  with  enhanced  lowside MOSFET gate driver capability, designed to support single-phase,  dual-phase,  triple-phase,  or  quad-phase boost/flyback configuration.

The EV kit operates from a 40V to 60V input voltage range and provides a default 54V output voltage while the output voltage is configurable by changing the resistor-divider at FB pin or by using an external REFIN input voltage in the range of 1.5V to 2.2V. The EV kit uses the MAX15159 on a proven six-layer PCB design. The EV kit also features an onboard RCD circuit to provide a 10V supply voltage to the MAX15159. Two MAX15159 EV kits are required for triplephase or quad-phase operation.

## Features

- 40V to 60V Input Voltage Range for Flyback Configuration
- 54V Output Voltage
- -40 ° C to +85 ° C Temperature Range
- Banana Jacks for Input and Output Voltage
- Configurable Output Voltage and Compensation Parameters
- Adjustable Current Limit
- Flexibility  of  Adjusting  Output  Voltage  Enabled  by REFIN Feature
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX15159 Evaluation Kit

## Quick Start

## Required Equipment

- MAX15159 EV Kit
- One 80V DC Power Supply (PS1)
- One Optional 6V DC Power Supply (PS2)
- 0 to 1.6A Load
- Digital Voltmeters
- Oscilloscope and Probes

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1. Verify that a shunt is installed across jumpers J7, J9, and J10.
2. Set  the  power  supply  (PS1)  to  48V,  connect  the positive terminal of the power supply (PS1) to the VIN+ banana jack on the EV kit and connect the negative terminal of the power supply (PS1) to the VIN- banana jack.
3. If  an  internal  reference  voltage  is  not  used  (shunt connecting  Pin1:Pin2  on  J10  is  not  installed),  set another  power  supply  (PS2)  to  2.0V,  connect  the positive terminal of the power supply (PS2) to the test point EXT\_REF, and connect the negative terminal of the power supply (PS2) to the test point AGND. Use a shunt to connect Pin2 and Pin3 of J10.
4. Connect the positive terminal of the load to the VOUT+ banana jack, and connect the negative terminal of the load to the VOUT- banana jack.
5. Turn on power supply PS2, if it is used.
6. Turn on power supply PS1.
7. Position the SW1 toggle switch to ON to enable the IC.
8. Verify  that  the  voltage  between  the  OUT\_P  and OUT\_N test points is 54V.

The EV kit is now ready for additional evaluation.

319-101006; Rev 0; 7/23

## Evaluates: MAX15159

## MAX15159 EV Kit Photo

<!-- image -->

## MAX15159 Evaluation Kit

## Detailed Description of Hardware

This evaluation kit should be used with the following documents:

- MAX15159 Data Sheet
- MAX15159 EV Kit Data Sheet (this document)
- MAX5996C Data Sheet (optional)
- MAX5996C EV Kit Data Sheet (optional)

The MAX15159 EV kit provides a proven design to evaluate the MAX15159 fully integrated, highly efficient, two-phase switching regulator. The EV kit can easily be connected between the power input and the load using the banana jacks and connectors provided for the input and output. Test points and connectors are provided to monitor and control the device signals.

The EV kit operates in the 40V to 60V input voltage range. The output voltage is set to 54V by default on the EV kit. The output voltage can be adjusted by changing the resistor-divider across the tertiary winding, whose center is connected to FB pin or by using an external REFIN input voltage in the range of 1.5V to 2.2V. Make sure that the correct transformer, MOSFETs/rectifier diodes, and compensation loop are selected for stable operation.

## EN/UVLO Input for MAX15159

The device's enable input (EN/UVLO) is controlled by a resistor -divider ratio between R52 and R53. The divider ratio is chosen so that the VIN UVLO threshold is set at 35.8V by default. If the EN/UVLO pin voltage is above 1V, the MAX15159 will power up. The EN/UVLO pin can be connected to GND to disable the regulation. Additionally, a test point (EN) is also provided to drive the EN/UVLO pin.

## Bode Plot

A 10Ω resistor is insta lled  between the OUT\_P sense point and optocoupler to measure the Bode plot. BODE+ and BODEtest points are provided on the board on either side of the 10Ω resistor for small -signal injection and the ability to measure the Bode plot. The Bode plot can only be properly measured when the EV kit is configured with optocoupler feedback.

## Output Regulation

The OUT\_P and OUT\_N test points are provided to measure the V OUT  regulation.

## Efficiency Measurement

IN\_P and IN\_N are provided to measure V IN  during efficiency measurement. Also, OUT\_P and OUT\_N are provided to measure V OUT  during efficiency measurement.

## FREQ/CLK Pin

Switching frequency is selected by connecting the R30 resistor between the FREQ/CLK pin and AGND. The switching frequency can also be selected by providing a 480kHz to 4MHz external clock (360kHz to 3MHz for triple phase) at this pin. A test point (CLKIN) is also provided to drive this pin.

## REFIN Pin

By default, the REFIN pin is connected to the BIAS supply by shunt installed through Pin1:Pin2 on J10. This shunt can be removed, and REFIN can be connected to an external supply (between 1.5V and 2.2V) to change the VOUT reference with a shunt installed between Pin2:Pin3 on J10 and, therefore, change the output regulation voltage. The external supply should be applied between test point EXT\_REF and AGND.

## Optocoupler Feedback

The EV kit can be configured to feedback output voltage with optocoupler by removing R7 and installing R55, R56, R57, R62, and R70. Feedback with an optocoupler can be used for tight line/load regulation.

## Connecting Multiple EV Kits Together

The EV kit provides jumpers J1, J2, J3, and J4 to connect two EV kits together for three-phase or four-phase operation. As detailed in the MAX15159 data sheet, the EV kits can be configured for primary controller and secondary controller operation.

## Evaluates: MAX15159

## Interfacing with MAX5996C

The EV kit has a complete MAX5996C circuit on board, which provides a complete interface for a powered device (PD) to  comply  with  the  IEEE ®   802.3af/at/bt  standard  in  a  Power-over-Ethernet  (PoE)  system  with  a  detection  signature, classification signature, and integrated power switch with startup inrush current control. Refer to the MAX5996C IC data sheet for more details. The MAX5996C circuit can be enabled by installing R54.

IEEE is a registered trademark of The Institute of Electrical and Electronics Engineers, Inc.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15159EVKIT# | EV Kit |

#Denotes RoHS-compliant.

## MAX15159 Evaluation Kit

Evaluates: MAX15159

## MAX15159 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                                                      | DNI/DNP   |   QTY | MFR PART#                                                                              | MANUFACTURER                                   | VALUE       | DESCRIPTION                                                                                                                                                                         |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------|------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | COMPX, EN, EXT_DRV, EXT_REF, FB, GND1_SEC, GND2_SEC, IN_N, IN_P, LLDP_PD, LLDP_PICOB, MEC_PD, MEC_PICOB, OUT_N, OUT_P, PGOOD, PG_PD, REFIN, SS, SYNC, TP1-TP6, VDD, VSS, WAD | -         |    34 | 5013                                                                                   | KEYSTONE                                       | N/A         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      2 | C1-C4                                                                                                                                                                        | -         |     4 | C0805C103K1RAC; GRM21BR72A103KA01; 08055C103KAT2A                                      | KEMET;MURATA;AVX                               | 0.01UF      | CAP; SMT (0805); 0.01UF; 10%; 100V; X7R; CERAMIC                                                                                                                                    |
|      3 | C7-C11                                                                                                                                                                       | -         |     5 | GA352QR7GF102KW01                                                                      | MURATA                                         | 1000PF      | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC                                                                                                                                    |
|      4 | C12                                                                                                                                                                          | -         |     1 | C0805C473J1RAC; GRM21BR72A473JA01                                                      | KEMET;MURATA                                   | 0.047UF     | CAP; SMT (0805); 0.047UF; 5%; 100V; X7R; CERAMIC                                                                                                                                    |
|      5 | C13, C14, C33, C34                                                                                                                                                           | -         |     4 | EEE-FK2A470AQ                                                                          | PANASONIC                                      | 47UF        | CAP; SMT (CASE_H13); 47UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                                                                                         |
|      6 | C15, C26, C47                                                                                                                                                                | -         |     3 | GCM188R71E105KA64; CGA3E1X7R1E105K080AC                                                | MURATA;TDK                                     | 1UF         | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                        |
|      7 | C16-C19, C29-C32, C36, C37                                                                                                                                                   | -         |    10 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225; HMK325B7225KM              | MURATA;TDK;YAGEO;TAIYO YUDEN                   | 2.2UF       | CAP; SMT (1210); 2.2UF; 10%; 100V; X7R; CERAMIC                                                                                                                                     |
|      8 | C21                                                                                                                                                                          | -         |     1 | GRM188R71E474KA12                                                                      | MURATA                                         | 0.47UF      | CAP; SMT (0603); 0.47UF; 10%; 25V; X7R; CERAMIC                                                                                                                                     |
|      9 | C24, C25                                                                                                                                                                     | -         |     2 | C1206X222KGRAC; C1206X222KGRAC7800                                                     | KEMET;KEMET                                    | 2200PF      | CAP; SMT (1206); 2200PF; 10%; 2000V; X7R; CERAMIC                                                                                                                                   |
|     10 | C27, C28                                                                                                                                                                     | -         |     2 | GCM21A7U2E101JX01                                                                      | MURATA                                         | 100PF       | CAP; SMT (0805); 100PF; 5%; 250V; U2J; CERAMIC                                                                                                                                      |
|     11 | C35                                                                                                                                                                          | -         |     1 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K    | YAGEO;MURATA; TAIYO YUDEN;AVX;MURATA           | 0.1UF       | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                     |
|     12 | C43, C52                                                                                                                                                                     | -         |     2 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01                      | MURATA;PANASONIC; SAMSUNG;MURATA               | 0.01UF      | CAP; SMT (0603); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                                                                                     |
|     13 | C45, C46, C49, C50, C58                                                                                                                                                      | -         |     5 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                              | MURATA;TDK;MURATA                              | 1000PF      | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                                                      |
|     14 | C48, C62                                                                                                                                                                     | -         |     2 | C0603C101J5GAC; ECJ-1VC1H101J; C1608C0G1H101J080AA; GRM1885C1H101JA01; CL10C101JB81PN  | KEMET;PANASONIC;TDK; MURATA;SAMSUNG            | 100PF       | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                                                                                                                       |
|     15 | C51                                                                                                                                                                          | -         |     1 | GRM188R71C683KA01                                                                      | MURATA                                         | 0.068UF     | CAP; SMT (0603); 0.068UF; 10%; 16V; X7R; CERAMIC                                                                                                                                    |
|     16 | C54                                                                                                                                                                          | -         |     1 | GRM188Z71C225KE43; EMK107BB7225KA                                                      | MURATA;TAIYO YUDEN                             | 2.2UF       | CAP; SMT (0603); 2.2UF; 10%; 16V; X7R; CERAMIC                                                                                                                                      |
|     17 | C55                                                                                                                                                                          | -         |     1 | GRM188C71E225KE11                                                                      | MURATA                                         | 2.2UF       | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                                                                                                                      |
|     18 | C56, C57, C59                                                                                                                                                                | -         |     3 | C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC;TDK;KEMET;MURATA;TDK;AVX | 0.1UF       | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                      |
|     19 | C60, C72                                                                                                                                                                     | -         |     2 | C0603C0G500-561JNE; GRM1885C1H561JA01; ECJ-1VC1H561J                                   | VENKEL LTD;MURATA;PANASONIC                    | 560PF       | CAP; SMT (0603); 560PF; 5%; 50V; C0G; CERAMIC                                                                                                                                       |
|     20 | C64                                                                                                                                                                          | -         |     1 | C0603C153K5RAC; GRM188R71H153K                                                         | KEMET;MURATA                                   | 0.015UF     | CAP; SMT (0603); 0.015UF; 10%; 50V; X7R; CERAMIC                                                                                                                                    |
|     21 | C65                                                                                                                                                                          | -         |     1 | C1206C104K1RAC; C3216X7R2A104K160AA; GRM319R72A104KA01                                 | KEMET;TDK;MURATA                               | 0.1UF       | CAP; SMT (1206); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                     |
|     22 | C67                                                                                                                                                                          | -         |     1 | C0603C473K1RAC                                                                         | KEMET                                          | 0.047UF     | CAP; SMT (0603); 0.047UF; 10%; 100V; X7R; CERAMIC                                                                                                                                   |
|     23 | C68                                                                                                                                                                          | -         |     1 | C0603C822K5RAC                                                                         | KEMET                                          | 8200PF      | CAP; SMT (0603); 8200PF; 10%; 50V; X7R; CERAMIC                                                                                                                                     |
|     24 | C71                                                                                                                                                                          | -         |     1 | CGA3E2X7R2A103K; C0603C103K1RA; GRM188R72A103KA01; C1608X7R2A103K080AA                 | TDK;KEMET;MURATA;TDK                           | 0.01UF      | CAP; SMT (0603); 0.01UF; 10%; 100V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-00u01-M8                                                                             |
|     25 | C82                                                                                                                                                                          | -         |     1 | GRM39C0G220J50V; GRM1885C1H220J; C1608C0G1H220J080AA                                   | MURATA;MURATA;TDK                              | 22PF        | CAP; SMT (0603); 22PF; 5%; 50V; C0G; CERAMIC                                                                                                                                        |
|     26 | CHASSIS-GND, RTN, VDD_PD, VSS_PD, WAD_IN                                                                                                                                     | -         |     5 | 9020 BUSS                                                                              | WEICO WIRE                                     | MAXIMPAD    | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                            |
|     27 | D1                                                                                                                                                                           | -         |     1 | CMDZ5252B                                                                              | CENTRAL SEMICONDUCTOR                          | 24V         | DIODE; ZNR; SMT (SOD-323); VZ=24V; IZ=0.0052A                                                                                                                                       |
|     28 | D2                                                                                                                                                                           | -         |     1 | MBR230S1F-7                                                                            | DIODES INCORPORATED                            | MBR230S1F-7 | DIODE; RECT; SMT (SOD-123F); PIV=30V; IF=2A                                                                                                                                         |

www.analog.com

## MAX15159 Evaluation Kit

## Evaluates: MAX15159

## MAX15159 Evaluation Kit

| 29   | D3                                    | -   | 1   | BZT52C10S-7-F                                                 | DIODES INCORPORATED                      | 10V                | DIODE; ZNR; SMT (SOD-323); VZ=10V; IZ=0.005A                                                                                                                |
|------|---------------------------------------|-----|-----|---------------------------------------------------------------|------------------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 30   | D4-D6, D11, D13- D15                  | -   | 7   | 1N4148WS-7-F                                                  | DIODES INCORPORATED                      | 1N4148WS-7-F       | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                                                                 |
| 31   | D7, D9                                | -   | 2   | SMAJ64A                                                       | LITTELFUSE                               | 64V                | DIODE; TVS; SMA (DO-214AC); PIV=64V; IF=3.9A                                                                                                                |
| 32   | D8, D10                               | -   | 2   | S1B-13-F                                                      | DIODES INCORPORATED                      | S1B                | DIODE; RECT; SMA; PIV=100V; IF=1.0A                                                                                                                         |
| 33   | D16, D17                              | -   | 2   | S320                                                          | ON SEMICONDUCTOR                         | S320               | DIODE; SCH; SMB (DO-214AA); PIV=200V; IF=3A                                                                                                                 |
| 34   | D21                                   | -   | 1   | SMBJ45A                                                       | TAIWAN SEMICONDUCTOR                     | 45V                | DIODE; TVS; DO-214AA (SMB); VRM=45V; IPP=8.6A; NOTE: THESE PARTS HAVE 14 WEEKS LONG LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT      |
| 35   | D22                                   | -   | 1   | SMBJ58A-13-F                                                  | DIODES INCORPORATED                      | 58V                | DIODE; TVS; SURFACE MOUNT TRANSIENT VOLTAGE SUPPRESSOR; SMB; PIV=58V; IF=100A                                                                               |
| 36   | D23                                   | -   | 1   | B3100-13-F                                                    | DIODES INCORPORATED                      | B3100-13-F         | DIODE; RECT; SMC; PIV=100V; IF=3A                                                                                                                           |
| 37   | DS1                                   | -   | 1   | LTST-C150GKT                                                  | LITE-ON ELECTRONICS INC.                 | LTST-C150GKT       | DIODE; LED; ; SMT (1206); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC; GREEN                                                                                    |
| 38   | H1-H4                                 | -   | 4   | 2203                                                          | GENERIC PART                             | 2203               | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                       |
| 39   | H5-H8                                 | -   | 4   | 4C25MXPS;9900; 91772A106                                      | MCMASTER-CARR                            | PMSSS4400025PH     | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                                                                                             |
| 40   | J1, J3                                | -   | 2   | LS2-110-01-S-D-RA1                                            | SAMTEC                                   | LS2-110-01-S-D-RA1 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD DOWN; RIGHT ANGLE; 20PINS                                                                  |
| 41   | J1_DATA, J1_POWER                     | -   | 2   | 5520252-4                                                     | TE CONNECTIVITY                          | 5520252-4          | CONNECTOR; FEMALE; THROUGH HOLE; MODULAR JACK ASSEMBLY; KEYED; FLANGELESS; WITH PANEL STOP; RIGHT ANGLE; 8PINS                                              |
| 42   | J2, J4                                | -   | 2   | LS2-110-01-S-D-RA2                                            | SAMTEC                                   | LS2-110-01-S-D-RA2 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD UP; RIGHT ANGLE; 20PINS                                                                    |
| 43   | J7, J9                                | -   | 2   | 61301021121                                                   | WURTH ELECTRONICS INC                    | 61301021121        | CONNECTOR; MALE; THROUGH HOLE; 2.54 DUAL PIN HEADER; STRAIGHT; 10PINS                                                                                       |
| 44   | J8                                    | -   | 1   | PEC03DAAN                                                     | SULLINS ELECTRONICS CORP.                | PEC03DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                                                    |
| 45   | J10                                   | -   | 1   | PEC03SAAN                                                     | SULLINS                                  | PEC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                   |
| 46   | L1-L4                                 | -   | 4   | BLM18EG221SN1                                                 | MURATA                                   | 220                | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 2A                                                                                                     |
| 47   | L5-L12                                | -   | 8   | LQM2HPN4R7MG0                                                 | MURATA                                   | 4.7UH              | INDUCTOR; SMT (1008); FERRITE; 4.7UH; 20%; 1.10A                                                                                                            |
| 48   | L13                                   | -   | 1   | PG0083.232NL                                                  | PULSE                                    | 2.3UH              | INDUCTOR; SMT; POWER; 2.3UH; 25%; 7.5A                                                                                                                      |
| 49   | Q9                                    | -   | 1   | BCX56TA                                                       | DIODES INCORPORATED                      | BCX56TA            | TRAN; NPN MEDIUM POWER TRANSISTOR; NPN; SOT-89; PD-(1W); I-(1A); V-(80V)                                                                                    |
| 50   | Q10, Q11                              | -   | 2   | FDS86240                                                      | ON SEMICONDUCTOR                         | FDS86240           | TRAN; POWER TRENCH MOSFET; NCH; SO-8; PD- (5W); I-(7.5A); V-(150V)                                                                                          |
| 51   | Q14                                   | -   | 1   | SMMBT4403LT1G                                                 | ON SEMICONDUCTOR                         | SMMBT4403LT1G      | TRANS; PNP; SOT-23; PD=0.225W; IC=-0.6A; VCEO=-40V; NOTE: THESE PARTS HAVE 52 WEEKS LONG LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT |
| 52   | R1-R4                                 | -   | 4   | CRCW080575R0FK                                                | VISHAY DALE                              | 75                 | RES; SMT (0805); 75; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                            |
| 53   | R5, R7, R33, R59, R60, R74, R78, R104 | -   | 8   | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH     | 0                  | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                     |
| 54   | R6                                    | -   | 1   | CRCW080530K0FK                                                | VISHAY                                   | 30K                | RES; SMT (0805); 30K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                           |
| 55   | R8                                    | -   | 1   | CRCW060345K3FK; ERJ-3EKF4532                                  | VISHAY DALE;PANASONIC                    | 45.3K              | RES; SMT (0603); 45.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                         |
| 56   | R9, R53                               | -   | 2   | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY;PANASONIC; YAGEO;STACKPOLE        | 10K                | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                           |
| 57   | R10, R11, R37, R38, R45, R46, R86     | -   | 7   | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                  | VISHAY;ROHM SEMICONDUCTOR; PANASONIC     | 10                 | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                            |
| 58   | R12                                   | -   | 1   | CRCW080510R0FK; ERJ-6ENF10R0                                  | VISHAY DALE;PANASONIC                    | 10                 | RES; SMT (0805); 10; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                            |
| 59   | R13                                   | -   | 1   | CR0603-16W-4990FT                                             | VENKEL LTD.                              | 499                | RES; SMT (0603); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                           |
| 60   | R35, R49                              | -   | 2   | CRCW06033K00FK                                                | VISHAY DALE                              | 3K                 | RES; SMT (0603); 3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                            |
| 61   | R17, R20                              | -   | 2   | PMR18EZPFU10L0                                                | ROHM SEMICONDUCTOR                       | 0.01               | RES; SMT (1206); 0.01; 1%; +/-100PPM/DEGC; 1W                                                                                                               |
| 62   | R23, R24                              | -   | 2   | CRCW120630R0FK; RK73H2BTTD30R0F                               | VISHAY DALE;KOA SPEER                    | 30                 | RES; SMT (1206); 30; 1%; +/-100PPM/DEGC; 0.2500W                                                                                                            |
| 64   | R27                                   | -   | 1   | RCL12250000Z0                                                 | VISHAY DRALORIC                          | 0                  | RES; SMT (1225); 0; JUMPER; JUMPER; 2W                                                                                                                      |
|      |                                       | -   |     |                                                               |                                          |                    | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC;                                                                                                                 |
| 65   | R30, R100, R101                       |     | 3   | CRCW060349K9FK; ERJ-3EKF4992                                  | VISHAY DALE;PANASONIC                    | 49.9K              | 0.1000W                                                                                                                                                     |
| 66   | R34                                   | -   | 1   | CRCW0603100KFK; RC0603FR-07100KL;                             | VISHAY DALE;YAGEO;YAGEO; PANASONIC;YAGEO | 100K               | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                          |

www.analog.com

Analog Devices | 6

## Evaluates: MAX15159

## MAX15159 Evaluation Kit

|     |                          |    |    | RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL                                |                                                         |               |                                                                                                                                                                                           |
|-----|--------------------------|----|----|---------------------------------------------------------------------------------|---------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  67 | R36, R40                 | -  |  2 | CRCW060340K2FK; RC0603FR-0740K2L; ERJ-3EKF4022                                  | VISHAY DALE;YAGEO;PANASONIC                             | 40.2K         | RES; SMT (0603); 40.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  68 | R39, R47, R50, R61, R73  | -  |  5 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF; RMCF0603FT1K00                 | VISHAY;PANASONIC; BOURNS;STACKPOLE ELECTRONICS INC.     | 1K            | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                          |
|  69 | R41                      | -  |  1 | CRCW060351K1FK; ERJ-3EKF5112                                                    | VISHAY DALE;PANASONIC                                   | 51.1K         | RES; SMT (0603); 51.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  70 | R43                      | -  |  1 | RC0603FR-074K53L                                                                | YAGEO                                                   | 4.53K         | RES; SMT (0603); 4.53K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  71 | R51, R93                 | -  |  2 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK; RMCF0603FT20K0 | ROHM;PANASONIC;BOURNS; VISHAY;STACKPOLE ELECTRONICS INC | 20K           | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                         |
|  72 | R52                      | -  |  1 | CRCW0603348KFK                                                                  | VISHAY DALE                                             | 348K          | RES; SMT (0603); 348K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  73 | R58                      | -  |  1 | CRCW0603120KFK                                                                  | VISHAY DALE                                             | 120K          | RES; SMT (0603); 120K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  74 | R14,R63                  | -  |  2 | CRCW06032K0FK; ERJ-3EKF2001; RC0603FR-072KL; CRCW06032K00FK                     | VISHAY;PANASONIC; YAGEO;VISHAY                          | 2K            | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                          |
|  75 | R66                      | -  |  1 | CRCW06036K80FK                                                                  | VISHAY DALE                                             | 6.8K          | RES; SMT (0603); 6.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  76 | R67                      | -  |  1 | ERJ-3EKF7501; CRCW06037K50FK                                                    | PANASONIC;VISHAY                                        | 7.5K          | RES; SMT (0603); 7.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  77 | R69                      | -  |  1 | CRCW06031K65FK                                                                  | VISHAY DALE                                             | 1.65K         | RES; SMT (0603); 1.65K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  78 | R71                      | -  |  1 | CRCW060316K2FK                                                                  | VISHAY DALE                                             | 16.2K         | RES; SMT (0603); 16.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  79 | R75, R95                 | -  |  2 | CRCW060330R9FK                                                                  | VISHAY DALE                                             | 30.9          | RES; SMT (0603); 30.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  80 | R76                      | -  |  1 | CR0603-16W-1213FT                                                               | VENKEL LTD.                                             | 121K          | RES; SMT (0603); 121K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                        |
|  81 | R77                      | -  |  1 | CRCW0603330KFK                                                                  | VISHAY DALE                                             | 330K          | RES; SMT (0603); 330K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  82 | R79, R96                 | -  |  2 | CRCW060343R2FK                                                                  | VISHAY DALE                                             | 43.2          | RES; SMT (0603); 43.2; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  83 | R80, R97                 | -  |  2 | TNPW060366R5BE; ERA-3AEB66R5                                                    | VISHAY;PANASONIC                                        | 66.5          | RES; SMT (0603); 66.5; 0.10%; +/-25PPM/DEGK; 0.1000W                                                                                                                                      |
|  84 | R81, R98                 | -  |  2 | CRCW0603115RFK                                                                  | VISHAY DALE                                             | 115           | RES; SMT (0603); 115; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                         |
|  85 | R82, R99                 | -  |  2 | CRCW0603619RFK; ERJ-3EKF6190                                                    | VISHAY DALE;PANASONIC                                   | 619           | RES; SMT (0603); 619; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                         |
|  86 | R83                      | -  |  1 | ERJ-3EKF8661                                                                    | PANASONIC                                               | 8.66K         | RES; SMT (0603); 8.66K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  87 | R84                      | -  |  1 | CRCW060324K9FK; ERJ-3EKF2492                                                    | VISHAY DALE;PANASONIC                                   | 24.9K         | RES; SMT (0603); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  88 | R87                      | -  |  1 | CRCW060395R3FK; AC0603FR-0795R3L                                                | VISHAY;YAGEO                                            | 95.3          | RES; SMT (0603); 95.3; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  89 | R102                     | -  |  1 | CRCW06034K70FK                                                                  | VISHAY DALE                                             | 4.7K          | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |
|  90 | R109                     | -  |  1 | ERJ-3EKF1782; CRCW060317K8FK                                                    | PANASONIC;VISHAY                                        | 17.8K         | RES; SMT (0603); 17.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |
|  91 | SU1-SU3                  | -  |  3 | 929953-30                                                                       | 3M ELECTRONIC SOLUTIONS DIVISION                        | 929953-30     | CONNECTOR; FEMALE; THROUGH HOLE; 929 SERIES; SHUNT CONNECTOR; STRAIGHT; 2PINS                                                                                                             |
|  92 | SW1                      | -  |  1 | GT21MCBE                                                                        | C&K COMPONENTS                                          | GT21MCBE      | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS                                              |
|  93 | SW2-SW4                  | -  |  3 | B3FS-1000P                                                                      | OMRON                                                   | B3FS-1000P    | SWITCH; SPST; SMT; 24V; 0.05A; TACTILE SURFACE MOUNT SWITCH; RCOIL= OHM; RINSULATION= OHM; OMRON                                                                                          |
|  94 | T1                       | -  |  1 | 7490220126                                                                      | WURTH ELECTRONICS INC                                   | 7490220126    | EVKIT PART - TRANSFORMER; 7490220126; SMT- 24; SUMIDA                                                                                                                                     |
|  95 | T2, T3                   | -  |  2 | 14354-T064                                                                      | SUMIDA                                                  | 14354-T064    | EVKIT PART - TRANSFORMER; SMT; PRI:(37- 60V;300KHZ); AUX:(12V/0.02A); SEC:(54V/0.1A); SEC:(54V/0.83A); SMT-10                                                                             |
|  96 | U2, U3                   | -  |  2 | DF1501S                                                                         | DIODES INCORPORATED                                     | DF1501S       | DIODE; RECT; SMT; PIV=100V; IF=1.5A                                                                                                                                                       |
|  97 | U4                       | -  |  1 | MAX15159ATJ+                                                                    | ANALOG DEVICES                                          | MAX15159ATJ+  | EVKIT PART - IC; HIGH-VOLTAGE MULTIPHASE BOOST/FLYBACK CONTROLLER WITH NO-OPTO FEEDBACK; PACKAGE OUTLINE DRAWING 21- 0140; LAND PATTERN NUMBER 90-0012; PACKAGE CODE T3255+4C ; TQFN32-EP |
|  98 | U5                       | -  |  1 | FOD817CSD                                                                       | ON SEMICONDUCTOR                                        | FOD817CSD     | IC; OPTO; 4-PIN DIP PHOTOTRANSISTOR OPTOCOUPLER; SMT                                                                                                                                      |
|  99 | U6                       | -  |  1 | MAX5996C                                                                        | ANALOG DEVICES                                          | MAX5996C      | EVKIT PART - IC; MAX5996C; PACKAGE OUTLINE DRAWING: 21-100484; PACKAGE LAND PATTERN: 90-100171; TQFN16-EP                                                                                 |
| 100 | U8-U12                   | -  |  5 | FOD817ASD                                                                       | FAIRCHILD SEMICONDUCTOR                                 | FOD817ASD     | IC; OPTO; 4-PIN HIGH OPERATING TEMPERATURE PHOTOTRANSISTOR OPTOCOUPLER; SMT                                                                                                               |
| 101 | U13                      | -  |  1 | TL431AQDBZRQ1                                                                   | TEXAS INSTRUMENTS                                       | TL431AQDBZRQ1 | IC; VREG; ADJUSTABLE PRECISION SHUNT REGULATOR; SOT-23                                                                                                                                    |
| 102 | VIN+, VIN-, VOUT+, VOUT- | -  |  4 | 111-2223-001                                                                    | EMERSON NETWORK POWER                                   | 111-2223-001  | MACHINE SCREW; THUMBSCREW; BANANA; 1/4- 32IN; 11/32IN; NICKEL PLATED BRASS                                                                                                                |

www.analog.com

Analog Devices | 7

## Evaluates: MAX15159

## MAX15159 Evaluation Kit

|   103 | PCB                                                                             | -   |   1 | MAX15159                                                                                      | ANALOG DEVICES                                          | PCB          | PCB:MAX15159                                                                                                                                                                        |
|-------|---------------------------------------------------------------------------------|-----|-----|-----------------------------------------------------------------------------------------------|---------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   104 | U7                                                                              | -   |   2 | BCS-110-L-S-TE                                                                                | SAMTEC                                                  | N/A          | CONNECTOR; FEMALE; THROUGH HOLE; TIGER CLAW PASS-THROUGH SOCKET; STRAIGHT; 10PINS                                                                                                   |
|   105 | U7                                                                              | -   |   2 | TSW-110-07-F-S                                                                                | SAMTEC                                                  | N/A          | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                                                                            |
|   106 | BODE+, BODE-, DH1, DH2                                                          | DNP |   4 | 5013                                                                                          | KEYSTONE                                                | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|   107 | C5, C6                                                                          | DNP |   2 | C1210C105K1RAC; C1210C105K1R1C; CL32B105KCJNNN                                                | KEMET;KEMET; SAMSUNG ELECTRO-MECHANICS                  | 1UF          | CAP; SMT (1210); 1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                       |
|   108 | C20                                                                             | DNP |   1 | GCM188R71E105KA64; CGA3E1X7R1E105K080AC                                                       | MURATA;TDK                                              | 1UF          | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                        |
|   109 | C22, C23                                                                        | DNP |   2 | C0805C221J2GAC; GRM21A5C2D221JW01                                                             | KEMET;MURATA                                            | 220PF        | CAP; SMT (0805); 220PF; 5%; 200V; C0G; CERAMIC                                                                                                                                      |
|   110 | C38-C41, C73-C78                                                                | DNP |  10 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225; HMK325B7225KM                     | MURATA;TDK;YAGEO; TAIYO YUDEN                           | 2.2UF        | CAP; SMT (1210); 2.2UF; 10%; 100V; X7R; CERAMIC                                                                                                                                     |
|   111 | C42                                                                             | DNP |   1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                     | MURATA;TDK;MURATA                                       | 1000PF       | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                                                      |
|   112 | C44, C53                                                                        | DNP |   2 | GRM1885C1H470JA01                                                                             | MURATA                                                  | 47PF         | CAP; SMT (0603); 47PF; 5%; 50V; C0G; CERAMIC                                                                                                                                        |
|   113 | C61                                                                             | DNP |   1 | C1608X5R1H474K080AB                                                                           | TDK                                                     | 0.47UF       | CAP; SMT (0603); 0.47UF; 10%; 50V; X5R; CERAMIC                                                                                                                                     |
|   114 | C63                                                                             | DNP |   1 | C0603X472J1GAC; CGA3E1C0G2A472J080AC                                                          | KEMET;TDK                                               | 4700PF       | CAP; SMT (0603); 4700PF; 5%; 100V; C0G; CERAMIC                                                                                                                                     |
|   115 | C66                                                                             | DNP |   1 | CGA3E2X7R2A103K; C0603C103K1RA; GRM188R72A103KA01; C1608X7R2A103K080AA                        | TDK;KEMET;MURATA;TDK                                    | 0.01UF       | CAP; SMT (0603); 0.01UF; 10%; 100V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-00u01-M8                                                                             |
|   116 | C69                                                                             | DNP |   1 | C0603C473K1RAC                                                                                | KEMET                                                   | 0.047UF      | CAP; SMT (0603); 0.047UF; 10%; 100V; X7R; CERAMIC                                                                                                                                   |
|   117 | C70                                                                             | DNP |   1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA; TDK;TDK;SAMSUNG                          | 0.1UF        | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                      |
|   118 | C79, C80                                                                        | DNP |   2 | C1206X222KGRAC; C1206X222KGRAC7800                                                            | KEMET;KEMET                                             | 2200PF       | CAP; SMT (1206); 2200PF; 10%; 2000V; X7R; CERAMIC                                                                                                                                   |
|   119 | C81                                                                             | DNP |   1 | GRM188C71E225KE11                                                                             | MURATA                                                  | 2.2UF        | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                                                                                                                      |
|   120 | D12, D19, D20                                                                   | DNP |   3 | 1N4148WS-7-F                                                                                  | DIODES INCORPORATED                                     | 1N4148WS-7-F | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                                                                                         |
|   121 | D18                                                                             | DNP |   1 | SK810L-TP                                                                                     | MICRO COMMERCIAL COMPONENTS                             | SK810L-TP    | DIODE; SCH; SMC (DO-214AB); PIV=100V; IF=8A                                                                                                                                         |
|   122 | Q1-Q8                                                                           | DNP |   8 | FDS86240                                                                                      | ON SEMICONDUCTOR                                        | FDS86240     | TRAN; POWER TRENCH MOSFET; NCH; SO-8; PD- (5W); I-(7.5A); V-(150V)                                                                                                                  |
|   123 | Q12, Q13                                                                        | DNP |   2 | FDS2672                                                                                       | ON SEMICONDUCTOR                                        | FDS2672      | TRAN; ULTRAFET TRENCH MOSFET; NCH; SO-8; PD-(2.5W); I-(3.9A); V-(200V)                                                                                                              |
|   124 | R15, R19                                                                        | DNP |   2 | PMR18EZPFU10L0                                                                                | ROHM SEMICONDUCTOR                                      | 0.01         | RES; SMT (1206); 0.01; 1%; +/-100PPM/DEGC; 1W                                                                                                                                       |
|   125 | R16                                                                             | DNP |   1 | CRCW080510R0FK; ERJ-6ENF10R0                                                                  | VISHAY DALE;PANASONIC                                   | 10           | RES; SMT (0805); 10; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                    |
|   126 | R18, R28, R29, R31, R32, R44, R48, R54, R55, R57, R62, R88, R89, R91, R92, R103 | DNP |  16 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                                | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH                    | 0            | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                                             |
|   127 | R21, R22                                                                        | DNP |   2 | CRCW1206200RFK                                                                                | VISHAY DALE                                             | 200          | RES; SMT (1206); 200; 1%; +/-100PPM/DEGC; 0.2500W                                                                                                                                   |
|   128 | R42                                                                             | DNP |   1 | CRCW06031M00FK; MCR03EZPFX1004                                                                | VISHAY DALE;ROHM                                        | 1M           | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                    |
|   129 | R56                                                                             | DNP |   1 | CRCW0603200KFK                                                                                | VISHAY DALE                                             | 200K         | RES; SMT (0603); 200K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                  |
|   130 | R64                                                                             | DNP |   1 | ERJ-3EKF7502; CRCW060375K0FK                                                                  | PANASONIC;VISHAY                                        | 75K          | RES; SMT (0603); 75K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                   |
|   131 | R65                                                                             | DNP |   1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK; RMCF0603FT20K0               | ROHM;PANASONIC;BOURNS; VISHAY;STACKPOLE ELECTRONICS INC | 20K          | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                   |
|   132 | R68                                                                             | DNP |   1 | CRCW060315K0FK                                                                                | VISHAY DALE                                             | 15K          | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                   |
|   133 | R70                                                                             | DNP |   1 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                                  | VISHAY; ROHM SEMICONDUCTOR; PANASONIC                   | 10           | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                    |
|   134 | R72                                                                             | DNP |   1 | CRCW060349K9FK; ERJ-3EKF4992                                                                  | VISHAY DALE;PANASONIC                                   | 49.9K        | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                 |
|   135 | R85                                                                             | DNP |   1 | CRCW060343R2FK                                                                                | VISHAY DALE                                             | 43.2         | RES; SMT (0603); 43.2; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                  |
|   136 | R90                                                                             | DNP |   1 | CRCW060360K4FK                                                                                | VISHAY DALE                                             | 60.4K        | RES; SMT (0603); 60.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                 |
|   137 | R94                                                                             | DNP |   1 | CRCW060330R9FK                                                                                | VISHAY DALE                                             | 30.9         | RES; SMT (0603); 30.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                  |

www.analog.com

## Evaluates: MAX15159

## MAX15159 Evaluation Kit

|   138 | R106-R108   | DNP   |   3 | CRCW120620K0FK; RM12F2002CT   | VISHAY DALE;CAL-CHIP ELECTRONIC INC.   | 20K             | RES; SMT (1206); 20K; 1%; +/-100PPM/DEGC; 0.2500W   |
|-------|-------------|-------|-----|-------------------------------|----------------------------------------|-----------------|-----------------------------------------------------|
|   139 | U1          | DNP   |   1 | LT4321HUF#TRPBF               | ANALOG DEVICES                         | LT4321HUF#TRPBF | IC; CTRL; POE IDEAL DIODE BRIDGE CONTROLLER; QFN16  |

## Evaluates: MAX15159

## MAX15159 EV Kit Schematic

<!-- image -->

## MAX15159 Evaluation Kit

## Evaluates: MAX15159

## MAX15159 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX15159

## MAX15159 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX15159

## MAX15159 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX15159

## MAX15159 EV Kit PCB Layout

MAX15159 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX15159 EV Kit PCB Layout -Layer 2

<!-- image -->

## MAX15159 Evaluation Kit

MAX15159 EV Kit PCB Layout -Top

<!-- image -->

MAX15159 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX15159

## MAX15159 EV Kit PCB Layout (continued)

MAX15159 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX15159 EV Kit PCB Layout -Bottom

<!-- image -->

## MAX15159 Evaluation Kit

MAX15159 EV Kit PCB Layout -Layer 5

<!-- image -->

MAX15159 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX15159

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX15159 Evaluation Kit