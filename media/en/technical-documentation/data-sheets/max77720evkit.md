<!-- lastmod 2023-09-25 -->
<!-- image -->

## General Description

The  MAX77720  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77720 features, including a dual output, DC-DC converter that generates an adjustable positive and an adjustable negative output, a  nERR  pin,  and  an  I 2 C  interface.  Windows ® -based software  provides  a  user-friendly  graphical  interface  as well as a detailed register-based interface to exercise the features of the MAX77720.

Windows-based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded from the Analog Devices website at https://www.analog.com/max77720evkit .  Windows  7  or newer Windows operating system is required to use the EV kit software.

## Features and Benefits

- Easy to Use
- GUI-Driven I 2 C Interface
- Assembled and Fully Tested
- 3.3V, 1.8V, 1.2VIO Compatible
- On-Board Electronic Loads
- -Steady-State, Transient, and Random Modes

## MAX77720 EV Kit Files

| FILE         | DESCRIPTION                             |
|--------------|-----------------------------------------|
| MAX77720.exe | Installs EV kit files onto the computer |

Ordering Information appears at end of data sheet.

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77720 EV kit
- MAX77720 EV kit GUI
- Windows-based PC
- Power supply
- Ammeter
- Digital multimeters
- USB Type-A to Micro-USB cable
- MAXUSB\_INTERFACE# for I 2 C serial interface

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  The  EV  kit software can be run without the hardware attached. Make sure the PC is connected to the internet throughout the process  so  that  the  USB  driver  can  be  automatically installed.  Use  twisted  wires  of  appropriate  gauge  (20 AWG) that are as short as possible to connect the load and power sources.

1.  Install the GUI software. Visit the product webpage at: https://www.analog.com/max77720evkit and download the latest version of the EV kit software.
2.  Install EV kit shunts according to Table 1 .
3.  Connect the MAXUSB\_INTERFACE# board to the MAX77720 EV kit through the EV kit's MAXUSB\_INTERFACE# connector (J5).
4.  Connect a Micro-USB cable between the MAXUSB\_INTERFACE# board and a Windows-based PC.
5.  Apply a 3.6V supply (set for a 100mA current limit) through an ammeter (set for a 10mA range) across the IN and PGND terminals of the EV kit. Turn on the power supply.

Open the MAX77720 GUI and select Device → Connect in the upper-left corner. Wait for a CONNECTED DEVICE LIST window to pop up, then press the Connect button.

6.  Confirm on the ammeter that the quiescent current is approximately  750µA.  Then  using  the  DVM,  confirm that  the  BST  voltage  is  outputting  the  set  voltage through  feedback  resistors  and  the  IBB  is  outputting the set voltage through I 2 C.

319-101017; Rev 0; 8/23

## MAX77720 Evaluation Kit

Figure 1. MAX77720 EV Kit Photo

<!-- image -->

Figure 2. MAX77720 EV Kit Simplified Block Diagram

<!-- image -->

Figure 3. MAX77720 EV Kit Top View

<!-- image -->

## Evaluates: MAX77720

## MAX77720 Evaluation Kit

Figure 4. MAX77720 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77720 EV Kit Solution Area

<!-- image -->

www.analog.com

## Evaluates: MAX77720

Figure 6. MAXUSB\_INTERFACE# Board

<!-- image -->

## Table 1. Jumper Connection Guide

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                               |
|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1                     | 1-2                | 1-2: Connects EN to V IO (enables the IBB and BST regulators). 2-3: Connects EN to GND (disables the IBB and BST regulators).                                                                                                                          |
| J4                     | 1-2                | 1-2: Connects nERR to V IO (install this jumper to regulate outputs). 2-3: Connects nERR to GND (pull low to flag an error).                                                                                                                           |
| J11                    | 1-2                | 1-2: Connects the gate of the Q2 load FET to the U2 amplifier.                                                                                                                                                                                         |
| J10                    | 1-2                | 1-2: Connects the gate of the Q1 load FET to the U2 amplifier.                                                                                                                                                                                         |
| J12                    | 1-2                | 1-2: Connects the OUTBST to the onboard electronic load.                                                                                                                                                                                               |
| J13                    | 1-2                | 1-2: Connects the OUTIBB to the onboard electronic load.                                                                                                                                                                                               |
| J6                     | 1-2                | 1-2: Connects the V IO supplied by the MAXUSB_INTERFACE# board NOTE: Connect the J5 Jumper on the MAXUSB_INTERFACE# board to the desired V IO voltage (either 3.3V or 1.8V only). 2-3: Connects the V IO to the 1.2V V IO supplied by the onboard LDO. |
| J7                     | 1-2                | 1-2: Connects the IN voltage to the onboard LDO to supply a 1.2VIO.                                                                                                                                                                                    |
| J8                     | 1-2                | 1-2: Connects the IN voltage to the onboard LDO to supply a 3.3V rail.                                                                                                                                                                                 |

