<!-- lastmod 2022-08-02 -->
## MAX16602CL8 Evaluation Kit

## General Description

The  MAX16602CL8  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  surface-mount  circuit  board  that contains  all  of  the  components  necessary  to  evaluate  the  MAX16602  and  MAX20790.  The  MAX16602  is a  PMBus ™ -compatible,  multiphase  voltage  regulator controller  for AI  cores  or  Intel ®   VR13.HC  server  CPUs. The IC is packaged in a 56-pin, 7mm x 7mm QFN. The controller generates eight pulse-width modulated (PWM) control signals or phases. The EV kit is an 8-phase multiphase  synchronous  buck  converter  that  uses  2-phase coupled  inductors,  which  reduce  the  effective  inductor value  and  size  without  excessive  ripple  current,  thus reducing the required output capacitance and improving transient response.

The EV kit also demonstrates the full functionality of the MAX20790 smart power-stage IC. The IC has monolithic integration  and  advanced  packaging  technology  that allow  high-switching  frequencies  with  significantly  lower losses  than  conventional  implementations.  There  are eight MAX20790 devices for the main output rail.

Warning: The  EV  kit  is  designed  to  operate  with  12V input  and  high  current.  Follow  safe  procedures  when working with high-current electrical equipment.

Under severe fault  or  failure  conditions,  this  EV  kit  can dissipate  large  amounts  of  power,  which  could  result  in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc. Intel is a registered trademark of Intel Corporation.

Evaluates: MAX16602 and MAX20790

## Features

- High Power Density and Efficiency
- Monolithic, Smart Power-Stage Support: MAX20790
- Small Power-Stage Footprint: ~24mm 2
- Top-Tier Efficiency (95.6% Peak Efficiency at 1.8V OUT )
- Integrated Input Power Monitor
- Telemetry Through PMBus
- Digitally Programmable Configuration
- Input Voltage, Current, and Power Monitoring
- Power-Stage Temperature Monitoring and Reporting
- Advanced Power Management
-  Autonomous Phase-Shedding
- Orthogonal Current Rebalance for Phase-Current Balance During Transients
- Low Quiescent Current-Improves Light-Load and Standby Efficiency
- Protection Features
- Controller Input and Bias Supply Undervoltage Protection
- Power-Stage Supply and Boost UVLO Protection
- Power-Stage Boost Refresh
- Power-Stage VX Short and Overtemperature Shutdown
- Fast Overcurrent Protection
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX16602CL8 EV Kit Photo

<!-- image -->

│

## MAX16602CL8 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16602CL8 EV kit
- 12V DC power supply with 350W or higher power delivering capability
- Electronic load capable of sinking 200A
- MAXPOWERUSB dongle to SMBus interface (order separately)
- Maxim MAXPOWERUSB graphical user interface (GUI software)
- Digital voltmeters
- 600MHz 4-channel oscilloscope

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Connect the USB cable from the PC to the MAXPOWERUSB dongle. Connect the adapter ribbon cable to the matching header J17 on the EV kit.
- 2) Shunt pins 3-5 and shunt pins 4-6 of J5 to connect the core output feedback sensing.
- 3) Generate a 3.3V bias power supply for the controller, on-board load, and other logic circuits. Two options are provided:
- a. Using the on-board 3.3V LDO: Shunt J19 and the on-board LDO (U10) to generate a 3.3V bias output from the 12V VDDH input.
- b. Using the external 3.3V bias power supply: Connect an external 3.3V power supply to J22 and J23.
- 4) Generate a 1.8V bias power supply for the controller and power stages. Three options are provided:
- a. Using  the  MAX16602  integrated  baby  buck converter: Place a shunt across pins 3-4 of J3 and J26.  Do  not  install  R22  to  enable  the  integrated baby buck converter.
- b. Using  the  on-board  1.8V  LDO: Place  a  shunt across pins 5-6 of J3 and J26. Install R22 to disable the integrated baby buck converter.

## Evaluates: MAX16602 and MAX20790

- c. Using  the  external  1.8V  bias  power  supply: Connect an external 1.8V power supply to J24 and J25. Place a shunt across pins 1-2 of J3 and J26. Install  R22  to  disable  the  integrated  baby  buck converter.
- 5) Connect VCCIN\_VOUT to the load. Two options are provided:
- a. Using  the  external  electronic  load: Connect JMP1,  JMP3,  JMP7,  JMP12,  JMP15,  JMP17, JMP19, and JMP21 to the input terminal of the load. Connect JMP4, JMP6, JMP8, JMP14,  JMP16,  JMP18,  JMP20,  and  JMP22 to the ground of the load, being careful to observe the VOUT and GND polarity indicated by the silkscreen labels.
- b. Using the on-board load: Switch on SW2 to enable the on-board load. Connect the function generator to pin 1 of J1 to set the on-board load current.
- 6) Enable the external 12V power supply. Start the GUI software.

## Detailed Description of Software

