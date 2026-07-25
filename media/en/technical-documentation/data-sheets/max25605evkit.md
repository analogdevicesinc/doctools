<!-- lastmod 2022-08-03 -->
## MAX25605 Evaluation Kit

## General Description

The MAX25605 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25605  6-switch  sequential LED  controller  for  automotive  lighting  systems.  The MAX25605  EV  kit  demonstrates  a  complete  sequential lighting design, including an on-board timing circuit, two MAX25611  LED  drivers  configured  as  boost-to-battery (battery  referenced  buck-boost),  and  two  MAX25605 sequential LED controllers. Additionally, the EV kit has 12 yellow  LEDs  installed  and  comes  with  an  acrylic  shield to cover the LEDs for eye protection. The board includes mechanical  switches  to  easily  demonstrate  different sequence settings and modes of operation. Refer to the MAX25611 and the MAX25605 data sheets for detailed information regarding these ICs.

Evaluates: MAX25605

## Benefits and Features

- LED Driver, Timing Circuit, Sequencer, LEDs, and LED Cover
- Demonstrates Dim Up and Dim Down Sequence
- Sequence Timing Adjustment Potentiometer
- Toggle Switches to Easily Evaluate Different Modes of Operation
- Hazard Light Mode
- No Software or Graphical User Interface (GUI) Required

Ordering Information appears at end of data sheet.

Figure 1. MAX25605EVKIT#

<!-- image -->

<!-- image -->

## MAX25605 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25605 EV kit
- Acrylic LED cover (included)
- 12V, 3A DC power supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on the power supply until all connections are made. Additional  caution  should  be  taken;  the  on-board LEDs are very bright when illuminated.

- 1) Verify that all jumpers and switches are in their default positions, as shown in Figure 1.
- 2) Verify that the acrylic shield is covering the LEDs.
- 3) Connect the positive terminal of the 12V supply to the J8 PCB pad or the red banana plug TP1 receptacle.
- 4) Connect the negative or ground terminal of the 12V supply to the J3 PCB pad or the black banana plug TP2 receptacle.
- 5) Turn on the DC power supply.
- 6) Toggle the S2 switch to the ON position.
- 7) Verify that the LEDs sequence on and off.

Evaluates: MAX25605

## Detailed Description

The  MAX25605  EV  kit  provides  a  proven  design  to evaluate  the  MAX25605  LED  sequencer.  The  EV  kit  is set up for buck-boost (boost-to-battery) configuration and operates from a 6V-18V DC supply voltage. The EV kit is configured to deliver up to 700mA to a series LED string. The  EV  kit  includes  12  yellow  LEDs  from  the  SYNIOS P2720 family from OSRAM®-Opto Semiconductors, rated for up to 1A of current. See Figure 2 for a block diagram of the evaluation board.

Figure 2. EV Kit Block Diagram

<!-- image -->

OSRAM is a registered trademark of Osram GmbH.

│

## Timing Circuit

A  relaxation  oscillator  circuit  is  implemented  on  the  EV kit to generate the 1.25Hz signal for demonstrating a turn signal. The SW2 enables or disables the oscillator circuit and is the main control to enable or disable the LED driver and LED sequencers.

## Control Options

There are two different control methods demonstrated on the board:

- 1) The timing circuit can drive the PWM input of the LED driver and the EN input of the sequencers.
- 2) The  timing  circuit  can  drive  a  battery  switch  which controls power for the entire board.

The  turn  signal  control  method  is  set  based  on  the position of SW3. Either method is an acceptable way to implement a turn signal system using the MAX25605 LED sequencer.

## LED Drivers

There  are  two  MAX25611  buck-boost  (boost-to-battery) LED drivers  installed  on  the  EV  kit.  By  default,  the  EV kit  is  configured  to  drive  all  12  LEDs  in  a  single  string

Evaluates: MAX25605

configuration with the U3 LED driver. The board can be configured to drive the 12 LEDs as two separate strings of 6 series LEDs. In this configuration, U3 drives the top 6 LEDs and U4 drives the bottom 6 LEDs. The LED current can be adjusted by the potentiometers R4 and R6 which control U3 and U4, respectively.

## Sequencer Programming

