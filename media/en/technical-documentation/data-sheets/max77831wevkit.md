<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX77831

## General Description

The MAX77831 evaluation kit (EV kit) provides a proven design to evaluate the MAX77831, a 7A switching current, high-efficiency,  high-performance  buck-boost  regulator that only operates in forced-PWM (FPWM) mode. The IC is  capable of 2.5V to 16V input and dynamically adjust -able  output  between  4.5V  to  15V  when  using  internal feedback  resistors,  or  between  3V  to  15V  when  using external feedback resistors. The EV kit is factory-config -ured as internal feedback with the default startup output voltage  at  5V.  Other  startup  voltage  can  be  achieved with  external  feedback  resistors.  Output  voltage  can  be adjusted dynamically through the I 2 C serial interface.

The I/O pins are available to support the I 2 C serial inter -face, Enable function, and Interrupt/Power-OK indicator. The I 2 C slave address, switching current limit, and feed -back configuration can be adjusted by changing the R SEL resistor  value  (R9). The MAXUSB\_INTERFACE# allows the  use  of  Windows ® -based  software  with  a  friendly graphical user interface (GUI) as well as a detailed regis -ter-based interface to exercise all the features of the IC. The IC installed on the EV kit is the MAX77831BEWB+T.

## MAX77831 EV Kit Specifications

| SPECIFICATION           | TEST CONDITION                    |   MIN |   TYP |   MAX | UNIT   |
|-------------------------|-----------------------------------|-------|-------|-------|--------|
| Input Voltage           |                                   |   2.5 |       |    16 | V      |
| Output Voltage          | Internal Feedback                 |   4.5 |       |    15 | V      |
| Output Voltage          | External Feedback                 |     3 |       |    15 | V      |
| Default Output Voltage  | Internal Feedback                 |     5 |     5 |     5 | V      |
| Switching Current Limit |                                   |     7 |     7 |     7 | A      |
| Peak Efficiency         | V IN = 4V, V OUT = 5V, 700mA Load |  97.0 |  97.0 |  97.0 | %      |

Windows is a registered trademark of Microsoft Corp.

©

## MAX77831 Evaluation Kit

## Benefits and Features

- Proven PCB Reference Design and Layout Benefit
- Fully Assembled and Tested
- Sense Points for High-Accuracy Measurements
- Accessible Test Point Pins for EN, POKB/INTB, V IO , and the I 2 C Serial Interface SCL, SDA
- MAXUSB\_INTERFACE# Allows Easy Communication with a Windows PC
- GUI Software that Drives the I 2 C Serial Interface for Optional Software Control
- Startup Output Voltage Adjustable Through External Feedback Resistors
- Output Voltage Dynamically Adjustable Through the I 2 C Serial Interface
- I 2 C Slave Address, Switching Current Limit, and Feedback Configuration Adjustable Using R SEL (R9)

Ordering Information appears at end of data sheet.

319-100600; Rev 1; 9/21

Evaluates: MAX77831

Figure 1. Application Circuit for MAX77831

<!-- image -->

Figure 2. MAX77831 EV Kit Photo

<!-- image -->

## MAX7831 Evaluation Kit

## EV Kit Default Configuration

With the default jumper settings listed in Table 1 and the EV kit component values of R SEL (R9) = 0Ω, R TOP  (R10) = 0Ω, and R BOT  (R11) = OPEN, the MAX77831 EV kit is configured with the following settings:

- Internal Feedback
- Switching Current Limit = 7.0A
- I 2 C Slave Address (7-bit) = 0x66
- Switching Frequency = 1.8MHz (adjustable only through the I 2 C)
- I 2 C Line Connected to MAXUSB\_INTERFACE#

See the EV Kit Hardware section  to  change the EV kit configuration.

## Quick Start

## Required Equipment

- MAX77831 EV Kit
- Adjustable DC Power Supply
- A 1.8V DC Power Supply
- Digital Multi-Meters
- Electronic Load
- MAXUSB\_INTERFACE# for I 2 C Serial Interface (Optional)
- USB Type-A to Micro-USB Cable (Optional)
- Windows-based PC with MAX77831 EV Kit GUI (Optional)

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Perform  the following  steps  to  verify  board  operation.  Use  twisted wires of appropriate gauge (20 AWG) that are as short as possible to connect the load and power sources.