The MAX16602 supports standard PMBus protocol. The MAXPOWERUSB software is designed to work with the MAX16602. The software GUI presents system-level information on the Dashboard tab.  This  view  collects  basic information  for  all  Maxim  PMBus  devices  detected  on the bus. This tab configures enable control, an overview of the system status, fault flag, and sequencing. The tab also presents rolling plotting results of the READ\_VOUT and READ\_IOUT registers.

For  detailed  information  about  a  particular  device,  click the  sub-tab  for  that  device's  slave  address.  This  opens a  view  with  a  set  of  further  sub-tabs  specific  to  that device.  The  available  sub-tabs  vary  depending  on  the GUI  version  and  the  connected  device's  capability,  but typically include Command Monitor , Command Configure , Command Faults , and Settings .

## MAX16602CL8 Evaluation Kit

## Detailed Description of Hardware

The MAX16602CL8 EV kit is a fully assembled and tested board to evaluate the performance of the MAX16602 plus an  8-phase  MAX20790 multiphase  power  solution  to AI core  or  Intel  VR13.HC  server  CPUs,  which  makes  use of  coupled  inductors.  This  solution  provides  high  output current with high efficiency, fast load-transient response, low ripple, and low noise. The EV kit provides completed peripheral circuits of the bias power supply, the on-board load, and PMBus for telemetry, which allow the EV kit to demonstrate  the  full  functionality  of  the  MAX16602  and MAX20790.

The  MAX16602  controller  automatically  interleaves  all PWM outputs assigned to a given output at even intervals. Each PWM signal is connected to one MAX20790 smart power-stage  device,  and  each  power  stage  is  capable of  supplying  up  to  45A  with  good  air-cooling  conditions. Every  two  power  stages  are  connected  to  a  2-phase coupled  inductor.  Unused  phases  can  be  disabled  by shorting the corresponding PWM pin to GND, allowing a single electrical design to be used for multiple applications with different output currents. A common PCB layout can be used with phases left unpopulated for lower output currents. The TSENSE and ISENSE pins for unused phases must be left unconnected.

The MAX16602 controller implements an orthogonal current  rebalancing  feature  to  provide  active  and  dynamic current  sharing  between  different  phase  currents.  This

Table 1. Bias Power Supply Shunt/Connector

| SHUNT/CONNECTOR   | SHUNT POSITION                            | DESCRIPTION                                 |
|-------------------|-------------------------------------------|---------------------------------------------|
| J19               | Installed                                 | Enable on-board 3.3V LDO                    |
| J29               | Installed                                 | Enable on-board 1V LDO                      |
| J22, J23          | J22 connects to 3.3V, J23 connects to GND | Connect external 3.3V power supply          |
| J24, J25          | J24 connects to 1.8V, J25 connects to GND | Connect external 1.8V power supply          |
| J3, J26           | 1-2 pins                                  | Connect external 1.8V power supply          |
| J3, J26           | 3-4 pins                                  | Connect the MAX16602 integrated 1.8V output |
| J3, J26           | 5-6 pins                                  | Connect 1.8V LDO output                     |

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX16602CL8EVKIT# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX16602 and MAX20790

feature maintains current balance during load transients, even at load frequencies close to the VR switching frequency  and  its  harmonics.  The  controller  also  allows autonomous  phase-shedding  control  of  the  number  of active phases to maximize the efficiency of the regulator and  improve  the  transient  response  performance.  The MAX16602 integrates all of the control-loop components that  were  previously  externally  mounted.  The  following VCORE regulator parameters are digitally selected:

- Switching frequency (300kHz to 857kHz)
- Load-line (0.105mΩ to 0.979mΩ). Refer to Table 6 in the  MAX16602  data  sheet  for  details  on  range  and steps.
- System OCP (30A to 695A). Refer to Table 7 in the MAX16602 data sheet for details.
- APS fast and slow thresholds
- Modulator ramp rate (0.4V/μs to 1.9V/μs, 0.1V/μs LSB)
- AMS ramp rate (0.125V/μs to 1.0625V/μs, 0.0625V/μs LSB)
- Current-loop zero (8.4kHz to 45.5kHz)
- Voltage-loop  zero  (9.6kHz  to  159.2kHz,  no-droop configuration only)
- RP (195Ω to 3770Ω, 65Ω LSB lower range to 162.5Ω LSB upper range)
- ROCR (1.5kΩ to 17kΩ, 500Ω LSB)

│

## MAX16602CL8 Evaluation Kit