The MAX25605  sequencer  devices  are configured through resistor settings. The EV kit includes SW4-SW9 to easily change between different resistor options which demonstrate  some  of  the  features  of  the  device.  See Table 2 for a detailed description of each switch position. The switches change the resistor values on the A0, A1, and A2 pins of the MAX25605. These inputs are sampled during power up (V IN  rising above the UVLO threshold). Potentiometers R57 and R58 adjust the resistance on the CLK  input  which  controls  the  sequence  individual  step time (T SEQ ) between approximately 2ms and 55ms. The CLK input is the only resistor programming option that is continuously active during normal operation, as opposed to  the  A0,  A1,  and  A2  programming  inputs  which  are sampled only during the IN power up.

Table 1. Default Shunt Positions and Jumper Description

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-3 and 2-4      | V BAT connected to optional second LED driver (U4).                                                                                                                                        |
| J1       | 3-5 and 4-6*     | Optional second LED driver, U4, not used.                                                                                                                                                  |
| J1       | Open             | Optional second LED driver, U4, not used.                                                                                                                                                  |
| J2       | 1-3 and 2-4      | Two strings of 6 series LEDs. LEDs 1 through 6 are driven by U4 and LEDs 7 through 12 are driven by U3. The second LED driver, U4, should be connected to V BAT when this setting is used. |
| J2       | 3-5 and 4-6*     | One string of 12 series LEDs driven by the primary LED driver, U3.                                                                                                                         |
| J10      | 1-2*             | Input power supplied to U1, the MAX25605 sequencer controlling LEDs 7 through 12.                                                                                                          |
| J20      | 1-2*             | Input power supplied to U2, the MAX25605 sequencer controlling LEDs 1 through 6.                                                                                                           |
| J30      | 1-2*             | Input power supplied to U3, MAX25611 LED driver.                                                                                                                                           |
| J40      | 1-2*             | Input power supplied to U4, optional second MAX25611 LED driver.                                                                                                                           |
| J41      | 1-2              | PWMDIM of U4 MAX25611 LED driver connected to EN net of the sequencers.                                                                                                                    |
| J41      | Open*            | PWMDIM of U4 MAX25611 LED driver not connected to EN net of the sequencers.                                                                                                                |

* Default position.

│

## MAX25605 Evaluation Kit

Table 2. Switch Settings

| SWITCH   | SWITCH POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                |
|----------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          | OFF*              | Hazard light mode is disabled. The MAX25605 devices sequence the LEDs when enabled.                                                                                                                                                                                                                                                        |
| S1       | ON                | Hazard light mode is enabled. The MAX25605 devices do not shunt any current from the LED string, resulting in the entire LED string being ON or OFF depending only on the LED driver.                                                                                                                                                      |
| S2       | OFF*              | The on-board 1.25Hz oscillator circuit is disabled. If SW3 is in the BAT position, the LEDs are statically off. If SW3 is in the PWM position, the LEDs are statically on after sequencing once.                                                                                                                                           |
| S2       | ON                | The on board 1.25Hz oscillator circuit is enabled. The LEDs continuously cycle on and off.                                                                                                                                                                                                                                                 |
| SW3      | PWM               | The 1.25Hz timing circuit output is connected to PWM of LED driver and EN of sequencer. Battery power to the board is fixed and the sequencing is done by toggling the PWM and EN inputs. The SW4 through SW9 sequencer configuration resistors are sampled only once, either at power up or at the moment SW3 is toggled from BAT to PWM. |
| SW3      | BAT*              | The 1.25Hz timing circuit output is connected to battery switch, toggling the battery line for the board which causes the sequence to reset and start again on each new pulse. The SW4 through SW9 sequencer configuration resistors are resampled on each 1.25Hz cycle.                                                                   |
| SW4      | DOWN              | U2 configured to DIM DOWN, with all LEDs starting out on, then LED6 turning off, followed by LED5 and continuing down to LED1.                                                                                                                                                                                                             |
| SW4      | UP*               | U2 configured to DIM UP, with all LEDs starting out off, then LED1 turning on, followed by LED2 and continuing up to LED6.                                                                                                                                                                                                                 |
| SW5      | DOWN              | U1 configured to DIM DOWN, with all LEDs starting out on, then LED12 turning off, followed by LED11 and continuing down to LED7.                                                                                                                                                                                                           |
| SW5      | UP*               | U1 configured to DIM UP, with all LEDs starting out off, then LED7 turning on, followed by LED8 and continuing up to LED12.                                                                                                                                                                                                                |
| SW6      | DOWN              | U2 configured to wait for 1 SYNC pulse before starting to sequence. If SW7 is in the DOWN position, U1 starts the sequence and sends a SYNC pulse to U2 to continue the sequence.                                                                                                                                                          |
| SW6      | UP*               | U2 configured to wait for 0 SYNC pulses before starting to sequence. This means U2 begins the sequence at the rising edge of the EN signal.                                                                                                                                                                                                |
| SW7      | DOWN              | U1 configured to wait for 0 SYNC pulses before starting to sequence. This means U1 begins the sequence at the rising edge of the EN signal.                                                                                                                                                                                                |
| SW7      | UP*               | U1 configured to wait for 1 SYNC pulse before starting to sequence. If SW6 is in the UP position, U2 starts the sequence and sends a SYNC pulse to U1 to continue the sequence.                                                                                                                                                            |
| SW8      | DOWN              | U1 LED fading enabled.                                                                                                                                                                                                                                                                                                                     |
| SW8      | UP*               | U1 LED fading disabled.                                                                                                                                                                                                                                                                                                                    |
| SW9      | DOWN              | U2 LED fading enabled.                                                                                                                                                                                                                                                                                                                     |
| SW9      | UP*               | U2 LED fading disabled.                                                                                                                                                                                                                                                                                                                    |
| SW10     | DOWN*             | Hazard light option 1 method enabled. Hazard light is achieved by pulling the EN input of the sequencers low.                                                                                                                                                                                                                              |
| SW10     | UP                | Hazard light option 2 method is enabled. Hazard light is achieved by reducing the RCLK value of the MAX25605 sequencer. This option only works when the sequencers are configured to DIM UP (SW4 and SW5 in UP position).                                                                                                                  |

