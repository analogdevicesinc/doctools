<!-- lastmod 2024-06-25 -->
<!-- image -->

Evaluates: MAX16165/MAX16166

## General Description

The MAX16165/MAX16166 evaluation kit (EV kit) monitors up to five voltages and sequences up to four voltages. The MAX16165 and MAX16166 provide an adjustable delay as each power supply is turned on as well as monitor each power supply voltage.

The MAX16166 EV kit comes with the MAX16166WPH+T installed. This product is RoHS compliant.

## Features

- 2.7V to 16.0V Wide Operating Voltage Range
- Monitor up to Five Voltages
- Sequence up to Four Voltages
- Configurable for MAX16165 and MAX16166
- EV Kit comes with LED Indicators for System Event
- Onboard LDO's are used for Sequencing/Monitoring
- Proven 4-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX16165/MAX16166 EV Kit Files

| FILE                            | DESCRIPTION     |
|---------------------------------|-----------------|
| MAX16165/MAX16166 EV BOM        | EVKIT BOM       |
| MAX16165/MAX16166 EV PCB LAYOUT | EVKIT Layout    |
| MAX16165/MAX16166 EV SCHEMATIC  | EVKIT Schematic |

Ordering Information appears at end of data sheet.

## MAX16165/MAX16166 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16165/MAX16166 EV kit
- 25V, 1A DC Power supply
- Oscilloscope
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps and  make  the  required  hardware  connections  to  start operation of the kit.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1.  Verify that shunt J1, J2, JSET\_, JEN\_, JIN\_, JLOAD, UVSET, and JPULLUP are configured as in Table 1 and Table 3.
2.  If the VDD is more than 5V, do not install shunt in J2.
3.  Connect the positive terminal of power supply to the VDD test point.
4.  Adjust the voltage to 5V and turn on the VDD power supply.
5.  Check the FAULT indicator LED and make sure it is not turned on.
6.  Remove shunt from J1(2:3) and connect to J1(1:2) to initiate the power-on sequencing.
7.  Verify that the status LEDs indicate the correct state of all  OUT\_,  DONE, and POK outputs during power-on sequencing.
8.  Once  power-on  sequencing  is  completed,  remove shunt  from  J1(1:2)  and  connect  to  J1(2:3)  to  initiate power-down sequencing.

319-100789; Rev 1; 6/24

## EV Kit Photo

Figure 1. MAX16165/MAX16166 EV Kit Board Connections

<!-- image -->

Evaluates: MAX16165/MAX16166

Evaluates: MAX16165/MAX16166

Table 1. MAX16165/MAX16166 EV Kit Jumper Description