## MAX16602CL8 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                                                                                                | DNI/ DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                                             | VALUE   | DESCRIPTION                                                                                   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------|
|      1 | C1, C2, C14-C16, C20, C33, C41, C255, C332, C368, C372, C813, C814, C819, C820                                                                                                                                         | -          |    16 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                  | MURATA; TDK; TAIYO YUDEN; TDK                            | 0.1UF   | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                |
|      2 | C3-C5, C9, C49, C53, C55, C89-C91, C347-C352, C354-C358, C411-C413, C453-C455, C483, C484, C511, C512, C589, C835                                                                                                      | -          |    33 | C0402C105K8PAC; CC0402KRX5R6BB105                                                             | KEMET; YAGEO                                             | 1UF     | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                  |
|      3 | C6, C8, C364, C365, C370, C373                                                                                                                                                                                         | -          |     6 | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN; 885012107005                | KEMET; MURATA; TAIYO YUDEN; SAMSUNG EL; WURTH ELECTRONIK | 22UF    | CAP; SMT (0805); 22UF; 20%; 6.3V; X5R; CERAMIC                                                |
|      4 | C7, C22-C24, C26-C28, C62-C64, C66- C68, C374-C378, C380, C429-C434, C467-C470, C495-C498                                                                                                                              | -          |    33 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK; SAMSUNG ELECTRONICS; MURATA; MURATA                 | 10UF    | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                 |
|      5 | C17, C18, C21, C25, C802, C803, C809, C810, C833, C834                                                                                                                                                                 | -          |    10 | C0402C0G500-100KNP                                                                            | VENKEL LTD.                                              | 10PF    | CAP; SMT (0402); 10PF; 10%; 50V; C0G; CERAMIC                                                 |
|      6 | C19, C29-C32, C34-C36, C70-C72, C74-C76, C259, C381-C383, C385, C389, C392, C435-C440, C471-C474, C499-C502, C811, C812                                                                                                | -          |    37 | GMK107BJ105KA; C1608X5R1V105K080AB                                                            | TAIYO YUDEN; TDK                                         | 1.0UF   | CAP; SMT (0603); 1.0UF; 10%; 35V; X5R; CERAMIC                                                |
|      7 | C38-C40, C42-C44, C78-C80, C82- C84, C326-C331, C396, C400-C406, C408, C441-C448, C450, C475-C480, C503-C508                                                                                                           | -          |    48 | GRM155R71E472KA01                                                                             | MURATA                                                   | 4700PF  | CAP; SMT (0402); 4700PF; 10%; 25V; X7R; CERAMIC                                               |
|      8 | C46-C48, C86-C88, C407, C409, C410, C449, C451, C452, C481, C482, C509, C510                                                                                                                                           | -          |    16 | C1005X5R1E474K050; GRT155R61E474KE01                                                          | TDK; MURATA                                              | 0.47UF  | CAP; SMT (0402); 0.47UF; 10%; 25V; X5R; CERAMIC                                               |
|      9 | C51, C57-C61, C65, C69, C73, C77, C81, C85, C92, C93, C99-C109, C112, C115, C116, C118, C119, C122-C125, C128-C134, C137-C140, C143-C206, C219-C239, C241-C253, C262-C325, C333-C338, C340, C379, C516-C588, C590-C801 | -          |   500 | GRM158C80G226ME01                                                                             | MURATA                                                   | 22UF    | CAP; SMT (0402); 22UF; 20%; 4V; X6S; CERAMIC ;                                                |
|     10 | C52, C54, C56, C94-C96, C414-C416, C456-C458, C485, C486, C513, C514                                                                                                                                                   | -          |    16 | C1005X5R1C684K050                                                                             | TDK                                                      | 0.68UF  | CAP; SMT (0402); 0.68UF; 10%; 16V; X5R; CERAMIC                                               |
|     11 | C97, C127, C136, C806, C821-C824                                                                                                                                                                                       | -          |     8 | GRM32ER60J227ME05                                                                             | MURATA                                                   | 220UF   | CAP; SMT (1210); 220UF; 20%; 6.3V; X5R; CERAMIC                                               |
|     12 | C113, C114, C117, C240, C256                                                                                                                                                                                           | -          |     5 | APXG200ARA391MJ80G                                                                            | UNITED CHEMI-CON                                         | 390UF   | CAP; SMT (CASE_J80); 390UF; 20%; 20V; CONDUCTIVE POLYMER                                      |
|     13 | C207-C218, C339, C341-C345, C417- C422, C459-C462, C487-C490                                                                                                                                                           | -          |    32 | C3216X5R1E226M160AB                                                                           | TDK                                                      | 22UF    | CAP; SMT (1206); 22UF; 20%; 25V; X5R; CERAMIC                                                 |
|     14 | C254                                                                                                                                                                                                                   | -          |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                        | TDK; MURATA; MURATA                                      | 0.047UF | CAP; SMT (0402); 0.047UF; 10%; 25V; X7R; CERAMIC                                              |
|     15 | C257, C361, C362                                                                                                                                                                                                       | -          |     3 | ECA-1EM331                                                                                    | PANASONIC                                                | 330UF   | CAP; THROUGH HOLE-RADIAL LEAD; 330UF; 20%; 25V; ALUMINUM-ELECTROLYTIC                         |
|     16 | C258, C260, C261                                                                                                                                                                                                       | -          |     3 | C3216X5R1E106M085                                                                             | TDK                                                      | 10UF    | CAP; SMT (1206); 10UF; 20%; 25V; X5R; CERAMIC                                                 |
|     17 | C346, C359, C360, C363, C366, C367, C369, C371, C384, C386-C388, C390, C391, C393-C395, C397-C399, C423- C428, C463-C466, C491-C494                                                                                    | -          |    34 | TMK212BBJ106KG; CL21A106KAFN3N                                                                | TAIYO YUDEN; SAMSUNG ELECTRO-MECHANI                     | 10UF    | CAPACITOR; SMT (0805); CERAMIC; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R ; |
|     18 | C353                                                                                                                                                                                                                   | -          |     1 | C0402C102K5GAC                                                                                | KEMET                                                    | 1000PF  | CAP; SMT (0402); 1000PF; 10%; 50V; C0G; CERAMIC                                               |