Evaluates: MAX25605

│

## MAX25605 Evaluation Kit

## Dim Up and Dim Down

The  MAX25605  EV  kit  is  configured  by  default  to  'dim up',  meaning  the  LEDs  are  off  at  the  beginning  of  the sequence, then turn on one-by-one until all 12 LEDs are on  at  the  end  of  the  sequence.  To  demonstrate  a  'dim down' sequence, toggle SW4-SW7 from the default up position to the down position. The 'dim down' sequence starts with all 12 LEDs turning on, then each LED turns off one-by-one until all 12 LEDs are off at the end of the sequence.

## Hazard Light Mode

The MAX25605 LED sequence can be bypassed, to allow the LEDs to all turn on and turn off at the same time. SW1 demonstrates this feature. When both SW1 and SW2 are in the ON position, the LEDs alternate on and off at the 1.25Hz rate, but without the single-LED sequence. All 12 LEDs turn on and turn off at the same time.

## LED Fade

The  MAX25605  has  an  optional  logarithmic  fade  function. Rather than an LED stepping from 0% to 100% on each sequence step, the LED is PWM-switched on and off  with  a  gradual  change  in  PWM  duty  cycle,  resulting in  a  smoother  appearing  transition  of  each  LED  in  the sequence. The MAX25605 accommodates fade duration settings  of  1,  2,  or  3  t SEQ   periods.  The  EV  kit  includes SW8 and SW9 which toggle the A2 resistor value of the MAX25605 devices to either disable fade or enable it with a  duration  of  2  t SEQ   periods.  The  fade  feature  is  typically used in applications with a smaller number of LEDs, where each sequence step becomes more noticeable.

## Acrylic Shield

The  MAX25605  EV  kit  comes  with  12  yellow  LEDs installed that are very bright, especially at the maximum current  setting.  It  is  recommended  to  use  the  included acrylic shield to cover the LEDs during operation.

Figure 3. MAX25605EVKIT# with Acrylic Shield Installed

<!-- image -->

Evaluates: MAX25605

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25605EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX25605 EV Kit Bill of Materials

