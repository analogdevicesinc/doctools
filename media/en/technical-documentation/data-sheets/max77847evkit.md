<!-- lastmod 2023-10-23 -->
<!-- image -->

## General Description

The MAX77847 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the capabilities of MAX77847 in the Wafer-Level Packaging  (WLP)  package.  It  is  a  highly  efficient  highperformance buck-boost regulator with a switching current limit of  4.5A/3.6A  and  an  industry-leading  quiescent current of 14µA for battery-powered applications. The IC supports an input voltage range from 1.8V to 5.5V and an output voltage range from 1.8V to 5.2V. The output voltage can be set using the SEL pin, and dynamic voltage scaling can be achieved using the GPI pin without using the I 2 C interface.

The I 2 C interface is optional. However, it allows changing the output voltage dynamically in 50mV steps. In addition, the I 2 C interface also allows selecting the switching current limit,  ramp-up/ramp-down slew rate, Forced PWM Mode Operation  (FPWM)  operation,  and  monitoring  protection status for overcurrent, overvoltage, and thermal shutdown protection for the part. MAXUSB\_INTERFACE# allows the use of a Windows ®  based graphical-user interface (GUI) and a detailed register-based interface to exercise all the features  of  the  IC.  The  EV  kit  is  compatible  with  any version of MAX77847 IC (MAX77847BEWL+ is the default version installed on the EV kit).

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX77847 Evaluation Kit Board Photo

<!-- image -->

319-101020; Rev 0; 8/23

## Check List

- MAX77847 EV kit
- MAXUSB\_INTERFACE# (USB to I 2 C interface)
- USB Type-A to Micro-USB cable.
- Windows ® -based GUI for MAX77847
- Can be downloaded from Analog Devices website at https://www.analog.com/en/products/max77847. html (under the Tools &amp; Simulations tab). Windows ®  7 or newer Windows ®  operating system is required to use the EV kit software.

## Features and Benefits

- Proven PCB Reference Design and Layout
- Fully Assembled and Tested
- Sense points for High-Accuracy measurements
- Probe sockets for sensitive nodes
- Adjustable startup voltage using a potentiometer (R3)
- I 2 C header to use external I 2 C interface
- MAXUSB\_INTERFACE# supports using the Windows ® -based GUI
- Provision for external logic level support using V IO header

Ordering Information appears at end of data sheet

Evaluates: MAX77847

## MAX77847 Evaluation Kit

## EV Kit Default Configuration

The default configuration of the MAX77847 EV Kit is based on the default jumper settings given in Table 2 , and the default values of the I 2 C registers are as follows.

- SEL is connected to a potentiometer (R3). Desired output voltage would need to be configured*.
- Peak Switching Current Limit = 4.5A.
- Dynamic Voltage Scaling (DVS) HIGH output voltage is configured as 3.6V default. It has to be configured through the Windows-based graphical user interface(GUI) using MAXUSB\_INTERFACE#.
- GPI Pin is configured as FPWM Enable Pin.
- MAX77847BEWL+ is configured in Auto-Skip Mode with Active Discharge Enabled.
- MAX77847BEWL+(MAX77847AEWL+) buck-boost converter is enabled (disabled). The EV kit comes populated with MAX77847BEWL+ by default.

*The output voltage at startup can only be configured from 2.3V to 5.2V. The part can be configured for output voltage from 1.8V to 5.5V in 50mV steps using the GUI with MAXUSB\_INTERFACE#.

## Table 1. MAX77847 EV Kit Specifications

| PARAMETER                                 | CONDITIONS                                                                            | MIN   | TYP*   | MAX   | UNITS   |
|-------------------------------------------|---------------------------------------------------------------------------------------|-------|--------|-------|---------|
| Input Voltage Range**                     | V IN ≥ 2.3V or V OUT ≥ 2.3V                                                           | 1.8   |        | 5.5   | V       |
| Output Voltage Range**                    | V IN ≥ 2.3V or V OUT ≥ 2.3V, Selectable through R SEL , Default = 3.3V (R SEL = 0 Ω ) | 1.8   |        | 5.2   | V       |
| Input Voltage Undervoltage Lockout (UVLO) | V IN Rising                                                                           | 1.70  | 1.75   | 1.80  | V       |
|                                           | V IN Falling                                                                          | 1.63  | 1.68   | 1.73  | V       |
| Quiescent Current                         | EN = HIGH, FPWM = LOW, T J = -40°C to +85°C, No Switching                             |       | 14     | 35    | µA      |
| Quiescent Current                         | EN = HIGH, FPWM = HIGH, T J = -40°C to +125°C                                         |       | 3      |       | mA      |
| Output Current                            |                                                                                       |       |        | 3     | A       |
| Operating Input Voltage Range             |                                                                                       | 1.8   |        | 5.5   | V       |

