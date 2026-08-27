<!-- lastmod 2022-08-02 -->
## MAX12900 Evaluation Kit

## General Description

The  MAX12900  evaluation  kit  (EV  kit)  provides  a  proven design to evaluate the MAX12900, loop-powered 4-20mA  sensor  transmitter.  The  EV  kit  includes  an evaluation board and a graphical user interface (GUI) that provides communication from a PC to the target device through a USB port.

The  EV  kit  includes  Windows ®   7,  Windows  8,  and Windows 10 compatible software for exercising the features of  the  IC. The EV kit GUI allows to set the Coarse and Fine PWM duty cycle inputs to the MAX12900 to control the 4-20mA loop current with ±1µA resolution.

The EV kit must be powered from an external +24V power supply and consumes less than 2.7mA.

The  MAX12900  EV  kit  comes  with  a  MAX12900ATJ+ installed in a 32-pin, 5 x 5mm TQFN-EP package.

## MAX12900 EV Kit

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Loop-powered 4mA-20mA Transmitter with PWM Inputs
- Robust Operation with Wide Range Of Input Voltages
- On-Board Microcontroller to Generate Two PWM Inputs and Provide Fault Diagnostic
- Supports HART and Fieldbus H1 Communication
- -40°C to +125°C Temperature Range
- Reverse Voltage Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 7, Windows 8, and Windows 10 Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX12900

<!-- image -->

## MAX12900 EV System Block Diagram

<!-- image -->

## MAX12900 EV Kit Files

| FILE                       | DESCRIPTION               |
|----------------------------|---------------------------|
| MAX12900EVKITSetupV1.0.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX12900 EV kit
- +24V DC power supply
- Ampere meter
- PC with installed Windows 7, Windows 8, or Windows 10 and USB port

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  system  software. Text  in bold and underline refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX12900EVKIT.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  on  your  computer  by running the MAX12900EVKITSetupV1.0.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Verify  that  all  jumpers  are  in  their  default  positions (Table 1 ).  Note the hardware is configured for com -munication with a PC and onboard microcontroller by default.
- 4) Power  up  the  EV  kit  with  +24V  from  an  external power  supply  through  J3  Terminal  Block  or  using LOOP+ and LOOP- test points. Connect an ampere meter  in  series  with  the  power  supply  and  external load. The load range is from 0 to 1kΩ. Alternatively, use a voltmeter in parallel with the resistive load to calculate the loop current.
- 5) Connect the EV kit to a USB port of a PC. A microUSB cable is included.
- 6) Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs menu.    The  EV  kit  software appears as shown in Figure 1. Verify that  the  lower-right status bar indicates the EV kit hardware is Connected . The  GUI  automatically  detects  EV  kit  is  connected to the PC, and enables communication with the onboard  microcontroller.  It  also  retrieves  calibration coefficients  from  the  onboard  microcontroller  EE -PROM and indicates them in the Status Log window.

│

Figure 1. MAX12900  EV Kit GUI

<!-- image -->

## MAX12900 Evaluation Kit

(the following steps are used to verify functionality of the MAX12900)

- 7) Press the Start button in PWM Generation block. By default, it sets the loop current to 15.19mA. Use an ampere  meter  to  check  the  loop  current  is  correct. The Start button must be pressed every time when GUI starts to enable PWM generation.
- 8) Set the loop current to 4mA by typing in the 4-20mA Loop  Current  box  and  pressing  the  Update  PWM button.  Verify  the  loop  current  changed  to  4mA  by ampere meter.
- 9) Repeat  the  previous  step  with  the  different  values from 4mA to 20mA. Alternatively, change the Coarse and  Fine  Duty  cycle  values  in  the  corresponding set  boxes  (Counts  or  %).  Note  that  the  number  of counts is different for different PWM frequencies. The default  frequency  is  11718.00Hz,  based  on  the  oscillator frequency and calculation convenience.
- 10)  Press the Stop button to stop PWM. The loop current drops to approximately 2.66mA which is a minimum current consuming by the EV Kit.

## General Description of Software

