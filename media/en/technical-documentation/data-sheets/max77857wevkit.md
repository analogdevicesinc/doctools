<!-- lastmod 2023-01-09 -->
<!-- image -->

## Evaluates: MAX77857 (WLP)

## General Description

The MAX77857 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77857, a high-efficiency, high-performance buckboost regulator with a switching current of 7A. The IC is capable of 2.5V to 16V input and dynamically adjustable output between 4.5V to 15V when using internal feedback resistors,  or  between  3V  to  15V  when  using  external feedback  resistors.  The  EV  kit  is  factory-configured  as internal feedback with default startup output voltage at 5V. Other  startup  voltages  can  be  achieved  with  external feedback  resistors.  The  output  voltage  can  be  adjusted dynamically through the I 2 C serial interface.

I/O pins are available to support the I 2 C serial interface, Enable  function,  and  interrupt/Power-OK  indicator.  The I 2 C  slave  address,  switching  current  limit,  and  feedback configuration  can  be  adjusted  by  changing  the  R SEL resistor  value  (R9).  MAXUSB\_INTERFACE#  allows  the use of Windows ® -based software with a friendly graphical user interface (GUI) as well as a detailed register-based interface to exercise all features of the IC. The EV kit is compatible  with  any  version  of  the  MAX77857  WLP  IC (MAX77857BEWB+T is the default installed on the EV kit).

## Check List

- MAX77857 IC Evaluation Board
- MAXUSB\_INTERFACE# (USB to I 2 C Serial Interface)
- USB Type-A to Micro-USB Cable
- Windows-based Graphical User Interface (GUI) Software
- Can be downloaded from Maxim's website at https://www.maximintegrated.com/products/MAX77857WEVKIT (under the Design Resources tab). Windows 7 or newer is required to use the EV kit GUI software.

## EV Kit Specifications

| SPECIFICATION           | TEST CONDITION                    | MIN   | TYP   | MAX   | UNIT   |
|-------------------------|-----------------------------------|-------|-------|-------|--------|
| Input voltage           |                                   | 2.5   |       | 16    | V      |
| Output voltage          | Internal feedback                 | 4.5   |       | 15    | V      |
| Output voltage          | External feedback                 | 3     |       | 15    | V      |
| Default output voltage  | Internal feedback                 |       | 5     |       | V      |
| Switching current limit |                                   |       | 7     |       | A      |
| Peak efficiency         | V IN = 4V, V OUT = 5V, 700mA load |       | 97.0  |       | %      |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Proven PCB Reference Design and Layout Benefit
- Fully Assembled and Tested
- Sense Points for High-Accuracy Measurements
- Accessible Test Point Pins for EN, POKB/INTB, V IO , and I 2 C Serial Interface SCL, SDA
- MAXUSB\_INTERFACE# Allows Easy Communication with a Windows PC
- GUI  Software  that  Drives  I 2 C  Serial  Interface  for Optional Software Control
- Startup  Output  Voltage  Adjustable  Through  External Feedback Resistors
- Output  Voltage  Dynamically  Adjustable  Through  I 2 C Serial Interface
- I 2 C Slave Address,  Switching Current Limit,  and Feedback Configuration Adjustable Using R SEL  (R9)

Ordering Information appears at end of data sheet.

## MAX77857 Evaluation Kit

Figure 1. MAX77857 Typical Application Circuit

<!-- image -->

Figure 2. MAX77857 Evaluation Board

<!-- image -->

## Evaluates: MAX77857 (WLP)

## EV Kit Default Configuration

With the default jumper settings listed in Table 1 and the EV kit component values of R SEL  (R9) = 0 Ω, RTOP (R10) = 0Ω, and R BOT (R11) = OPEN, the MAX77857 EV kit is configured with the following settings:

- Internal Feedback
- Switching Current Limit = 7A
- I 2 C Slave Address (7-bit) = 0x66
- Switching Frequency = 1.8MHz (adjustable only through I 2 C)
- VIO  Disconnected from V L
- EN Controlled from V IO  (as opposed to controlled from V IN )

See the EV Kit Hardware section to change the EV kit configuration.

## Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE   | SHUNT POSITION   | FUNCTION                                                                                                                                                         |
|----------|--------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | EN     | 1-2*             | Connects EN to V IN through a 510k Ω pullup resistor for standalone operation. See the Standalone Operation section for more information.                        |
| J1       | EN     | 2-3              | Connects EN to V IO . The converter is enabled when both V IN and V IO are valid.                                                                                |
| J1       | EN     | Not installed    | Floats EN. Use for controlling EN from an external logic signal. The converter is disabled if no external logic signal is connected to EN.                       |
| J2       | V IO   | 1-2*             | Connects V IO to V L . Allow V IO to be powered from V L without the need for a separate V IO supply. See the Standalone Operation section for more information. |
| J2       | V IO   | Not installed    | Disconnects V IO from V L . V IO needs to be powered from either MAXUSB_INTERFACE# or an external V IO supply.                                                   |

