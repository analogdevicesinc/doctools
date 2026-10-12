<!-- lastmod 2022-08-04 -->
## MAX77650/MAX77651 Evaluation Kit

## General Description

The  MAX77650/MAX77651  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  printed  circuit  board  (PCB) that  demonstrates  the  MAX77650/MAX77651.  The  EV kit  allows for easy evaluation of the various MAX77650/ MAX77651 features, including the SIMO buck-boost regulator,  linear  regulator,  analog  multiplexer,  smart  battery charger, on/off controller, and I 2 C interface.

The  MAX77650  and  MAX77651  EV  kits  are  identical aside  from  the  device  (U1),  silkscreen,  and  two  resistive  dividers  at  the  SIMO  outputs  (see  the MAX77650/ MAX77651 EV Kit Differences section). The MAX77650/ MAX77651 devices themselves have different output volt -age  ranges  for  the  SIMO  buck-boost  regulator.  Consult the device data sheet for more information.

Windows ® -based software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77650/MAX77651.

Ordering Information appears at end of data sheet.

## Evaluates: MAX77650/MAX77651

## Features

- ● Easy to Use
- ● GUI Drives I 2 C Interface
- ● On-Board Battery Ammeter
- ● On-Board Thermistor
- ● On-Key Options
- ● RGB LED Cluster
- ● Assembled and Fully Tested
- ● Emulates System Loading
- ● On-Board Electronic Loads
- ● Electronic Loads have steady-state, transient, and random modes
- Demonstrates End-to-End Analog Multiplexer Implementation
- ● On-Board ADC
- ● Evaluates Both Push-Button and Slider-Switch On-Key Options

Figure 1. MAX77650 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corp.

<!-- image -->

## Evaluates: MAX77650/MAX77651 MAX77650/MAX77651 Evaluation Kit

Figure 2. Simplified Block Diagram

<!-- image -->

## Evaluates: MAX77650/MAX77651 MAX77650/MAX77651 Evaluation Kit

Figure 3. MAX77650 EV Kit Top View

<!-- image -->

## Evaluates: MAX77650/MAX77651 MAX77650/MAX77651 Evaluation Kit

Figure 4. MAX77650 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77650 Top View Main Components

<!-- image -->

Evaluates: MAX77650/MAX77651

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                             |
|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J100                   | N/A                | Do not connect shunts to J100.                                                                                                                                                                                       |
| J101                   | 1-2                | 1-2: Connects a VIO to the 1.8V EVKIT logic rail. 3-4: Connects a VIO to the 3.3V EVKIT logic rail. 5-6: Connects a VIO to the LDO output.                                                                           |
| J200                   | 1-2                | 1-2: Connects the U200 amplifier to the gate of the Q200 load FET.                                                                                                                                                   |
| J201                   | 1-2                | 1-2: Connects VSBB0 to the on-board ADC.                                                                                                                                                                             |
| J202                   | 1-2                | 1-2: Connects the U201 amplifier to the gate of the Q201 load FET.                                                                                                                                                   |
| J203                   | 1-2                | 1-2: Connects VSBB1 to the on-board ADC.                                                                                                                                                                             |
| J204                   | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load FET.                                                                                                                                                   |
| J205                   | 1-2                | 1-2: Connects VSBB2 to the on-board ADC.                                                                                                                                                                             |
| J206                   | 1-2                | 1-2: Connects the U203 amplifier to the gate of the Q203 load FET.                                                                                                                                                   |
| J207                   | 1-2                | 1-2: Connects VLDO to the on-board ADC.                                                                                                                                                                              |
| J208                   | 1-2                | 1-2: Connects the on-board ammeter to GND.                                                                                                                                                                           |
| J3                     | 2-3                | 1-2: Connects GPIO to VIO. 2-3: Connects GPIO to GND.                                                                                                                                                                |
| J4                     | N/A                | 1-2: Connects PWR_HLD to VIO. 2-3: Connects PWR_HLD to GND.                                                                                                                                                          |
| J5                     | 2-3                | 1-2: Connects EN to SW1. 2-3: Connects EN to SW2.                                                                                                                                                                    |
| J7                     | 1-3                | 1-2: Connects the THM pin to the divider through the potentiometer (R12). 1-3: Connects the THM pin to the divider through the on-board thermistor. 1-4: Connects the THM pin to the divider through a 10k resistor. |
| J8                     | 1-2                | 1-2: Connects RST to PWR_HLD through a 150Ω resistor.                                                                                                                                                                |
| J10                    | N/A                | 1-2: Connects VUSB (voltage from USB input on J6) to VCHGIN.                                                                                                                                                         |

## MAX77650/MAX77651 Evaluation Kit

## Quick Start

Follow this procedure to familiarize yourself with the EV kit. Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- ● MAX77650/MAX77651 EV kit
- ● Windows-based PC
- ● Power supply
- ● Ammeter
- ● DVM
- ● Micro-USB cable
- ● GUI

## Procedure