| JUMPER   | JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                             |
|----------|----------|----------|------------------|-------------------------------------------------------------------------|
| MAX16165 | MAX16166 | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                             |
| J1       | J1       | VPULLUP  | 1-2              | Power-up sequencing                                                     |
| J1       | J1       | VPULLUP  | 2-3*             | Power-down sequencing                                                   |
| J1       | J1       | VPULLUP  | Not Installed    | Power-up and power-down sequencing using programmable controllers       |
| J2       | J2       | VDD      | 1-2*             | Connects VDD to VPULLUP                                                 |
| J2       | J2       | VDD      | Not Installed    | If VDD > 5V, an additional power supply is needed for VPULLUP           |
| J3       | J3       | FAULT    | 1-2*             | Enables LED Indicator for FAULT                                         |
| JSET1    | JSET1    | SET1     | 1-2*             | Feedback from VLDOOUT1                                                  |
| JSET1    | JSET1    | SET1     | 1-3              | ABP is connected to SET1, skips OUT1/disables channel 1                 |
| JSET1    | JSET1    | SET1     | 1-4              | OUT1 is connected to SET1                                               |
| JSET2    | JSET2    | SET2     | 1-2*             | Feedback from VLDOOUT2                                                  |
| JSET2    | JSET2    | SET2     | 1-3              | ABP is connected to SET2, skips OUT2/disables channel 2                 |
| JSET3    | JSET3    | SET3     | 1-2*             | Feedback from VLDOOUT3                                                  |
| JSET3    | JSET3    | SET3     | 1-3 1-4          | ABP is connected to SET3, skips OUT3/disables channel 3                 |
| JSET4    | JSET4    | SET4     | 1-2*             | OUT3 is connected to SET3 Feedback from VLDOOUT4                        |
| JSET4    | JSET4    | SET4     | 1-3              | ABP is connected to SET4, skips OUT4/disables channel 4                 |
| JSET4    | JSET4    | SET4     | 1-4              | OUT4 is connected to SET4                                               |
| JIN1     | JIN1     | U2_IN    | 1-2*             | VPULLUP is connected to LDO input                                       |
| JIN1     | JIN1     | U2_IN    | 2-3*             | VLDOOUT1 is connected to LDO input                                      |
| JIN2     | JIN2     |          |                  |                                                                         |
| JIN3     | JIN2     |          | 1-2              | VLDOOUT2 is connected to LDO input                                      |
| JIN4     | JIN3     | U4_IN    |                  | VPULLUP is connected to LDO input                                       |
| JIN4     | JIN3     | U4_IN    | 2-3*             |                                                                         |
|          | JIN4     | U5_IN    | 1-2              | VPULLUP is connected to LDO input                                       |
|          | JIN4     | U5_IN    | 2-3*             | VLDOOUT3 is connected to LDO input                                      |
| JEN1     | JEN1     | EN       | 1-2*             | Connects OUT1 with EN of U2                                             |
| JEN1     | JEN1     | EN       | Not Installed    | Sequencer only operation; DC-DC mode with feedback from LDO is disabled |

## Evaluates: MAX16165/MAX16166

|         |       |          | Not Installed   | Sequencer only operation; DC-DC mode with feedback from LDO is disabled   |
|---------|-------|----------|-----------------|---------------------------------------------------------------------------|
| JEN3    | JEN3  |          | 1-2*            | Connects OUT3 with EN of U4                                               |
|         |       |          | Not Installed   | Sequencer only operation; DC-DC mode with feedback from LDO is disabled   |
| JEN4    | JEN4  |          | 1-2*            | Connects OUT4 with EN of U5                                               |
| JEN4    | JEN4  |          | Not Installed   | Sequencer only operation; DC-DC mode with feedback from LDO is disabled   |
| JLOAD   | JLOAD | VLDOOUT_ | 1-2*            | Connects VLDOOUT1 with RLOAD1                                             |
| JLOAD   | JLOAD | VLDOOUT_ | 3-4*            | Connects VLDOOUT2 with RLOAD2                                             |
| JLOAD   | JLOAD | VLDOOUT_ | 5-6*            | Connects VLDOOUT3 with RLOAD3                                             |
| JLOAD   | JLOAD |          | 7-8*            | Connects VLDOOUT4 with RLOAD4                                             |
| JPULLUP |       | OUT_     | 1-2             | Connects OUT1 with PULLUP resistor                                        |
| JPULLUP |       | OUT_     | 3-4             | Connects OUT2 with PULLUP resistor                                        |
| JPULLUP |       | OUT_     | 5-6             | Connects OUT3 with PULLUP resistor                                        |
| JPULLUP |       | OUT_     | 7-8             | Connects OUT4 with PULLUP resistor                                        |
| JPULLUP |       | DONE     | 9-10            | Connects DONE with PULLUP resistor                                        |
| JPULLUP |       | POK      | 11-12           | Connects POK with PULLUP resistor                                         |
| JLED    | JLED  | OUT_     | 1-2*            | Enables LED indicator for OUT1                                            |
| JLED    | JLED  | OUT_     | 3-4*            | Enables LED indicator for OUT2                                            |
| JLED    | JLED  | OUT_     | 5-6*            | Enables LED indicator for OUT3                                            |
| JLED    | JLED  | OUT_     | 7-8*            | Enables LED indicator for OUT4                                            |
| JLED    | JLED  | DONE     | 9-10*           | Enables LED indicator for DONE                                            |
| JLED    | JLED  | POK      | 11-12*          | Enables LED indicator for POK                                             |