## Quick Start

## Required Equipment

- MAX77857 EV Kit
- Adjustable DC power supply
- Digital multi-meters
- Electronic load
- MAXUSB\_INTERFACE# for I 2 C serial interface (optional)
- USB Type-A to Micro-USB cable (optional)
- Windows-based PC with MAX77857 EV kit GUI (optional)

## Setup Overview

Typical bench setups for the MAX77857 EV kit with different configurations are shown in Figure 3 , Figure 4 , and Figure 5 .

<!-- image -->

## MAX77857 Evaluation Kit

<!-- image -->

Figure 3. EV Kit Connection Block Diagram -Standalone Operation

Figure 4. EV Kit Connection Block Diagram -with MAXUSB\_INTERFACE#

<!-- image -->

Figure 5. EV Kit Connection Block Diagram -with External I 2 C Bus

<!-- image -->

## Evaluates: MAX77857 (WLP)

## Procedure

The EV kit is fully assembled and tested. Perform the following steps to verify board operation. Use twisted wires of appropriate gauge (20 AWG) that are as short as possible to connect the load and power sources.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the evaluation software. Text in bold and underlined refers to items from the Windows operating system.

1.  Ensure the EV kit has the correct jumper settings, as shown in Table 1 .
2.  Connect a voltmeter (DVM1) to INS and PGND1S sense pins to measure input voltage.
3.  Connect a voltmeter (DVM2) to OUTS and PGND2S sense pins to measure the output voltage.
4.  Apply a power supply set to 0V (1.5A current limit) through an ammeter across the IN and PGND1 terminals of the EV kit. Turn the power supply on and increase the voltage to 7.6V.
5.  Confirm the DVM2 reads the default output voltage of the EV kit (5V). Confirm the ammeter reads the expected input supply current (about 200µA).
6. Now that the EV kit is confirmed working, short out the series ammeter and increase the power supply's curr ent limit. Connect an electronic load across OUT and PGND2 terminals to evaluate the performance of the MAX77857 buckboost regulator.

The next steps in the procedure use the EV kit GUI and MAXUSB\_INTERFACE# to evaluate the MAX77857's I 2 C serial interface. If such evaluation is not required, you may skip the following steps. The EV kit includes on-board 2.2k Ω pullup resistors (R4 and R7) to V IO  for I 2 C serial interface signals SDA and SCL.

7. Install  GUI  software.  Visit  the  product  webpage  at https://www.maximintegrated.com/products/MAX77857WEVKIT and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE installer and follow the on-screen instructions to complete the installation.
8.  Turn off the input power supply connected in step 4.
9.  Remove jumper J2. V IO  is later p owered from MAXUSB\_INTERFACE#'s on -board LDO. Move jumper J1 to position 2-3.
10.  Ensure SW1 and SW2 switches on the MAXUSB\_INTERFACE# are set to the ON position. This enables I 2 C mode on the MAXUSB\_INTERFACE#.
11. Important: Ensure the VL jumper on the MAXUSB\_INTERFACE#  (J5)  is  set to 1.8V. This sets the MAXUSB\_INTERFACE#'s V IO  voltage. Setting this incorrectly to 3.3V could potentially damage the MAX77857 IC.
12.  Connect the MAXUSB\_INTERFACE# to the EV kit. Connect the MAXUSB\_INTERFACE# to your PC's USB port using a USB Type-A to Micro-USB cable.
13.  Turn on the input power supply.
14.  On the PC, open the GUI and click the Device button in the menu bar. Click the Connect button in the Device button's drop-down list. Wait for the device to respond, and in the Synchronize window, press the Connect and Read button.
15.  Drag the slider bar in the Output Voltage Configuration section to change the output voltage and click Write .
16.  Confirm on DVM2 that the software command to change output voltage was successful. If so, the I 2 C serial interface is confirmed working.

This concludes the Quick Start procedure. Users are now encouraged to further explore the device and its register settings with the GUI software. For more information about the GUI, see the EV Kit Software section.

## EV Kit Hardware

The MAX77857 EV kit demonstrates the MAX77857 buck-boost regulator. It regulates output from input voltage ranges from 2.5V to 16V. The programmable output range is from 4.5V to 15V with internal feedback resistors, or from 3V to 15V with  external  feedback  resistors.  The  EV kit  is  suited  with  a  general  DC input. Table 1 lists  jumpers  and  associated functions that are available on the EV kit.