## Evaluates: MAX12900

and go to the Device pulldown menu and select Search for  Hardware  option.  When  the  EV  kit  is  properly  connected,  press  the  Start  button  to  start  PWM  generation by the microcontroller. Type in a new value to the 4mA20mA  Loop  Current  control  box  and  press  the  Update PWM button to set the loop current. The GUI automatically calculates  the  desired  PWMB  and  PWMA  duty  cycles based  on  loop  current  settings  and  sends  corresponding commands  to  the  microcontroller.  All  communication commands are shown in the Status Log window for your convenience. Note, the actual data sent to the microcontroller is different from the Coarse and Fine settings due to inversion configuration of the MAX12900 and calibration coefficients, refer to Figure 2.

The Status Log window can be cleared by pressing the Clear Log button and hidden by selecting Hide Log option from the Options menu, or by pressing CTRL+H buttons on the keyboard.

The GUI receives diagnostic information from the COMP1 (12V  supply  diagnostic)  and  COMP2  (VCCI  diagnostic) comparators and illuminates the corresponding boxes if any of these supplies drops approximately by 20% (not implemented until rev. 2.0).

When the  GUI  starts,  it  automatically  detects  if  the  EV kit is connected to a PC and indicates that in the status bar at the bottom edge of the GUI. If the GUI does not recognize the EV kit make sure that the software and all drivers are properly installed, check the USB connection Also,  the  GUI  can  monitor  the  loop  current  by  enabling ADC reading of the OP2 output. Press the Read button for single read or enable continuous reading by selecting the Auto Read control box in the Diagnostic Information window (not implemented until rev. 2.0).

## Table 1. MAX12900 Board Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                  |
|----------|------------------|-------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Supply microcontroller from 3.3V VCCI                                                                       |
| J1       | 2-3              | Supply microcontroller from an external 3.3V source.                                                        |
| J2       | 1-2              | Connect VCC pin to 12V shunt regulator. Place an ampere meter to monitor power consumption of the MAX12900. |
| J5       | 1-2              | Connect the Fine PWM output of microcontroller to PWMAinput.                                                |
| J6       | 1-2              | Connect the Coarse PWM output of microcontroller to PWMB input.                                             |

* Default configuration

│

Figure 2. MAX12900 EV Kit GUI Status Log

<!-- image -->

## Board Calibration

The EV kit is factory calibrated and does not require additional  calibration.  The  calibration  coefficients  are  stored in  the  microcontroller's  EEPROM  memory  and  read  by the GUI when the board is connected to a PC. In some cases, the calibration coefficients can be adjusted by the user.  Go  to  Device  menu  and  select  Calibration  option. The Calibration window pops up, as shown in Figure 3.

## Evaluates: MAX12900

A 6.5 digit or better ampere meter should be connected in  series  with  LOOP-  terminal  and  a  24V  supply  to make  a  4-20mA  current  loop.  Follow  the  1,2,3,4  steps in Calibration Procedure by pressing the Set button and typing  in    a  measured  by  the  ampere  meter  loop  current. Press the Calculate button when all four steps are completed. A pop-up window will inform that calibration is finished and all coefficients are updated. The new coefficients will be used for loop current/duty cycle calculations.

Figure 3. Calibration Window

<!-- image -->

│

## General Description of Hardware

The MAX12900 EV kit allows evaluating features and performance of MAX12900 when it is used in a typical 4mA-20mA transmitter application.

The detailed block diagram of MAX12900 configuration is shown in Figure 4.

Figure 4. MAX12900 EV Kit Configuration Block Diagram

<!-- image -->

│

## MAX12900 Evaluation Kit