- 1) Install  the  GUI  software.  Visit  the  product  webpage at www.maximintegrated.com/max77650evkit and navigate  to Design  Resources to  download  the  latest  version  of  the  EV  kit  software.  Save  the  EV  kit software to a temporary folder and decompress the ZIP file.
- 2) Install EV kit shunts per Table 1.
- 3) Connect a Micro-B USB cable between the EV kit's J6 and your Windows-based PC. Note that a USB cable should always be plugged in during evaluation.
- 4) Apply  a  3.7V  supply  (set  for  100mA  current  limit) through an ammeter (set for 10mA range) across the

## Evaluates: MAX77650/MAX77651

VBATT and GND2 terminals of the EVKIT. Turn the supply on.

- 5) Open the GUI and press the Connect button in the upper-left corner. Wait for the device to respond, and in  the Synchronize window,  press  the Read  and close button.
- 6) Press the on-key (SW1) for approximately 1 second, then release the on-key.
- 7) On  the AMUX/ADC tab  of  the  GUI,  click  the Read buttons next to VSBB0, VSBB1, VSBB2, and VLDO. For  the  MAX77650A,  2.05V,  1.2V,  3.3V,  and  1.85V, respectively, appear (Figure 6). For the MAX77651B, 1.9V, 3.2V, 0V, and 0V, respectively, appear.
- 8) Confirm with the ammeter that the quiescent current is approximately 40µA. Then, in the Global Resources tab on the GUI, set the Main Bias Low Power Mode bit to '1' and click the Write button. Now, confirm that the quiescent current is approximately 6µA.

Note  that  the  MAX77651  will  have  an  extra  3µA current  when  J203  and  J205  are  installed.  See  the MAX77650/MAX77651 EV Kit Differences section for more information.

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI. For guidance on configuring the charger and the LED's, see the Charger Quick Start and LED Quick Start sections. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

Figure 6. Quick Start: Regulator Check with the ADC

<!-- image -->

│

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an external pullup resistor R2. Select which type of switch to use with jumper J5. Refer to the MAX77650/MAX77651 data sheet for more information on configuring the IC for momentary or persistent switches.

## Temperature Monitoring

Jumper  J7  allows  selection  between  the  following  temperature monitoring options:

- 1) Potentiometer R12 (Connect pins 1 and 2)
- 2) Fixed resistor divider R13 (Connect pins 1 and 4)
- 3) 3380K negative temperature coefficient thermistor (NTC) RT1 (Connect pins 1 and 3)

Use the potentiometer setting (pin 1 and 2) to simulate changing  temperature  to  evaluate  the  charger's  JEITA safe  charging  response.  Turn  the  potentiometer  knob counterclockwise  to  simulate  increasing  battery  temperature. Turn the knob clockwise to simulate decreasing temperature. Use the resistor setting (pin 1 and 4) to set a  static  temperature  (25°C).  Use  the  thermistor  setting (pin 1 and 3) to evaluate the charger's response to actual EVK  temperature.  The  NTC  beta  parameter  is  3380K. Temperature thresholds corresponding to this NTC beta are listed in Table 2.

The MAX77650/MAX77651 automatically biases the temperature  monitoring  circuit  whenever  CHGIN  is  valid and  the  thermistor  is  enabled  (THM\_EN  =  1),  or  the MUX\_SEL[3:0] bitfield  is  connecting  the THM  or TBIAS pins to the AMUX output (MUX\_SEL = 0b0111 or 0b1000). Refer to the Adjustable Thermistor Temperature Monitors section of the MAX77650/MAX77651 data sheet for more information.

Table 2. Trip Thresholds for 3380K Beta Thermistor

|   TRIP VOLTAGE (V) |   TRIP TEMPERATURES ( ° C) |
|--------------------|----------------------------|
|              1.024 |                        -10 |
|              0.976 |                         -5 |
|              0.923 |                          0 |
|              0.867 |                          5 |
|              0.807 |                         10 |
|              0.747 |                         15 |
|              0.511 |                         35 |
|              0.459 |                         40 |
|              0.411 |                         45 |
|              0.367 |                         50 |
|              0.327 |                         55 |
|              0.291 |                         60 |

## Battery Ammeter

The EV kit comes with an on-board ammeter for users to measure battery current  with  selectable  6mA  or  600mA range. The battery current sense resistor voltage is amplified with an op-amp and then converted with an ADC. The GUI reads the ADC value and displays the corresponding current measurement. There is a removable jumper J208 (default installed, near the Li+ battery connector J9) that shorts  the  negative  terminal  of  the  battery  to  GND.  To use the on-board battery ammeter, remove jumper J208 and select the desirable ammeter range (6mA or 600mA) in the AMUX/ADC tab of the GUI. Reinstall jumper J208 when not using the on-board battery ammeter. See the Software section for where to read the current value on the GUI.

## MAX77650/MAX77651 Evaluation Kit

## Electronic Load