| REF_DES                                                                                                                              |   QTY | MFG PART #                                                                                                  | MANUFACTURER                                      | VALUE    | DESCRIPTION                                                                                           |
|--------------------------------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------|
| BAT_VIN_U1, BAT_VIN_U2, EN_U1, EN_U2, GND2-GND4, J3, J8, J9, LED1_K, LED6_A, LED7_K, LED12_A, OUT_U3, OUT_U4, SGND, SGND_U1, SGND_U2 |    19 | 9020 BUSS                                                                                                   | WEICO WIRE                                        | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG              |
| C1, C38                                                                                                                              |     2 | C0603C103K2RAC                                                                                              | KEMET                                             | 0.01µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 200V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R |
| C2, C4                                                                                                                               |     2 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN                         | KEMET; TAIYO YUDEN; TDK; TDK; SAMSUNG ELECTRONICS | 4.7µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R             |
| C3, C5                                                                                                                               |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A | KEMET; MURATA; TDK; TAIYO YUDEN; TDK; AVX         | 1µF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R    |
| C6, C8, C26, C29, C30                                                                                                                |     5 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K                         | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA           | 0.1µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R           |
| C7, C9, C14, C15, C18, C19                                                                                                           |     6 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                   | MURATA; TDK; MURATA                               | 1000PF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                      |
| C16, C17, C20, C21, C24, C39                                                                                                         |     6 | C2012X7R1H225K125AC                                                                                         | TDK                                               | 2.2µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R            |
| C22, C23, C40                                                                                                                        |     3 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                                     | MURATA; MURATA; MURATA; TAIYO YUDEN               | 4.7µF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R   |

Evaluates: MAX25605

## MAX25605 Evaluation Kit

## MAX25605 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                          |   QTY | MFG PART #                                                                            | MANUFACTURER                                        | VALUE            | DESCRIPTION                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------------------------|-----------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| C25, C31, C32                                                                                                                    |     3 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                      | TDK; TAIYO YUDEN; TAIYO YUDEN; MURATA               | 2.2µF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 25V; TOL = 10%; MODEL =; TG = -55°C TO +85°C; TC = X5R                          |
| C35, C43                                                                                                                         |     2 | C0603C102K1GAC; C1608C0G2A102K080AA                                                   | KEMET; TDK                                          | 1000PF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC =                       |
| C41                                                                                                                              |     1 | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                   | MURATA; PANASONIC; SAMSUNG ELECTRONICS; MURATA      | 10µF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL = 10%; MODEL =; TG = -55°C TO +85°C; TC = X5R                           |
| C42                                                                                                                              |     1 | NFM21HC223R1H3                                                                        | MURATA                                              | 0.022µF          | CAP; SMT (0805); 0.022UF; 20%; 50V; CERAMIC CHIP                                                                            |
| C44-C47                                                                                                                          |     4 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET; MURATA; TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01µF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                 |
| D1-D4, D98, D99                                                                                                                  |     6 | 1N4148WS-7-F                                                                          | DIODES INCORPORATED                                 | 1N4148WS-7-F     | DIODE; SWT; SMT (SOD-323); PIV = 75V; IF = 0.3A                                                                             |
| D5, D6                                                                                                                           |     2 | B160-13-F                                                                             | DIODES INCORPORATED                                 | B160-13-F        | DIODE; SCH; SMA; PIV = 60V; IF = 1A                                                                                         |
| D7                                                                                                                               |     1 | BZX384B5V1-E3-08                                                                      | VISHAY SEMICONDUCTORS                               | 5.1V             | DIODE; ZNR; SMT (SOD-323); Vz = 5.1V; Izm = 0.002A                                                                          |
| D8                                                                                                                               |     1 | TDZ15J                                                                                | NEXPERIA                                            | 15V              | DIODE; ZNR; SMT (SOD-323F); VZ = 15V; IZ = 0.005A                                                                           |
| DS1, DS2                                                                                                                         |     2 | SML-LXT0805GW                                                                         | LUMEX OPTO COMPONENTS INC.                          | SML-LXT0805GW-TR | DIODE; LIGHT EMITTING GREEN; SMT (0805); IF(PEAK) = 0.15A; I(STEADY) = 0.025A; PD = 0.105W; VF = 2.0V                       |
| DS3, DS4                                                                                                                         |     2 | APT2012SURCK                                                                          | KINGBRIGHT                                          | APT2012SURCK     | DIODE; LED; SMD CHIP LED LAMP; RED; SMT; PIV = 1.95V; IF = 0.02A                                                            |
| EMG, PWMDIM_U3, PWMDIM_U4, REFI_U3, REFI_U4, SYNC, TIMER, TURN, U1_CLK, U1_FLTB, U2_CLK, U2_FLTB, VCC_U3, VCC_U4, VDD_U1, VDD_U2 |    16 | 5123                                                                                  | KEYSTONE                                            | N/A              | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; GRAY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

│

Evaluates: MAX25605

## MAX25605 Evaluation Kit

## MAX25605 EV Kit Bill of Materials (continued)