The  two  PWM  signals  (PWMB  and  PWMA)  generated by  the  onboard  microcontroller  represent  data  from  the sensor.  An  ultra-low-power,  high-resolution  digital-toanalog converter (DAC) is realized with the combination of  two  conditioner  circuits  (PWMB  and  PWMA)  and  the active  filter  (OP1).  The  outputs  of  the  two-conditioner circuits  provide  a  stable  PWM  amplitude  over  voltage supply  and  temperature  variation.  The  wide  bandwidth amplifier (OP3) in combination with the discrete transistors Q1 and Q2 implements a voltage to 4mA-20mA loop current converter. The OP3 amplifier features zero-offset and  in  combination  with  the  low-drift  voltage  reference provide  negligible  error  over  a  wide  temperature  range. Wide bandwidth allows this circuit to realize either HART or Fieldbus Foundation signal modulation. The low-power operational  amplifier  (OP2)  and  comparators  provide building blocks for enhanced diagnostic features. Supply rail  monitoring,  output  current  readback,  open  circuit and  failure  detection  are  a  few  examples  of  diagnostic features.  The  power  sequencer  circuit  and  PWRGOOD signaling  allow  a  smooth  power  up  with  configurable maximum output current.

## User-Supplied PWMs

To evaluate the EV kit with user-supplied PWMs, remove the J5 and J6 jumpers and apply the coarse PWM to TP8 and fine PWM to TP9. Make sure that the PWM voltage level does not exceed the VCCI level on TP12.

## External +3.3V Power Supply for the Microcontroller

An external +3.3V voltage can supply to TP2, 3.3V\_EXT, to evaluate the performance of the on-chip LDO without loading by microcontroller.

## Hot Plug and Reverse-Voltage Protection

The  EV  kit  is  protected  for  up  to  60V  reverse-voltage connection and hot plug connections.

## HART or Fieldbus Communication

The  EV  kit  is  HART  (Highway  Addressable  Remote Transducer) enabled and meets the FSK Physical Layer Test Specification HCF\_TEST-2. Applying a 500mV HART signal from an external HART modem, such as Maxim's DS8500, between TP14 and VGND, the FSK signal over the loop load can be observed with an oscilloscope.

Warning!  Usually  the  scope  probes  are  Earth/Chassis grounded.  Make  sure  that  only  one  probe  is  used  for measurement or  all  probes  are  connected  to  the  same common point. Do not short the sense resistor RS by the probes.

Some modifications need to be done to satisfy Fieldbus H1 requirements, such as,

- 1) Replace the R29 by 100k, 1%, 0805-size resistor.
- 2) Replace the C11 by 82pF, 0603-size capacitor.
- 3) Replace the C33 by 390pF, 0603-size capacitor.

## MAX12900 EV Kit Typical Performance

Typical scope shots of MAX12900 EV kit performance are shown in Figure 5 to Figure 16.

## Noise Measure On Time Domain

The  current  noise  measured  as  a  voltage  drop  across 500Ω load resistor.

Figure 5. 4mA Loop Current Noise During Silence Over 500Ω Load Resistor

<!-- image -->

Figure 6. 20mA Loop Current Noise During Silence over 500Ω Load Resistor

<!-- image -->

## Big-Signal Step Response

Figure 7. 4mA to 20mA Transition

<!-- image -->

Figure 8. 20mA to 4mA Transition

<!-- image -->

│

## Small-Signal Step Response

Figure 9. 4mA to 8mA Transition

<!-- image -->

Figure 10. 8mA to 4mA Transition

<!-- image -->

│

Figure 11. 8mA to 12mA Transition

<!-- image -->

Figure 12. 12mA to 8mA Transition

<!-- image -->

│

Figure 13. 14mA to 18mA Transition

<!-- image -->

Figure 14. 18mA to 14mA Transition

<!-- image -->

Figure 15. HART Modulation at 4mA Loop Current

<!-- image -->

Figure 16. 2.2kHz Square Wave Over 4mA-20mA Current Loop

<!-- image -->

## MAX12900 EV Kit Bill of Materials