Evaluates: MAX16602 and MAX20790

## MAX16602CL8 Evaluation Kit

## MAX16602CL8 EV Kit Bill of Materials (continued)

| ITEM REF_DES                                | DNI/ DNP   | QTY                                               | MFG PART #         | MANUFACTURER                 | VALUE                            | DESCRIPTION                                                                                                                     |
|---------------------------------------------|------------|---------------------------------------------------|--------------------|------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 19 C804                                     | - 1        | C0402C121J5GAC; GCM1555C1H121JA16; UMK105CG121JVH | KEMET; YUDEN       | MURATA; TAIYO 120PF          | CAP; SMT (0402); 120PF; 5%; 50V; | C0G; CERAMIC                                                                                                                    |
| 20 D1                                       | -          | 1                                                 | BZX84C3V9-7        | DIODES INCORPORATED          | 3.9V                             | DIODE; ZNR; SMT (SOT-23); Vz=3.9V; Izm=0.005A                                                                                   |
| 21 D2                                       | -          | 1                                                 | BZX84C2V7LT1G      | ON SEMICONDUCTOR             | 2.7V                             | DIODE; ZNR; SMT (SOT-23); VZ=2.7V; IZ=0.01A; PD=0.225W                                                                          |
| 22 D3                                       | - 1        |                                                   | 1N5250B            | FAIRCHILD SEMICONDUCTOR      | 20V                              | DIODE, ZENER, DO-35, Pd=0.5W, Vz=20V@Iz=6.2mA                                                                                   |
| 23 DS1-DS3, DS7                             | - 4        |                                                   | HSMH-C650          | AVAGO TECHNOLOGIES           | HSMH-C650                        | DIODE; LED; STANDARD; TINTED DIFFUSED; RED; SMT (1206); PIV=1.8V; IF=0.025A                                                     |
| 24 DS4, DS8                                 | - 2        |                                                   | HSMG-C650          | AVAGO TECHNOLOGIES           | HSMG-C650                        | DIODE; LED; STANDARD; TINTED DIFFUSED; GREEN; SMT (1206); PIV=2.2V; IF=0.025A                                                   |
| 25 J1, J3, J5, J6, J12, J14, J26, J30       | -          | 8                                                 | TSW-103-07-L-D     | SAMTEC                       | TSW-103-07-L-D                   | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                                  |
| 26 J2, J19, J29                             | - 3        |                                                   | TSW-101-07-L-D     | SAMTEC                       | TSW-101-07-L-D                   | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS                                                          |
| 27 J4                                       | -          | 1                                                 | TSW-101-22-L-D     | SAMTEC                       | TSW-101-22-L-D                   | CONNECTOR; MALE; THROUGH HOLE; .025IN SQ POST HEADER; STRAIGHT; 2PINS                                                           |
| 28 J7                                       | -          | 1                                                 | 22-28-4043         | MOLEX                        | 22-28-4043                       | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                         |
| 29 J9, J16, J18                             | -          | 3                                                 | PBC09DAAN          | SULLINS ELECTRONICS CORP.    | PBC09DAAN                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 18PINS                                                                      |
| 30 J11, J13, J21, J23, J25                  | -          | 5                                                 | BP30B              | SUPERIOR ELECTRIC            | BP30B                            | CONNECTOR; FEMALE; PANELMOUNT; BLACK STANDARD SINGLE 5-WAY BINDING POST; STRAIGHT; 1PIN                                         |
| 31 J15                                      | -          | 1                                                 | TSW-105-07-L-D     | SAMTEC                       | TSW-105-07-L-D                   | CONNECTOR; THROUGH HOLE; DOUBLE ROW; STRAIGHT; 10PINS                                                                           |
| 32 J17                                      | -          | 1                                                 | AWHW16G-0202-T     | ASSMANN                      | AWHW16G-0202-T                   | CONNECTOR; MALE; THROUGH HOLE; BOXHEADER- LOW PROFILE; STRAIGHT; 16PINS                                                         |
| 33 J20, J22, J24                            | - 3        |                                                   | BP30R              | SUPERIOR ELECTRIC            | BP30R                            | CONNECTOR; FEMALE; PANELMOUNT; RED STANDARD SINGLE 5-WAY BINDING POST; STRAIGHT; 1PIN                                           |
| 34 J27                                      | -          | 1                                                 | PEC06SAAN          | SULLINS ELECTRONICS CORP.    | PEC06SAAN                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                                                       |
| 35 J28, J41-J43                             | -          | 4                                                 | TSW-101-07-L-S     | SAMTEC                       | TSW-101-07-L-S                   | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 1PIN                                                                       |
| 36 JMP1, JMP3, JMP4, JMP6-JMP8, JMP13-JMP22 | -          | 16                                                | B2A PCB            | INTERNATIONAL HYDRAULICS INC | B2A PCB                          | TEST POINT; CONNECTOR BUSS STAPLE; STR; TOTAL LENGTH=0.565; TIN; BODY = BRASS COPPER; TIN PLATED                                |
| 37 L1                                       | - 1        |                                                   | DFE201610E-1R5M=P2 | MURATA                       | 1.5UH                            | INDUCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/-20%; 2.1A                                                            |
| 38 L6, L8                                   | -          | 4                                                 | CTX17-18913-R      | EATON                        | CTX17-18913-R                    | INDUCTOR; SMT; FERRITE CORE; 100NH; TOL=+/-20%; 90A                                                                             |
| 39 MISC1                                    | -          | 1                                                 | AFB0512VHD         | DELTA ELECTRONICS, INC       | AFB0512VHD                       | FAN; PANELMOUNT 50MM X 50MM X 20MM; 12V                                                                                         |
| 40 Q1, Q4, Q11, Q14                         | -          | 4                                                 | BSS138             | ON SEMICONDUCTOR             | BSS138                           | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I- (0.22A); V-(50V); -55 DEGC TO +150 DEGC |
| 41 Q2, Q3, Q5-Q10                           | -          | 8                                                 | PSMN2R0-30YLE      | NEXPERIA                     | PSMN2R0-30YLE                    | TRAN; NCH; 2 MILLI-OHM LOGIC LEVEL MOSFET; LFPAK; PD-(272W); I-(100A); V-(30V)                                                  |
| 42 Q13                                      | -          | 1                                                 | FDV304P            | FAIRCHILD SEMICONDUCTOR      | FDV304P                          | TRAN; P-CHANNEL; DIGITAL FET; PCH; SOT-23 ; PD-(); I- (-0.46A); V-(-25V)                                                        |
| 43 R1                                       | -          | 1                                                 | CRCW04024R70FK     | VISHAY DALE                  | 4.7                              | RES; SMT (0402); 4.7; 1%; +/-100PPM/DEGC; 0.0630W                                                                               |
| 44 R2                                       | -          | 1                                                 | ERJ-2RKF2371       | PANASONIC                    | 2.37K                            | RES; SMT (0402); 2.37K; 1%; +/-100PPM/DEGC; 0.1000W                                                                             |