| REF_DES                      |   QTY | MFG PART #                     | MANUFACTURER                                                                             | VALUE                      | DESCRIPTION                                                                                                                    |
|------------------------------|-------|--------------------------------|------------------------------------------------------------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| FB1, FB2                     |     2 | BLM21PG220SN1                  | MURATA                                                                                   | 22                         | INDUCTOR; SMT (0805); FERRITE-BEAD; 22; TOL = ±25%; 6A; -55°C TO +125°C                                                        |
| J1, J2                       |     2 | PEC03DAAN                      | SULLINS ELECTRONICS CORP.                                                                | PEC03DAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65°C TO +125°C                                             |
| J10, J20, J30, J40, J41      |     5 | PCC02SAAN                      | SULLINS                                                                                  | PCC02SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2 PINS; -65°C TO +125°C                                            |
| J12                          |     1 | PBC20SBAN                      | SULLINS CONNECTOR                                                                        | PBC20SBAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY HEADERS; RIGHT ANGLE; 20 PINS;                                                        |
| JU1, JU2                     |     2 | MNT-102-BK-G                   | SAMTEC                                                                                   | MNT-102-BK-G               | CONNECTOR; FEMALE; 0.100IN MULTI POSITION SHUNT; OPEN TOP; JUMPER; STRAIGHT; 4PINS                                             |
| JU10, JU20, JU30, JU40       |     4 | SNT-100-BK-G                   | SAMTEC                                                                                   | SNT-100-BK-G               | TEST POINT; SHUNTAND JUMPER; STR; TOTAL LENGTH = 6.10MM; BLACK; INSULATION = GLASS FILLED POLYESTER; CONTACT = PHOSPHOR BRONZE |
| L1, L2                       |     2 | XAL5050-153ME                  | COILCRAFT                                                                                | 15µH                       | INDUCTOR; SMT; COMPOSITE; 15µH; 20%; 3.9A                                                                                      |
| L3                           |     1 | XAL4020-222ME                  | COILCRAFT                                                                                | 2.2µH                      | INDUCTOR; SMT; COMPOSITE CORE; 2.2µH; TOL = ±20%; 4A                                                                           |
| LED1-LED12                   |    12 | KY DMLS31.23- 8J7L-46-M3W3     | OSRAM                                                                                    | KY DMLS31.23-8J7L- 46-M3W3 | DIODE; LED; YELLOW; SMT; VF = 2.55V; IF = 0.7A                                                                                 |
| MECH1-MECH4                  |     4 | 1902B                          | GENERIC PART                                                                             | 1902B                      | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                           |
| Q1-Q4, Q9, Q12, Q14, Q16-Q21 |    13 | 2N7002; 2N7002; 2N7002; 2N7002 | DIODES INCORPORATED; ST MICRO ELECTRONICS; ON SEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002                     | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55°C TO +150°C                                                        |
| Q5, Q6                       |     2 | BUK9M19-60E                    | NEXPERIA                                                                                 | BUK9M19-60E                | TRAN; NCH; 60V; LFPAK; PD-(62W); I-(38A); V-(60V)                                                                              |
| Q7, Q8                       |     2 | FDC3535                        | FAIRCHILD SEMICONDUCTOR                                                                  | FDC3535                    | TRAN; P-CHANNELPOWER TRENCH MOSFET; PCH; SSOT-6; PD-(1.6W); I-(-2.1A); V-(-80V)                                                |
| Q10                          |     1 | SI7461DP-T1-GE3                | VISHAY SILICONIX                                                                         | SI7461DP- T1-GE3           | TRAN; P-CHANNEL 60V MOSFET; PCH; SO-8; PD-(1.9W); I-(-8.6A); V-(-60V)                                                          |

│

Evaluates: MAX25605

## MAX25605 EV Kit Bill of Materials (continued)