The EV kit comes with an electronic load that allows the user to easily evaluate the SIMO and LDO. An on-board DAC  and  op-amp  configuration  set  the  load  current through  I 2 C.  J201,  J203,  J205,  and  J207  connect  the load to the output of the SBB0, SBB1, SBB2, and LDO, respectively. Emulate SYS loading by removing J207 and connecting pin 1 of the header to VSYS with a wire. To exercise  the  load  transient  response,  remove  J200  (for SBB0),  J202  (for  SBB1),  J204  (for  SBB2),  or  J206  (for LDO) and connect a signal generator to the gate of the load MOSFET (pin 2 of the header). Drive the MOSFET gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there is a 1Ω sense resistor that has test point access (called VIL\_SBB0, VIL\_SBB1, VIL\_SBB2, and VIL\_LDO) that allows for a 1:1 conversion of load current to voltage. See the Software section for how to set the load current from the GUI.

## Evaluates: MAX77650/MAX77651

## On-Board ADC (MAX11614)

An on-board ADC is available to convert the output voltages of SBB0, SBB1, SBB2, and LDO. The AMUX pin of the  MAX77650/MAX77651,  test  points  AIN1  and  AIN7, and battery current (IBATT) are also measured. The GUI does the appropriate conversions. See the Software section for how to read these values from the GUI.

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77650/ MAX77651.

The GUI is designed to have individual tabs for each functional block of the device (global resources, interrupts/status, GPIO, charger, SIMO buck-boost, LDO, and LED driver) and  two  additional  tabs  for  controlling  EV  kit  hardware (load control and AMUX/ADC). See Figure 8 for a screenshot of the GUI upon first opening.

Figure 7. Electronic Load Block Diagram

<!-- image -->

│

Evaluates: MAX77650/MAX77651

Figure 8. MAX77650/MAX77651 Evaluation Kit GUI Top-Level Interface

<!-- image -->

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/max77650evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  the Load  Control and AMUX/ADC tabs) corresponds directly to a register within the  MAX77650/MAX77651.  Refer  to  the Programmer's Guide and  IC  data  sheet  for  a  complete  description  of the  registers.  The Load  Control and AMUX/ADC tabs provide additional functionality with the EV kit.

## Load Control Tab

The Load Control tab contains controls for setting loads on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value (mA) and click the Enable button. Shuffle through the modes to exercise different load conditions. The offset and gain values are set by Maxim and do not need to be altered.

## AMUX/ADC Tab

The AMUX/ADC tab  allows  users  to  convert  important voltage and current signals to digital readings. To read a signal, click the Read button and examine the Interpreted Value column.

│

## MAX77650/MAX77651 Evaluation Kit

## Charger Quick Start

The Charger tab on the GUI has many settings to toggle; however, only three registers are needed to charge a battery. To get started with the charger, follow the procedure below:

- 1) Determine the capacity of the battery to identify a safe charge current. Maxim recommends charging at 70% of  the  total  capacity  (e.g.,  a  40mAh  battery  can  be charged at 30mA charge current). Consult the battery manufacturer's data sheet carefully to determine safe charging parameters.
- 2) In Charger Configuration E/F, move the Fast-Charge Current  (IFAST\_CHG) slider  to  the  desired  charge current setting, and click the Write button.
- 3) In  Charger  Configuration  G/H/I,  move  the FastCharge Voltage (VFAST\_CHG) slider to the desired charge voltage setting, and click the Write button.
- 4) Make sure there is a charge source connected to the EV kit at 5V. Then, enable the charger by setting the button labeled Charger to '1' (Enabled) and click the Write button.
- 5) The  battery  should  now  be  charging  at  the  charge current set from step 2.

For  more  information  on  the  capabilities  of  the  battery charger,  refer  to  the  IC  data  sheet  and Programmer's Guide .

## LED Quick Start

There is an RGB LED cluster on the EV kit, and three current sinks (LED0, LED1, and LED2). To get started with the EV kit LEDs, follow the procedure below:

- 1) Choose  an  LED  Configuration  section  to  change. LED0 controls Blue, LED1 controls Red, and LED2 controls Green.
- 2) The main-bias circuits must be on for the current sinks to enable. This can be accomplished by: pressing the on-key (SW1), or in the Global Resources tab of the GUI, setting the Main Bias Enable Controller bit to a '1' and click the Write button. Pressing the on-key will  allow  the  internal  on/off  controller  to  enable  the main-bias, while setting the GUI bit to '1' will force the main-bias circuits on.
- 3) On the LED Driver tab  of  the  GUI,  set  the  desired LED Full Scale to 3.2mA.
- 4) Set the Duty Cycle and Period to a desired blinking configuration (100% duty cycle for always-on).

## Evaluates: MAX77650/MAX77651

- 5) Set the Brightness to 50% or adjust as needed. Click the Write button.
- 6) Set the LED Master Enable bit in LED TOP Configu -ration to '1'. Click the Write button. The LEDs should now be powered. If they are not, see step 2 of this procedure.
- 7) Adjust the settings for the other LEDs as desired.

## MAX77650/MAX77651 EV Kit Differences