## MAX16602CL8 Evaluation Kit

Evaluates: MAX16602 and MAX20790

## MAX16602CL8 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                                                                                                                                                                                        | DNI/ DNP   |   QTY | MFG PART #                                      | MANUFACTURER                         | VALUE   | DESCRIPTION                                           |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------|-------------------------------------------------|--------------------------------------|---------|-------------------------------------------------------|
|     45 | R3                                                                                                                                                                                                                                             | -          |     1 | ERJ-2RKF1781                                    | PANASONIC                            | 1.78K   | RES; SMT (0402); 1.78K; 1%; +/-100PPM/DEGC; 0.1000W   |
|     46 | R4, R5, R16-R19, R23-R29, R32, R34- R36, R38, R39, R43, R54, R55, R61- R63, R83, R84, R95-R100, R125-R129, R131, R132, R144, R145, R148, R153, R154, R156, R157, R160-R163, R166, R167, R169, R190-R197, R201-R204, R206, R222-R225, R237-R260 | -          |    95 | ERJ-2GE0R00                                     | PANASONIC                            | 0       | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W           |
|     47 | R8-R13, R46, R49                                                                                                                                                                                                                               | -          |     8 | 9C04021A1000FL; RC0402FR- 07100RL               | PANASONIC; YAGEO PHYCOMP             | 100     | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W     |
|     48 | R30, R37, R67, R72-R77, R80, R81, R87, R92-R94, R123, R124, R130, R168, R170, R176-R184, R207-R217                                                                                                                                             | -          |    40 | ERJ-2RKF2001; ERJ-S02F2001                      | PANASONIC; PANASONIC                 | 2K      | RES; SMT (0402); 2K; 1%; +/-100PPM/DEGC; 0.1000W      |
|     49 | R33, R139                                                                                                                                                                                                                                      | -          |     2 | CRCW04022R0FK; CRCW04022R00FK                   | VISHAY DALE; VISHAY DALE             | 2       | RES; SMT (0402); 2; 1%; +/-100PPM/DEGC; 0.0630W       |
|     50 | R60, R136, R152                                                                                                                                                                                                                                | -          |     3 | ERJ-2RKF10R0                                    | PANASONIC                            | 10      | RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.1000W      |
|     51 | R64, R65, R88-R91, R174, R175                                                                                                                                                                                                                  | -          |     8 | WSHP28184L000F                                  | VISHAY                               | 0.004   | RES; SMT (2818); 0.004; 1%; +/-200PPM/DEGC; 10W       |
|     52 | R68                                                                                                                                                                                                                                            | -          |     1 | WSL25123L000F                                   | VISHAY DALE                          | 0.003   | RES; SMT (2512); 0.003; 1%; +/-150PPM/DEGC; 1W        |
|     53 | R69                                                                                                                                                                                                                                            | -          |     1 | ERA-2ARB4751                                    | PANASONIC                            | 4.75K   | RES; SMT (0402); 4.75K; 0.10%; +/-10PPM/DEGC; 0.0630W |
|     54 | R6, R7, R15, R20, R21, R31, R47, R48, R51, R53, R56-R59, R78, R79, R199, R200, R70, R71                                                                                                                                                        | -          |    20 | ERJ-2RKF1001                                    | PANASONIC                            | 1K      | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W      |
|     55 | R82, R107, R108, R111, R112, R138                                                                                                                                                                                                              | -          |     6 | CRCW0603280RFK; ERJ- 3EKF2800                   | VISHAY DALE; PANASONIC               | 280     | RES; SMT (0603); 280; 1%; +/-100PPM/DEGC; 0.1000W     |
|     56 | R85, R109                                                                                                                                                                                                                                      | -          |     2 | CRCW040220K0FK                                  | VISHAY DALE                          | 20K     | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W     |
|     57 | R86, R114, R119, R158, R185, R187, R188, R226, R261, R268, R269                                                                                                                                                                                | -          |    11 | ERJ-2RKF1002                                    | PANASONIC                            | 10K     | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W     |
|     58 | R101, R103, R105                                                                                                                                                                                                                               | -          |     3 | CRCW04022K10FK                                  | VISHAY DALE                          | 2.1K    | RES; SMT (0402); 2.1K; 1%; +/-100PPM/DEGC; 0.0630W    |
|     59 | R102, R104, R106                                                                                                                                                                                                                               | -          |     3 | ERJ-2RKF49R9                                    | PANASONIC                            | 49.9    | RES; SMT (0402); 49.9; 1%; +/-100PPM/DEGC; 0.1000W    |
|     60 | R110, R122                                                                                                                                                                                                                                     | -          |     2 | CRCW0603100RFK; ERJ- 3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC               | 100     | RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W     |
|     61 | R113, R118                                                                                                                                                                                                                                     | -          |     2 | ERJ-2RKF1003                                    | PANASONIC                            | 100K    | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.1000W    |
|     62 | R115, R135, R171-R173                                                                                                                                                                                                                          | -          |     5 | LRC-LR2512LF-01-R250F                           | TT ELECTRONICS                       | 0.25    | RES; SMT (2512); 0.25; 1%; +/-100PPM/DEGC; 2W         |
|     63 | R116                                                                                                                                                                                                                                           | -          |     1 | CRCW0402453RFK                                  | VISHAY DALE                          | 453     | RES; SMT (0402); 453; 1%; +/-100PPM/DEGC; 0.0630W     |
|     64 | R117, R121                                                                                                                                                                                                                                     | -          |     2 | CR0402-16W-6040FT; CRCW0402604RFK               | VENKEL LTD.; VISHAY DALE             | 604     | RES; SMT (0402); 604; 1%; +/-100PPM/DEGC; 0.0630W     |
|     65 | R120                                                                                                                                                                                                                                           | -          |     1 | CRCW04021K50FK                                  | VISHAY DALE                          | 1.5K    | RES; SMT (0402); 1.5K; 1%; +/-100PPM/DEGC; 0.0630W    |
|     66 | R134                                                                                                                                                                                                                                           | -          |     1 | ERA-2AEB1962                                    | PANASONIC                            | 19.6K   | RES; SMT (0402); 19.6K; 0.10%; +/-25PPM/DEGC; 0.0630W |
|     67 | R137                                                                                                                                                                                                                                           | -          |     1 | ERA-2AEB3740                                    | PANASONIC                            | 374     | RES; SMT (0402); 374; 0.10%; +/-25PPM/DEGC; 0.0630W   |
|     68 | R142                                                                                                                                                                                                                                           | -          |     1 | CR0402-16W-12R7FT                               | VENKEL LTD.                          | 12.7    | RES; SMT (0402); 12.7; 1%; +/-100PPM/DEGK; 0.0630W    |
|     69 | R146, R264                                                                                                                                                                                                                                     | -          |     2 | RG1608P-101-B; ERA-3YEB101; ERA-3AEB101         | SUSUMU CO LTD.; PANASONIC; PANASONIC | 100     | RES; SMT (0603); 100; 0.10%; +/-25PPM/DEGC; 0.1000W   |
|     70 | R151                                                                                                                                                                                                                                           | -          |     1 | ERA-2ARB6650                                    | PANASONIC                            | 665     | RES; SMT (0402); 665; 0.10%; +/-10PPM/DEGC; 0.0630W   |