| REF_DES                                              |   QTY | MFG PART #                                                                         | MANUFACTURER                                  | VALUE     | DESCRIPTION                                                                                    |
|------------------------------------------------------|-------|------------------------------------------------------------------------------------|-----------------------------------------------|-----------|------------------------------------------------------------------------------------------------|
| Q11                                                  |     1 | FDN342P                                                                            | FAIRCHILD SEMICONDUCTOR                       | FDN342P   | MOSFET, P-CHANNEL, SOT-23, PD = 0.5W, ID = -2.0A, VDSS = -20V, VGS = ±12V, RDS (on) = 0.062 Ω  |
| Q13, Q15                                             |     2 | MMBT2907A                                                                          | FAIRCHILD SEMICONDUCTOR                       | MMBT2907A | TRAN; SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.35W); IC-(-0.6A); VCEO-(-60V)                |
| R1, R2, R12, R14-R16, R39, R46, R48, R70, R71        |    11 | CRCW06032K0FK; ERJ-3EKF2001; RC0603FR-072KL; CRCW06032K00FK                        | VISHAY; PANASONIC; YAGEO; VISHAY              | 2K        | RESISTOR, 0603, 2K Ω , 1%, 100PPM, 0.10W, THICK FILM                                           |
| R3, R5                                               |     2 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC          | 100K      | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                            |
| R4, R6                                               |     2 | 3296W-1-104LF                                                                      | BOURNS                                        | 100K      | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 100K Ω ; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM |
| R7, R8                                               |     2 | CRCW060349R9FK                                                                     | VISHAY DALE                                   | 49.9      | RESISTOR; 0603; 49.9 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                         |
| R9, R10, R28, R31, R40, R41, R45, R47, R49, R50, R53 |    11 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC; YAGEO                 | 10K       | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                             |
| R11, R21, R23, R51, R56, R81-R96, R101, R102         |    23 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/- 000ELF                      | VISHAY; ROHM SEMICONDUCTOR; PANASONIC; BOURNS | 0         | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                            |
| R13, R52, R69                                        |     3 | CRCW06031M00FK; MCR03EZPFX1004                                                     | VISHAY DALE; ROHM                             | 1M        | RESISTOR, 0603, 1M Ω , 1%, 100PPM, 0.10W, THICK FILM                                           |
| R17, R20                                             |     2 | CRCW06033K32FK                                                                     | VISHAY DALE                                   | 3.32K     | RESISTOR; 0603; 3.32K; 1%; 100PPM; 0.10W; THICK FILM                                           |
| R18, R19                                             |     2 | CRCW06032R00FN                                                                     | VISHAY DALE                                   | 2         | RESISTOR, 0603, 2 Ω , 1%, 100PPM, 0.10W, THICK FILM                                            |
| R22, R24                                             |     2 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                                     | VISHAY DALE; PANASONIC                        | 100       | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                          |
| R25, R26                                             |     2 | ERJ-8CWFR043                                                                       | PANASONIC                                     | 0.043     | RESISTOR; 1206; 0.043 Ω ; 1%; 75PPM; 1W; THICK FILM                                            |

│

Evaluates: MAX25605

## MAX25605 EV Kit Bill of Materials (continued)

| REF_DES              |   QTY | MFG PART #                   | MANUFACTURER           | VALUE           | DESCRIPTION                                                                                                                              |
|----------------------|-------|------------------------------|------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| R27, R30             |     2 | CRCW0603390KFK               | VISHAY DALE            | 390K            | RESISTOR, 0603, 390K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                                   |
| R29, R32, R103, R104 |     4 | ERJ-8BQFR27                  | PANASONIC              | 0.27            | RESISTOR; 1206; 0.27 Ω ; 1%; 250PPM; 0.5W; THICK FILM                                                                                    |
| R33, R34, R99, R100  |     4 | CRCW08050000ZS; RC2012J000   | DIGI-KEY               | 0               | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM                                                                                         |
| R35, R36, R74        |     3 | CRCW06034K99FK; ERJ-3EKF4991 | VISHAY DALE; PANASONIC | 4.99K           | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |
| R37, R38             |     2 | CRCW060349K9FK; ERJ-3EKF4992 | VISHAY DALE; PANASONIC | 49.9K           | RESISTOR; 0603; 49.9K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                  |
| R42-R44              |     3 | CRCW06032003FK               | VISHAY DALE            | 200K            | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                                      |
| R54, R55             |     2 | CRCW0603330RFK               | VISHAY DALE            | 330             | RESISTOR; 0603; 330 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |
| R57, R58             |     2 | 3266W-1-503LF                | BOURNS                 | 50K             | RESISTOR; THROUGH-HOLE-RADIAL LEAD; SQUARE TRIMMING POTENTIOMETER; 12 TURNS; 50K Ω ; 10%; 100PPM; ; TADJ; MOLDER CERAMIC OVER METAL FILM |
| R59, R61, R63, R65   |     4 | CRCW060395R3FK               | VISHAY DALE            | 95.3            | RESISTOR; 0603; 95.3 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                   |
| R60, R62             |     2 | CRCW06031K05FK               | VISHAY DALE            | 1.05K           | RESISTOR; 0603; 1.05K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                  |
| R64, R66             |     2 | CRCW06032000FK               | VISHAY DALE            | 200             | RESISTOR; 0603; 200 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |
| R67, R68             |     2 | NRC06F4220TRF                | NIC COMPONENTS CORP.   | 422             | RESISTOR; 0603; 422 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |
| R72, R73             |     2 | CRCW08051K62FK; RM10F1621CT  | VISHAY DALE; CAL-CHIP  | 1.62K           | RESISTOR; 0805; 1.62K Ω ; 1%; 100PPM; 0.125W; THICK FILM                                                                                 |
| R97, R98             |     2 | CRCW060382K0FK               | VISHAY DALE            | 82K             | RESISTOR, 0603, 82K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                                    |
| SCREW1- SCREW6       |     6 | 561-P440.375                 | GENERIC PART           | P440.375        | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                        |
| SPACER1-SPACER8      |     8 | 9032                         | KEYSTONE               | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                |
| SW1, SW2             |     2 | 100SP1T1B1M1QEH              | E-SWITCH               | 100SP1T1B1M1QEH | SWITCH; SPDT; THROUGH HOLE; STRAIGHT; +28VDC; 5A; RINSULATION = 1G Ω                                                                     |