The  MAX77650  and  the  MAX77651  are  the  same  in every way except for the output voltage range of two of the SIMO outputs. The MAX77650 SBB1 output voltage range is from 0.8V to 1.5875V, whereas the MAX77651 SBB1 output  voltage  range  is  from  2.4V  to  5.25V.  The MAX77650 SBB2 output  voltage  range  is  from  0.8V  to 3.95V,  whereas  the  MAX77651  SBB2  output  voltage range  is  from  2.4V  to  5.25V.  To  expedite  evaluation  of these two products, Maxim offers the MAX77650EVKIT# and the MAX77651EVKIT#.

Like the devices themselves, these two EV kits are almost identical. The PCB layout and schematic are identical for both EV kits. The silkscreen designator for the part number on the PCB is different as well as the actual device (U1).  As  shown  in  the MAX77650/MAX77651  EV  Kit Component List , R227, R234, R246, and R247 are different for each EV kit. On the MAX77651 EV kit, these resistors scale the SBB1/SBB2 output voltages to be within the 4.096V full-scale range of the MAX11614 ADC. They also create a 1MΩ impedance path to ground, which creates additional current. To see the true quiescent current of the device, remove J203 and J205 from the EV kit.

The  GUI  automatically  detects  the  device  version  by reading the DIDM bit. The transfer function for converting the SBB1 and SBB2 voltages are adjusted based on the version detected.

Note that the photos and layout files shown are for the MAX77650, but are directly applicable to the MAX77651.

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77650EVKIT# | MAX77650AEWV+ | EV Kit |
| MAX77651EVKIT# | MAX77651AEWV+ | EV Kit |

# Denotes RoHS compliant.

│

## MAX77650/MAX77651 EV Kit Component List