## Detailed Description of Hardware

The MAX16165/MAX16166 EV kit demonstrates the sequencer operation of four power supplies during turn-on and turnoff. During turn-off, the sequencer disables these four power supplies in reverse order.

The EV kit should be used with the following documents:

- MAX16165/MAX16166 data sheet
- MAX16165/MAX16166 EV kit data sheet (this document)

## Sequencer Operation

## 1. Power-On Sequencing

When the sequencer initiates power-on sequencing, the MAX16165/MAX16166 provide a capacitor-adjustable delay time (tDLY) before the first output is enabled. Connect a capacitor (C2) between DLY and GND to adjust the sequencing delay period (tDLY) that occurs between sequenced channels. Use the following formula to estimate the delay:

<!-- formula-not-decoded -->

where tDLY is in seconds and C2 is in Farads. Leave DLY unconnected for the minimum 40μs (typ) delay. After each t DLY the DLY capacitor discharges (internal 4Ω) with 40 µs. The accuracy of tDLY is affected by the C2 capacitor leakage and tolerance. A low-leakage ceramic capacitor is recommended.

In the EV kit, the sequencing delay period (tDLY) is 275ms.

## 2. Power-Off Sequencing

When the sequencer initiates power-off sequencing, an offset current IOFFSET is injected into the SET\_ pins, and the MAX16165/MAX16166 provide the delay time tDLY before the fourth output is disabled. Connect a resistor (R13) between IOS and GND to decide the IOFFSET of all the channels. Use the following formula to calculate the RIOS (R13) for an offset current IOFFSET:

<!-- formula-not-decoded -->

In the EV kit, the offset current value is 10µA.

## 3. Sequencer Only Operation

To operate in this mode, do not install the jumper JEN\_. JEN1, JEN2, JEN3, and JEN4 should be kept floating. This isolates the LDO's connection with MAX16165/MAX16166 IC. See Table 1 for a connection guide.

## Table 2. LED Indicator Status

| STATUS LED   | DESCRIPTION                                                            |
|--------------|------------------------------------------------------------------------|
| DS1 (OUT1)   | This Green LED indicates the status of OUT1, turns on when it is HIGH. |
| DS2 (OUT2)   | This Green LED indicates the status of OUT2, turns on when it is HIGH. |
| DS3 (OUT3)   | This Green LED indicates the status of OUT3, turns on when it is HIGH. |
| DS4 (OUT4)   | This Green LED indicates the status of OUT4, turns on when it is HIGH. |
| DS5 (DONE)   | This Green LED indicates the status of DONE, turns on when it is HIGH. |
| DS6 (POK)    | This Green LED indicates the status of POK, turns on when it is HIGH.  |
| DS7 (FAULT)  | This Red LED indicates the status of FAULT, turns on when it is LOW.   |

Evaluates: MAX16165/MAX16166

## UVSET

The MAX16165/MAX16166 also monitor UVSET input for an undervoltage condition after power-up. UVSET is supplied with VDD through a resistor divider R1 and R2 on the EV kits. R1 and R2 are configured to obtain approximately 0.5V at the UVSET pin.

## Table 3. UVSET Jumper Description/Connection Guide

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| UVSET    | 1-2*             | Connects VDD power supply to UVSET through resistor divider |
| UVSET    | 2-3              | Connects ABP to UVSET                                       |

*Default position

## FAULT Input/Output

FAULT is bidirectional. It is active low input and active low open-drain output. Refer to the MAX16165/MAX16166 data sheet for all conditions that assert a FAULT.

Note: If extended fault pulse width is desired, mount R26 and C18 to avoid channel skipping during initialization.

## SKIP or DISABLE Channels