## Detailed Description of Hardware

This evaluation kit should be used with the following documents:

- MAX77720 IC data sheet
- MAX77720 EV kit data sheet (this document)

These documents, or links to them, are included in the MAX77720 EV kit package. For the latest versions, visit the product page at: https://www.analog.com/max77720evkit .

## EN Pin

The MAX77720 EV kit provides a jumper J1 to enable or disable the MAX77720. See Table 1 for J1 jumper settings.

## nERR Pin

The MAX77720 EV kit provides a jumper J4 to drive the nERR pin as high or low. See Table 1 for J4 jumper settings.

## Evaluates: MAX77720

## Electronic Loads

The EV kit comes with an electronic load that allows the user to evaluate the boost and inverting buck-boost load current capabilities. On-board circuits set the load current through I 2 C (see Table 2 ).  There are two options to exercise load transient response. In the Load Control tab, the GUI offers load transient controls. If faster rise and fall times are required, remove J11 (for IBB), or J10 (for BST) and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V and 3V to apply transients to the output of the BST or IBB. Note that there is a 0.5Ω sense resistor for a 1:0.5 conversion of the load current to voltage for the BST and a 2Ω sense resistor for a 1:0.5 conversion of the load current to voltage. See the EV Kit Software section to learn how to set the load current from the GUI.

Figure 7. MAX77720 Electronic Load General Overview

<!-- image -->

## Table 2. Electronic Load Jumpers and Sense Points

| OUTPUT   | JUMPER A   | JUMPER B   | SENSE           |
|----------|------------|------------|-----------------|
| BST      | J10        | J12        | VIL_BST GNDSBST |
| IBB      | J11        | J13        | VIL_IBB L_IBBS  |

## MAX77720 Evaluation Kit

## Evaluates: MAX77720

## MAXUSB\_INTERFACE#