| REF_DES                                                                                            | DNI/DNP        |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #          | MANUFACTURER   | VALUE   | DESCRIPTION                                                                                                            |
|----------------------------------------------------------------------------------------------------|----------------|---------------------|---------------------|---------------------|----------------|---------|------------------------------------------------------------------------------------------------------------------------|
| VL, AIN1, AIN7, VIL_LDO, VIL_SBB0-VIL_SBB2                                                         |                |                   7 |                   7 | 5000                | KEYSTONE       |         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |
| NEN, SCL, SDA, AMUX, GPIO, NIRQ, NRST, QSCL, QSDA, PWRHLD                                          |                |                  10 |                  10 | 5002                | KEYSTONE       |         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                  |
| LDO, THM, SBB0-SBB2, VSYS, BATTN, CHGIN, INLDO, TBIAS, VBATT, IN_SBB                               |                |                  12 |                  12 | 5010                | KEYSTONE       |         | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                     |
| C1, C11, C15                                                                                       |                |                   3 |                   3 | GRM188R61 A226ME15D | MURATA         | 22UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR  |
| C2                                                                                                 |                |                   1 |                   1 | GRM188R61 E475KE11D | MURATA         | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
| C3, C12, C110-C113, C115, C118, C120, C158, C239-C242                                              |                |                  14 |                  14 | GRM155R60J 105KE19D | MURATA         | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR  |
| C4                                                                                                 |                |                   1 |                   1 | GRM155R71 H332KA01D | MURATA         | 3300PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
| C5, C6, C8, C9, C13, C17, C20                                                                      |                |                   7 |                   7 | GRJ155R60J106ME11D  | MURATA         | 10UF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR          |
| C7, C154                                                                                           |                |                   2 |                   2 | ZRB15XR61A475ME01D  | MURATA         | 4.7UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR  |
| C10, C114                                                                                          |                |                   2 |                   2 | GRM188R61 A474KA61D | MURATA         | 0.47UF  | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                               |
| C14, C108, C150, C151, C155- C157, C159, C202, C207, C212, C217, C221-C224, C226, C234-C237, C244, |                |                  29 |                  29 | GRM155R61E104KA87D  | MURATA         | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C268, C272-C277 C16,C18,C19,C21- C24,C26,C129,C134                                                 | Do not install |                  10 |                  10 |                     |                | OPEN    | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES                                        | DNI/DNP   |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #                                               | MANUFACTURER              | VALUE                   | DESCRIPTION                                                                                                         |
|------------------------------------------------|-----------|---------------------|---------------------|----------------------------------------------------------|---------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------|
| C25, C27-C29                                   |           |                   4 |                   4 | GRM155R61A104KA01D                                       | MURATA                    | 0.1UF                   | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/- 30PPM/degC; FORMFACTOR ;           |
| C30-C33                                        |           |                   4 |                   4 | GRM155R61 A103KA01D                                      | MURATA                    | 0.01UF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R    |
| C152, C153                                     |           |                   2 |                   2 | GRM1555C1 H150FA01                                       | MURATA                    | 15PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                            |
| C200, C205, C210, C215, C220, C238, C248-C252  |           |                  11 |                  11 | GRM155R71 H472KA01D                                      | MURATA                    | 4700PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                          |
| C201, C206, C211, C216                         |           |                   4 |                   4 | GRM155R71H102KA01D                                       | MURATA                    | 1000PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR    |
| C203, C204, C208, C209, C213, C214, C218, C219 |           |                   8 |                   8 | C0402C180J5 GAC; GRM1555C1 H180JA01J;C 1005C0G1H1 80J050 | KEMET/MURATA/TDK          | 18PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                            |
| C225                                           |           |                   1 |                   1 | GRM1555C1 H331GA01; C1005C0G1H 331G050                   | MURATA/TDK                | 330PF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 330PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |
| C227                                           |           |                   1 |                   1 | GRM1555C1 H181GA01                                       | MURATA                    | 180PF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 180PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |
| C228                                           |           |                   1 |                   1 | GRM155R61A105KE15J                                       | MURATA                    | 1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR         |
| C269-C271                                      |           |                   3 |                   3 | GRM155R61 C105KE01D                                      | MURATA                    | 1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR |
| D100, D101                                     |           |                   2 |                   2 | LTST- C190YKT                                            | LITE-ON ELECTRONICS; INC. | LTST-C190YKT            | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                  |
| D102, D103                                     |           |                   2 |                   2 | LTST- C190CKT                                            | LITE-ON ELECTRONICS; INC. | LTST-C190CKT            | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                     |
| DS1                                            |           |                   1 |                   1 | 19- 337/R6GHBH C-A01/2T                                  | EVERLIGHT                 | 19- 337/R6GHBH C-A01/2T | DIODE; LED; SMD-B; RED/GREEN/BLUE; SMT; PIV=2V- 3.3V; IF=0.02A                                                      |
| FB100                                          |           |                   1 |                   1 | BLM18PG22 1SN1                                           | MURATA                    | 220                     | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/- 25%; 1.4A; -55 DEGC TO +125 DEGC                                   |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES            | DNI/DNP   |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #          | MANUFACTURER              | VALUE               | DESCRIPTION                                                                                                             |
|--------------------|-----------|---------------------|---------------------|---------------------|---------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------|
| GND1, GND5-GND7    |           |                   4 |                   4 | 5011                | KEYSTONE                  |                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| GND2-GND4, GND8    |           |                   4 |                   4 | 9020 BUSS           | WEICO WIRE                | MAXIMPAD            | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                               |
| J1, J6             |           |                   2 |                   2 | 10103592- 0001LF    | FCI CONNECT               | 10103592- 0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                    |
| J2                 |           |                   1 |                   1 | PBC10SAAN           | SULLINS ELECTRONICS CORP. | PBC10SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                       |
| J3-J5              |           |                   3 |                   3 | TSW-103-07- T-S     | SAMTEC                    | TSW-103-07-T- S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                        |
| J7                 |           |                   1 |                   1 | PEC04SAAN           | SULLINS ELECTRONICS CORP. | PEC04SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                               |
| J8, J10, J200-J208 |           |                  11 |                  11 | TSW-102-07- T-S     | SAMTEC                    | TSW-102-07-T- S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |
| J9                 |           |                   1 |                   1 | S2B-PH-K- S(LF)(SN) | JST MANUFACTURING         | S2B-PH-K- S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS   |
| J100               |           |                   1 |                   1 | PBC06SAAN           | SULLINS ELECTRONICS CORP. | PBC06SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                        |
| J101               |           |                   1 |                   1 | TSW-102-26- T-T     | SAMTEC                    | TSW-102-26-T- T     | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                        |
| L1                 |           |                   1 |                   1 | DFE201210U- 1R5M=P2 | TOKO                      | 1.5UH               | EVKIT PART-INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A; 2.00MMX1.20MMX1.00MM                        |
| L3                 |           |                   1 |                   1 | CIGT201208E H2R2MN  | SAMSUNG ELECTRONICS       | 2.2UH               | EVKIT PART-INDUCTOR; SMT (0805); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 1.8A; 2.00MMX1.25MMX0.80MM                    |
| L4                 |           |                   1 |                   1 | CIGT201610E H2R2MN  | SAMSUNG ELECTRONICS       | 2.2UH               | EVKIT PART-INDUCTOR; SMT (0806); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 2.7A; 2.00MMX1.60MMX1.00MM                    |
| L5                 |           |                   1 |                   1 | DFE252007F- 2R2M=P2 | MURATA                    | 2.2UH               | EVKIT PART-INDUCTOR; SMT (1008); METAL ALLOY CHIP; 2.2UH; TOL=+/-20%; 1.7A; 2.50MMX2.00MMX0.70MM                        |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES                                                                                                                        | DNI/DNP   |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #                       | MANUFACTURER               | VALUE           | DESCRIPTION                                                                                          |
|--------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------|---------------------|----------------------------------|----------------------------|-----------------|------------------------------------------------------------------------------------------------------|
| Q100, Q101                                                                                                                     |           |                   2 |                   2 | FDY300NZ                         | FAIRCHILD SEMICONDUCTOR    | FDY300NZ        | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD- (0.625W); I-(0.6A); V-(20V) |
| Q200-Q203                                                                                                                      |           |                   4 |                   4 | IRFHM8337T RPBF                  | INTERNATIONAL RECTIFIER    | IRFHM8337TR PBF | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I- (18A); V-(30V)                                  |
| Q204                                                                                                                           |           |                   1 |                   1 | DMG3420U                         | DIODES INCORPORATED        | DMG3420U        | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.74W); I- (5.47A); V-(20V)                |
| Q205                                                                                                                           |           |                   1 |                   1 | FDN360P                          | FAIRCHILD SEMICONDUCTOR    | FDN360P         | TRANSISTOR, MOSFET P- CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=- 30V,VGSS=+/-20V                 |
| Q206                                                                                                                           |           |                   1 |                   1 | 2N7002                           |                            | 2N7002          | TRAN; ; NCH; SOT-23; PD- (0.33W); IC-(0.5A); VCEO-(60V); - 55 DEGC TO +150 DEGC                      |
| R1, R2, R10, R13, R15, R281, R282, R287, R288                                                                                  |           |                   9 |                   9 | CRCW04021 0K0FK; RC0402FR- 0710K | VISHAY DALE; YAGEO PHICOMP | 10K             | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |
| R3, R5-R9, R142, R277, R279                                                                                                    |           |                   9 |                   9 |                                  |                            | 0               | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                     |
| R4, R122                                                                                                                       |           |                   2 |                   2 |                                  |                            | 1M              | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                        |
| R11, R17, R135, R136, R139, R141, R143, R148, R152, R155, R162-R164, R204, R212, R225, R238, R251, R259, R285, R286, R302-R306 |           |                  26 |                  26 |                                  |                            | 0               | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                   |
| R12                                                                                                                            |           |                   1 |                   1 | 3296Y-1- 204LF                   | BOURNS                     | 200K            | RESISTOR; THROUGH HOLE- RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                        |
| R14, R115, R157, R159, R161, R214, R280, R283                                                                                  |           |                   8 |                   8 |                                  |                            | 100K            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                    |
| R16, R151                                                                                                                      |           |                   2 |                   2 | CRCW04021 50RFK; 9C04021A15 00FL | VISHAY DALE                | 150             | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                             |
| R100, R118                                                                                                                     |           |                   2 |                   2 |                                  |                            | 4.7K            | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                |
| R103, R123, R150                                                                                                               |           |                   3 |                   3 |                                  |                            | 22              | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                  |
| R107, R108                                                                                                                     |           |                   2 |                   2 |                                  |                            | 2.2K            | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                |
| R109, R111                                                                                                                     |           |                   2 |                   2 |                                  |                            | 100             | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                 |
| R110                                                                                                                           |           |                   1 |                   1 | CRCW04024 70RFK                  | VISHAY DALE                | 470             | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                             |
| R137, R138                                                                                                                     |           |                   2 |                   2 |                                  |                            | 49.9            | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES                                                    | DNI/DNP        |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #                                           | MANUFACTURER                          | VALUE   | DESCRIPTION                                                        |
|------------------------------------------------------------|----------------|---------------------|---------------------|------------------------------------------------------|---------------------------------------|---------|--------------------------------------------------------------------|
| R156                                                       |                |                   1 |                   1 | CRCW04021 05KFK                                      | VISHAY DALE                           | 105K    | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM          |
| R158                                                       |                |                   1 |                   1 | CRCW04021 69KFK                                      | VISHAY DALE                           | 169K    | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM           |
| R160                                                       |                |                   1 |                   1 | CRCW04024 752FK; 9C04021A47 52FLHF3; CRCW04024 7K5FK | VISHAY DALE                           | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM             |
| R201, R222, R235, R248, R289                               |                |                   5 |                   5 | CRCW04021 00RFK; 9C04021A10 00FL; RC0402FR- 07100RL  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100     | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM            |
| R202, R223, R236, R249                                     |                |                   4 |                   4 | CRCW04026 80RFK;RC040 2FR-07680RL                    | VISHAY DALE/YAGEO PHICOMP             | 680     | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM           |
| R203, R224, R237, R250                                     |                |                   4 |                   4 | CRCW04022 0K0FK                                      | VISHAY DALE                           | 20K     | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM            |
| R205, R206, R226, R228, R239, R240, R252, R253             |                |                   8 |                   8 | CRCW04024 991FK                                      | VISHAY DALE                           | 4.99K   | RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM             |
| R207, R208, R229, R230, R242, R243, R254, R255, R263, R264 |                |                  10 |                  10 |                                                      |                                       | 1K      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR    |
| R210, R231, R244, R257, R301                               |                |                   5 |                   5 | CRCW04021 M00FK                                      | VISHAY DALE                           | 1M      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                |
| R211, R233, R245, R258                                     |                |                   4 |                   4 | ERJ- 3RQF1R0V                                        | PANASONIC                             | 1       | RESISTOR, 0603, 1 OHM, 1%, 100PPM, 0.10W, THICK FILM               |
| R213,R260                                                  | Do not install |                   2 |                   2 |                                                      |                                       | OPEN    | RESISTOR; 0402; OPEN; FORMFACTOR                                   |
| R227(MAX77650)                                             |                |                   1 |                   0 |                                                      |                                       | 0       | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR |
| R227(MAX77651)                                             |                |                   0 |                   1 | CRCW04025 10KJN                                      | VISHAY DALE                           | 510K    | RESISTOR; 0402; 510K OHM; 5%; 200PPM; 0.063W; METAL FILM           |
| R234(MAX77650)                                             | Do not install |                   0 |                   0 |                                                      |                                       | OPEN    | RESISTOR; 0402; OPEN; FORMFACTOR                                   |
| R234(MAX77651)                                             |                |                   0 |                   1 | CRCW04025 10KJN                                      | VISHAY DALE                           | 510K    | RESISTOR; 0402; 510K OHM; 5%; 200PPM; 0.063W; METAL FILM           |
| R246(MAX77650)                                             |                |                   1 |                   0 |                                                      |                                       | 0       | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR |
| R246(MAX77651)                                             |                |                   0 |                   1 | CRCW04025 10KJN                                      | VISHAY DALE                           | 510K    | RESISTOR; 0402; 510K OHM; 5%; 200PPM; 0.063W; METAL FILM           |
| R247(MAX77650)                                             | Do not install |                   0 |                   0 |                                                      |                                       | OPEN    | RESISTOR; 0402; OPEN; FORMFACTOR                                   |
| R247(MAX77651)                                             |                |                   0 |                   1 | CRCW04025 10KJN                                      | VISHAY DALE                           | 510K    | RESISTOR; 0402; 510K OHM; 5%; 200PPM; 0.063W; METAL FILM           |
| R261                                                       |                |                   1 |                   1 | CSR0603FKR 100                                       | STACKPOLE ELECTRONICS INC             | 0.1     | RESISTOR; 0603; 0.1 OHM; 1%; 300PPM; 0.125W; THICK FILM            |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES                | DNI/DNP   |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #                         | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                                   |
|------------------------|-----------|---------------------|---------------------|------------------------------------|-------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| R262                   |           |                   1 |                   1 | CRCW06031 0R0FK; MCR03EZPFX 10R0   | VISHAY DALE/ROHM                    | 10             | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
| R265-R268              |           |                   4 |                   4 | CRCW04026 4K9FK                    | VISHAY DALE                         | 64.9K          | RESISTOR; 0402; 64.9K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                                     |
| R269                   |           |                   1 |                   1 | CRCW04021 K00FK; RC0402FR- 071KL   | VISHAY DALE; YAGEO PHICOMP          | 1K             | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                           |
| R284                   |           |                   1 |                   1 | CRCW04021 00KFK; RC0402FR- 07100KL | VISHAY DALE; YAGEO PHICOMP          | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                         |
| R293, R295, R297, R299 |           |                   4 |                   4 | ERJ- 2RKF4703X                     | PANASONIC                           | 470K           | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R294, R296, R298, R300 |           |                   4 |                   4 | CRCW04026 49KFK                    | VISHAY DALE                         | 649K           | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| RT1                    |           |                   1 |                   1 | NCP15XH103 F03RC                   | MURATA                              | 10K            | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                            |
| SW1                    |           |                   1 |                   1 | EVQ- Q2K03W                        | PANASONIC                           | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                    |
| SW2                    |           |                   1 |                   1 | CL-SB-12B-11                       | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.02A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM; NIDEC COPAL ELECTRONICS CORP |
| U1(MAX77650)           |           |                   1 |                   0 | MAX77650A EWV+                     | MAXIM                               | MAX77650       | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30                                                                           |
| U1(MAX77651)           |           |                   0 |                   1 | MAX77651A EWV+                     | MAXIM                               | MAX77651       | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30                                                                           |
| U100                   |           |                   1 |                   1 | MAXQ2000- RBX+                     | MAXIM                               | MAXQ2000- RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                                        |
| U101                   |           |                   1 |                   1 | FT232RQ                            | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ        | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                                       |
| U102-U104              |           |                   3 |                   3 | MAX8512EX K                        | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                 |
| U107                   |           |                   1 |                   1 | MAX3395EET C                       | MAXIM                               | MAX3395EET C   | IC; TRANS; 15KV ESD- PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                   |
| U108                   |           |                   1 |                   1 | 24AA02T- I/OT                      | MICROCHIP                           | 24AA02T-I/OT   | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                                      |
| U200-U203              |           |                   4 |                   4 | MAX44251A UA+                      | MAXIM                               | MAX44251AU A+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                           |
| U205                   |           |                   1 |                   1 | MAX5815AA UD+                      | MAXIM                               | MAX5815AAU D+  | IC; DAC; ULTRA-SMALL; QUAD- CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14            |