Evaluates: MAX77831

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect a DVM to the INS and PGND1S sense pins to measure input voltage.
- 3) Connect  a  DVM  to  the  OUTS  and  PGND2S  sense pins to measure output voltage.
- 4) Apply a power supply set to 1.8V (100mA current lim -it) across VIO and GND terminals of the EV kit. Turn on the power supply.
- 5) Apply  a  power  supply  set  to  0V  (1.5A  current  limit) through an ammeter across the IN and PGND1 ter -minals of the EV kit. Turn the supply on and increase the voltage to 7.6V.
- 6) Confirm the DVM connected to OUTS and PGND2S reads the  default  output  voltage  of  the  EV  kit  (5V). Confirm the ammeter reads the expected input supply current (about 12mA).
- 7) Now that the EV kit is confirmed working, short out the series ammeter and increase the current limit on the power supply connected across IN and PGND1. Connect  an  electronic  load  across  the  OUT  and PGND2 terminals to evaluate the performance of the MAX77831 buck-boost regulator.

The next steps of the procedure use the EV kit GUI and MAXUSB\_INTERFACE# to evaluate the MAX77831's I 2 C serial interface. If evaluation of the I 2 C serial interface is not required, you may skip the following steps. The EV kit in -cludes on-board 2.2kΩ pullup resistors (R4 and R7) to V IO .

- 8) Install  GUI  software.  Visit  the  product  webpage  at https://www.maximintegrated.com/products/ MAX77831WEVKIT and  navigate  to  Design  Re -sources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.

## Table 1. Default Shunt Positions and Jumper Description

| JUMPER   | NODE       | SHUNT POSITION   | FUNCTION                                            |
|----------|------------|------------------|-----------------------------------------------------|
| J1       | EN         | 1-2*             | Connects EN to V IO (logic-high, enables MAX77831). |
| J1       | EN         | 2-3              | Connects EN toAGND (logic-low, disables MAX77831).  |
| J2       | SDA        | 1-2*             | Pulls SDAup to V IO through R7 (2.2kΩ).             |
| J2       | SDA        | 2-3              | Connects SDAto AGND.                                |
| J3       | MAXUSB_VIO | 1-2*             | Connects MAXUSB_INTERFACE# V IO to EV kit V IO .    |
| J4       | MAXUSB_SDA | 1-2*             | Connects MAXUSB_INTERFACE# SDAto EV kit SDA.        |
| R3       | MAXUSB_SCL | 0Ω installed*    | Connects MAXUSB_INTERFACE# SCL to EV kit SCL.       |

* Default position

- 9) Turn off the 1.8V V IO  power supply and input power supply connected in step 4 and step 5.
- 10)  Disconnect the 1.8V V IO  power supply connected in step 4 from the EV kit. The MAXUSB\_INTERFACE# has an on-board LDO to supply 1.8V to V IO .
- 11) Ensure the SW1 and SW2 switches on the MAXUSB\_INTERFACE#  are  set  to  the  ON  position. This enables I 2 C mode on the MAXUSB\_INTERFACE#.
- 12) Important: Ensure  the  VL  Jumper  on  the  MAX -USB\_INTERFACE#  (J5)  is  set  to  1.8V.  This  sets the  MAXUSB\_INTERFACE#  VIO  voltage.  Setting this incorrectly to 3.3V could potentially damage the MAX77831 IC.
- 13) Connect the MAXUSB\_INTERFACE# to the MAX77831  EV  kit.  Connect  the  MAXUSB\_INTER -FACE# to your PC's USB port using a USB Type-A to Micro-USB Cable.
- 14)  Turn on the input power supply.
- 15)  Open the GUI and click the Device button in the menu bar. Click the Connect button in the Device button's drop-down list.  Wait  for  the  device  to  respond,  and in the Synchronize window, press the Connect and Read button.
- 16)  Drag the slide bar in the Output Voltage Configuration section to change the output voltage and click Write.
- 17) Confirm with a DVM that the software instruction to change output voltage was successful. If so, the I 2 C serial interface is confirmed as working.

This concludes the Quick Start procedure. Users are now encouraged to further explore the device and its register settings with the GUI software. For more information on the GUI, see the EV Kit Software section.

## EV Kit Hardware

The  MAX77831  EV  kit  demonstrates  the  MAX77831 buck-boost regulator. It regulates output from input voltage ranges from 2.5V to 16V. The programmable output range is from 4.5V to 15V with internal feedback resistors, or from 3V to 15V with external feedback resistors. The EV kit is suited with a general DC input. Table 1 lists jumpers and associated functions that are available on the EV kit.

## RSEL Configuration Resistor

The MAX77831 includes an SEL pin to set the I 2 C slave address, switching current limit, and feedback configura -tion. A resistor with a tolerance of 1% (or better) should be chosen for R9, which is the SEL pin configuration resistor R SEL .  The default R SEL  value installed on the EV kit is 0Ω. See Table 2 for the nominal R SEL   values  and  their corresponding settings. The switching current limit is also adjustable  dynamically  through  the  I 2 C  serial  interface

