<!-- lastmod 2022-08-02 -->
## MAX77756 Evaluation Kit

## General Description

The MAX77756 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX77756 synchronous 500mA step-down converter. The EV kit allows for easy evaluation of the IC's input power multiplexer and step-down converter. A dual-range (8mA and 800mA full scale) electronic load is included on the EV kit for easy buck converter load control.

Windows ® -based software provides a user-friendly graphical  user  interface  (GUI),  as  well  as  a  detailed register-based interface to exercise the features of the IC.

Ordering Information appears at end of data sheet.

## MAX77756 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77756

## Benefits and Features

- Easy to Use
- Evaluates Both Fixed-Output and AdjustableOutput Versions (3.3V Version Preinstalled)
- 3V to 24V Input Voltage Range
- Demonstrates 1.5μA Quiescent Current at 12VSUP Input
- GUI Drives I 2 C Interface
- Emulates System Loading
- On-Board Electronic Load
- Electronic Load has Steady-State, Transient, and Random Modes
- Optional Ability to Control Electronic Load through Function Generator for Patterned Load Waveforms
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

Evaluates: MAX77756

Figure 1. MAX77756 EV Kit PCB -Top View with Default Shunt Positions

<!-- image -->

Evaluates: MAX77756

Figure 2. MAX77756 EV Kit PCB -Bottom View with On-Board Electronic Load

<!-- image -->

Figure 3. MAX77756 EV Kit PCB -Top View Solution Area

<!-- image -->

## Quick Start

## Required Equipment

- MAX77756 EV kit
- Windows-based PC
- Power supply
- Ammeter
- Digital voltmeter (DVM)
- Micro-USB cable

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download and install the latest version of the EV kit GUI software. Save the EV kit software to your local MAX77756 folder and uncompress the ZIP file. Run the .EXE file that was uncompressed and follow the on-screen instructions to complete installation.
- 2) Install the EV kit shunts per Table 1.
- 3) Apply a power supply set to 0V (100mA current limit) through an ammeter (10mA range) across the SUP and GND2 terminals of the EV kit. Turn the supply on and increase the voltage to 12V. To avoid excessive inrush current into the input capacitors of the EV kit, do not connect a precharged power supply to the input. See the Input Slew-Rate Limiting section for more information.
- 4) Connect a Micro-B USB cable between the EV kit's J103 and your Windows-based PC.
- 5) Open  the  GUI  and  press  the Device button  in  the menu bar. Press the Connect button in the Device button's  drop-down  list.  Wait  for  the  device  to  respond,  and  in  the Synchronize window,  press  the Read and close button.
- 6) Confirm with the ammeter that the quiescent current is approximately 1.5µA.
- 7) Confirm with DVM that output voltage is 3.3V.

This  concludes  the Quick  Start procedure.  Users  are encouraged  to  explore  the  device  and  its  register  settings with the GUI. During general device evaluation, set the ammeter range to ≥ 1A to minimize the impact of its series resistance. For more information on the GUI, see the Detailed Description of Software section.