## MAX77650/MAX77651 EV Kit Component List (continued)

| REF_DES   | DNI/DNP   |   MAX77650EVKIT QTY |   MAX77651EVKIT QTY | MFG PART #            | MANUFACTURER    | VALUE           | DESCRIPTION                                                                                 |
|-----------|-----------|---------------------|---------------------|-----------------------|-----------------|-----------------|---------------------------------------------------------------------------------------------|
| U206      |           |                   1 |                   1 | MAX14689E WL+         | MAXIM           | MAX14689E WL+   | IC; ASW; 0.125A; FREQUENCY- SELECTSBLE; SWITCHED- CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2 |
| U207      |           |                   1 |                   1 | MAX4238AU T+          | MAXIM           | MAX4238AUT +    | IC; OPAMP; IC; ULTRA-LOW OFFSET/DRIFT; LOW-NOISE; PRECISION SOT23 AMPLIFIER; SOT23-6        |
| U209      |           |                   1 |                   1 | MAX11614E EE+         | MAXIM           | MAX11614EE E+   | IC; ADC; LOW-POWER; 8- CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16              |
| U210      |           |                   1 |                   1 | MAX6037BA UK41+       | MAXIM           | MAX6037BAU K41+ | IC; VREF; LOW-POWER; FIXED; ADJUSTABLE REFERENCE WITH SHUTDOWN; SOT23-5                     |
| U211      |           |                   1 |                   1 | MAX1697UE UT+         | MAXIM           | MAX1697UEU T+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                       |
| Y101      |           |                   1 |                   1 | CX3225SB16 000D0FLJZZ | KYOCERA-KINSEKI | 16MHZ           | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/- 15PPM                                |
| L2        | DNP       |                   0 |                   0 | MLP1608VR4 7D         | TDK             | 0.47UH          | INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/- 0.3nH; 0.8A                                 |
| PCB       |           |                   1 |                   1 | CL30_MAX77 651        | MAXIM           | PCB             | PCB: MAX77651 EVKIT                                                                         |