| ITEM   | REF_DES                                         | DNI/DNP   | QTY   | MFG PART #                                                          | MANUFACTURER                                 | VALUE                    | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|-------------------------------------------------|-----------|-------|---------------------------------------------------------------------|----------------------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2, C7, C8, C18-C20, C25-C27, C29, C31, C32 | -         | 13    | GRM188R72A104KA35; CC0603KRX7R0BB104                                | MURATA; TDK                                  | 0.1UF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
| 2      | C3, C12                                         | -         | 2     | C2012X7S2A105K125; GRJ21BC72A105KE11                                | TDK/MURATA                                   | 1UF                      | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                               |            |
| 3      | C4                                              | -         | 1     | C1608X7R1H334K;C0603C334K5RAC                                       | AVX/KEMET                                    | 0.33UF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.33UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
| 4      | C5                                              | -         | 1     | C0603C224K3RAC; GMC10X7R224K25; GRM188R71E224KA88; C1608X7R1E224K08 | KEMET; MURATA; TDK                           | 0.22UF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
| 5      | C6                                              | -         | 1     | GRM1885C1H202JA01                                                   | MURATA                                       | 2000PF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2000PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                      |            |
| 6      | C9, C16, C30, C36                               | -         | 4     | C1608C0G1E103J                                                      | TDK                                          | 0.01UF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                      |            |
| 7      | C10                                             | -         | 1     | C0402C103K5RAC;GRM155R71H103KA88                                    | KEMET/MURATA                                 | 0.01UF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
| 8      | C11                                             | -         | 1     | C0402C201J5GAC; GRM1555C1H201JA01                                   | KEMET/MURATA                                 | 200PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 200PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                       |            |
| 9      | C13, C33                                        | -         | 2     | C0402C102K5GAC                                                      | KEMET                                        | 1000PF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                     |            |
| 10     | C14                                             | -         | 1     | C0603X472J1GAC                                                      | KEMET                                        | 4700PF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 100V; TOL=5%; MODEL=FT-CAP; TG=-55 DEGC TO +125 DEGC; TC=C0G               |            |
| 11     | C15                                             | -         | 1     | GRM155R72A222KA01                                                   | MURATA                                       | 2200PF                   | CAPACITOR; SMT (0402); CERAMIC; 2200PF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |            |
| 12     | C17, C35                                        | -         | 2     | GRM188C71A475KE11; C1608X7S1A475K080AC                              | MURATA; TDK                                  | 4.7UF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                              |            |
| 13     | C21, C22, C28                                   | -         | 3     | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA    | KEMET/MURATA/TDK/ TAIYO YUDEN                | 1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                        |            |
| 14     | C23, C24                                        | -         | 2     | C0402C200J5GAC                                                      | KEMET                                        | 20PF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 20PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                        |            |
| 15     | C34                                             | -         | 1     | C0603C100K1GAC                                                      | KEMET                                        | 10PF                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/                    |            |
| 16     | D1, D2, D8                                      | -         | 3     | PMEG6002ELD                                                         | NEXPERIA                                     | PMEG6002ELD              | DIODE; SCH; SMT (DFN1006D-2); PIV=60V; IF=0.2A                                                                          |            |
| 17     | D3-D5                                           | -         | 3     | BZX384-B12                                                          | NXP                                          | 12V                      | DIODE; ZNR; SOD-323; VZ=12V; IZ=0.005A DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A;                               |            |
| 18     | D6                                              | -         | 1     | BZX384-C5V6                                                         | NXP                                          | 5.6V                     | -65 DEGC TO +150 DEGC                                                                                                   |            |
| 19     | D7                                              | -         | 1     | SMBJ40CA                                                            | BOURNS                                       | 40V                      | DIODE; TVS; SMB (DO-214AA); VRM=40V; IPP=9.3A                                                                           |            |
| 20     | J1                                              | -         | 1     | PCC03SAAN                                                           | SULLINS                                      | PCC03SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |            |
| 21     | J2, J5, J6                                      | -         | 3     | PCC02SAAN                                                           | SULLINS                                      | PCC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |            |
| 22     | J3                                              | -         | 1     | ED555/2DS                                                           | ON-SHORE TECHNOLOGY INC                      | ED555/2DS                | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                     |            |
| 23     | J4                                              | -         | 1     | ZX62RD-AB-5P8                                                       | HIROSE ELECTRIC CO LTD.                      | ZX62RD-AB-5P8            | CONNECTOR; MALE; SMT; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                  |            |
| 24     | J7                                              | -         | 1     | PBC06SAAN                                                           | SULLINS ELECTRONICS CORP.                    | PBC06SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                        |            |
| 25     | J8-J11                                          | -         | 4     | EVKIT_STANDOFF_4-40_3/8                                             | ?                                            | EVKIT_STANDOFF_ 4-40_3/8 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/ (3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON         |            |
| 26 27  | L1 LOOP+                                        | - -       | 1 1   | BLM18AG601SN1                                                       | MURATA 5010 KEYSTONE                         | N/A                      | 600 INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;           |            |
| 28     | LOOP-                                           | -         | 1     |                                                                     | 5011 KEYSTONE                                | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 29     | Q1                                              | -         | 1     | MMST3904-7-F                                                        | DIODES INCORPORATED                          | MMST3904-7-F             | TRAN; 60V NPN SMALL SIGNAL TRANSISTOR; NPN; SOT-323; PD-(0.2W); I-(0.2A); V-(40V)                                       |            |
| 30     | Q2                                              | -         | 1     | DZT751                                                              | DIODES INCORPORATED                          | DZT751                   | TRAN; LOW VCESAT PNP SURFACE MOUNT TRANSISTOR; PNP; SOT-223; PD-(1W); I-(-3A); V-(-60V)                                 |            |
| 31     | R1-R3, R5,                                      | -         | 6     | CRCW06031M00FK; MCR03EZPFX1004                                      | VISHAY DALE/ROHM                             | 1M                       | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                   |            |
| 32     | R9, R11 R7, R32                                 | -         | 2     | CRCW0402100KFK; RC0402FR-07100KL                                    | VISHAY DALE; YAGEO PHICOMP                   | 100K                     | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |            |
| 33     | R8 R10                                          | -         | 1 1   | CRCW0603100RFK; ERJ-3EKF1000 ERJ-3EKF6653; CRCW0603665KFK           | VISHAY DALE/PANASONIC PANASONIC; VISHAY DALE | 665K                     | 100 RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                              | 665K       |
| 34 35  | R12                                             | - -       | 1     | ERJ-3EKF1433V 9C04021A1000FL;                                       | PANASONIC                                    | 143K                     | RESISTOR; 0603; 665K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0603; 143K OHM; 1%; 100PPM; 0.10W; THICK               | 143K       |
|        |                                                 |           |       | CRCW0402100RFK;                                                     |                                              |                          | FILM                                                                                                                    |            |
| 36     | R13                                             | - -       | 1 2   | RC0402FR-07100RL CRCW0402402KFK                                     | VISHAY DALE; PANASONIC; YAGEO PHYCOMP        | 402K                     | 100 RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM RESISTOR; 0402; 402K OHM; 1%; 100PPM; 0.063W; METAL         |            |
| 37     | R14, R26                                        |           |       |                                                                     | VISHAY DALE                                  |                          | FILM                                                                                                                    |            |

Evaluates: MAX12900

## MAX12900 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                      | DNI/DNP   | QTY   | MFG PART #                                                   | MANUFACTURER                                       | VALUE         | DESCRIPTION                                                                                                                 | COMMENTS   |
|--------|--------------------------------------------------------------|-----------|-------|--------------------------------------------------------------|----------------------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------|------------|
| 38     | R15                                                          | -         | 1     | ERJ-2RKF6983                                                 | PANASONIC                                          | 698K          | RESISTOR; 0402; 698K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                      |            |
| 39     | R16                                                          | -         | 1     | CRCW0402562KFK                                               | VISHAY DALE                                        | 562K          | RESISTOR; 0402; 562K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                    |            |
| 40     | R17, R20                                                     | -         | 2     | 1676258; RN73C2A22K6B                                        | TE CONNECTIVITY                                    | 22.6K         | RESISTOR; 0805; 22.6K OHM; 0.1%; 10PPM; 0.1W; THIN FILM                                                                     |            |
| 41     | R18                                                          | -         | 1     | CPF0805B1M5E; 1-1614959-1                                    | TE CONNECTIVITY                                    | 1.5M          | RESISTOR; 0805; 1.5M OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                                      |            |
| 42     | R19, R41, R45, R48                                           | -         | 4     | CRCW040210K0FK; RC0402FR-0710K                               | VISHAY DALE; YAGEO PHICOMP                         | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |            |
| 43     | R21                                                          | -         | 1     | RC0603FR-0711K5L                                             | YAGEO PHYCOMP                                      | 11.5K         | RESISTOR; 0603; 11.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    |            |
| 44     | R22, R23                                                     | -         | 2     | TNPW0603294KBE                                               | VISHAY DALE                                        | 294K          | RESISTOR; 0603; 294K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                                      |            |
| 45     | R25, R46, R47                                                | -         | 3     | ERJ-2GE0R00X                                                 | PANASONIC                                          |               | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                      | 15PPM      |
| 46     | R27                                                          | -         | 1     | RP73D2A1M0BTDF; TNPW08051M00BE TNPW0805100KBE; ERA-6ARB104V; | TE CONNECTIVITY/VISHAY DALE VISHAY DALE/PANASONIC/ | 1M            | RESISTOR; 0805; 1M OHM; 0.1%; 15PPM; 0.125W; THICK FILM                                                                     | 10PPM      |
| 47     | R28                                                          | -         | 1     | RN73C2A100KBTDF                                              | TE CONNECTIVITY                                    | 100K          | RESISTOR; 0805; 100K; 0.1%; 10PPM; 0.125W; THIN FILM                                                                        |            |
| 48 49  | R29 R30, R36, R60                                            | - -       | 1 3   | ERJ-3EKF5113 ERJ-2RKF4991X                                   | PANASONIC PANASONIC                                | 511K 4.99K    | RESISTOR; 0603; 511K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0402; 4.99K OHM; 1%; 100PPM; 0.10W; THICK FILM             |            |
| 50     | R31                                                          | -         | 1     | CRCW060324K9FK                                               | VISHAY DALE                                        | 24.9K         | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    |            |
| 51     | R33                                                          | -         | 1     | 1676266-2; RN73C2A24K9BTDF                                   | TE CONNECTIVITY                                    | 24.9K         | RESISTOR; 0805; 24.9K OHM; 0.1%; 10PPM; 0.10W; THIN FILM                                                                    | 10PPM      |
| 52     | R34, R49, R50, R52, R53                                      | -         | 5     | CRCW040249R9FK; RK73H1ETTP49R9F                              | VISHAY DALE/KOA SPEER                              |               | 49.9 RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                              |            |
| 53     | R35                                                          | -         | 1     | MCR03EZPFX2002; ERJ-3EKF2002                                 | ROHM; PANASONIC                                    | 20K           | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                      |            |
| 54     | R37                                                          | -         | 1     | ERJ-2RKF1582                                                 | PANASONIC                                          | 15.8K         | RESISTOR; 0402; 15.8K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                     |            |
| 55     | R38                                                          | -         | 1     | CRCW0603499RFK; RK73H1J4990FT; ERJ-3EKF4990V; RC1608F4990    | KOA; VISHAY; PANASONIC; SAMSUNG                    |               | 499 RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |            |
| 56     | R39, R40, R42-R44, R54-R59                                   | -         | 11    | ERJ-2RKF27R0X; RC0402FR-0727RL                               | PANASONIC; YAGEO PHICOMP                           |               | 27 RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                  |            |
| 57     | R51                                                          | -         | 1     | CRCW06031001FK; ERJ-3EKF1001V                                | VISHAY DALE; PANASONIC                             | 1K            | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                           |            |
| 58     | RS                                                           | -         | 1     | RN73C2A24R9BTG; PFC-W0805LF-03-24R9-B                        | TE CONNECTIVITY/TT ELECTRONICS                     |               | 24.9 RESISTOR; 0805; 24.9 OHM; 0.1%; 10PPM; 0.25W; THIN FILM                                                                | 10PPM      |
| 59     | SU1-SU4                                                      | -         | 4     | SX1100-B                                                     | KYCON                                              | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                     |            |
| 60     | TP1, TP4, TP5, TP10, TP11, TP14, TP16-TP19, TP21, TP23, TP26 | -         | 13    |                                                              | 5009 KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
| 61     | TP2, TP8, TP9, TP12                                          | -         | 4     |                                                              | 5008 KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
| 62     | TP3, TP6, TP7, TP13, TP15, TP22                              | -         | 6     |                                                              | 5006 KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |
| 63     | TP20                                                         | -         | 1     |                                                              | 5005 KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
| 64     | U1                                                           | -         | 1     | MAX12900ATJ+                                                 | MAXIM                                              | MAX12900ATJ+  | EVKIT PART - IC; SNR; LOOP-POWER 4-20MA SENSOR TRANSMITTER BACK END; TQFN32-EP                                              |            |
| 65     | U2                                                           | -         | 1     | MAX4594EXK                                                   | MAXIM                                              | MAX4594EXK    | IC, ASW,Low-Voltage, Single-Supply SPST (NO) , SC70-5                                                                       |            |
| 66     | U3                                                           | -         | 1     | FT234XD                                                      | FUTURE TECHNOLOGY DEVICES INTL LTD                 | FT234XD       | IC; INFC; USB TO BASIC UART; DFN12-EP                                                                                       |            |
| 67     | U4                                                           | -         | 1     | MAX12931BASA+                                                | MAXIM                                              | MAX12931BASA+ | EVKIT PART - IC; DISO; 1/1 CHANNEL; 25MBPS; DEFAULT HIGH; 3.75KVRMS DIGITAL ISOLATOR; NSOIC8                                |            |
| 68     | U5                                                           | -         | 1     | STM32L071CBT6                                                | ST MICROELECTRONICS                                | STM32L071CBT6 | IC; UCON; ACCESS LINE ULTRA-LOW-POWER; 32-BIT MCU ARM-BASED CORTEX-M0+ WITH 128KB FLASH; 20KB SRAM; 6KB EEPROM; ADC; LQFP48 |            |
| 69     | Y1                                                           | -         | 1     | ECS-120-20-33-CKM                                            | ECS INC                                            | 12MHZ         | CRYSTAL; SMT 3.2X2.5; 20PF; 12MHZ; +/-10PPM; +/-10PPM                                                                       |            |
| 70     | PCB                                                          | -         | 1     | MAX12900                                                     | MAXIM                                              | PCB           | PCB:MAX12900                                                                                                                | -          |
| 71     | MISC1                                                        | DNI       | 1     | AK67421-1-R                                                  | ASSMANN                                            | AK67421-1-R   | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS                  |            |
| 72     | R4, R6                                                       | DNP       | 0     | CRCW06031M00FK; MCR03EZPFX1004                               | VISHAY DALE/ROHM                                   | 1M            | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                       | DNI        |
| 73     | R24                                                          | DNP       | 0     | CRCW04021M00FK                                               | VISHAY DALE                                        | 1M            | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                         | DNI        |
| 74     | TP27                                                         | DNP       | 0     |                                                              | 5008 KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     | DNI        |
| TOTAL  |                                                              |           | 154   |                                                              |                                                    |               |                                                                                                                             |            |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX12900EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX12900

## MAX12900 EV Kit Schematic

<!-- image -->

## MAX12900 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX12900

## MAX12900 EV Kit PCB Layout Diagrams

MAX12900 EV Kit-Top Silkscreen

<!-- image -->

MAX12900 EV Kit-Top

<!-- image -->

MAX12900 EV Kit-Internal 2

<!-- image -->

│

## MAX12900 EV Kit PCB Layout Diagrams (continued)

MAX12900 EV Kit-Internal 3

<!-- image -->

MAX12900 EV Kit-Bottom

<!-- image -->

│

## MAX12900 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 11/17           | Initial release                  | -               |
|                 1 | 11/17           | Removed Component Supplier table | 16              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX12900