## MAX16602CL8 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                             | DNI/ DNP   |   QTY | MFG PART #                                                                   | MANUFACTURER                            | VALUE         | DESCRIPTION                                                                                                                                                                                             |
|--------|---------------------------------------------------------------------|------------|-------|------------------------------------------------------------------------------|-----------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     71 | R155                                                                | -          |     1 | ERJ-2RKF7153                                                                 | PANASONIC                               | 715K          | RES; SMT (0402); 715K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      |
|     72 | R159                                                                | -          |     1 | CRCW040214K3FK                                                               | VISHAY DALE                             | 14.3K         | RES; SMT (0402); 14.3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                     |
|     73 | R164                                                                | -          |     1 | CRCW040284K5FK                                                               | VISHAY DALE                             | 84.5K         | RES; SMT (0402); 84.5K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                     |
|     74 | R165                                                                | -          |     1 | CRCW040231K6FK                                                               | VISHAY DALE                             | 31.6K         | RES; SMT (0402); 31.6K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                     |
|     75 | R186                                                                | -          |     1 | CRCW04021K30FK                                                               | VISHAY DALE                             | 1.3K          | RES; SMT (0402); 1.3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                      |
|     76 | R189                                                                | -          |     1 | CRCW040253R6FK; CR0402- 16W-53R                                              | VISHAY DALE; VENKEL LTD.                | 53.6          | RES; SMT (0402); 53.6; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                      |
|     77 | R205                                                                | -          |     1 | CRCW04021K00FK; RC0402FR- 071KL; MCR01MZPF1001                               | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI   | 1K            | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                        |
|     78 | R227-R234                                                           | -          |     8 | ERJ-2GEJ104                                                                  | PANASONIC                               | 100K          | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                                      |
|     79 | R235, R236                                                          | -          |     2 | RCC-0402PW5R00J                                                              | INTERNATIONAL MANUFACTURING SERVICE     | 5             | RES; SMT (0402); 5; 5%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                         |
|     80 | R267                                                                | -          |     1 | CRCW040212K0FK; MCR01MZPF1202                                                | VISHAY DALE; ROHM SEMICONDUCTOR         | 12K           | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                       |
|     81 | SU1-SU5                                                             | -          |     5 | S1100-B; SX1100-B; STC02SYAN                                                 | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                 |
|     82 | SW1, SW2                                                            | -          |     2 | GT21MCBE                                                                     | C&K COMPONENTS                          | GT21MCBE      | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS                                                            |
|     83 | U1, U2                                                              | -          |     2 | MAX15103EWL+                                                                 | MAXIM                                   | MAX15103EWL   | IC; VREG; SMALL 3A, LOW-DROPOUT LINEAR REGULATOR; WLP15                                                                                                                                                 |
|     84 | U4-U9, U19, U20                                                     | -          |     8 | MAX20790                                                                     | MAXIM                                   | MAX20790      | EVKIT PART - IC; MAX20790; SMART POWER-STAGE IC WITH INTEGRATED CURRENT AND TEMPERATURE SENSORS; PACKAGE OUTLINE DRAWING: 21-100261; LAND PATTERN DRAWING: 90-100099; PACKAGE CODE: F123A7F+1; FC2QFN12 |
|     85 | U12                                                                 | -          |     1 | MAX16602                                                                     | MAXIM                                   | MAX16602      | EVKIT PART-IC; VREG; MAX16602; TQFN56-EP                                                                                                                                                                |
|     86 | U13                                                                 | -          |     1 | MAX40010LAUT+                                                                | MAXIM                                   | MAX40010LAUT+ | IC; AMP; 76V PRECISION; HIGH-VOLTAGE; CURRENT- SENSE AMPLIFIER; GAIN=12.5V/V; SOT23-6                                                                                                                   |
|     87 | U21                                                                 | -          |     1 | MAXM17575ALI#                                                                | MAXIM                                   | MAXM17575ALI# | IC; PWRMOD; 4.5V TO 60V; 1.5A HIGH-EFFICIENCY; DC- DC STEP-DOWN POWER MODULE WITH INTEGRATED INDUCTOR; LGA28-3EP                                                                                        |
|     88 | U22, U23, U25, U31                                                  | -          |     4 | MAX9651AUA+                                                                  | MAXIM                                   | MAX9651AUA+   | IC; OPAMP; HIGH-CURRENT VCOM DRIVE OP AMP FOR TFT LCD; UMAX8-EP                                                                                                                                         |
|     89 | U24                                                                 | -          |     1 | MAX9141EKA+                                                                  | MAXIM                                   | MAX9141EKA+   | IC; COMP; 40NS, LOW-POWER, 3V/5V, RAIL-TO-RAIL SINGLE-SUPPLY COMPARATOR; SOT23-8                                                                                                                        |
|     90 | U26                                                                 | -          |     1 | LT1806CS6#PBF                                                                | ANALOG DEVICES                          | LT1806CS6#PBF | IC; OPAMP; 325MHZ; SINGLE; RAIL-TO-RAIL INPUT AND OUTPUT; LOW DISTORTION; LOW NOISE PRECISION OPERATIONAL AMPLIFIER; TSOT23-6                                                                           |
|     91 | PCB                                                                 | -          |     1 | MAX16600_FAB900557_01_00_ APPS_P1                                            | MAXIM                                   | PCB           | PCB:MAX16600_FAB900557_01_00_APPS_P1                                                                                                                                                                    |
|     92 | C10-C13, C37, C120, C121, C515, C815-C818                           | DNP        |     0 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA; TDK; TAIYO YUDEN; TDK           | 0.1UF         | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                                          |
|     93 | C45, C50, C98, C110, C111, C126, C135, C141, C142, C805, C807, C808 | DNP        |     0 | EEF-GX0D561L                                                                 | PANASONIC                               | 560UF         | CAP; SMT (7343-20); 560UF; 20%; 2V; ALUMINUM- ELECTROLYTIC                                                                                                                                              |