## MAX77650/MAX77651 EV Kit Schematic

Figure 9. MAX77650/MAX77651 EV Kit Schematic (1 of 6)

| 8-bit Read    | 0x81 0b1000 0001       | 0x91 0b1001 0001       | 0x93 0b1001 0011         | 0x67 0b0110 0111   | 0x3F 0b0011 1111                   | 0b1010xxx1             |
|---------------|------------------------|------------------------|--------------------------|--------------------|------------------------------------|------------------------|
| 8-bit Write   | 0b1000 0000 0x80       | 0x90 0b1001 0000       | 0x92 0b1001 0010         | 0b0110 0110 0x66   | 0x3E 0b0011 1110 0x10* 0b0001 0000 | 0b1010xxx0             |
| 7-bit         | 0x40 0b100 0000        | 0x48 0b100 1000        | 0x49 0b100 1001          | 0b011 0011 0x33    | 0b001 1111 0x1F                    | 0b1010xxx 0x50 to 0x57 |
| Configuration | set for 0 ADDR OTP bit | set for 1 ADDR OTP bit | Maxim internal test mode | N/A                | ADDR1=ADDR0=GND                    | N/A                    |
| Part Number   | (PMIC) MAX77650        | (PMIC) MAX77650        | (PMIC) MAX77650          | (ADC) MAX11614     | (DAC) MAX5815                      | (EEPROM) 24AA02        |