## Table 2. Jumper Connection Guide

| JUMPER   | NODE   | SHUNT POSITION   | FUNCTION                                                                                                   |
|----------|--------|------------------|------------------------------------------------------------------------------------------------------------|
| J1       | EN     | 1-2*             | Connects EN to Logic High voltage through 100k Ω resistor to enable MAX77847.                              |
| J1       | EN     | 2-3              | Connects EN to GND to disable MAX77847.                                                                    |
| J2       | GPI    | 1-2              | Connects GPI to Logic High voltage through 15k Ω resistor to enable FPWM/DVS.                              |
| J2       | GPI    | 2-3*             | Connects GPI to GND to disable FPWM/DVS.                                                                   |
| J4       | SEL    | 1-2*             | Connects SEL pin to Potentiometer (R3) to select the output voltage.                                       |
| J4       | SEL    | Not Installed    | Connects SEL pin to GND through 0 Ω resistor (not populated by default) for default output voltage = 3.3V. |

Evaluates: MAX77847

319-101020; Rev 0; 8/23

## Evaluates: MAX77847

| JUMPER   | NODE       | SHUNT POSITION   | FUNCTION                                                                                                           |
|----------|------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| J5       | Logic High | 1-2              | Selects Logic High Pull Up voltage to V IO which should be applied externally, for operation with I 2 C interface. |
| J5       | Logic High | 2-3*             | Selects Logic High Pull Up voltage to be same as input voltage V IN , for Standalone Operation.                    |
| J6       | SCL        | 1-2*             | Connects SCL pin to Logic High voltage through a 2.2k Ω resistor.                                                  |
| J6       | SCL        | 2-3              | Connects to SCL pin to GND.                                                                                        |
| J7       | SDA        | 1-2*             | Connects SDA pin to Logic High voltage through a 2.2k Ω resistor.                                                  |
| J7       | SDA        | 2-3              | Connects SDA pin to GND.                                                                                           |

## Quick Start Guide

## Required Equipment

- MAX77847 EV kit
- Adjustable DC Power Supply
- Digital Multimeter
- Handheld Multimeter
- Electronic Load
- MAXUSB\_INTERFACE# for I 2 C serial interface (optional)
- USB Type-A to Micro-USB cable (optional)
- Windows ® -based PC with MAX77847 EV Kit GUI (optional)

## Setup Overview

The overview can be found in the following sections. See MAX77847 Evaluation Kit Board Photo , Figure 1 (MAX77847 Typical Application Circuit) and Figure 2 for the typical test setup that can be used to evaluate the EV kit.

Figure 1. MAX77847 Typical Application Circuit

<!-- image -->

## MAX77847 Evaluation Kit

## Evaluates: MAX77847

Figure 2. MAX77847 EV Kit Board Connections

<!-- image -->

## Procedure

The MAX77847 EV kit is fully assembled and tested. The EV kit can be operated without MAXUSB\_INTERFACE and the I 2 C interface if installed with MAX77847BEWL+. Follow the steps for instructions on standalone operation.