## Standalone Operation

The MAX77857 is capable of standalone operation, in which the IC starts up whenever V IN  and EN are valid, and it does not require a separate supply for the V IO  pin. This is useful for systems without a host controller or if the MAX77857 is the only power supply in the system. To configure the MAX77857 EV kit for standalone operation, install header jumper

## MAX77857 Evaluation Kit

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

J1 to position 1-2. This connects EN to V IN through a 510kΩ pullup resistor so that EN is controlled by V IN . Also, install header jumper J2. This connects V IO  to V L  so that V IO  is powered from V L , eliminating the need for an external V IO  power supply.

## MAXUSB\_INTERFACE#

The  MAXUSB\_INTERFACE#  along  with  the  companion  EV  kit  GUI  software  allows  users  to  easily  change  the MAX77857's  register  settings  with  a  Windows  PC.  Before  connecting  the  MAXUSB\_INTERFACE#  to  the  EV  kit's MAXUSB\_INTERFACE# connector (J5), make sure the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1, SW2 to ON Position (This enables I 2 C mode on the MAXUSB\_INTERFACE#.)
- VL  Jumper (J5) to 1.8V ( This sets the MAXUSB\_INTERFACE#'s V IO  voltage.)
- Warning: Setting this incorrectly to 3.3V could potentially damage the MAX77857 IC.

The MAXUSB\_INTERFACE# also includes an on-board LDO that can supply the necessary voltage to V IO . If you are using the MAXUS\_INTERFACE#, disconnect any external V IO  supply from the EV kit, and make sure header jumper J2 is removed from the EV kit.

## External I 2 C Bus

If  you  wish  to  connect  to  the  external  I 2 C  serial  bus  and  not  use  the  MAXUSB\_INTERFACE#,  unplug  the MAXUSB \_INTERFACE# from the EV kit's MAXUSB\_INTERFACE# connector (J5). Apply an external I/O supply to the VIO  pin or power the V IO  pin from the V L  pin by connecting header jumper J2. Make sure the external I 2 C serial bus's logic voltage level is compatible with the MAX77857's I/O logic voltage level. Refer to the MAX77857 IC data sheet for the appropriate I/O logic voltage level.

## RSEL Configuration Resistor

The MAX77857 includes an SEL pin to set the I 2 C slave address, switching current limit, and feedback configuration. A resistor with 1% tolerance (or better) should be chosen for R SEL  (R9). The default R SEL  value installed on the EV kit is 0Ω. See Table 2 for nominal R SEL  values and their corresponding settings. The switching current limit is also adjustable dynamically through the I 2 C serial interface when the IC is enabled. See the EV Kit Software section for more information.

## Table 2. MAX77857 RSEL Selection Table

| R SEL (Ω)   | FEEDBACK RESISTOR SELECTION   |   TYPICAL I LIM (A) | I 2 C SLAVE ADDRESS (7-BIT)   | R SEL (Ω)   | FEEDBACK RESISTOR SELECTION   | TYPICAL I LIM (A)   | I 2 C SLAVE ADDRESS (7-BIT)   |
|-------------|-------------------------------|---------------------|-------------------------------|-------------|-------------------------------|---------------------|-------------------------------|
| 0*          | Internal feedback resistors   |                 7   | 110 0110 (0x66)               | 3740        | External feedback resistors   |                     | 110 0110 (0x66)               |
| 200         | Internal feedback resistors   |                 7   | 110 0111 (0x67)               | 8060        | External feedback resistors   | 7.0                 | 110 0111 (0x67)               |
| 309         | Internal feedback resistors   |                 7   | 110 1110 (0x6E)               | 12400       | External feedback resistors   |                     | 110 1110 (0x6E)               |
| 422         | Internal feedback resistors   |                 7   | 110 1111 (0x6F)               | 16900       | External feedback resistors   |                     | (0x6E) (0x6E) 110 1111 (0x6F) |
| 536         | Internal feedback resistors   |                 5.6 | 110 0110 (0x66)               | 21500       | External feedback resistors   | 5.6                 | 110 0110 (0x66)               |
| 649         | Internal feedback resistors   |                 5.6 | 110 0111 (0x67)               | 26100       | External feedback resistors   | 5.6                 | 110 0111 (0x67)               |
| 768         | Internal feedback resistors   |                 5.6 | 110 1110 (0x6E)               | 30900       | External feedback resistors   | 5.6                 | 110 1110 (0x6E)               |
| 909         | Internal feedback resistors   |                 5.6 | 110 1111 (0x6F)               | 36500       | External feedback resistors   | 5.6                 | 110 1111 (0x6F)               |
| 1050        | Internal feedback resistors   |                 3.8 | 110 0110 (0x66)               | 42200       | External feedback resistors   | 3.8                 | 110 0110 (0x66)               |
| 1210        | Internal feedback resistors   |                 3.8 | 110 0111 (0x67)               | 48700       | External feedback resistors   | 3.8                 | 110 0111 (0x67)               |
| 1400        | Internal feedback resistors   |                 3.8 | 110 1110 (0x6E)               | 56200       | External feedback resistors   | 3.8                 | 110 1110 (0x6E)               |
| 1620        | Internal feedback resistors   |                 3.8 | 110 1111 (0x6F)               | 64900       | External feedback resistors   | 3.8                 | 110 1111 (0x6F)               |
| 1870        | Internal feedback resistors   |                 1.8 | 110 0110 (0x66)               | 75000       | External feedback resistors   | 1.8                 | 110 0110 (0x66)               |
| 2150        | Internal feedback resistors   |                 1.8 | 110 0111 (0x67)               | 86600       | External feedback resistors   | 1.8                 | 110 0111 (0x67)               |
| 2490        | Internal feedback resistors   |                 1.8 | 110 1110 (0x6E)               | 100000      | External feedback resistors   | 1.8                 | 110 1110 (0x6E)               |
| 2870        | Internal feedback resistors   |                 1.8 | 110 1111 (0x6F)               | OPEN        | External feedback resistors   | 1.8                 | 110 1111 (0x6F)               |

*Default value installed on the EV Kit

## Evaluates: MAX77857 (WLP)

## Output Voltage Configuration

By default, the EV kit is configured to use internal feedback resistors, with a 5V default startup output voltage and an output voltage range from 4.5V to 15V. To achieve a different default startup output voltage other than 5V, or to achieve a lower minimum output voltage range down to 3V, external feedback resistors are required. To change the EV kit to external  feedback  configuration,  replace  the  feedback  resistor  R TOP   (R10)  and  R BOT   (R11)  with  appropriate  value resistors (use resistors with 1% tolerance or better) and adjust R SEL  (R9) accordingly to select the external feedback option. It is also recommended to install a 10pF feed-forward capacitor on C9 when using external feedback.

To select appropriate external feedback resistor values, first chose R TOP (R10) to be between 150kΩ and 330kΩ. Then calculate the value of R BOT  (R11) for a desired startup output voltage with the following equation:

<!-- formula-not-decoded -->

Where V REF  is 0.333V and V OUT  is the desired startup output voltage. Note that the output voltage cannot exceed the maximum output voltage of 15V. The recommended external feedback resistor values for common output voltages are listed in Table 3 .

After startup, the output voltage can be adjusted dynamically using the I 2 C serial interface. See the EV Kit Software section for more information. When using internal feedback, output voltage ranges are between 4.5V and 15V in 73.5mV steps. When using external feedback, output voltage range and step size vary based on the external feedback resistor values. To calculate output voltage range, use the following equation and plug in the minimum V REF  of 0.299V and maximum V REF  of 1V:

<!-- formula-not-decoded -->

Output voltage step size can be calculated with the following equation:

<!-- formula-not-decoded -->

Programmable output voltage ranges and output voltage step sizes for each recommended feedback resistor pairs are listed in Table 3 .

Table 3. Feedback Resistor Value Recommendations

|   DEFAULT V REF (V) | R TOP R10 (kΩ)               | R BOT R11 (kΩ)               |   STARTUP V OUT (V) | PROGRAMMABLE V OUT RANGE (V)   |   V OUT STEP SIZE (mV) |
|---------------------|------------------------------|------------------------------|---------------------|--------------------------------|------------------------|
|               0.333 | 160                          | 20                           |                 3   | 3.0 to 9.0                     |                   44.1 |
|               0.333 | 178                          | 20                           |                 3.3 | 3.0 to 9.9                     |                   48.5 |
|               0.333 | Internal feedback resistors* | Internal feedback resistors* |                 5   | 4.5 to 15                      |                   73.5 |
|               0.333 | 312                          | 12                           |                 9   | 8.1 to 15                      |                  132.3 |
|               0.333 | 232                          | 6.65                         |                12   | 10.7 to 15                     |                  175.8 |
|               0.333 | 234                          | 5.3                          |                15   | 13.5 to 15                     |                  221.2 |

*Default EV kit configuration

## High-Temperature Testing

The MAX77857 is rated for operation under junction temperatures up to +125°C. Note that not all components on the EV kit are rated for temperatures this high. Some ceramic capacitors experience extra leakage when put under temperatures higher  than  they  are  rated  for  and  supply  current  readings  for  the  IC  might  be  larger  than  expected.  The MAXUSB\_INTERFACE# is also not rated for +125°C. Double-check the components on the EV kit if testing at +125°C ambient or junction temperatures. Consider replacing these components if IC operation at +125°C ambient or junction temperature is an important use case.

List of capacitors not rated for +125°C: C10, C11 (OUT capacitors)

## MAX77857 Evaluation Kit

## Evaluates: MAX77857 (WLP)

## Critical Node Measurement (OUT and LX)

The EV kit comes with probe points for measuring critical nodes OUT1, LX1, and LX2. See Figure 2 for their locations on the EV kit. Use these probe points to eliminate as much noise as possible when measuring the critical nodes. To ensure the best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probe point, and use the bare tip of the probe directly to the signal side of the probe point ( Figure 6 ). Following these guidelines gives the most accurate results when measuring parameters such as output voltage ripple, switching waveforms, and load transient response.

Figure 6. Probing Critical Nodes

<!-- image -->

## Efficiency Measurement (INS and OUTS)

The EV kit also comes with sense pins for accurately measuring input voltage (INS, PGND1S) and output voltage (OUTS, PGND2S). See Figure 2 for their locations on the EV kit. For most accurate efficiency, load regulation, and line regulation measurements, use these sense pins to measure input and output voltages.

Warning: These sense pins are only for measuring voltages. Do not connect input supply to input sense pins and do not connect an electronic load to output sense pins, as these sense pins are not designed to have current running through them. Doing so damages the EV kit. Use input supply terminals for connecting to input supply and use output terminals for connecting to electronic load as shown in Figure 2 .

## Table 4. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V ACCURACY   | EFFICIENCY           | EFFICIENCY         | SWITCHING NODE   | SWITCHING NODE   |
|---------------------------------|------------------------------------------------|----------------------|--------------------|------------------|------------------|
|                                 | OUT                                            | OUTPUT VOLTAGE       | INPUT VOLTAGE      | LX1              | LX2              |
| V OUT (OUT1)                    | V OUT (OUTS, PGND2S)                           | V OUT (OUTS, PGND2S) | V IN (INS, PGND1S) | LX1 (LX1)        | LX2 (LX2)        |

## EV Kit Software

The graphical user interface (GUI) software allows for a quick, easy, and thorough evaluation of the MAX77857. The GUI along with the MAXUSB\_INTERFACE# drives I 2 C communication with the EV kit. Every control in the GUI corresponds directly to a register within the MAX77857. Refer to the Register Map section of the MAX77857 IC data sheet for a complete description of the registers. See Figure 7 for a screenshot of the GUI upon first opening.

## MAX77857 Evaluation Kit

## Evaluates: MAX77857 (WLP)

Figure 7. MAX77857 EV Kit GUI Software Configuration Tab

<!-- image -->

## Installation

Visit  the  product  webpage  at https://www.maximintegrated.com/products/MAX77857WEVKIT and  navigate  to Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder  and  decompress  the  ZIP  file.  Run  the  .EXE  installer  and  follow  the  on-screen  instructions  to  complete  the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a Micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the necessary drivers.

## Connecting the GUI to MAXUSB\_INTERFACE#

After opening the GUI, click Device in the upper left corner of the GUI window. Click Connect in the drop-down menu. If you have multiple MAXUSB\_INTERFACE# adapters or FTDI devices connected to your PC, the Port Synchronization menu appears ( Figure 8 ). Select the port corresponding to the MAXUSB\_INTERFACE# attached to the MAX77857 EV kit and click Connect .

The Device Synchronization menu opens ( Figure 9 ) once the MAX77857 IC responds (voltages on the IN and V IO  pins must be valid on the MAX77857 IC for it to respond). The I 2 C address shown is the MAX77857 ICs 7-bit slave address. The address shown changes depending on the EV kit's R SEL  configuration. See the EV Kit Hardware RSEL Configuration Resistor section if you wish to change the address. Click Connect and Read . The text at the bottom right of the GUI window changes from 'MAXUSB is Disconnected' to 'MAXUSB is Connected.'

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

Figure 8. Port Synchronization Menu

<!-- image -->

## Configuration

The Configuration tab ( Figure 7 ) displays information and status of the IC on the EV Kit as well as all available register settings.  It  is  divided  into  different  sections:  POK  Status  and  Fault  Interrupts,  Output  Voltage  Configuration,  and Miscellaneous Configuration.

Click Read Once located on the top of the GUI window to obtain all setting values currently stored on all the MAX77857's registers. After changing the setting values in the GUI software, click Write on the top of the GUI window to apply all settings to the MAX77857's reg isters. Alternatively, click Read on each setting section to obtain the setting values of that particular section currently stored on the MAX77857's registers. After changing the setting values in the GUI software, click Write in the corresponding setting section to apply the new settings for that particular section to the MAX77857's registers.

The POK Status and Fault Interrupt Source section ( Figure 10 ) displays the power-OK status and any fault conditions detected on the MAX77857 IC, which are stored in the INT\_SRC register. Periodically check the POK Status and Fault Interrupt Source section  during  evaluation  to  monitor  the  status  of  power-OK  (POK),  overvoltage  protection  (OVP), output hard-short, thermal shutdown (THS), and overcurrent protection (OCP). Click Read to obtain the latest status from the IC.

Figure 10. Configuration Tab -POK Status and Fault Interrupt Source Section

<!-- image -->

Figure 9. Device Synchronization Menu

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

The POK Status and Fault Interrupt Masks section ( Figure 11 ) configures the reflection of the bits in INT\_SRC to the POKB/INTB pin. If a bit is masked, its status in the INT\_SRC register is not shown on the POKB/INTB pin. Refer to the Power-OK Monitor and Fault Interrupts section  in  the  IC  data  sheet  for  more  information  about  the  operation  of  the POKB/INTB pin. Click Read to obtain the setting stored on the IC and click Write to apply new settings to the IC.

Figure 11. Configuration Tab -POK Status and Fault Interrupt Masks Section

<!-- image -->

The Output Voltage Configuration section ( Figure 12 ) configures the EV kit ICs output voltage. The output voltage is changed by adjusting the internal reference voltage. Drag the slider to the desired internal reference voltage (or output voltage) and click Write to change the output voltage. Clicking Read returns the programmed internal reference voltage (or output voltage) to the GUI.

To make evaluation easier, the GUI software displays the corresponding output voltage value in the Output Voltage textbox based on the value in the Internal Reference Voltage slider. To obtain the correct value, check the Internal Feedback or External  Feedback checkbox  corresponding  to  the  EV  kit  configuration.  For  external  feedback configuration, enter the chosen feedback resistor values in the Top Feedback Resistor and Bottom Feedback Resistor text boxes to allow the correct calculation of the corresponding output voltage to be displayed on the GUI software.

Note: Changing the Internal Feedback or External Feedback checkboxes ( Figure 12 ) does NOT change the feedback configuration on the EV kit. It is only for calculating and displaying the correct output voltage value on the GUI software. If you wish to change the EV kit's feedback configuration, see the EV Kit Hardware Output Voltage Configuration section for details.

Figure 12. Configuration Tab -Output Voltage Configuration Section

<!-- image -->

The Miscellaneous Configuration sections ( Figure 13 )  show the remaining register settings of the MAX77857. Use these  sections  to  control  internal  compensation  resistance,  switching  frequency,  switching  current  limit,  forced-PWM mode, and output voltage change slew rate (using the internal reference voltage DVS slew rate). Refer to the MAX77857 IC data sheet for more information on each available setting. Click Read to obtain the setting stored on the IC and click Write to apply new settings to the IC.

Figure 13. Configuration Tab -Miscellaneous Configuration Sections

<!-- image -->

## Register Map

The Register Map tab provides an overview of all the MAX77857 registers and the values currently stored on them. Clicking on an individual bit shows the name and description of the specific bitfield.

。

Figure 14. EV Kit GUI Software Register Map Tab

<!-- image -->

## Layout Guideline

Careful circuit board layout is critical to achieving low switching power losses and clean, stable operation. The EV kit also serves as a Maxim recommended layout of the MAX77857. If POK or fault interrupt functionality is desired, then highdensity interconnect (HDI) PCB is required to route to the POKB/INTB pin. Otherwise, HDI PCB is recommended but not required. Figure 15 , Figure 16 , and Figure 17 show examples of non-HDI and HDI PCB layouts for the MAX77857 WLP package. Use the provided layout files for guidance when designing with the IC. The IC data sheet contains a list of useful tips and guidelines for achieving the best possible layout. They are repeated here for convenience:

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

- Place the input capacitors (C IN ) and output capacitors (C OUT ) immediately next to the IN pin and OUT pin of the IC, respectively. Since the IC operates at a high switching frequency, this placement is critical for minimizing parasitic inductance within the input and output current loops, which can cause high voltage spikes and can damage the internal switching MOSFETs.
- Place the inductor next to the LX bumps (as close as possible) and make the traces between the LX bumps and the inductor short and wide to minimize PCB trace impedance. Excessive PCB impedance reduces converter efficiency. When routing LX traces on a separate layer (as in the examples), make sure to include enough vias to minimize trace impedance. Routing LX traces on multiple layers is recommended to further reduce trace impedance. Furthermore, do not let LX traces take up an excessive amount of area. The voltage on this node switches very quickly and an additional area creates more radiated emissions.
- Route LX nodes to their corresponding bootstrap capacitor (C BST ) as short as possible. Prioritize C BST  placement to reduce trace length to the IC.
- Connect the inner PGND bumps to the low-impedance ground plane on the PCB with vias placed next to the bumps. Do not create PGND islands, as PGND islands risk interrupting the hot loops. Connect AGND and AGND island to the low-impedance ground plane on the PCB (the same net as PGND).
- Keep the power traces and load connections short and wide. This is essential for high converter efficiency.
- Do not neglect ceramic capacitor DC voltage derating. Choose capacitor values and case sizes carefully. Refer to the Output Capacitor Selection section in the MAX77857 IC data sheet and Tutorial 5527 for more information.

Figure 15. Non-HDI PCB Layout Recommendation for 35 WLP Package with 4mm x 4mm Inductor

<!-- image -->

Figure 16. Non-HDI PCB Layout Recommendation for 31 WLP Package with 4mm x 4mm Inductor

<!-- image -->

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

Figure 17. HDI PCB Layout Recommendation for 35 WLP Package with POKB/INTB and 2520 Inductor

<!-- image -->

## Ordering Information

| PART            | U1 IC          | DEFAULT OUTPUT VOLTAGE   | TYPE   |
|-----------------|----------------|--------------------------|--------|
| MAX77857WEVKIT# | MAX77857BEWB+T | 5V                       | EV Kit |

## Evaluates: MAX77857 (WLP)

## MAX77857 EV Kit Bill of Materials

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | VALUE                                                                                                        | DESCRIPTION                                                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C2                                                                                                           | 1                                                                                                            | JMK105B7474KVHF                                                                                              | TAIYO YUDEN                                                                                                  | 0.47UF                                                                                                       | CAP; SMT (0402); 0.47UF; 10%; 6.3V; X7R; CERAMIC                                                                                                                                 |
| C4, C5                                                                                                       | 2                                                                                                            | GRM21BC71E106KE11                                                                                            | MURATA                                                                                                       | 10UF                                                                                                         | CAP; SMT (0805); 10UF; 10%; 25V; X7S; CERAMIC                                                                                                                                    |
| C6                                                                                                           | 1                                                                                                            | C1005X7S0J225K050BC; GRM155C70J225KE11                                                                       | TDK;MURATA                                                                                                   | 2.2UF                                                                                                        | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X7S; CERAMIC                                                                                                                                  |
| C7, C8                                                                                                       | 2                                                                                                            | GCJ188R71H224KA01                                                                                            | MURATA                                                                                                       | 0.22UF                                                                                                       | CAP; SMT (0603); 0.22UF; 10%; 50V; X7R; CERAMIC                                                                                                                                  |
| C10, C11                                                                                                     | 2                                                                                                            | C2012X5R1E226M125AC; CL21A226MAQNNN                                                                          | TDK;SAMSUNG ELECTRO- MECHANICS                                                                               | 22UF                                                                                                         | CAP; SMT (0805); 22UF; 20%; 25V; X5R; CERAMIC                                                                                                                                    |
| L1                                                                                                           | 1                                                                                                            | XEL4020-152ME                                                                                                | COILCRAFT                                                                                                    | 1.5UH                                                                                                        | INDUCTOR; SMT; COMPOSITE; 1.5UH; 20%; 7.5A                                                                                                                                       |
| R9, R10, R12                                                                                                 | 3                                                                                                            | ERJ-2GE0R00                                                                                                  | PANASONIC                                                                                                    | 0                                                                                                            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                      |
| U1                                                                                                           | 1                                                                                                            | MAX77857BEWB+                                                                                                | MAXIM                                                                                                        | MAX77 857BE WB+                                                                                              | EVKIT PART - IC; MAX77857BEWB+; 2.5V TO 16V INPUT; 7A SWITCHING CURRENT HIGH EFFICIENCY BUCK- BOOST CONVERTER; PACKAGE OUTLINE DRAWING: 21-100367; PACKAGE CODE: W352A2+1; WLP35 |
| C9                                                                                                           | DNP                                                                                                          | N/A                                                                                                          | N/A                                                                                                          | OPEN                                                                                                         | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                                          |
| R11                                                                                                          | DNP                                                                                                          | N/A                                                                                                          | N/A                                                                                                          | OPEN                                                                                                         | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                 |
| Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77857 evaluation circuit and solution silkscreen.                                                                     |
| AGND1, AGND2, IN, OUT, PGND1, PGND2                                                                          | 6                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | MAXIM PAD                                                                                                    | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                         |
| AGND3                                                                                                        | 1                                                                                                            | 5011                                                                                                         | KEYSTONE                                                                                                     | N/A                                                                                                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                          |
| ASSY1                                                                                                        | 1                                                                                                            | MAXUSB_INTERFACE#                                                                                            | MAXIM                                                                                                        | MAXU SB_IN TERFA CE#                                                                                         | EVKIT PART-MODULE; KIT; MAXUSB INTERFACE; DUAL-PORT USB-TO- SERIAL INTERFACE BOARD                                                                                               |
| C1                                                                                                           | 1                                                                                                            | T491X107K025A                                                                                                | KEMET                                                                                                        | 100UF                                                                                                        | CAP; SMT (7343-43); 100UF; 10%; 25V; TANTALUM                                                                                                                                    |
| C13                                                                                                          | 1                                                                                                            | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                 | MURATA;TDK; TAIYO YUDEN;TDK                                                                                  | 0.1UF                                                                                                        | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                   |
| EN, POKB/INTB, SCL, SDA, SEL                                                                                 | 5                                                                                                            | 5002                                                                                                         | KEYSTONE                                                                                                     | N/A                                                                                                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                            |

www.analog.com

## MAX77857 Evaluation Kit

## Evaluates: MAX77857 (WLP)

## MAX77857 Evaluation Kit

| INS, OUTS, VIO, VL   | 4   | 5000                            | KEYSTONE                               | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|----------------------|-----|---------------------------------|----------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| J1                   | 1   | TSW-103-07-T-S                  | SAMTEC                                 | TSW- 103-07- T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                   |
| J2                   | 1   | PBC02SAAN                       | SULLINS ELECTRONICS CORP.              | PBC02 SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                       |
| J5                   | 1   | PPPC092LJBN-RC                  | SULLINS ELECTRONICS CORP               | PPPC0 92LJB N-RC | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHT ANGLE; 18PINS                                                   |
| MH1-MH4              | 4   | 9032                            | KEYSTONE                               | 9032             | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                         |
| PCB                  | 1   | MAX77857                        | MAXIM                                  | PCB              | PCB:MAX77857                                                                                                       |
| PGND1S, PGND2S       | 2   | 5001                            | KEYSTONE                               | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| R1                   | 1   | CRCW0402510KFK                  | VISHAY DALE                            | 510K             | RES; SMT (0402); 510K; 1%; +/- 100PPM/DEGK; 0.0630W                                                                |
| R13                  | 1   | ERJ-2RKF1502                    | PANASONIC                              | 15K              | RES; SMT (0402); 15K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                 |
| R4, R7               | 2   | CRCW04022K20FK; RC0402FR-072K2L | VISHAY DALE;YAGEO PHICOMP              | 2.2K             | RES; SMT (0402); 2.2K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                |
| SU1, SU2             | 2   | S1100-B; SX1100-B; STC02SYAN    | KYCON;KYCON;SU LLINS ELECTRONICS CORP. | SX110 0-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED            |
| C3, C12              | DNP | N/A                             | N/A                                    | OPEN             | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                            |
| LX1, LX2, OUT1       | DNP | SS-102-TT-2                     | SAMTEC                                 | SS- 102- TT-2    | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                               |
| R2, R6               | DNP | N/A                             | N/A                                    | OPEN             | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                   |
| R8                   | DNP | 3296Y-1-204LF                   | BOURNS                                 | 200K             | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                       |
|                      | 48  |                                 |                                        |                  |                                                                                                                    |

## Evaluates: MAX77857 (WLP)

## MAX77857 EV Kit Schematic

<!-- image -->

## Evaluates: MAX77857 (WLP)

## MAX77857 EV Kit PCB Layouts

MAX77857 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77857 EV Kit PCB Layout -Top View

<!-- image -->

## MAX77857 Evaluation Kit

MAX77857 EV Kit PCB Layout -Internal 2

<!-- image -->

MAX77857 EV Kit PCB Layout -Internal 3

<!-- image -->

## Evaluates: MAX77857 (WLP)

## MAX77857 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77857 EV Kit PCB Layout -Internal 4

MAX77857 EV Kit PCB Layout -Bottom View

<!-- image -->

MAX77857 EV Kit PCB Layout -Internal 5

<!-- image -->

## Evaluates: MAX77857 (WLP)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 3/22            | Initial release           | -               |
|                 1 | 11/22           | Updated Procedure section | 5               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX77857 Evaluation Kit