when the MAX77831 is enabled. See the EV Kit Software section for more information.

## Output Voltage Configuration

By default, the EV kit is configured to use internal feed -back resistors, with 5V default startup output voltage and an output voltage range from 4.5V to 15V. To achieve a different default startup output voltage other than 5V, or to achieve a lower minimum output voltage range down to 3V, external feedback resistors are required. To change the EV kit to the external feedback configuration, replace the feedback resistors R TOP  (R10) and R BOT  (R11) with appropriate value resistors (use resistors with 1% tolerance or better) and adjust R SEL (R9) accordingly to select the external feedback option. It is also recommended to install a 10pF feed-forward capacitor on C9 when using external feedback.

To  select  appropriate  external  feedback  resistor  values, first  choose  R TOP   (R10)  to  be  between  150kΩ  and 330kΩ.  Then  calculate  the  value  of  R BOT   (R11)  for  a desired startup output voltage with the following equation:

<!-- formula-not-decoded -->

where V REF is 0.333V and V OUT is  the  desired  startup output  voltage.  Note  that  the  output  voltage  cannot exceed  the  maximum  output  voltage  15V.  The  recom -mended  external  feedback  resistor  values  for  common output voltage are listed in Table 3.

After startup, the output voltage can be adjusted dynami -cally  using  the  I 2 C  serial  interface.  See  the EV  Kit Software section for more information. When using inter -nal  feedback,  output  voltage  ranges  between  4.5V  and 15V  in  73.5mV  steps.  When  using  external  feedback, output  voltage  range  and  step  size  vary  based  on  the external  feedback  resistor  values.  To  calculate  output voltage range, use the following equation and plug in the minimum V REF  of 0.299V and maximum V REF  of 1V:

<!-- formula-not-decoded -->

Output voltage step size can be calculated with the fol -lowing equation:

<!-- formula-not-decoded -->

Programmable  output  voltage  ranges  and  output  volt -age step sizes for each recommended external feedback resistor pairs are listed in Table 3.

Table 2. MAX77831 R SEL Selection Table

| R SEL (Ω)   | FEEDBACK RESISTOR SELECTION   |   TYPICAL I LIM (A) | I 2 C SLAVE ADDRESS (7-BIT)   | R SEL (Ω)   | FEEDBACK RESISTOR SELECTION   |   TYPICAL I LIM (A) | I 2 C SLAVE ADDRESS (7-BIT)   |
|-------------|-------------------------------|---------------------|-------------------------------|-------------|-------------------------------|---------------------|-------------------------------|
| 0*          | Internal Feedback Resistors   |                 7.0 | 110 0110 (0x66)               | 3740        | External Feedback Resistors   |                 7.0 | 110 0110 (0x66)               |
| 200         | Internal Feedback Resistors   |                 7.0 | 110 0111 (0x67)               | 8060        | External Feedback Resistors   |                 7.0 | 110 0111 (0x67)               |
| 309         | Internal Feedback Resistors   |                 7.0 | 110 1110 (0x6E)               | 12400       | External Feedback Resistors   |                 7.0 | 110 1110 (0x6E)               |
| 422         | Internal Feedback Resistors   |                 7.0 | 110 1111 (0x6F)               | 16900       | External Feedback Resistors   |                 7.0 | 110 1111 (0x6F)               |
| 536         | Internal Feedback Resistors   |                 5.6 | 110 0110 (0x66)               | 21500       | External Feedback Resistors   |                 5.6 | 110 0110 (0x66)               |
| 649         | Internal Feedback Resistors   |                 5.6 | 110 0111 (0x67)               | 26100       | External Feedback Resistors   |                 5.6 | 110 0111 (0x67)               |
| 768         | Internal Feedback Resistors   |                 5.6 | 110 1110 (0x6E)               | 30900       | External Feedback Resistors   |                 5.6 | 110 1110 (0x6E)               |
| 909         | Internal Feedback Resistors   |                 5.6 | 110 1111 (0x6F)               | 36500       | External Feedback Resistors   |                 5.6 | 110 1111 (0x6F)               |
| 1050        | Internal Feedback Resistors   |                 3.8 | 110 0110 (0x66)               | 42200       | External Feedback Resistors   |                 3.8 | 110 0110 (0x66)               |
| 1210        | Internal Feedback Resistors   |                 3.8 | 110 0111 (0x67)               | 48700       | External Feedback Resistors   |                 3.8 | 110 0111 (0x67)               |
| 1400        | Internal Feedback Resistors   |                 3.8 | 110 1110 (0x6E)               | 56200       | External Feedback Resistors   |                 3.8 | 110 1110 (0x6E)               |
| 1620        | Internal Feedback Resistors   |                 3.8 | 110 1111 (0x6F)               | 64900       | External Feedback Resistors   |                 3.8 | 110 1111 (0x6F)               |
| 1870        | Internal Feedback Resistors   |                1.72 | 110 0110 (0x66)               | 75000       | External Feedback Resistors   |                1.72 | 110 0110 (0x66)               |
| 2150        | Internal Feedback Resistors   |                1.72 | 110 0111 (0x67)               | 86600       | External Feedback Resistors   |                1.72 | 110 0111 (0x67)               |
| 2490        | Internal Feedback Resistors   |                1.72 | 110 1110 (0x6E)               | 100000      | External Feedback Resistors   |                1.72 | 110 1110 (0x6E)               |
| 2870        | Internal Feedback Resistors   |                1.72 | 110 1111 (0x6F)               | OPEN        | External Feedback Resistors   |                1.72 | 110 1111 (0x6F)               |