1.  Ensure the EV Kit has the correct jumper connections, as shown in Table 2 .
2.  Make sure J5 is in position 2-3 between IN and HI.
3.  Connect a voltmeter (DVM1) to VINS, and PGNDS sense points to measure the input voltage.
4.  Connect a voltmeter (DVM2) to OUTS, and PGNDS sense points to measure the output voltage.
5.  Disconnect jumper J4, which connects the SEL pin to the potentiometer (R3). Use a handheld multimeter configured in resistance measurement mode and connect between pin 2 of J4 (labelled POT) and AGND/AGND1 test point.
6.  Turn the potentiometer (R3) to get the minimum possible resistance which should be as close to 0 Ω as possible. Disconnect the handheld multimeter and place the jumper J4 back. This ensures that the part starts up with the default output voltage of 3.3V.
7.  Connect an adjustable power supply set to 0V to input power terminals V IN  and PGND1 through an input ammeter. Set the power supply current limit to 100mA and power supply voltage to 3.8V.
8.  Turn on the Power Supply and ensure the input current measures around 20µA and the output voltage is the default output voltage of 3.3V.
9.  Short the input ammeter and increase the power supply current limit to 10A. Connect an electronic load to the output terminals OUT and PGND2 and increase the load current to evaluate the MAX77847 buck-boost converter.

The following steps describe the connection and evaluation of the MAX77847EVKIT# using the MAXUSB\_INTERFACE# and the Windows-based GUI. It is an optional step if the EV kit is populated with MAX77847BEWL+. However, it is required to use the GUI if the desired output voltage is below 2.3V. It is imperative to use the following procedure if the EV kit is populated with MAX77847AEWL+. See the Ordering Information table to ensure the EV Kit is populated with the desired part.

The MAX77847 EV kit comes populated with 2.2k Ω pull-up resistors (R4 and R5) for I 2 C serial interface signals SDA and SCL. Follow the below steps to install the appropriate Windows-based GUI and communicate with the EV kit using the MAXUSB\_INTERFACE#.

Note : In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows ®  operating system.

## MAX77847 Evaluation Kit

Evaluates: MAX77847

1. Install the MAX77847 EV kit GUI. Refer to the product webpage at https://www.analog.com/max77847evkit.html and click the Tools &amp; Simulations tab. Click on the link under the Software Development to download the latest MAX77847 EV kit software. Save the software installation file to a temporary folder and decompress the zip file. Install the EV kit software on your computer by running the .EXE installer and follow the on-screen instructions to complete the installation.
2. Turn off the input power supply connected in step 4.
3. Connect jumper J5 between positions 1-2 to power the Logic High rail from MAXUSB\_INTERFACE#, as mentioned in Table 2 .
4. Ensure SW1 and SW2 are in the ON position for all the switches on the MAXUSB\_INTERFACE# board. This enables I 2 C mode on the MAXUSB\_INTERFACE#.
5. Important: Ensure the VL jumper (J5) on the MAXUSB\_INTERFACE# is set to position 2-3 to set the output of MAXUSB\_INTERFACE# LDO to 1.8V. This provides the pull-up voltage for SDA, SCL, EN and GPI pins. Setting this incorrectly to 3.3V could potentially damage the MAX77847 IC.
6. Connect the MAXUSB\_INTERFACE# to the EV kit using the connector J8. Connect the MAXUSB\_INTERFACE# to your PC's USB port using a USB Type -A to Micro-USB cable.
7. Turn on the input power supply set to the typical input voltage of 3.8V.
8. On the PC, open the GUI and click the Device button in the menu bar. Click the Connect button in the Device button's drop -down list. A small pop-up window would appear showing the device and the slave address. Select the device and click Connect .  Once the device responds, the GUI status changes to Connected in  the bottom right corner of the GUI window.
9. Click on Read Once in the top menu of the Buck-Boost Tab. The device settings should update in the Buck-Boost tab. Change the output voltage by moving the slider in the Output Voltage Setting (Low) section to the desired value in the GUI. Click on the Write button next to the slider. NOTE: The bias voltage for MAX77847 should be a minimum of 2.3V, as mentioned in Table 1 . Thus, it is important to ensure that either the input or the output voltage is a minimum of 2.3V.
10.  Confirm on DVM2 that the software command to change the output voltage was successful. If so, the I 2 C serial interface is confirmed to be working.
11.  This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI software. For more information about the GUI, see the EV Kit Software section.

## Detailed Description of Hardware

MAX77847 EV kit should be used with the following documents:

- MAX77847 Data Sheet
- MAX77847 EV Kit Data Sheet (this document)

These  documents,  or  links  to  them,  are  included  in  the  MAX77847  EV  kit  Package.  For  the  latest  versions  of  the documents, refer to https://www.analog.com/en/products/max77847.html .