│

Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER   | SHUNT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                  |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2              | Connects POK to BIAS through a 100kΩ resistor.                                                                                                                                                                                                                                                                                                            |
| J1       | Open*            | Disconnects POK from BIAS.                                                                                                                                                                                                                                                                                                                                |
| J2       | 1-2*             | Connects EN to SUP.                                                                                                                                                                                                                                                                                                                                       |
| J2       | 2-3              | Connects EN to GND.                                                                                                                                                                                                                                                                                                                                       |
| J3       | 1-2*             | Connects ILIM to BIAS.                                                                                                                                                                                                                                                                                                                                    |
| J3       | 2-3              | Connects ILIM to GND.                                                                                                                                                                                                                                                                                                                                     |
| J4       | 1-2              | Connects IN1 to GND through a 100kΩ resistor.                                                                                                                                                                                                                                                                                                             |
| J4       | Open*            | Disconnects IN1 from GND.                                                                                                                                                                                                                                                                                                                                 |
| J5       | 1-2              | Connects IN2 to GND through a 100kΩ resistor.                                                                                                                                                                                                                                                                                                             |
| J5       | Open*            | Disconnects IN2 from GND.                                                                                                                                                                                                                                                                                                                                 |
| J100     | Open*            | J100 is an evaluation header. Do not connect shunts to J100.                                                                                                                                                                                                                                                                                              |
| J101     | 1-2*             | Connects VIO to the 1.8V EV kit logic rail.                                                                                                                                                                                                                                                                                                               |
| J101     | 3-4              | Connects VIO to the 3.3V EV kit logic rail.                                                                                                                                                                                                                                                                                                               |
| J101     | 5-6              | Connects VIO to GND.                                                                                                                                                                                                                                                                                                                                      |
| J102     | 1-2              | Connects VUSB to IN1 through a Schottky diode, D1. Install this jumper to power the MAX77756 IN1 from VUSB. This jumper allows for communication with the MAX77756 through the on-board USB-to-I 2 C translator without the need for an external power supply. Note : Remove this jumper any time an external power supply is applied as an input source. |
| J102     | Open*            | Disconnects VUSB from IN1.                                                                                                                                                                                                                                                                                                                                |
| J204     | 1-2*             | Connects the U202 amplifier to the gate of the Q202 load MOSFET.                                                                                                                                                                                                                                                                                          |
| J204     | 2-3              | Connects the U202 amplifier to the gate of the Q201 depopulated TO-220 electronic load MOSFET.                                                                                                                                                                                                                                                            |
| J205     | 1-2*             | Connects OUT to the on-board electronic load.                                                                                                                                                                                                                                                                                                             |
| J206     | 1-2*             | Connects the DAC output to the on-board load's error amplifier U202.                                                                                                                                                                                                                                                                                      |

*Default position.

Evaluates: MAX77756

## MAX77756 Evaluation Kit

## Detailed Description of Software

The  GUI  software  allows  for  quick,  easy,  and  thorough evaluation  of  the  MAX77756  IC.  The  GUI  is  designed to  present  all  the  controls  necessary  to  operate  the  IC and on-board electronic load circuit. See Figure 4 for a screenshot of the GUI upon first opening.

## Installation

Visit www.maximintegrated.com/evkitsoftware to download  and  install  the  latest  version  of  the  EV  kit GUI  software.  Save  the  EV  kit  software  to  your  local MAX77756 folder and uncompress the ZIP file. Right-click on the .EXE file that was uncompressed and select 'Run as  Administrator.'  Follow  the  on-screen  instructions  to complete the installation.

## Windows Drivers

After  connecting  a  Micro-USB  cable  between  your  PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C communication with the EV kit. Two control tabs are available.

The BUCK tab  controls  correspond  directly  to  bitfields within the IC. Hovering your pointer over the control text

Evaluates: MAX77756

descriptions  results  in  a  pop-up  window  indicating  the exact bitfield for that control. Refer to the MAX77756 IC data  sheet's Register  Map section  for  complete  bitfield descriptions.

The Load Control tab  controls  the  on-board  electronic load,  which  is  provided  to  make  evaluation  more  convenient.  None  of  the  controls  on  the Load Control tab manipulate bitfields within the IC.

## Evaluating Other MAX77756 Versions

The EV kit natively  supports  the  3.3V  internal-feedback version of the IC. The EV kit is designed so that any version of the IC can be evaluated with the same hardware. To evaluate the 1.8V or 5V internal-feedback versions of the IC, replace the U1 component on the EV kit with the desired output version (refer to the data sheet's Ordering Information ).  No other component changes are required to evaluate the internal-feedback version.

To evaluate the external resistor-divider feedback version of the IC, replace the U1 component on the EV kit with the  MAX77756D.  The  external  feedback  resistors  (R2 and  R3)  must  be  adjusted  according  to  the Setting  the Output Voltage (MAX77756D) section in the MAX77756 IC data sheet.

Figure 4. MAX77756 EV Kit Top-Level Interface GUI Screenshot

<!-- image -->

│

## MAX77756 Evaluation Kit

## Detailed Description of Hardware

## Hardware Considerations

## Input Slew-Rate Limiting

The forward current from IN1 or IN2 to SUP must be limited to less than 4.1A according to the absolute maximum ratings of the device (see the MAX77756 IC data sheet's Absolute  Maximum  Ratings section).  To  ensure  compliance with this, a design must limit the supply voltage slew rate to IN1 or IN2, and/or the value of the SUP capacitor (I INx   =  C SUP   x  dV/dt).  Never  'hot-plug'  a  precharged voltage supply to IN1 or IN2. The voltage slew rate of a hot-plug event is very fast and can cause inrush currents in excess of 4.1A.

To avoid a hot-plug event, set any input power supply to 0V, connect the supply to the EV kit, enable the output, and increase the voltage to the desired value. For battery insertion  into  IN1  or  IN2,  precharge  SUP  to  the  battery voltage before connecting the battery to IN1 or IN2. This prevents any inrush current pass from IN1 or IN2 to the SUP capacitor.

## High-Performance LX Probing

The step-down converter's LX node has fast rising and falling voltage edges (a few nanoseconds). It is difficult to get a clean and noise-free measurement of the LX node voltage  using  traditional  oscilloscope  voltage-probing techniques  due  to  the  length  of  the  oscilloscope  probe ground  lead.  The  EV  kit  has  exposed  areas  of  copper near  the  LX  node  that  allow  for  low-noise  probing.  To properly probe the LX node:

Evaluates: MAX77756

- 1) Remove the oscilloscope probe covers to expose the bare probe tip and ground sleeve.
- 2) Wrap a piece of bare solid wire several times around the ground sleeve of the probe and bend the end of the wire close to the oscilloscope probe tip.
- 3) Cut off the wire so it reaches the same length as the oscilloscope probe tip. This wire acts as the ground connection for the probe.
- 4) Place the tip of the oscilloscope probe on the bare copper connected to the inductor (L1) and place the ground lead on the exposed copper ground pad above L1, as shown in Figure 5.