If fewer than four channels are required, skip a channel by connecting the SET\_ pin to ABP pin.  The sequencing is similar with  four  channel  sequencing,  proceed  as  though  the  MAX16165/MAX16166  has  fewer  channels  (e.g.,  if  SET2  is connected to ABP, all logic for channel 2 is removed from the state machine; no delay, no timer, no UV detection, and no fault  triggered  from  this  channel). If  all  channels  are  skipped,  the  device  asserts  DONE  and  POK  immediately  after initialization.

## Power Good Timer and Power Timer Input (PGT)

The Power Good Timer is used to check the capability of a power supply to reach a set voltage within a capacitor adjustable delay (tPGT). Connect a capacitor (C3) between PGT and GND to adjust the sequencing delay period (tPGT) on the EV kit. Use the following formula to estimate the delay:

<!-- formula-not-decoded -->

where tPGT is in seconds and C3 is in Farads. Leave PGT unconnected for a minimum 5μs (typ) delay. The accuracy of the delay is affected by the C3 capacitor leakage and tolerance. A low-leakage ceramic capacitor is recommended.

In the EV kit, the sequencing delay period (tPGT) is 125ms.

## Open-Drain and Push-pull Outputs

The MAX16165 has open-drain outputs whereas the MAX16166 has push-pull outputs. Pullup resistors are required for open-drain outputs. The exact value of the pullup resistors for the open-drain outputs is not critical, but some consideration should be made to ensure the proper logic levels when the device is sinking current. For example, if VDD = 3.3V and the pullup  voltage  is  5V,  keep  the  sink  current  less  than  3.2mA  as  shown  in  the Electrical  Characteristics table  of MAX16165/16166 datasheet. As a result, the pullup resistor should be greater than 1.6kΩ. For a 12V pullup, the resistor should be larger than 3.74kΩ.

In the EV kit, R15, R18, R20, R22, R23, and R28 are pullup resistors, and their values are set to 10kΩ.

## SET\_IN Threshold and LDO Output Setting

The EV kit input-voltage thresholds are set to operate with 3.6V, 3.3V, 2.5V, and 1.8V (MAX16165/MAX16166) voltage systems. All input-voltage thresholds can be reconfigured by replacing the corresponding resistors R33, R34, R35, R36, R37, and R38 as shown in Figure 1. Refer to the Applications Information section of the MAX16165/MAX16166 IC data sheet and Resistor Value Selection section in the MAX38903 IC data sheet to calculate the new resistor values when reconfiguring the EV kit input thresholds.

Evaluates: MAX16165/MAX16166

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16166EVKIT#  | EV KIT |
| MAX16165EVKIT#* | EV KIT |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

*Future product -contact factory for availability.

Evaluates: MAX16165/MAX16166

## MAX16165/MAX16166 EV Kit Bill of Materials