The EV kit demonstrates the operation of MAX77847, a high-efficiency, high-performance buck-boost regulator with an industry-leading quiescent current of 14µA for battery-powered applications. The IC can support input voltage from 1.8V to 5.5V with an adjustable output voltage between 1.8V to 5.2V with 50mV steps.

The IC features an SEL pin to configure the default output voltage and the I 2 C slave address. A configurable GPI pin allows the user to use it as an FPWM Mode enable input or a DVS enable input to change the output voltage between two output voltages without the I 2 C interface.

The EV kit is equipped with input (VIN, PGND1) and output power terminals (OUT1, PGND2) and sense points for critical nodes for an extensive evaluation of the performance of MAX77847. The EV kit includes a connector (J8) for connecting to MAXUSB\_INTERFACE# to enable the user to change the settings of MAX77847 using an optional Windows ® -based GUI. A detailed description of their functionality can be found in the following sections.

## MAXUSB\_INTERFACE#

The MAXUSB\_INTERFACE, and the companion EV kit GUI software allow users to easily change the MAX77847's register settings with a Windows ® PC. Before connecting t he MAXUSB\_INTERFACE# to the EV kit's MAXUSB\_INTERFACE# connector (J8), make sure that the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1, SW2 to ON position (This enables the I 2 C mode on the MAXUSB\_INTERFACE#).
- VL jumper (J5) to 1.8V (Thi s  sets  the  MAXUSB\_INTERFACE#'s V IO   voltage  to  align  with  the  logic  levels  of  the MAX77847).
- Warning: Setting this incorrectly to 3.3V could damage the MAX77847 IC.

The MAXUSB\_INTERFACE# also includes an on-board LDO that can supply the necessary voltage to V IO . If you use the  MAXUSB\_INTERFACE#, disconnect any external V IO   supply  from  the EV  kit,  and  ensure  header  jumper J5  is connected between EN and V IO  (position 1-2).

## Setting the Output Voltage

The MAX77847 supports output voltages from 1.8V to 5.2V. The MAX77847 EV kit is equipped with a potentiometer (R3) connected  to  the  SEL  pin  to  adjust  the  output  voltage  when  the  part  is  enabled  by  making  the  EN  pin  HIGH  for MAX77847BEWL+ (EN bit HIGH for MAX77847AEWL+). Table 3 lists the values of resistor R SEL  connected between the SEL  pin  and  ground  for  configuring  the  output  voltage  for  startup.  If  a  standalone  resistor  is  used  as  R SEL ,  it  is recommended to have a maximum tolerance of 1%.

Note: The output voltage at startup is limited to 2.3V to 5.2V due to the bias voltage requirement listed in Table 1 . Once the buck-boost converter output rises to the desired voltage between 2.3V to 5.2V, the output voltage can be set from 1.8V to 5.2V using the Windows ® -based GUI, which communicates to the MAX77847 using the MAXUSB\_INTERFACE#. The details about the functionality of the Windows ® -based GUI can be found in the EV Kit Software section.

## Table 3. MAX77847 RSEL Selection Table

| R SEL (kΩ)   |   V OUT (V) | SLAVE ADDRESS (7bit)   |
|--------------|-------------|------------------------|
| Short (0)    |         3.3 | 110 0111b (0x67)       |
| 4.99         |         2.3 | 110 0111b (0x67)       |
| 5.90         |         2.5 | 110 0111b (0x67)       |
| 7.15         |         2.6 | 110 0111b (0x67)       |
| 8.45         |         2.7 | 110 0111b (0x67)       |
| 10.0         |         2.8 | 110 0111b (0x67)       |
| 11.8         |         2.9 | 110 0111b (0x67)       |
| 14.0         |         3   | 110 0111b (0x67)       |
| 16.9         |         3.4 | 110 0111b (0x67)       |
| 20.0         |         3.6 | 110 0111b (0x67)       |
| 23.7         |         3.8 | 110 0111b (0x67)       |
| 28.0         |         4   | 110 0111b (0x67)       |
| 34.0         |         4.2 | 110 0111b (0x67)       |
| 40.2         |         4.5 | 110 0111b (0x67)       |
| 47.5         |         5   | 110 0111b (0x67)       |

319-101020; Rev 0; 8/23

Evaluates: MAX77847

## MAX77847 Evaluation Kit

## Evaluates: MAX77847

| R SEL (kΩ)   |   V OUT (V) | SLAVE ADDRESS (7bit)   |
|--------------|-------------|------------------------|
| 56.2         |         5.2 | 110 1111b (0x6F)       |
| 66.5         |         3.3 | 110 1111b (0x6F)       |
| 80.6         |         2.3 | 110 1111b (0x6F)       |
| 95.3         |         2.5 | 110 1111b (0x6F)       |
| 113          |         2.6 | 110 1111b (0x6F)       |
| 133          |         2.7 | 110 1111b (0x6F)       |
| 162          |         2.8 | 110 1111b (0x6F)       |
| 192          |         2.9 | 110 1111b (0x6F)       |
| 226          |         3   | 110 1111b (0x6F)       |
| 267          |         3.4 | 110 1111b (0x6F)       |
| 324          |         3.6 | 110 1111b (0x6F)       |
| 383          |         3.8 | 110 1111b (0x6F)       |
| 452          |         4   | 110 1111b (0x6F)       |
| 536          |         4.2 | 110 1111b (0x6F)       |
| 634          |         4.5 | 110 1111b (0x6F)       |
| 768          |         5   | 110 1111b (0x6F)       |
| 909 or Open  |         5.2 | 110 1111b (0x6F)       |

## High-Temperature Testing

The MAX77847 is rated for operation under junction temperatures upto +125°C. Note that not all components on the EV kit are rated for temperatures this high. Some ceramic and tantalum capacitors experience extra leakage when put under temperatures higher than they are rated, for and the supply current readings for the EV kit might be higher than expected. The MAXUSB\_INTERFACE# is also not rated for operation at +125°C. Double-check the components on the EV kit if testing at +125°C ambient or junction temperatures. Consider replacing these components if the IC operation is at +125°C ambient or junction temperature is an important use case. See the MAX77847 EV Kit Bill of Materials section for the component list. List of capacitors not rated for +125°C: C2.

## MAX77847 Evaluation Kit

## Critical Node Measurement (LX1, LX2, OUT)

The EV kit provides socket test points for measurement of critical nodes such as LX1, LX2 and OUT1. These probe points are shown in Figure 2 . It is important to use a probe with a pig-tail connector attached and connected directly to the test points, as shown in Figure 3 . The pig-tail connector minimizes the ground loop inductance for the measurement, thereby minimizing high frequency noise coupling. This method gives the most accurate results for measuring output voltage ripple, switching waveforms, and load transient response.

naxim

Figure 3. Critical Node Measurement

<!-- image -->

## Efficiency Measurement

The MAX77847 buck-boost converter shows excellent efficiency performance for a wide load range. The MAX77847 EV kit has sense pins for accurately measuring input voltage (VINS, PGNDS1) and output voltage (OUTS, PGNDS2). It is important to use these pins for the most accurate results for efficiency, load regulation and line regulation tests.

Warning: It is important not to connect the electronic load or DC power supply to the sense pins. These pins and their traces are not designed for carrying large amounts of current and are only designed to measure voltages. Drawing large currents through these pins can damage the EV kit and exhibit sub-optimal performance due to higher resistance. Use input supply terminals (VIN, PGND1) for connecting to input supply and output terminals (OUT1, PGND2) for connecting to electronic load, as shown in Figure 2 .

## Table 4. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION,   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   | SWITCHING NODE   |
|---------------------------------|-------------------------------------|----------------|---------------|------------------|------------------|
|                                 | V OUT ACCURACY                      | OUTPUT VOLTAGE | INPUT VOLTAGE | LX1              | LX2              |
| V OUT                           | V OUT                               | V OUT          | V IN          | LX1              | LX2              |
| (OUT1)                          | (OUTS, PGNDS2)                      | (OUTS, PGNDS2) | (INS, PGNDS1) | (LX1)            | (LX2)            |

Evaluates: MAX77847

## MAX77847 Evaluation Kit

## EV Kit Software

The graphical user interface (GUI) software allows for a quick, easy, and thorough evaluation of the MAX77847. The GUI and the MAXUSB\_INTERFACE#, drive the I 2 C communication with the EV kit. Every control in the GUI corresponds directly to a register within the MAX77847. Refer to the Register Map section of the MAX77847 IC data sheet for a complete description of the registers. See Figure 4 for a screenshot of the GUI upon the first opening of the software.

Figure 4. MAX77847 EV Kit GUI Software Buck-Boost Tab

<!-- image -->

## Installation

Visit  the  product  webpage  at https://www.analog.com/en/products/max77847.html and  click  on  the Tools  and Simulations tab. Click on the link under Software Development to download the latest MAX77847 EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Install the EV kit software on your computer by running the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a Micro-USB cable for the first time, wait for 30 seconds, for Windows ®  to automatically install the necessary drivers.

## Connecting the GUI to MAXUSB\_INTERFACE#

Confirm that the MAXUSB\_INTERFACE# is connected to the PC and the EV kit and is set up as described in the Procedure section. Open the GUI and click Device in the upper left corner of the GUI window. Click Connect in the dropdown menu. If you have multiple MAXUSB\_INTERFACE# adapters or Future Technology Devices International (FTDI) devices  connected  to  your  PC,  the Port  Synchronization menu  appears,  as  shown  in Figure  5 .  Select  the  port corresponding to the MAXUSB\_INTERFACE# attached to the MAX77847 EV kit and click Connect .

319-101020; Rev 0; 8/23

Evaluates: MAX77847

## MAX77847 Evaluation Kit

Evaluates: MAX77847

As shown in Figure 6 , the Device Synchronization menu opens once the MAX77847 IC responds (voltages on the IN and EN pins must be valid on the MAX77847 IC for it to respond). The I 2 C address is shown in the MAX77847 ICs 7-bit slave  address.  The  address  changes  based  on  the  EV  kit's  R SEL  configuration. Table  3 details  the  different  slave addresses based on R SEL  value. Click Connect and Read . The text at the bottom right of the GUI window changes from MAXUSB is Disconnected to Connected .

Figure 5. Port Synchronization Menu

<!-- image -->

## Configuration

The Buck-Boost tab  ( Figure 4 )  of  the  GUI  displays information and the status of the IC on the EV kit as well as all available register settings. It is divided into five different sections: Chip Identification, Interrupts, CONFIG1, Output Voltage Setting (LOW) and Output Voltage Setting (HIGH) .

Click Read Once at the top of the GUI window to update all the register values currently stored on the MAX77847. After changing  the  setting  values  in  the  GUI  software,  click Write on  the  top  of  the  GUI  window  to  apply  all  settings  to MAX77847's registers. Alternatively, click Read on each setting's section to obtain the setting values of that section currently stored on the MAX77847's registers. After changing the setting values in the GUI software, click Write in the corresponding setting section to apply the new settings for the section to the MAX77847's registers.

The Chip Identification section ( Figure 7 ) shows the Device ID for MAX77847. It can be different based on different versions of the IC and is a read-only parameter.

Figure 7. Chip Identification Section of the MAX77847 GUI Software

<!-- image -->

The Interrupts section  ( Figure  8 )  displays  the  status  of  all  the  protection  features  on  MAX77847,  which  include overcurrent protection, overvoltage protection and thermal protection and are stored in the STAT register. If any of the fields are set to 1, it means that the protection feature has detected the corresponding fault event. The status of these interrupts should be monitored regularly while evaluating the MAX77847, and their values can be updated by clicking the Read button in this section. Alternatively, one can click on Start Auto Read on the top of the GUI window and periodically read all the registers in the specified time interval, as shown in Figure 4 .

319-101020; Rev 0; 8/23

Figure 6. Device Synchronization Menu

<!-- image -->

## Evaluates: MAX77847

Figure 8. Interrupts Section of the MAX77847 GUI Software

<!-- image -->

The CONFIG1 section  ( Figure  9 )  lists  all  the  parameters  of  the  MAX77847  that  can  be  changed  to  suit  the  user's application needs. These values are stored in the CFG register. The default values of the registered are marked in the brackets. This section gives the user ability to configure forced-PWM mode (FPWM), output active discharge, internal pull-down resistor for EN pin, output voltage ramp up/down slew rate, switching current limit, GPI pin functionality, and enable/disable the Buck-Boost converter output. Click Read to obtain the setting stored on the IC, and click Write to apply the new settings to the IC.

Figure 9. CONFIG1 Section of the MAX77847 GUI Software

<!-- image -->

The Output Voltage Setting (LOW) section ( Figure 10 ) is used to select the output voltage of the Buck-Boost converter from 1.8V to 5.2V. When the Buck-Boost output is first enabled, the output voltage is determined by the R SEL  value on the SEL pin, as shown in Table 3 , which is limited from 2.3V to 5.2V. Once the Buck-Boost output is enabled, the GUI can then be used to program the output voltage from 1.8V to 5.2V. See Setting the Output Voltage section for more details about configuring the output voltage.

The output voltage selected in this section corresponds to the buck-boost output voltage by default and when the GPI pin is pulled LOW externally ( GPI\_CFG = 1). Click Read to obtain the setting stored on the IC, and click Write to apply the new settings to the IC.

Figure 10. Output Voltage Setting (LOW) Section of the MAX77847 GUI Software

<!-- image -->

The Output Voltage Setting (HIGH) section ( Figure 11 ) is used to program the buck-boost output voltage when the GPI pin is HIGH. This voltage defaults to 3.6V, as shown in Figure 11 but can be changed once the buck-boost output is enabled and settled to the correct value. When the GPI pin is configured as a DVS input ( GPI\_CFG = 1) in the CFG register from the CONFIG1 section listed above, the IC changes the output voltage to the output voltage set in the Output Voltage Setting (HIGH) section when the GPI pin is pulled HIGH externally. This gives the user the functionality to command DVS using external signals.

## MAX77847 Evaluation Kit

Evaluates: MAX77847

The output voltage ramp up/down slew rate set in the CFG register in the CONFIG1 section above determines the slew transition rate from DVS LOW voltage to DVS HIGH voltage and vice-versa. Click Read to obtain the setting stored on the IC and click Write to apply the new settings to the IC.

Figure 11. Output Voltage Setting (HIGH) section of the MAX77847 GUI software

<!-- image -->

## Register Map

The Register Map tab of the GUI shows the detailed register map of MAX77847. The latest values in the registers can be displayed by clicking the Read All button at the top of the Register Map tab window. Click on individual bits to show the name and description of the specific field.

Figure 12. MAX77847 EV Kit GUI Software Register Map Tab

<!-- image -->

## Ordering Information

#Denotes RoHS-compliant.

<!-- image -->

| PART           | U1 IC         | DEFAULT OUTPUT VOLTAGE   | TYPE   |
|----------------|---------------|--------------------------|--------|
| MAX77847EVKIT# | MAX77847BEWL+ | 3.3V                     | EV Kit |

## MAX77847 Evaluation Kit

## MAX77847 EV Kit Bill of Materials

|   ITEM | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                                                                   | MANUFACTURER                                                        | VALUE           | DESCRIPTION                                                                                                             |
|--------|------------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | AGND, AGND1                  | -         |     2 | 5011                                                                                                         | KEYSTONE                                                            | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | BIAS, EN, GPI, SCL, SDA, SEL | -         |     6 | 5002                                                                                                         | KEYSTONE                                                            | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
|      3 | C1, C7                       | -         |     2 | GRM188D71A106MA73Z                                                                                           | MURATA                                                              | 10UF            | CAP; SMT (0603); 10UF; 20%; 10V; X7T; CERAMIC                                                                           |
|      4 | C2                           | -         |     1 | T491X107K025A                                                                                                | KEMET                                                               | 100UF           | CAP; SMT (7343-43); 100UF; 10%; 25V; TANTALUM                                                                           |
|      5 | C3                           | -         |     1 | C1005X7S1A225K050BC                                                                                          | TDK                                                                 | 2.2UF           | CAP; SMT (0402); 2.2UF; 10%; 10V; X7S; CERAMIC                                                                          |
|      6 | C4, C5                       | -         |     2 | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC; GMC21X7R106K10NT | SAMSUNG; TAIYO YUDEN; KEMET; MURATA; TDK; CAL- CHIP ELECTRONIC INC. | 10UF            | CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC                                                                           |
|      7 | C6                           | -         |     1 | GRM155R71A104KA01; C1005X7R1A104K050BB; C0402C104K8RAC                                                       | MURATA; TDK; KEMET                                                  | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                          |
|      8 | J1, J2, J5-J7                | -         |     5 | PBC03SAAN                                                                                                    | SULLINS                                                             | PBC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        |
|      9 | J4                           | -         |     1 | TSW-102-23-G-S                                                                                               | SAMTEC                                                              | TSW-102-23- G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                                             |
|     10 | J8                           | -         |     1 | PPPC092LJBN-RC                                                                                               | SULLINS ELECTRONICS CORP                                            | PPPC092LJB N-RC | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHT ANGLE; 18PINS                                                        |
|     11 | L1                           | -         |     1 | CIGT252010TM1R0ML                                                                                            | SAMSUNG                                                             | 1UH             | INDUCTOR; SMT (1008); SHIELDED; 1UH; 20%; 5.3A ;                                                                        |
|     12 | OUT1, PGND1, PGND2, VIN      | -         |     4 | 9020 BUSS                                                                                                    | WEICO WIRE                                                          | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
|     13 | OUTS, VINS                   | -         |     2 | 5000                                                                                                         | KEYSTONE                                                            | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |

Evaluates: MAX77847

## MAX77847 Evaluation Kit

## Evaluates: MAX77847

| ITEM   | REF_DES           | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                            | VALUE              | DESCRIPTION                                                                                                        |
|--------|-------------------|-----------|-------|-----------------------------------|-----------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 14     | PGNDS1, PGNDS2    | -         |     2 | 5001                              | KEYSTONE                                | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 15     | R2                | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD.              | 0                  | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                            |
| 16     | R3                | -         |     1 | 3296Y-1-105LF                     | BOURNS                                  | 1M                 | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                       |
| 17     | R4, R5            | -         |     2 | CRCW04022K20JN                    | VISHAY DALE                             | 2.2K               | RES; SMT (0402); 2.2K; 5%; +/-200PPM/DEGK; 0.0630W                                                                 |
| 18     | R6                | -         |     1 | ERJ-2RKF1003                      | PANASONIC                               | 100K               | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
| 19     | R15               | -         |     1 | ERJ-2GEJ153                       | PANASONIC                               | 15K                | RES; SMT (0402); 15K; 5%; +/-200PPM/DEGC; 0.1000W                                                                  |
| 20     | SU1, SU2, SU4-SU7 | -         |     6 | S1100-B; SX1100-B; STC02SYAN      | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED           |
| 21     | U1                | -         |     1 | MAX77847BEWL+                     | ANALOG DEVICES                          | MAX77847           | EVKIT PART - IC; 5.5V INPUT 3.1A SWITCHING CURRENT BUCK-BOOST CONVERTER; WLP15                                     |
| 22     | ASSY1             | -         |     1 | MAXUSB_INTERFACE#                 | MAXIM                                   | MAXUSB_ INTERFACE# | EVKIT PART-MODULE; KIT; MAXUSBINTERFACE; DUAL-PORT USB- TO-SERIAL INTERFACE BOARD                                  |
| 23     | VIO               | -         |     1 | 5010                              | KEYSTONE                                | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;              |
| 24     | PCB               | -         |     1 | MAX77847                          | MAXIM                                   | PCB                | PCB:MAX77847                                                                                                       |
| 25     | LX1, LX2, OUT2    | DNP       |     0 | SS-102-TT-2                       | SAMTEC                                  | SS-102-TT-2        | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                               |
| 26     | R1                | DNP       |     0 | N/A                               | N/A                                     | OPEN               | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                   |
| TOTAL  |                   |           |    47 |                                   |                                         |                    |                                                                                                                    |

## MAX77847 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX77847

## MAX77847 EV Kit PCB Layout Diagrams

MAX77847 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77847 EV Kit PCB Layout -Top View

<!-- image -->

Evaluates: MAX77847

MAX77847 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77847 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX77847 EV Kit PCB Layout (continued)

MAX77847 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX77847 EV Kit PCB Layout -Layer 5

<!-- image -->

Evaluates: MAX77847

MAX77847 EV Kit PCB Layout -Bottom View

<!-- image -->

MAX77847 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX77847 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 08/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77847