## Electronic Load

An on-board electronic load is  provided  to  make  evaluation  more  convenient. The  electronic  load  controls  are available through the Load Control tab of the GUI. Three modes of operation are available: steady-state, transient, and  random.  To  configure  the  electronic  load,  use  the slider bar or enter a current value (mA) into the text field and  click  the Enable button.  Experiment  with  different electronic-load operating modes to gain insight to how the device performs under various conditions.

For  the  transient  and  random  modes  of  operation,  the 'target  time-slice'  values  are  simply  targets.  The  evaluation system does not use a real-time operating system so variations in that time are normal. If an older computer appears to run slow with the GUI, try to use longer values for the 'target time slice.'

The offset and gain values are set by Maxim and do not need to be altered.

Figure 5. High-Performance LX Probing Technique

<!-- image -->

│

## Electronic-Load Transistor

The  on-board  electronic-load  circuit  uses  a  D-Pack MOSFET (Q202) by default to control  the  load  current. This transistor uses the copper of the EV kit's PCB as a heatsink. When operating the load at the IC's maximum output capacity, the load transistor produces a lot of heat and spreads the heat through the EV kit board. If this selfheating effect is undesirable, install a TO-220 MOSFET with  an  attached  heatsink  in  position  Q201  to  spread the heat out to an external heatsink. Move the shunt on jumper J204 to the 2-3 position after installing the TO-220 MOSFET to change the gate-drive  signal  to  the  proper MOSFET.

## High-Speed Load-Transient Generation

The on-board electronic-load circuit is designed to generate very high-speed load transients. To create high-speed load transients:

- 1) Connect a Micro-B USB cable between the EV kit's J103 and a computer or USB wall adapter. This cable allows  the  load  to  enter  the  800mA  range  (default range).
- 2) Connect an input power supply of desired voltage to the IC to IN1, IN2, or SUP, as described in the Input Slew-Rate Limiting section.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77756EVKIT# | EV Kit |

#Denotes RoHS compliant.

- 3) Enable the IC by installing a shunt on J2 in the 1-2 position.
- 4) Remove the shunt on J204.
- 5) Connect a function generator between pin 1 of jumper J104 (Q202's gate pin) and GND3.
- 6) Connect an oscilloscope to the VIL\_OUT test point. This test point senses the voltage on the electronicload  circuit's  500mΩ  sense  resistor.  A  voltage  of 100mV on this node is equivalent to 200mA of load current  while  the  electronic  load  is  in  the  800mA range.
- 7) Configure  the  function  generator  to  create  a  pulse waveform of desired period and pulse width. Set the low level of the pulse to 0V and the high level of the pulse to 1V. 1V is below the threshold voltage of the electronic-load circuit's MOSFET and does not create an appreciable load current.
- 8) While monitoring the VIL\_OUT voltage on the oscilloscope, slowly increase the high level of the pulse waveform  until  the  desired  pulsed  load  current  is achieved.

## MAX77756 EV System Bill of Materials