The  MAXUSB\_INTERFACE#  along  with  the  companion  EV  kit  GUI  software  allows  users  to  easily  change  the MAX77720's register settings with a Windows-based PC. Before connecting the MAXUSB\_INTERFACE# to the EV kit's MAXUSB\_INTERFACE# connector (J5), make sure the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1 and SW2 to ON position (This enables I 2 C mode on the MAXUSB\_INTERFACE#.)
- VL jumper (J5) to 1.8V or 3.3V depending on system requirements (This sets the MAXUSB\_INTERFACE#'s V IO voltage.)

The MAXUSB\_INTERFACE# also includes an onboard LDO that can supply the necessary voltage to V IO . To use the VIO  supplied from the MAXUSB\_INTEFACE# board, jumper J6 must be installed to position 1-2 (V CC  and V IO  connected).

If the user desires to use a 1.2VIO, connect jumper J6 to position 2-3 (V CC  and 1.2V) and ensure jumper J7 is installed. This provides power to the onboard 1.2V LDO to provide 1.2VIO compatibility. Additionally, a level shifter is added for users to still communicate using the MAXUSB\_INTERFACE# through I 2 C.

## External I 2 C Bus

If  the  user  wishes  to  connect  to  the  external  I 2 C  serial  bus  and  not  use  the  MAXUSB\_INTERFACE#,  unplug  the MAXUSB\_INTERFACE# from the EV kit's MAXUSB\_INTERFACE# connector (J5). Apply an external I/O supply to the VIO  pin or power the V IO  pin using the onboard 1.2V rail by connecting jumper J6 to the 2-3 position. Make sure the external  I 2 C  serial  bus's  logic  voltage  level  is  compatible  with  the  MAX77720's  I/O  logic  voltage  level.  Refer  to  the MAX77720 IC data sheet for the appropriate I/O logic voltage levels. Then connect wires to the SDA, SCL, and GND pins on the EV kit to the external I 2 C serial bus.

## Boost Output Voltage Configuration

The boost output voltage is configured using an external resistor divider. By selecting the external resistor-divider R TOP and R BOT , the output voltage is configured to the desired value. When the output voltage is regulated, the typical voltage at the FBBST pin is 1.25V.

Calculate the value of R TOP  (from V FBBST  to V OUTBST ) for a desired V OUTBST  at startup with the following equation:

<!-- formula-not-decoded -->

## Where:

- VOUTBST is the desired positive output voltage.
- VFBBST is the default internal reference voltage at the FBBST pin, 1.25V (typ).

For best accuracy, set R BOT to a value smaller than 475kΩ to ensure that the current flowing through it is significantly larger than the FBBST pin bias current. The advantage of using a higher value for R TOP  is the reduction of quiescent current for achieving the highest efficiency at light load currents. However, using R TOP  values that are lower increases immunity  against  noise  injection.  Additionally,  using  one  percent  tolerance  resistors  (or  better)  is  recommended  to maintain high output voltage accuracy.

## High-Temperature Testing

The MAX77720 is rated for operation under junction temperatures up to +125°C. Note that not all components on the EV kit are rated for temperatures this high. Some ceramic capacitors experience extra leakage when put under temperatures higher  than  they  are  rated  for  and  supply  current  readings  for  the  IC  might  be  larger  than  expected.  The MAXUSB\_INTERFACE# is also not rated for +125°C. Double-check the components on the EV kit if testing at +125°C ambient or junction temperatures. Consider replacing these components if IC operation at +125°C ambient or junction temperature is an important use case.

List of components not rated for +125°C:

- C1, C3, C2 (Input Capacitors)
- C4, C6 (Output Boost Capacitors)
- C9, C16, C38, C15, C34, C36 (High Frequency Decoupling Capacitors)
- C17, C18, C21, C22 (On-Board LDO Capacitors)

## Evaluates: MAX77720

## Efficiency Measurement

The MAX77720 EV kit comes with sense pins for accurately measuring input voltage (INBBS, GNDBBS), output Inverting buck-boost voltage (OUTIBBS, GNDIBBS), and output boost voltage (OUTBSTS, GNDBSTS). See Figure 3 for  their locations on the EV kit. For the most accurate efficiency, load regulation, and line regulation measurements, use these sense pins to measure input and output voltages.

WARNING: These sense pins are only for measuring voltages, do not connect the input supply to input sense pins, and do not connect the electronic load to output sense pins, as these sense pins are not designed to have current running through them. Doing so damages the EV kit.

Use input supply terminals (IN, PGND) and use output terminals (OUTBST, PGNDBST, OUTIBB, and PGNDIBB) for connecting to electronic load as shown in Figure 3 .

## General PCB Layout Guidelines

Careful printed circuit board layout is critical to achieving low-switching power losses and a clean stable operation by increasing noise immunity.

When laying out the PCB, follow these general guidelines:

- Place the inductors and output capacitors of the DC-DC converters close to the MAX77720 and keep the power loop small.
- When routing the current path of the DC-DC converters, short and wide traces should be used to reduce any EMI issues radiated from the fast switching. The trace between the LX pin and the inductor is the most critical for this.
- The ground loop for the input and output capacitor should be as small as possible.
- For multilayer PCBs, the analog ground (AGND) should be on its own plane, and the power ground (PGND) should be on its separate plane. AGND should be directly connected to the ground plane separately, to ensure a quiet ground plane for AGND and to avoid common impedance grounding.
- The feedback pins should be routed away from the LX switching node to increase noise immunity. This pin is a highimpedance input that is highly noise sensitive.
- When possible, ground planes and traces should be used to help shield the feedback signal and minimize noise and magnetic interference. For multilayer PCBs, a ground plane should be in between the high current paths and any analog or digital paths.

## Example PCB Layout

Figure 8 shows an example layout of the top layer with additional digital signals beneath. For the layout and PCB layout per layer, see the MAX77720 EV kit PCB Layout section.

## MAX77720 Evaluation Kit

Figure 8. PCB Top-Layer and Component Placement Example

<!-- image -->

## Evaluates: MAX77720

## EV Kit Software

The graphical user interface (GUI) software allows for a quick, easy, and thorough evaluation of the MAX77720. The GUI, along with the MAXUSB\_INTERFACE# (see Figure 6 ), drives I 2 C communication with the EV kit. Every control in the GUI corresponds directly to a register within the MAX77720. Refer to the Register Map section of the MAX77720 IC data sheet for a complete description of the registers. See Figure 9 for a screenshot of the GUI upon first opening.

Figure 9. MAX77720 EV Kit GUI Software Configuration Tab

<!-- image -->

## Installation

Visit  the  product  webpage  at https://www.analog.com/max77720evkit and  download  the  latest  version  of  the  EV  kit software. Save the EV kit software installation file to a temporary folder and decompress the Zip file. Run the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a Micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the necessary drivers.

## Connecting the GUI to the MAXUSB\_INTERFACE#

After opening the GUI, click Device in the upper left corner of the GUI window. Click Connect in the drop-down menu. If there are multiple MAXUSB\_INTERFACE# adapters or FTDI devices connected to the PC, the Port Synchronization menu appears ( Figure 10 ). Select the port corresponding to the MAXUSB\_INTERFACE# attached to the MAX77720 EV kit and click Connect .

The Device Synchronization menu opens ( Figure 11) . Once the MAX77720 IC responds, voltages on the IN and V IO pins must be valid on the MAX77720 IC for it to respond. The I 2 C address shown is the MAX77720 IC's 7-bit slave address. The address shown changes depending on the OTP configuration. Click Connect and Read . The text at the bottom right of the GUI window changes from " MAXUSB is Disconnected " to " MAXUSB is Connected ."

## Evaluates: MAX77720

Figure 10. Port Synchronization Menu

<!-- image -->

Figure 11. Device Synchronization Menu

<!-- image -->

## MAX77720 Configuration

The MAX77720 tab ( Figure 9 ) displays information and status of the IC on the EV kit as well as all available register settings. It is divided into different sections: OTP Revision Number, Interrupts, Interrupts Mask, Status, Error Flag, Global Configuration, Boost Configuration, and Inverting Buck-Boost Configuration.

Click Read Once located at the top of the GUI window to obtain all setting values currently stored on all the MAX77720's registers. After changing the settings values in the GUI software, click Write on the top of the GUI window to apply all settings to the MAX77720's registers. Alternatively, click Read on each setting section to obtain the setting values of that particular section currently stored on the MAX77720 registers. After changing the setting values in the GUI software, click Write in the corresponding setting section to apply the new settings for that particular section to the MAX77720 registers.

The POK Status and Fault Interrupt Source section ( Figure 12 ) displays the power-OK status and any fault conditions detected on the MAX77720 IC, which are stored in the INT\_GLBL0 register. Periodically check the POK Status and Fault Interrupt Source section during evaluation to monitor the status of the power-OK (POK), overvoltage protection (OVLO), undervoltage protection (UVLO), output hard-short (SCP), thermal shutdown (OTLO), and overcurrent protection (OCP). Click Read to obtain the latest status from the IC.

Figure 12. MAX77720 Tab -Interrupts Section

<!-- image -->

The POK Status and Fault Interrupt Masks section ( Figure 13 ) configures the reflection of the bits in INT\_GLBL to the POK and nIRQ pin, respectively. If a bit is masked, its status in the INT\_GLBL register is not shown on the nIRQ pin. Refer to the Power-OK Monitor and Fault Interrupts section in the IC data sheet for more information about the operation of the POK and nIRQ pin, respectively. Click Read to obtain the setting stored on the IC, and click Write to apply new settings to the IC.

Figure 13. MAX77720 Tab -Interrupts Mask and Status Section

<!-- image -->

The Error Flag section ( Figure 14 ) displays the IC protection status for the UVLO, OVLO, and OTLO conditions. These error flag conditions flag once it reaches outside the operating thresholds such as voltage or temperature. Refer to the Electrical Characteristics section of the IC data sheet for the specified values and hysteresis.

Figure 14. MAX77720 Tab -Error Flag Section

<!-- image -->

## Evaluates: MAX77720

## MAX77720 Evaluation Kit

The Config Global section ( Figure 15 ) configures the enabling and disabling of the MAX77720 regulators and their main bias. Refer to the Electrical Characteristics section of the IC data sheet for the difference in the quiescent current for these modes. Additionally, refer to the nERR Error Pin section for the functionality description of these bitfields.

Figure 15. MAX77720 Tab -Config Global Section

<!-- image -->

The Config DCDC0 section ( Figure 16 ) configures the inverting buck-boost and boost regulator's programmable bitfields. The user can program the inverting buck-boost's output voltage range, soft-start current limit, and active discharge, along with the boost's peak current limit and active discharge. Refer to the Detailed Description section in the IC data sheet for more information about the operation of these bitfields.

Figure 16. MAX77720 Tab -Config DCDC0

<!-- image -->

The Config DCDC1-2 section ( Figure 17 ) configures the operation of the inverting buck-boost target output voltage. The user can program the inverting buck-boost in two ranges: -17.01V to -24V (low range) and -10.01V to -17V (high range). Refer to the Inverting Buck-Boost Converter section in the IC data sheet for more information about the operation of the inverting-buck-boost converter.

Figure 17. MAX77720 Tab -Config DCDC 1-2

<!-- image -->

The Config Delay0 and Config Delay1 section ( Figure 18 )  configures the inverting buck-boost and boost regulator's programmable startup and power-down delays. The user can program 16 different power-up and power-down delays ranging  from  0.2ms  to  3.2ms.  Refer  to  the Power-Up/Power-Down Sequence section  in  the  IC  data  sheet  for  more information about the operation of the delays.

Figure 18. MAX77720 Tab -Delay0 and Delay1

<!-- image -->

## Evaluates: MAX77720

## Load Control Tab

The Load Control tab contains controls for load current on the regulator's outputs. The GUI is capable of setting steadystate, transients, and random load currents. To set a load current, use the slider bar or text field to input a value (mA) and check the Enable box. Shuffle through the modes to exercise different load conditions. Note: for the onboard electronic loads to function, jumpers J11 and J13 must be connected to the IBB rail, and jumpers J10 and J12 must be connected to the BST rail.

The offset and gain values are set by Analog Devices and do not need to be altered. However, in the case that the load control seems to be inaccurate, make sure the constants match (see Figure 19 and Figure 20 ) for the IBB and BST load control respectively.

For the IBB load control, the electronic load is unable to load up to the maximum load capabilities that the IBB can handle. If the user wishes to add more load current, using an external electronic load or a power resistor is recommended.

Figure 19. IBB Load Control Values

<!-- image -->

Figure 20. BST Load Control Values

<!-- image -->

## Register Map

The Register Map tab provides an overview of all the MAX77720 registers and the values currently stored on them. Clicking on an individual bit shows the name and description of the specified bitfield. See Figure 21 for an example of the INTM\_GLBL0.POK\_IBB\_M bitfield when selected.

## MAX77720 Evaluation Kit

## Evaluates: MAX77720

Figure 21. EV Kit GUI Software Register Map Tab

<!-- image -->

## Ordering Information

#Denotes RoHS-compliant.

<!-- image -->

| PART           | TYPE   |
|----------------|--------|
| MAX77720EVKIT# | EV Kit |

## MAX77720 EV Kit Bill of Materials

| PART                                                              |   QTY | MFG PART #                                                                                    | MANUFACTURE R                         | VALUE    | DESCRIPTION                                   |
|-------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------|---------------------------------------|----------|-----------------------------------------------|
| AGND, GND, GND1, GND2, IN, OUTBST, OUTIBB, PGND, PGNDBST, PGNDIBB |    10 | 9020 BUSS                                                                                     | WEICO WIRE                            | MAXIMPAD | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC |
| C1, C3                                                            |     2 | C1608X5R1A226M08 0AC; GRM188R61A226ME 15; CL10A226MPCNUBE; CL10A226MPMNUB; GRM187R61A226ME 15 | TDK; MURATA; SAMSUNG; SAMSUNG; MURATA | 22UF     | CAP; SMT (0201); 1UF; 20%; 6.3V; X5R; CERAMIC |

## Evaluates: MAX77720

## MAX77720 Evaluation Kit

| C2                 |   1 | GRM033R60J105ME A2;C0603X5R0J105M 030;CL03A105MQ3C SN                                                      | MURATA; TDK; SAMSUNG                                   | 1UF    | CAP; SMT (0805); 10UF; 10%; 35V; X6S; CERAMIC                                                                          |
|--------------------|-----|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------|
| C4, C6             |   2 | GRM21BC8YA106KE1 1                                                                                         | MURATA                                                 | 10UF   | CAP; SMT (1206); 10UF; 10%; 50V; X7T; CERAMIC                                                                          |
| C5, C7             |   2 | GRM31CD71H106KE 11                                                                                         | MURATA                                                 | 10UF   | CAP; SMT (0402); 0.1UF; 10%; 16V; X5R; CERAMIC                                                                         |
| C9, C16, C38       |   3 | GRM155R61C104KA8 8                                                                                         | MURATA                                                 | 0.1UF  | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                             |
| C10                |   1 | 16TQC100MYF                                                                                                | PANASONIC                                              | 100UF  | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                         |
| C13, C14           |   2 | C1005X7R1H104K050 BB; GRM155R71H104KE1 4; C1005X7R1H104K050 BE; UMK105B7104KV-FR; 04025C104KAT2A           | TDK; MURATA; TDK; TAIYO YUDEN; AVX                     | 0.1UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR  |
| C15                |   1 | ANY                                                                                                        | ANY                                                    | 1UF    | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                         |
| C17, C18, C21, C22 |   4 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080 AC; CL10A475KP8NNN; C1608X5R1A475K080 AE | KEMET; TAIYO YUDEN; TDK; TDK; SAMSUNG ELECTRONICS; TDK | 4.7UF  | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                        |
| C19, C20, C35, C37 |   4 | C0402C103K5RAC; GRM155R71H103KA 88; C1005X7R1H103K050 BE; CL05B103KB5NNN; UMK105B7103KV                    | KEMET; MURATA; TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN    | 0.01UF | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C23-C25            |   3 | ANY                                                                                                        | ANY                                                    | 0.1UF  | CAP; SMT (0402); 4700PF; 5%; 50V; X7R; CERAMIC                                                                         |
| C26, C27           |   2 | C0402C472J5RAC                                                                                             | KEMET                                                  | 4700PF | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |
| C28, C29           |   2 | ANY                                                                                                        | ANY                                                    | 0.01UF | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                         |
| C30-C33            |   4 | GRM155R71H102JA0 1; GCM155R71H102JA3 7                                                                     | MURATA; MURATA                                         | 1000PF | CAP; SMT (0402); 1UF; 10%; 35V; X5R; CERAMIC                                                                           |
| C34, C36           |   2 | C1005X5R1V105K050 BC                                                                                       | TDK                                                    | 1UF    | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                         |
| C39                |   1 | GRM155R71E104KE1 4;                                                                                        | MURATA; TDK; TAIYO YUDEN;                              | 0.1UF  | DIODE; SCH; SMT (PMDE); PIV=60V; IF=2A                                                                                 |

www.analog.com

Analog Devices | 17

## Evaluates: MAX77720

## MAX77720 Evaluation Kit

|                                                                       |    | C1005X7R1E104K050 BB; TMK105B7104KVH; CGJ2B3X7R1E104K05 0BB   | TDK                      |                  |                                                                                                                    |
|-----------------------------------------------------------------------|----|---------------------------------------------------------------|--------------------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| D1                                                                    |  1 | RB068VWM-60                                                   | ROHM SEMICONDUCT OR      | RB068VWM- 60     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
| EN, NERR, NIRQ, POK, SCL, SDA                                         |  6 | 5002                                                          | KEYSTONE                 | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| GNDBBS, GNDBSTS, GNDIBBS, GNDSBST, INGNDS                             |  5 | 5001                                                          | KEYSTONE                 | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| INBBS, INBSTS, L_IBBS, OUTBSTS, OUTIBBS, VIL_BST, VIL_IBB, VIO, V_3P3 |  9 | 5000                                                          | KEYSTONE                 | N/A              | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                   |
| J1, J4, J6                                                            |  3 | TSW-103-07-T-S                                                | SAMTEC                   | TSW-103-07- T-S  | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHT ANGLE; 18PINS                                                   |
| J5                                                                    |  1 | PPPC092LJBN-RC                                                | SULLINS ELECTRONICS CORP | PPPC092LJBN- RC  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                            |
| J7, J8, J10- J13                                                      |  6 | TSW-102-07-T-S                                                | SAMTEC                   | TSW-102-07- T-S  | INDUCTOR; SMT (1008); SHIELDED; 8.2UH; 20%; 1.3A                                                                   |
| L1                                                                    |  1 | DFE252012F-8R2M                                               | MURATA                   | 8.2UH            | INDUCTOR; SMT (1008); SHIELDED; 3.3UH; 20%; 1.7A;                                                                  |
| L2                                                                    |  1 | LSANB2520MKT3R3 M                                             | TAIYO YUDEN              | 3.3UH            | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                         |
| MH1-MH4                                                               |  4 | 9032                                                          | KEYSTONE                 | 9032             | CABLE; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; 2000 MILLIMETERS; 5PINS-4PINS     |
| MISC1                                                                 |  1 | AK67421-2                                                     | ASSMANN                  | AK67421-2        | TRAN; N-CHANNEL POWER MOSFET; NCH; TO-252AA; PD- (50W); I-(15A); V-(100V)                                          |
| Q1                                                                    |  1 | TSM900N10CP ROG                                               | TAIWAN SEMICONDUCT OR    | TSM900N10C P ROG | TRAN; P-CHANNEL MOSFET; PCH; TO-252AA; PD-(75W); I-(- 45A); V-(-30V)                                               |

Evaluates: MAX77720

## MAX77720 Evaluation Kit

| Q2                        |   1 | MCU45P03A                                      | MICRO COMMERCIAL COMPONENTS           | MCU45P03A      | RES; SMT (0603); 909K; 1%; +/- 100PPM/DEGK; 0.1000W                                                       |
|---------------------------|-----|------------------------------------------------|---------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------|
| R1                        |   1 | CRCW0603909KFK                                 | VISHAY DALE                           | 909K           | RES; SMT (0603); 130K; 0.50%; +/-25PPM/DEGC; 0.0630W                                                      |
| R2                        |   1 | RR0816P-134-D                                  | SUSUMU CO LTD.                        | 130K           | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                        |
| R3, R9, R11-R18, R26, R28 |  12 | ANY                                            | ANY                                   | 0              | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                         |
| R4, R7, R8, R10, R25, R27 |   6 | ANY                                            | ANY                                   | 100K           | RES; SMT (0402); 2.2K; 1%; +/- 100PPM/DEGC; 0.0630W                                                       |
| R5, R6                    |   2 | RC0402FR-072K2L                                | YAGEO                                 | 2.2K           | RES; SMT (0402); 20K; 1%; +/- 100PPM/DEGC; 0.0630W                                                        |
| R19, R20                  |   2 | CRCW040220K0FK                                 | VISHAY DALE                           | 20K            | RES; SMT (0402); 680; 1%; +/- 100PPM/DEGC; 0.0630W                                                        |
| R21, R22                  |   2 | RC0402FR-07680RL                               | YAGEO                                 | 680            | RES; SMT (0402); 100; 1%; +/- 100PPM/DEGC; 0.0630W                                                        |
| R23, R24                  |   2 | 9C04021A1000FL; RC0402FR-07100RL               | PANASONIC; YAGEO PHYCOMP              | 100            | RES; SMT (0402); 10; 1%; +/- 200PPM/DEGC; 0.0630W                                                         |
| R29, R30                  |   2 | RC0402FR-0710RL                                | YAGEO PHYCOMP                         | 10             | RES; SMT (0402); 10K; 5%; +/- 200PPM/DEGC; 0.0630W                                                        |
| R31, R33                  |   2 | CR0402-JW-103GLF                               | BOURNS                                | 10K            | RES; SMT (0402); 2K; 0.10%; +/- 25PPM/DEGC; 0.0630W                                                       |
| R32, R34                  |   2 | ERA-2AEB202                                    | PANASONIC                             | 2K             | RES; SMT (0402); 470K; 1%; +/- 100PPM/DEGC; 0.0630W                                                       |
| R35, R36                  |   2 | ERJ-2RKF4703                                   | PANASONIC                             | 470K           | RES; SMT (0402); 649K; 1%; +/- 100PPM/DEGC; 0.0630W                                                       |
| R37, R39                  |   2 | CRCW0402649KFK                                 | VISHAY DALE                           | 649K           | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                           |
| R38, R40, R42, R43        |   4 | ANY                                            | ANY                                   | 1K             | RES; SMT (0402); 1M; 1%; +/- 100PPM/DEGC; 0.0630W                                                         |
| R41, R45                  |   2 | CRCW04021M00FK                                 | VISHAY DALE                           | 1M             | RES; SMT (2512); 0.5; 1%; +/- 100PPM/DEGC;2W                                                              |
| R44                       |   1 | LRC-LR2512LF-01- R500-F                        | TT ELECTRONICS                        | 0.5            | RES; SMT (2512); 4.7; 5%; JUMPER; 1.0000W                                                                 |
| R46                       |   1 | CR2512-J/-4R7ELF                               | BOURNS                                | 4.7            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                               |
| R47-R50                   |   4 | ERJ-2GE0R00                                    | PANASONIC                             | 0              | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                   |
| R51                       |   1 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | 0              | IC; CONV; WIDE OUTPUT VOLTAGE RANGE DUAL POLARITY PMIC; WLP20                                             |
| U1                        |   1 | MAX77720SENP+                                  | ANALOG DEVICES                        | MAX77720SE NP+ | IC; OPAMP; LOW COST MICROPOWER; LOW NOISE CMOS RAIL-TO-RAIL; INPUT/OUTPUT OPERATIONAL AMPLIFIERS; TSSOP14 |
| U2                        |   1 | AD8619ARUZ                                     | ANALOG DEVICES                        | AD8619ARUZ     | IC; DAC; ULTRA-SMALL; QUAD- CHANNEL; 12-BIT BUFFERED                                                      |

www.analog.com

Analog Devices | 19

## Evaluates: MAX77720

## MAX77720 Evaluation Kit

|              |    |               |                           |                | OUTPUT DACS WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14               |
|--------------|----|---------------|---------------------------|----------------|------------------------------------------------------------------------------|
| U3           |  1 | MAX5815BAUD+  | MAXIM                     | MAX5815BAU D+  | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP  |
| U4           |  1 | MAX14611ETD+  | MAXIM                     | MAX14611ET D+  | IC; REG; LOW NOISE 500 MILLIAMPERE LDO LINEAR REGULATOR; TDFN8-EP            |
| U5, U6       |  2 | MAX38902AATA+ | MAXIM                     | MAX38902AA TA+ | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8             |
| U7           |  1 | AT24CS02-SSHM | MICROCHIP                 | AT24CS02- SSHM | PCB:MAX77720                                                                 |
| PCB          |  1 | MAX77720      | MAXIM                     | PCB            | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS |
| EV_KIT_B OX1 |  9 | NPC02SXON-RC  | SULLINS ELECTRONICS CORP. |                | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                      |
| C11, C12     |  0 | N/A           | N/A                       | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                      |
| C8           |  0 | N/A           | N/A                       | OPEN           | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                |

## Evaluates: MAX77720

## MAX77720 EV Kit Schematic

<!-- image -->

## Evaluates: MAX77720

## MAX77720 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77720

## MAX77720 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX77720

## MAX77720 EV Kit PCB Layout

MAX77720 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77720 EV Kit PCB Layout -Top

<!-- image -->

## MAX77720 Evaluation Kit

MAX77720 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77720 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX77720

## MAX77720 EV Kit PCB Layout (continued)

MAX77720 EV Kit PCB Layout -Bottom

<!-- image -->

MAX77720 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX77720

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX77720 Evaluation Kit