│

Evaluates: MAX25605

## MAX25605 EV Kit Bill of Materials (continued)

| REF_DES   |   QTY | MFG PART #       | MANUFACTURER   | VALUE            | DESCRIPTION                                                                                                                                                           |
|-----------|-------|------------------|----------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SW3-SW10  |     8 | GT11MCBE         | C&K            | GT11MCBE         | SWITCH; TGL; TH; STRAIGHT; 20V; GT SERIES; RCOIL = 0.05 Ω ; RINSULATION = 1G Ω                                                                                        |
| TP1       |     1 | 7006             | KEYSTONE       | 7006             | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                                      |
| TP2       |     1 | 7007             | KEYSTONE       | 7007             | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                                    |
| U1        |     1 | MAX25605ATP/VY+  | MAXIM          | MAX25605ATP/VY+  | EVKIT PART - IC; MAX25605ATP/VY+; 6 SWITCH SEQUENTIAL CONTROLLER; TQFN20-EP; PACKAGE CODE: T2044Y+3C; PACKAGE OUTLINE NUMBER: 21-100068; LAND PATTERN NUMBER: 90-0037 |
| U2        |     1 | MAX25605AUP/V+   | MAXIM          | MAX25605AUP/V+   | EVKIT PART - IC; MAX25605AUP/V+; 6 SWITCH SEQUENTIAL CONTROLLER; TQFN20-EP; PACKAGE CODE: U20E+3C; PACKAGE OUTLINE: 21-100132; PACKAGE LAND PATTERN: 90-100049        |
| U3, U4    |     2 | MAX25611AATC/VY+ | MAXIM          | MAX25611AATC/VY+ | IC; CTRL; AUTOMOTIVE HIGH-VOLTAGE HB LED CONTROLLER; TQFN12-EP                                                                                                        |
| U5        |     1 | MAX9031AUK+      | MAXIM          | MAX9031AUK+      | IC; COMP; LOW-COST; ULTRA-SMALL; SINGLE; SINGLE-SUPPLY COMPARATORS; SOT23-5                                                                                           |
| U6        |     1 | MAX5084ATT+      | MAXIM          | MAX5084ATT+T     | IC; VREG; LOW-QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6                                                                                                               |
| PCB       |     1 | MAX25605         | MAXIM          | PCB              | PCB:MAX25605                                                                                                                                                          |
| COVER1    |     1 | MAX25605_COVER   | MAXIM          | MAX25605_COVER   | COVER; EVKIT; MAX25605; 4.2INX1.9INX0.125IN; ACRYLIC                                                                                                                  |

│

Evaluates: MAX25605

## MAX25605 EV Kit Schematic

<!-- image -->

## MAX25605 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX25605

## MAX25605 EV Kit Schematic (continued)

<!-- image -->

## MAX25605 EV Kit PCB Layouts

MAX25605 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX25605 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX25605 EV Kit PCB Layouts (continued)

MAX25605 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX25605 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX25605 EV Kit PCB Layouts (continued)

MAX25605 EV Kit PCB Layout-Bottom View

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25605