| REF_DES                                 | DNI, DNP       |   QTY | MFG PART #                            | MFG                | VALUE   | DESCRIPTION                                                                                                              |
|-----------------------------------------|----------------|-------|---------------------------------------|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| BIAS                                    |                |     1 | 5010                                  | KEYSTONE           |         | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| C1, C2                                  |                |     2 | C1005X5R1E225K050                     | TDK                | 2.2UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
| C3                                      |                |     1 |                                       |                    | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR    |
| C4, C10                                 |                |     2 |                                       |                    | 0.1UF   | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;                 |
| C5                                      |                |     1 |                                       |                    | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR   |
| C6-C8                                   |                |     3 |                                       |                    | 22UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR    |
| C9                                      |                |     1 | GRM1555C1H5R0CZ01D                    | MURATA             | 5PF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 5PF; 50V; TOL=+-0.25PF; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/-                 |
| C11, C12                                |                |     2 | 08053C105JAT2A                        | AVX                | 1UF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 25V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +85 DEGC; TC=+/-                        |
| C13,C14                                 | Do not install |     2 |                                       |                    | OPEN    | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                  |
| C15                                     |                |     1 |                                       |                    | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR           |
| C16                                     |                |     1 | GRM155R61C104KA88                     | MURATA             | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                   |
| C108, C135, C150, C151, C155-C157, C159 |                |     8 |                                       |                    | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=CGA SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C110-C113, C115, C118, C120, C158       |                |     8 |                                       |                    | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                        |
| C114                                    |                |     1 |                                       |                    | 0.47UF  | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                                 |
| C129,C134                               | Do not install |     2 |                                       |                    | OPEN    | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                  |
| C152, C153                              |                |     2 | C0402C0G500-150JNP; GRM1555C1H150JA01 | VENKEL LTD./MURATA | 15PF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                 |
| C154                                    |                |     1 |                                       |                    | 4.7UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR    |

Evaluates: MAX77756

## MAX77756 EV System Bill of Materials (continued)

| REF_DES                                              | DNI, DNP   |   QTY | MFG PART #                          | MFG                         | VALUE           | DESCRIPTION                                                                                                            |
|------------------------------------------------------|------------|-------|-------------------------------------|-----------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------|
| C211                                                 |            |     1 |                                     |                             | 1000PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR       |
| C212, C221-C223                                      |            |     4 |                                     |                             | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C213, C214                                           |            |     2 | C0402C101K5GAC; C1005C0G1H101K050BA | KEMET/TDK                   | 100PF           | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                             |
| C241                                                 |            |     1 | C1005X5R1C105K                      | TDK                         | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
| C250                                                 |            |     1 | C1005X5R1H472K050                   | TDK                         | 4700PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
| D1                                                   |            |     1 | CMHSH5-4                            | CENTRAL SEMICONDUCTOR CORP. | CMHSH5-4        | DIODE; SCH; SMT (SOD-123); PIV=40V; IF=0.5A; -65 DEGC TO +125 DEGC                                                     |
| D100, D101                                           |            |     2 | LTST-C190YKT                        | LITE-ON ELECTRONICS; INC.   | LTST-C190YKT    | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                     |
| D102                                                 |            |     1 | LTST-C190GKT                        | LITE-ON ELECTRONICS; INC.   | LTST-C190GKT    | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                     |
| FB100                                                |            |     1 | BLM18PG221SN1                       | MURATA                      | 220             | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/- 25%; 1.4A; -55 DEGC TO +125 DEGC                                      |
| IN1, IN2, OUT, SUP, GND1-GND4                        |            |     8 | 9020 BUSS                           | WEICO WIRE                  | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |
| POK, SCL, SDA, GNDS, IN1S, IN2S, OUTS, SUPS, VIL_OUT |            |     9 | 5000                                | KEYSTONE                    |                 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |
| J1, J4, J5, J102                                     |            |     4 | PBC02SAAN                           | SULLINS ELECTRONICS CORP.   | PBC02SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                           |
| J2, J3, J204                                         |            |     3 | PEC03SAAN                           | SULLINS ELECTRONICS CORP.   | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                           |
| J100                                                 |            |     1 | PBC06SAAN                           | SULLINS ELECTRONICS CORP.   | PBC06SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                       |
| J101                                                 |            |     1 | PBC03DAAN                           | SULLINS ELECTRONICS CORP.   | PBC03DAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                       |
| J103                                                 |            |     1 | 10103592-0001LF                     | FCI CONNECT                 | 10103592-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                   |