| ITEM   | REF_DES                             | QTY   | MFGPART#                                             | MANUFACTURER                                      | VALUE   | DESCRIPTION                                                                        |
|--------|-------------------------------------|-------|------------------------------------------------------|---------------------------------------------------|---------|------------------------------------------------------------------------------------|
| 1 1 1  | ABP, VDD, VPULLUP ABP, VDD, VPULLUP | 3 3   | 5010 5010                                            | KEYSTONE KEYSTONE                                 | N/A     | TEST POINT;PIN DIA=0.125IN;TOTAL LENGTH=0.445IN;BOARDHOLE=0.063IN; RED;            |
| 2 2 2  | C2 C2                               | 1 1   | GCM188R70J225KE22J                                   | MURATA                                            | 2.2UF   | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X7R; CERAMIC                                    |
| 3 3 3  | C3, C5 C3, C5                       | 2 2   | C0603C105K9RACAUT                                    | KEMET                                             | 1UF     | CAP; SMT (0603); 1UF; 10%; 6.3V; X7R; CERAMIC                                      |
| 4 4    | C4 C4                               | 1     | 885012206071;C1608X7 R1E104K080AA;C0603C 104K3RAC    | WURTH ELECTRONICS INC;TDK                         | 0.1UF   | CAP;SMT (0603);0.1UF;10%; 25V;X7R; CERAMIC                                         |
| 5      | C6-C9, C14-C17                      | 8     | CL10B106MQ8NRN                                       | SAMSUNG ELECTRONICS                               | 10UF    | CAP; SMT (0603); 10UF; 20%; 6.3V; X7R; CERAMIC                                     |
| 6      | C10-C13                             | 4     | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55 | KEMET;MURATA;MUR ATA                              | 0.047UF | CAP; SMT (0603); 0.047UF; 10%; 50V; X7R; CERAMIC                                   |
| 7      | DONE,FAULT, POK                     | 3     | 5013                                                 | KEYSTONE                                          | N/A     | TEST POINT;PIN DIA=0.125IN;TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE;       |
| 8 8    | DS1-DS6 DS1-DS6                     | 6     | KP DELPS1.FP-UGVI- 34-Z555                           | OSRAM OSRAM                                       |         | LED; PURE GREEN; SMT; VF=2.9V; IF=0.01A                                            |
| 9 9    | DS7                                 | 1     | KS DELPS1.22-TIVH-68- H3Q4                           | OSRAM OSRAM                                       |         | LED; SUPER RED; SMT; VF=2.2V; IF=0.02A                                             |
| 10 10  | FAULTIN                             | 1     | B3U-1000P                                            | OMRON OMRON                                       |         | SWITCH; SPST; SMT; STRAIGHT; 12V; 0.05A;ULTRA-SMALLTACTILESWITCH                   |
| 11 11  | GND, GND1, VDD1, VPULLUP1           | 4     | 9020 BUSS                                            | WEICO WIRE WEICOWIRE                              |         | EVKKITPARTS;MAXIMPAD;WIRE; NATURAL;SOLID;SOFTDRAWNBUS TYPE-S;20AWG                 |
| 12     | J1, JIN2-JIN4, UVSET                | 5     | PCC03SAAN PCC03SAAN                                  | SULLINS SULLINS                                   |         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY;STRAIGHTTHROUGH; 3PINS;                   |
| 13     | J2, J3, JEN1-  JEN4, JIN1,  ON/OFF  | 8     | PEC02SAAN PEC02SAAN                                  | SULLINS SULLINS                                   |         | CONNECTOR;MALE;THROUGH HOLE; BREAKAWAY;STRAIGHT;2PINS                              |
| 14     | JLED, JPULLUP                       | 2     | PEC06DAAN PEC06DAAN                                  | SULLINS ELECTRONICS CORP. SULLINS ELECTRONICSCORP |         | CONNECTOR;MALE;THROUGH HOLE; BREAKAWAY;STRAIGHT;12PINS                             |
| 15     | JLOAD                               | 1     | PEC04DAAN PEC04DAAN                                  | SULLINS ELECTRONICS CORP. SULLINS ELECTRONICSCORP |         | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY;STRAIGHT;8PINS                             |
| 16     | MH1-MH4                             | 4     | 9032 9032                                            | KEYSTONE KEYSTONE                                 | 9032    | MACHINEFABRICATED;ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON            |
| 17     | ON, TP3                             | 2     | 5014                                                 | KEYSTONE                                          | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN;BOARD HOLE=0.063IN; YELLOW;      |
| 18     | Q1-Q6                               | 9     | ZXTN25020DFH                                         | DIODES INCORPORATED                               | 一       | TRAN;20VSOT23NPNMEDIUMPOWER TRANSISTOR; NPN; SOT-23; PD-(1.25W); I- (4.5A);V-(20V) |
| 19     | R1,R34,R36 R38,R40                  | 5     | ERJ-PA3F3003                                         | PANASONIC                                         | 300K    | RES; SMT (0603); 300K; 1%; +/- 100PPM/DEGC;0.2500W                                 |

Evaluates: MAX16165/MAX16166

## Evaluates: MAX16165/MAX16166