Evaluates: MAX77650/MAX77651

*MAX5815 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0001 0000

│

## MAX77650/MAX77651 EV Kit Schematic (continued)

Figure 10. MAX77650/MAX77651 EV Kit Schematic (2 of 6)

<!-- image -->

## MAX77650/MAX77651 EV Kit Schematic (continued)

Figure 11. MAX77650/MAX77651 EV Kit Schematic (3 of 6)

<!-- image -->

│

## MAX77650/MAX77651 EV Kit Schematic (continued)

Figure 12. MAX77650/MAX77651 EV Kit Schematic (4 of 6)

<!-- image -->

## MAX77650/MAX77651 EV Kit Schematic (continued)

Figure 13. MAX77650/MAX77651 EV Kit Schematic (5 of 6)

<!-- image -->

│

## MAX77650/MAX77651 EV Kit Schematic (continued)

Figure 14. MAX77650/MAX77651 EV Kit Schematic (6 of 6)

<!-- image -->

│

## MAX77650 EV Kit PCB Layouts

MAX77650 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77650 EV Kit PCB Layout -Internal Layer 2

<!-- image -->

MAX77650 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX77650 EV Kit PCB Layout -Internal Layer 3

<!-- image -->

│

## MAX77650 EV Kit PCB Layouts (continued)

MAX77650 EV Kit PCB Layout -Bottom Layer

<!-- image -->

MAX77650 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

│

## MAX77650/MAX77651 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/17            | Initial release                                                                                                                                                                                                                                    | -               |
|                 1 | 12/17           | Added Simplified Block Diagram , updated Procedures section, added EV Kit Features section, updated Installation section, updated Charger Quick Start section, updated Ordering Information table, updated MAX77650/MAX77651 EV Kit Component List | 2-27            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77650/MAX77651