Evaluates: MAX77756

## MAX77756 EV System Bill of Materials (continued)

| REF_DES                                | DNI, DNP       |   QTY | MFG PART #                       | MFG                        | VALUE          | DESCRIPTION                                                                                           |
|----------------------------------------|----------------|-------|----------------------------------|----------------------------|----------------|-------------------------------------------------------------------------------------------------------|
| J205, J206                             |                |     2 | TSW-102-07-T-S                   | SAMTEC                     | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC               |
| L1                                     |                |     1 | 1239AS-H-100N=P2                 | TOKO                       | 10UH           | INDUCTOR; SMT (2520); METAL ALLOY CHIP; 10UH; TOL=+/-30%; 0.85A; FORMFACTOR                           |
| Q100, Q101                             |                |     2 | FDY300NZ                         | FAIRCHILD SEMICONDUCTOR    | FDY300NZ       | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I- (0.6A); V-(20V)  |
| Q200                                   |                |     1 | DMG3420U                         | DIODES INCORPORATED        | DMG3420U       | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.74W); I-(5.47A); V-(20V)                  |
| Q201                                   | Do not install |     1 | PSMN022-30PL                     | NXP                        | PSMN022-30PL   | TRAN; N-CHANNEL 30V 22MOHM LOGIC LEVEL MOSFET; NCH; TO-220AB; PD-(41W); I-(30A); V-(30V)              |
| Q202                                   |                |     1 | IRLR8259PBF                      | INTERNATIONAL RECTIFIER    | IRLR8259PBF    | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD- (48W); I-(57A); V-(25V)                                     |
| QSCL, QSDA                             |                |     2 | 5002                             | KEYSTONE                   |                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; |
| R1, R115, R157, R159, R161, R214, R283 |                |     7 |                                  |                            | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                     |
| R2, R4, R5                             |                |     3 |                                  |                            | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                      |
| R3                                     | Do not install |     1 |                                  |                            | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                      |
| R6, R7, R120                           |                |     3 | CRCW0402100KFK; RC0402FR-07100KL | VISHAY DALE; YAGEO PHICOMP | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |
| R100, R118                             |                |     2 |                                  |                            | 4.7K           | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                 |
| R103, R123                             |                |     2 |                                  |                            | 22             | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                   |
| R107, R108                             |                |     2 |                                  |                            | 2.2K           | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                 |
| R109, R111                             |                |     2 |                                  |                            | 100            | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                  |
| R110                                   |                |     1 | CRCW0402470RFK                   | VISHAY DALE                | 470            | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
| R122                                   |                |     1 |                                  |                            | 1M             | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                         |

Evaluates: MAX77756

## MAX77756 EV System Bill of Materials (continued)

| REF_DES                                                                           | DNI, DNP   |   QTY | MFG PART #                                        | MFG                                   | VALUE   | DESCRIPTION                                                           |
|-----------------------------------------------------------------------------------|------------|-------|---------------------------------------------------|---------------------------------------|---------|-----------------------------------------------------------------------|
| R135, R136, R139, R141, R143, R148, R155, R162-R165, R238, R247, R248, R305, R306 |            |    16 |                                                   |                                       | 0       | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR    |
| R137, R138                                                                        |            |     2 |                                                   |                                       | 49.9    | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR |
| R142                                                                              |            |     1 |                                                   |                                       | 0       | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR      |
| R156                                                                              |            |     1 | CRCW0402105KFK                                    | VISHAY DALE                           | 105K    | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM             |
| R158                                                                              |            |     1 | CRCW0402169KFK                                    | VISHAY DALE                           | 169K    | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM              |
| R160                                                                              |            |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                           | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                |
| R235                                                                              |            |     1 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100     | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM               |
| R236                                                                              |            |     1 | CRCW0402680RFK;RC0402 FR-07680RL                  | VISHAY DALE/YAGEO PHICOMP             | 680     | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM              |
| R237                                                                              |            |     1 | CRCW040220K0FK                                    | VISHAY DALE                           | 20K     | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM               |
| R239, R240                                                                        |            |     2 | CRCW04024991FK                                    | VISHAY DALE                           | 4.99K   | RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM                |
| R242, R243                                                                        |            |     2 |                                                   |                                       | 1K      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR       |
| R244, R246, R251                                                                  |            |     3 | CRCW04021M00FK                                    | VISHAY DALE                           | 1M      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                   |
| R245                                                                              |            |     1 | LRC-LR2512LF-01-R500-F                            | TT ELECTRONICS                        | 0.5     | RESISTOR; 2512; 0.5 OHM; 1%; 100PPM; 2.0W; METAL FILM                 |
| R249                                                                              |            |     1 | CRCW080549R9FK; ERJ- 6ENF49R9                     | VISHAY DALE; PANASONIC                | 49.9    | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.125W; THICK FILM              |
| R252                                                                              |            |     1 | CRCW040210K0FK; RC0402FR-0710K                    | VISHAY DALE; YAGEO PHICOMP            | 10K     | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                  |
| R297                                                                              |            |     1 | ERJ-2RKF4703X                                     | PANASONIC                             | 470K    | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM             |
| R298                                                                              |            |     1 | CRCW0402649KFK                                    | VISHAY DALE                           | 649K    | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM              |