* Default value installed on the EV kit

Table 3. Feedback Resistor Value Recommendations

|   DEFAULT V REF (V) | R TOP R10 (kΩ)              | R BOT R11 (kΩ)              |   STARTUP V OUT (V) | PROGRAMMABLE V OUT RANGE (V)   |   V OUT STEP SIZE ( mV) |
|---------------------|-----------------------------|-----------------------------|---------------------|--------------------------------|-------------------------|
|               0.333 | 160                         | 20                          |                   3 | 3.0 to 9.0                     |                    44.1 |
|               0.333 | 178                         | 20                          |                 3.3 | 3.0 to 9.9                     |                    48.5 |
|               0.333 | Internal Feedback Resistors | Internal Feedback Resistors |                   5 | 4.5 to 15                      |                    73.5 |
|               0.333 | 312                         | 12                          |                   9 | 8.1 to 15                      |                   132.3 |
|               0.333 | 232                         | 6.65                        |                  12 | 10.7 to 15                     |                   175.8 |
|               0.333 | 234                         | 5.3                         |                  15 | 13.5 to 15                     |                   221.2 |

## MAXUSB\_INTERFACE#

The MAXUSB\_INTERFACE# along with the companion EV  kit  GUI  software  allows  users  to  easily  change  the MAX77831's register settings with a Windows PC. Before connecting  the  MAXUSB\_INTERFACE#  to  the  EV  kit's MAXUSB\_INTERFACE# connector (J5), make sure the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1, SW2 to ON Position (This enables I 2 C mode on the MAXUSB\_INTERFACE#.)
- VL  Jumper  (J5)  to  1.8V  (This  sets  the  MAXUSB\_ INTERFACE# VIO voltage.)
- Warning: Setting this incorrectly to 3.3V could potentially damage the MAX77831 IC.

The MAXUSB\_INTERFACE# also includes an on-board LDO that can supply necessary voltage to V IO . If you are using the MAXUSB\_INTERFACE#, disconnect any exter -nal  V IO   supply  from  the  EV  kit,  and  make  sure  header jumpers J3, J4, and 0Ω jumper R3 are installed to connect the MAXUSB\_INTERFACE# to the EV kit.

Evaluates: MAX77831

## External I 2 C Bus

To  connect  to  the  external  I 2 C  serial  bus  and  not use the MAXUSB\_INTERFACE#, unplug the MAXUSB\_ INTERFACE#  from  the  MAX77831  EV  kit's  MAXUSB\_ INTERFACE# connector (J5), and remove header jump -ers J3, J4, and 0Ω jumper R3 to isolate the MAXUSB\_ INTERFACE# connector from the EV kit. Apply an exter -nal I/O supply to V IO  pin. Make sure the external I 2 C serial bus's logic voltage level is compatible to the MAX77831's I/O  logic  voltage  level.  Refer  to  the  MAX77831  IC  data sheet for the appropriate I/O logic voltage level.

## High Temperature Testing

The  MAX77831  is  rated  for  operation  under  junction temperatures up to +125°C. Note that not all components on the EV kit are rated for temperatures this high. Some ceramic  capacitors  experience  extra  leakage  when  put under  temperatures  higher  than  they  are  rated  for,  and supply  current  readings  for  the  IC  might  be  larger  than expected. The MAXUSB\_INTERFACE# is also not rated for +125°C. Double check the components on the EV kit if  testing  at  +125°C  ambient  or  junction  temperatures. Consider replacing these components if IC operation at +125°C ambient or junction temperature is an important use case.

List of capacitors not rated for +125°C:

- C10, C11 (OUT capacitors)

## Critical Node Measurement (OUT and LX)

The EV kit comes with probe points for measuring critical nodes OUT1, LX1, and LX2. See Figure 2 for their loca -tions on the EV kit. Use these probe points to eliminate as  much  noise  as  possible  when  measuring  the  critical nodes. To  ensure  best  results,  use  a  very  short  ground wire from the ground sleeve of the scope probe to the GND side of the probe point, and use the bare tip of the probe directly  to  the  signal  side  of  the  probe  point  (Figure  3).

## Table 4. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | EFFICIENCY           | EFFICIENCY         | SWITCHING NODE   | SWITCHING NODE   |
|---------------------------------|----------------------------------------------------|----------------------|--------------------|------------------|------------------|
| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | OUTPUT VOLTAGE       | INPUT VOLTAGE      | LX1              | LX2              |
| V OUT (OUT1)                    | V OUT (OUTS, PGND2S)                               | V OUT (OUTS, PGND2S) | V IN (INS, PGND1S) | LX1 (LX1)        | LX2 (LX2)        |

Evaluates: MAX77831

Following these guidelines gives the most accurate results when  measuring  parameters  such  as  output  voltage ripple, switching waveforms, and load transient response.

## Efficiency Measurement (INS, OUTS)

The  EV  kit  also  comes  with  sense  pins  for  accurately measuring input voltage (INS, PGND1S) and output volt -age (OUTS, PGND2S). See Figure 2 for their locations on the EV kit. For most accurate efficiency, load regulation, and line regulation measurements, use these sense pins to measure input and output voltages.

Warning: These sense pins are only for measuring volt -ages. Do not connect input supply to input sense pins and do not connect electronic load to output sense pins, as these sense pins are not designed to have current running through them. Doing so damages the EV kit.

Use input supply terminals for connecting to input supply and use output terminals for connecting to electronic load as shown in Figure 2.

GND3

Figure 3. Probing Critical Nodes

<!-- image -->

## MAX7831 Evaluation Kit

## EV Kit Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77831. The  GUI  along  with  the  MAXUSB\_INTERFACE#  drives I 2 C  communication with the EV kit. Every control in the GUI corresponds directly to a register within MAX77831. Refer to Register Map section of the MAX77831 IC data sheet for  a  complete  description  of  the  registers.  See Figure 4 for a screenshot of the GUI upon first opening.

## Installation

Visit  the  product  webpage  at https://www.maximintegrated.com/products/MAX77831WEVKIT and  navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a Micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the neces -sary drivers.

Figure 4. MAX77831 EV Kit GUI Software Configuration Tab

<!-- image -->

Evaluates: MAX77831

## Connecting GUI to MAXUSB\_INTERFACE#

After opening the GUI, click Device in the upper left corner of the GUI window. Click Connect in the drop-down menu. If  you  have  multiple  MAXUSB\_INTERFACE#  adapt -ers  or  FTDI  devices  connected  to  your  PC,  the Port Synchronization menu  appears  (Figure  5). Select the  port  corresponding  to  the  MAXUSB\_INTERFACE# attached to the MAX77831 EV kit and click Connect .

The Device  Synchronization menu  opens  (Figure  6 ) once  the  MAX77831  IC  responds  (voltages  on  IN  pin and  V IO   pin  must  be  valid  on  the  MAX77831  IC  for  it to  respond).  The  I 2 C  address  shown  is  the  MAX77831 IC's  7-bit  slave  address.  The  address  shown  changes depending  on  the  EV  kit's  R SEL configuration.  See  the EV Kit  Hardware RSEL Configuration  Resistor section if  you  wish  to  change  the  address.  Click Connect and Read .  The  text  at  the  bottom  right  of  the  GUI  window changes from 'MAXUSB is Disconnected' to 'MAXUSB is Connected.'

## MAX7831 Evaluation Kit

Figure 5. Port Synchronization Menu

<!-- image -->

## Configuration

The  Configuration  tab  (Figure  4)  displays  information and status of the IC on the EV Kit as well as all available register settings. It is divided into different sections: Chip Identification,  POK  Status  and  Fault  Interrupts,  Output Voltage Configuration, and Miscellaneous Configuration.

Click Read Once located on the top of the GUI window to  obtain  all  setting  values  currently  stored  on  all  the MAX77831's registers. After changing the setting values in  the  GUI  software,  click Write on  the  top  of  the  GUI window to apply all settings to the MAX77831's registers. Alternatively, click Read on each setting section to obtain the  setting  values  of  that  particular  section  currently stored on the MAX77831's registers. After changing the setting  values  in  the  GUI  software,  click Write in  the corresponding  setting  section  to  apply  the  new  settings for that particular section to the MAX77831's registers.

The  Chip  Identification  section  (Figure  7)  displays  the revision and version information of the MAX77831 IC on the EV Kit. Click Read to obtain information from the IC.

Evaluates: MAX77831

Figure 6. Device Synchronization Menu

<!-- image -->

The  POK  Status  and  Fault  Interrupt  Source  section ( Figure  8)  displays  the  power-OK  status  and  any  fault conditions  detected  on  the  MAX77831  IC,  which  are stored  in  the  INT\_SRC  register.  Periodically  check  the POK  Status  and  Fault  Interrupt  Source  section  during evaluation  to  monitor  the  status  of  power-OK  (POK), overvoltage protection (OVP), output hard-short, thermal shutdown (THS), and overcurrent protection (OCP). Click Read to obtain the latest status from the IC.

The  POK  Status  and  Fault  Interrupt  Masks  section ( Figure 9) configures the reflection of the bits in INT\_SRC to  the  POKB/INTB  pin.  If  a  bit  is  masked,  its  status  in the  INT\_SRC  register  is  not  shown  on  the  POKB/INTB pin. Refer to the Power-OK Monitor and Fault Interrupts section  in  the  IC  datasheet  for  more  information  about the operation of the POKB/INTB pin. Click Read to obtain the setting stored on the IC and click Write to apply new settings to the IC.

## MAX7831 Evaluation Kit

Evaluates: MAX77831

<!-- image -->

Figure 7. Configuration Tab - Chip Identification Section

Figure 8. Configuration Tab - POK Status and Fault Interrupt Source Section

<!-- image -->

Figure 9. Configuration Tab - POK Status and Fault Interrupt Masks Section

<!-- image -->

## MAX7831 Evaluation Kit

The Output Voltage Configuration section ( Figure 10 ) configures the EV kit IC's output voltage. The output voltage is  changed  by  adjusting  the  internal  reference  voltage. Drag the slider to the desired internal reference voltage (or output voltage) and click Write to  change the output voltage. Clicking Read returns  the  programmed internal reference voltage (or output voltage) to the GUI.

To make evaluation easier, the GUI software displays the corresponding output voltage value in the Output Voltage textbox  based  on  the  value  in  the  Internal  Reference Voltage  slider.  To  obtain  the  correct  value,  check  the Internal  Feedback or External  Feedback checkbox corresponding  to  the  EV  kit  configuration.  For  external feedback configuration, enter the chosen feedback resis -tor  values  in  the Top  Feedback  Resistor and Bottom Feedback Resistor textboxes to allow correct calculation of  the  corresponding  output  voltage  to  be  displayed  on the GUI software.

Evaluates: MAX77831

Note: Changing  the  Internal  Feedback  or  External Feedback checkboxes (Figure 10) does NOT change the feedback configuration on the EV kit. It is only for calculat -ing and displaying the correct output voltage value on the GUI software. If you wish to change the EV kit's feedback configuration,  see  the  EV  Kit  Hardware Output  Voltage Configuration section for details.

The  Miscellaneous  Configuration  sections  (Figure  11 ) show the remaining register  settings  of  the  MAX77831. Use these sections to control internal compensation resis -tance,  switching  frequency,  switching  current  limit,  and output voltage change slew rate (using the internal refer -ence voltage DVS slew rate). Refer to the MAX77831 IC data sheet for more information on each available setting. Click Read to obtain the setting stored on the IC and click Write to apply new settings to the IC.

Figure 10. Configuration Tab - Output Voltage Configuration Section

<!-- image -->

Figure 11. Configuration Tab - Miscellaneous Configuration Sections

<!-- image -->

## MAX7831 Evaluation Kit

## Register Map

The  Register  Map  tab  provides  an  overview  of  all  the MAX77831 registers and the values currently stored on them. Clicking on an individual bit shows the name and description of the specific bitfield.

## Layout Guidelines

Careful  circuit  board  layout  is  critical  to  achieve  low switching power losses and clean stable operation. The EV kit also serves a Maxim recommended layout of the MAX77831.  If  the  POK  or  fault  interrupt  functionality is  desired,  the  high-density  interconnect  (HDI)  PCB  is required to route to the POKB/INTB pin. Otherwise, the HDI  PCB  is  recommended  but  not  required.  Figure  13 and Figure 14 show example non-HDI and HDI PCB lay -outs for the MAX77831 WLP package. Use the provided layout files for guidance when designing with the IC. The IC data sheet contains a list of useful tips and guidelines for achieving the best possible layout. They are repeated here for convenience:

Evaluates: MAX77831

- Place the input capacitors (C IN ) and output capacitors (C OUT ) immediately next to the IN pin and OUT pin of the IC, respectively. Since the IC operates at a high switching frequency, this placement is critical for mini -mizing parasitic inductance within the input and output current  loops,  which  can  cause  high  voltage  spikes and can damage the internal switching MOSFETs.
- Place  the  inductor  next  to  the  LX  bumps  (as  close as  possible)  and  make  the  traces  between  the  LX bumps and the inductor  short  and  wide  to  minimize PCB  trace  impedance.  Excessive  PCB  impedance reduces converter efficiency. When routing LX traces on a separate layer (as in the examples), make sure to include enough vias to minimize trace impedance. Routing LX traces on multiple layers is recommended to  further  reduce  trace  impedance.  Furthermore,  do not make LX traces take up an excessive amount of area. The voltage on this node switches very quickly and additional area creates more radiated emissions.

Figure 12. EV Kit GUI Software Register Map Tab

<!-- image -->

## MAX7831 Evaluation Kit

- Route  LX  nodes  to  the  corresponding  bootstrap capacitor (C BST ) as short as possible. Prioritize C BST placement to reduce trace length to the IC.
- Connect the inner PGND bumps to the low-impedance ground  plane  on  the  PCB  with  vias  placed  next  to the  bumps.  Do  not  create  PGND  islands,  as  PGND islands risk interrupting the hot loops. Connect AGND and AGND island to the low-impedance ground plane

## Evaluates: MAX77831

- on the PCB (the same net as PGND).
- Keep the power traces and load connections short and wide. This is essential for high converter efficiency.
- Do not  neglect  ceramic  capacitor  DC  voltage  derat -ing. Choose capacitor values and case sizes carefully. Refer to the Output Capacitor Selection section in the MAX77831 IC datasheet and Tutorial 5527 for more information.

Figure 13. Non-HDI PCB Layout Recommendation (with 4mm x 4mm inductor and without POKB/INTB)

<!-- image -->

Evaluates: MAX77831

Figure 14. HDI PCB Layout Recommendation (with 2520 Inductor and POKB/INTB)

<!-- image -->

## Ordering Information

| PART            | U1 IC          | DEFAULT OUTPUT VOLTAGE   | TYPE   |
|-----------------|----------------|--------------------------|--------|
| MAX77831WEVKIT# | MAX77831BEWB+T | 5V                       | EV Kit |

## MAX7831 Evaluation Kit

## MAX77831 EV Kit Bill of Materials

| REF_DES                             | QTY   | MFG PART #                                                                   | MANUFACTURER                   | VALUE              | DESCRIPTION                                                                                                                   |
|-------------------------------------|-------|------------------------------------------------------------------------------|--------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------|
| C1                                  | 1     | T491X107K025A                                                                | KEMET                          | 100µF              | CAPACITOR; SMT (7343-43); TANTALUM CHIP; 100µF; 25V; TOL = 10%                                                                |
| C2                                  | 1     | JMK105B7474KVHF                                                              | TAIYO YUDEN                    | 0.47µF             | CAP; SMT (0402); 0.47µF; 10%; 6.3V; X7R; CERAMIC CHIP                                                                         |
| C4, C5                              | 2     | GRM21BC71E106KE11                                                            | MURATA                         | 10µF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                     |
| C6                                  | 1     | C1005X7S0J225K050BC; GRM155C70J225KE11                                       | TDK;MURATA                     | 2.2µF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2µF; 6.3V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7S                 |
| C7, C8                              | 2     | GCJ188R71H224KA01                                                            | MURATA                         | 0.22µF             | CAP; SMT (0603); 0.22µF; 10%; 50V; X7R; CERAMIC CHIP                                                                          |
| C10, C11                            | 2     | C2012X5R1E226M125AC; CL21A226MAQNNN                                          | TDK; SAMSUNG ELECTRO-MECHANICS | 22µF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 22µF; 25V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                      |
| C13                                 | 1     | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA;TDK; TAIYO YUDEN;TDK    | 0.1µF              | CAP; SMT (0402); 0.1µF; 0.1; 25V; X7R; CERAMIC CHIP                                                                           |
| EN, POKB/INTB, POT1, POT2, SCL, SDA | 6     | 5002                                                                         | KEYSTONE                       | N/A                | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
| GND, IN, OUT, PGND1, PGND2          | 5     | 9020 BUSS                                                                    | WEICO WIRE                     | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                      |
| GND3, GND4                          | 2     | 5011                                                                         | KEYSTONE                       | N/A                | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| INS, OUTS, VIO, VL                  | 4     | 5000                                                                         | KEYSTONE                       | N/A                | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| J1, J2                              | 2     | PEC03SAAN                                                                    | SULLINS ELECTRONICS CORP.      | PEC03SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                        |
| J3, J4                              | 2     | PBC02SAAN                                                                    | SULLINS ELECTRONICS CORP.      | PBC02SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65°C TO +125°C;                                        |
| J5                                  | 1     | PPPC092LJBN-RC                                                               | SULLINS ELECTRONICS CORP.      | PPPC092LJBN-RC     | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHT ANGLE; 18PINS                                                              |
| L1                                  | 1     | XEL4020-152ME                                                                | COILCRAFT                      | 1.5UH              | INDUCTOR; SMT; COMPOSITE; 1.5µH; 20%; 7.5A                                                                                    |
| MH1-MH4                             | 4     | 9032                                                                         | KEYSTONE                       | 9032               | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                     |
| PGND1S, PGND2S                      | 2     | 5001                                                                         | KEYSTONE                       | N/A                | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| R3, R9, R10, R12                    | 4     | ERJ-2GE0R00                                                                  | PANASONIC                      | 0                  | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                           |
| R4, R7                              | 2     | CRCW04022K20FK; RC0402FR-072K2L                                              | VISHAY DALE; YAGEO PHICOMP     | 2.2K               | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                        |
| R13                                 | 1     | ERJ-2RKF1502                                                                 | PANASONIC                      | 15K                | RESISTOR; 0402; 15KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                            |
| U1                                  | 1     | MAX77831BEWB+                                                                | MAXIM                          | MAX77831BEWB+      | EVKIT PART - IC; MAX77831BEWB+; PACKAGE OUTLINE DRAWING: 21-100367; PACKAGE CODE: W352A2+1; WLP35                             |
| PACK-OUT                            | 1     | MAXUSB_ INTERFACE#                                                           | MAXIM                          | MAXUSB_ INTERFACE# | ASSEMBLED BOARD                                                                                                               |
| PCB                                 | 1     | MAX77831WLP                                                                  | MAXIM                          | PCB                | PCB:MAX77831WLP                                                                                                               |
| LX1, LX2, OUT1                      | DNP   | SS-102-TT-2                                                                  | SAMTEC                         | SS-102-TT-2        | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                                          |
| R2, R8                              | DNP   | 3296Y-1-204LF                                                                | BOURNS                         | 200K               | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200KΩ; 10%; 100PPM; 0.5W                                                     |
| C3, C12                             | DNP   | N/A                                                                          | N/A                            | OPEN               | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                       |
| C9                                  | DNP   | N/A                                                                          | N/A                            | OPEN               | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                       |
| R1, R5, R6, R11                     | DNP   | N/A                                                                          | N/A                            | OPEN               | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                              |
|                                     | 48    |                                                                              |                                |                    |                                                                                                                               |

Evaluates: MAX7831

## MAX77831 EV Kit Schematic Diagram

<!-- image -->

## MAX77831 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX77831

## MAX7831 Evaluation Kit

## MAX77831 EV Kit PCB Layout Diagrams

MAX77831 EV Kit PCB Layout - Top Silkscreen

<!-- image -->

MAX77831 EV Kit PCB Layout - Top View

<!-- image -->

Evaluates: MAX77831

MAX77831 EV Kit PCB Layout - Internal 2

<!-- image -->

MAX77831 EV Kit PCB Layout - Internal 3

<!-- image -->

## MAX77831 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX77831 EV Kit PCB Layout - Internal 4

MAX77831 EV Kit PCB Layout - Internal 5

<!-- image -->

MAX77831 EV Kit PCB Layout - Bottom View

<!-- image -->

## MAX7831 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/20            | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                   | -               |
|                 1 | 9/21            | Updated General Description and Benefits and Features sections, MAX77831 EV Kit Specifications table, Figure 2, updated EV Kit Default Configuration, Quick Start , Table 1, Table 3, updated MAXUSB_INTERFACE#, External I 2 C Bus, High Temperature Testing, Critical Node Measurement (OUT and LX) , and EV Kit Software , added Figure 3 and Table 4, updated Windows Driver and Connecting GUI to MAXUSB_INTERFACE# sections | 1-7             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX77831