| 20    | R2                          | 1   | ERJ-3EKF3572                                                  | PANASONIC                                          | 35.7K   | RES; SMT (0603); 35.7K; 1%; +/- 100PPM/DEGC;0.1000W                       |
|-------|-----------------------------|-----|---------------------------------------------------------------|----------------------------------------------------|---------|---------------------------------------------------------------------------|
| 21    | R3                          | 1   | CRCW0603261KFK                                                | VISHAY DALE                                        | 261K    | RES; SMT (0603); 261K; 1%; +/- 100PPM/DEGK;0.1000W                        |
| 22    | R4                          | 1   | CRCW060345K3FK;                                               | VISHAY DALE                                        | 45.3K   | RES; SMT (0603); 45.3K; 1%; +/- 100PPM/DEGC;0.1000W                       |
| 23    | R5                          | 1   | CRCW0603232KFK                                                | VISHAY DALE                                        | 232K    | RES; SMT (0603); 232K;1%; +/- 100PPM/DEGC;0.1000W                         |
| 24    | R6                          | 1   | ERJ-3EKF4422                                                  | PANASONIC                                          | 44.2K   | RES; SMT (0603); 44.2K; 1%; +/- 100PPM/DEGC;0.1000W                       |
| 25    | R7                          | 1   | ERJ-3EKF1543                                                  | PANASONIC                                          | 154K    | RES; SMT (0603); 154K; 1%; +/- 100PPM/DEGC;0.1000W                        |
| 26    | R8                          | 1   | CRCW060341K2FK                                                | VISHAY DALE                                        | 41.2K   | RES; SMT (0603); 41.2K; 1%; +/- 100PPM/DEGK;0.1000W                       |
| 27    | R9                          | 1   | ERA-3AEB8872                                                  | PANASONIC                                          | 88.7K   | RES; SMT (0603); 88.7K; 0.10%; +/- 25PPM/DEGC; 0.1000W                    |
| 28    | R10                         | 2   | CRCW060337K4FK                                                | VISHAY                                             | 37.4K   | RES;SMT (0603); 37.4K;1%;+/- 100PPM/DEGK;0.1000W                          |
| 29    | R11,R12                     |     | CRCW060310K0FK;ERJ -3EKF1002;AC0603FR- 0710KL;RMCF0603FT10 KO | VISHAY DALE;PANASONIC;YA GEO                       | 10K     | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC;0.1000W                         |
| 30    | R13                         | 6   | PNM0603E5002BS                                                | VISHAY DALE                                        | 50K     | RES; SMT (0603); 50K; 0.10%; +/- 25PPM/DEGC;0.1500W                       |
| 31    | R14,R17, R21, R27, R41, R42 | 6   | ERJ-3GEYJ102                                                  | PANASONIC                                          | 1K      | RES; SMT (0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                          |
| 32    | R15,R18, R20, R22,R23, R28  | 7   | 301-10K-RC                                                    | XICON                                              | 10K     | RES; SMT (0603); 10K; 5%; +/- 200PPM/DEGC;0.0630W                         |
| 33    | R16, R19, R24, R25,R29-R31  | 1   | RNCP0603FTD2K00                                               | STACKPOLE ELECTRONICS INC.                         | 2K      | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1250W                          |
| 34    | R32                         | 1   | CRCW0603100KFK                                                | VISHAY DALE                                        | 100K    | RES; SMT (0603); 100K; 1%; +/- 100PPM/DEGC;0.1000W                        |
| 35    | R33                         | 1   | CRCW06031M50FK                                                | VISHAY DALE                                        | 1.5M    | RES;SMT (0603); 1.5M; 1%; +/- 100PPM/DEGC;0.1000W                         |
| 36    | R35                         | 1   | RC0402FR-071M33L                                              | YAGEO                                              | 1.33M   | RES; SMT (0402); 1.33M; 1%; +/- 100PPM/DEGK;0.0630W                       |
| 37    | R37                         | 1   | CRCW0402953KFKEDC; RC0402FR-07953KL                           | VISHAY;YAGEO                                       | 953K    | RES; SMT (0402); 953K; 1%; +/- 100PPM/DEGK;0.0630W;                       |
| 38    | R39                         | 1 1 | ERJ-2RKF6043                                                  | PANASONIC                                          | 604K    | RES; SMT (0402); 604K; 1%; +/- 100PPM/DEGC;0.1000W                        |
| 39    | RLOAD1- RLOAD4              | 4   | ERJ-14NF49R9 ERJ-14NF49R9                                     | PANASONIC PANASONIC                                | 49.9    | RES; SMT (1210); 49.9; 1%; +/- 100PPM/DEGC;0.5000W                        |
| 40    | SU1-SU33                    | 33  | STC02SYAN STC02SYAN                                           | SULLINS ELECTRONICS CORP. SULLINS ELECTRONICSCORP. |         | CONNECTOR;MALE;THROUGH HOLE; BREAKAWAY;STRAIGHT;4PINS                     |
| 41    | JSET1-JSET4, T1, T2         | 6   | PEC04SAAN PEC04SAAN                                           | SULLINS ELECTRONICS CORP. SULLINS ELECTRONICSCORP  |         | CONNECTOR;MALE;THROUGH HOLE; BREAKAWAY;STRAIGHT;4PINS                     |
| 42 42 | TP1, TP2                    | 2 2 | 5011 5011                                                     | KEYSTONE KEYSTONE                                  | N/A     | TESTPOINT;PIN DIA=0.125IN;TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK |

Evaluates: MAX16165/MAX16166

|   43 | U1                 |   1 | MAX16166AHWP+             | MAXIM                    | MAX16166AHWP+   | EVKITPART-IC;PWRM;QUADPOWER SUPPLYSEQUENCERAND SUPERVISOR; PACKAGECODE:W201C2+2;PACKAGE OUTLINEDRAWING:21-100553;WLP20   |
|------|--------------------|-----|---------------------------|--------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
|   44 | U2-U5              |   4 | MAX38903CANL+             | MAXIM                    | MAX38903CANL+   | IC; REG; 1.7V-5.5VIN; 1A LOW NOISE LDO LINEAR REGULATORS; WLP9                                                           |
|   45 | VLDOOUT1- VLD00UT4 |   4 | 5012                      | KEYSTONE                 | N/A             | TEST POINT;PIN DIA=0.125IN;TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE                                               |
|   46 | C18-C22            |   0 | 885012206071 885012206071 | WURTH ELECTRONICSINC     | 0.1UF 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                           |
|   47 | R26                |   0 | RNCP0603FTD100R           | STACKPOLE ELECTRONICSINC | 100 100         | RES; SMT (0603); 100; 1%; +/- 100PPM/DEGC;0.1250W                                                                        |
|   48 | C1                 |   0 | N/A                       | N/A                      | OPEN OPEN       | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                 |

## MAX16165/MAX16166 EV Kit Schematics

<!-- image -->

<!-- image -->

Figure 2.

<!-- image -->

Evaluates: MAX16165/MAX16166

## MAX16165/MAX16166 EV Kit PCB Layout

Figure 3. MAX16165/MAX16166 EV Kit PCB Layout -

<!-- image -->

8

00口

O

ooooo

MAX16165/MAX16166 EV Kit PCB Layout -

Evaluates: MAX16165/MAX16166

O

Top Silkscreen         MAX16165/MAX16166 EV Kit PCB Layout -Top

品

O

O

O

Layer 2                    MAX16165/MAX16166 EV Kit PCB Layout -Layer 3

<!-- image -->

O

。

。

O

O

O

O

口0O

O

。

。

<!-- image -->

Evaluates: MAX16165/MAX16166

MAX16165/MAX16166 EV Kit PCB Layout -Silkscreen

<!-- image -->

Bottom                     MAX16165/MAX16166 EV Kit PCB Layout -Bottom

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------|-----------------|
|                 0 | 8/21            | Release for Market Intro                             | -               |
|                 1 | 6/24            | Updated the Detailed Description of Hardware section | 5-6             |

<!-- image -->

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no  responsibility  is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX16165/MAX16166