│

Evaluates: MAX77756

## MAX77756 EV System Bill of Materials (continued)

| REF_DES   | DNI, DNP   |   QTY | MFG PART #           | MFG                                 | VALUE         | DESCRIPTION                                                                                                       |
|-----------|------------|-------|----------------------|-------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------|
| U1        |            |     1 | MAX77756BEWL+        | MAXIM                               | MAX77756BEWL+ | EVKIT PART-IC; PACKAGE OUTLINE 21-100111; PACKAGE CODE W151G2+1                                                   |
| U2        |            |     1 | 24AA02T-I/OT         | MICROCHIP                           | 24AA02T-I/OT  | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                          |
| U100      |            |     1 | MAXQ2000-RBX+        | MAXIM                               | MAXQ2000-RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                            |
| U101      |            |     1 | FT232RQ              | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ       | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32- EP 5X5                                                          |
| U102-U104 |            |     3 | MAX8512EXK           | MAXIM                               | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                     |
| U107      |            |     1 | MAX3395EETC          | MAXIM                               | MAX3395EETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED- UP CIRCUITRY; TQFN12 4X4       |
| U202      |            |     1 | MAX44251AUA+         | MAXIM                               | MAX44251AUA+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                               |
| U205      |            |     1 | MAX5815AAUD+         | MAXIM                               | MAX5815AAUD+  | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14 |
| Y101      |            |     1 | CX3225SB16000D0FLJZZ | KYOCERA-KINSEKI                     | 16MHZ         | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM                                                       |
| -         | -          |     1 | MAX77756EVKIT#       | MAXIM                               | -             | PCB: MAX77756 EVKIT                                                                                               |
|           |            |   163 |                      |                                     |               |                                                                                                                   |

Evaluates: MAX77756

## MAX77756 EV System Schematic

| Part Number     | Configuration   | 7-bit                  | 8-bit Write                        | 8-bit Read       |
|-----------------|-----------------|------------------------|------------------------------------|------------------|
| (PMIC) MAX77756 | N/A             | 0X1E 0b001 1110        | 0X3C 0b0011 1100                   | 0x3D 0b0011 1101 |
| (ADC) MAX11614  | N/A             | 0x33 0b011 0011        | 0x66 0b0110 0110                   | 0x67 0b0110 0111 |
| (DAC) MAX5815   | ADDR1=ADDR0=GND | 0b001 0000 0x10        | 0x20 0x10* 0b0010 0000 0b0001 0000 | 0x21 0b0010 0001 |
| (EEPROM) 24AA02 | N/A             | 0x50 to 0x57 0b1010xxx | 0b1010xxx0                         | 0b1010xxx1       |

Evaluates: MAX77756

│

## MAX77756 EV System Schematic (continued)

<!-- image -->

│

## MAX77756 EV System Schematic (continued)

<!-- image -->

│

## MAX77756 EV System Schematic (continued)

<!-- image -->

│

## MAX77756 EV System PCB Layout

MAX77756 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77756 EV Kit PCB Layout -Top Layer

<!-- image -->

│

## MAX77756 EV System PCB Layout (continued)

MAX77756 EV Kit PCB Layout -Internal Layer 2

<!-- image -->

MAX77756 EV Kit PCB Layout -Internal Layer 3

<!-- image -->

│

## MAX77756 EV System PCB Layout (continued)

MAX77756 EV Kit PCB Layout -Bottom Layer

<!-- image -->

MAX77756 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

│

## MAX77756 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77756