## MAX16602CL8 Evaluation Kit

Evaluates: MAX16602 and MAX20790

## MAX16602CL8 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                       | DNI/ DNP   |   QTY | MFG PART #                              | MANUFACTURER                         | VALUE            | DESCRIPTION                                                                                                                                                                                             |
|--------|---------------------------------------------------------------|------------|-------|-----------------------------------------|--------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 94     | C825-C832                                                     | DNP        |     0 | GRM1555C1E101GA01                       | MURATA                               | 100PF            | CAP; SMT (0402); 100PF; 2%; 25V; C0G; CERAMIC                                                                                                                                                           |
| 95     | J33-J38                                                       | DNP        |     0 | 5146800-1                               | TE CONNECTIVITY                      | 5146800-1        | CONNECTOR; FEMALE; THROUGH HOLE; KEYLESS INSERT ASSEMBLY; RIGHT ANGLE; 5PINS                                                                                                                            |
| 96     | L2, L4                                                        | DNP        |     0 | CLB1108-4-50TR-R                        | COOPER BUSSMANN                      | CLB1108-4-50TR-R | INDUCTOR; SMT; FERRITE CORE; 50NH; TOL=+/-20%; 25A                                                                                                                                                      |
| 97     | Q12                                                           | DNP        |     0 | BSS138                                  | ON SEMICONDUCTOR                     | BSS138           | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I- (0.22A); V-(50V); -55 DEGC TO +150 DEGC                                                                         |
| 98     | R14, R22, R40-R42, R44, R45, R50, R52, R143, R147, R149, R150 | DNP        |     0 | ERJ-2GE0R00                             | PANASONIC                            | 0                | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                             |
| 99     | R66, R133, R140, R141, R218-R221                              | DNP        |     0 | CRCW04022R0FK; CRCW04022R00FK           | VISHAY DALE; VISHAY DALE             | 2                | RES; SMT (0402); 2; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                         |
| 100    | R198, R275-R281                                               | DNP        |     0 | CRCW0402200KFK; RF73H1ELTP2003          | VISHAY DALE; KOA SPEER ELECTRONICS   | 200K             | RES; SMT (0402); 200K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                      |
| 101    | R262, R263                                                    | DNP        |     0 | ERJ-2RKF1001                            | PANASONIC                            | 1K               | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                        |
| 102    | R265, R266                                                    | DNP        |     0 | RG1608P-101-B; ERA-3YEB101; ERA-3AEB101 | SUSUMU CO LTD.; PANASONIC; PANASONIC | 100              | RES; SMT (0603); 100; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                                                                                                     |
| 103    | U3, U10, U11, U14-U18                                         | DNP        |     0 | MAX20790                                | MAXIM                                | MAX20790         | EVKIT PART - IC; MAX20790; SMART POWER-STAGE IC WITH INTEGRATED CURRENT AND TEMPERATURE SENSORS; PACKAGE OUTLINE DRAWING: 21-100261; LAND PATTERN DRAWING: 90-100099; PACKAGE CODE: F123A7F+1; FC2QFN12 |
| TOTAL  |                                                               |            |  1148 |                                         |                                      |                  |                                                                                                                                                                                                         |

## MAX16602CL8 EV Kit Schematic Diagrams

<!-- image -->

│

Evaluates: MAX16602 and MAX20790

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX16602CL8 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX16602CL8 Evaluation Kit

## MAX16602CL8 EV Kit PCB Layout Diagrams

MAX16602CL8 EV Kit PCB-Silkscreen Top Side

<!-- image -->

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Top Side

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 2

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 3

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 4

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 5

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 6

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

MAX16602CL8 EV Kit PCB-Internal Layer 7

<!-- image -->

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 8

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 9

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 10

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 11

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 12

O

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Internal Layer 13

│

Evaluates: MAX16602 and MAX20790

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Bottom Side

│

## MAX16602CL8 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16602CL8 EV Kit PCB-Silkscreen Bottom Side

O

│

## MAX16602CL8 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX16602 and MAX20790