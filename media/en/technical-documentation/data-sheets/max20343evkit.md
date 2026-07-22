<!-- lastmod 2022-08-02 -->
## MAX20343 Evaluation Kit

## General Description

The MAX20343 evaluation kit (EV kit) is a fully assembled and tested circuit  that  evaluates  the  MAX20343/MAX20344 3.5W, buck-boost regulator. The MAX20343 is designed for  low-noise,  battery-powered  applications  that  require long runtimes. The EV kit is compatible with both the I 2 C controlled and single-pin-enabled versions of the MAX20343/MAX20344.

Refer  to  the MAX20343/MAX20344  IC  data  sheet for detailed information regarding the operation and features of the device.

## Features

- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested
- USB Controllable for I 2 C Configured Devices

Ordering Information appears at end of data sheet.

## MAX20343 EV Kit Files

| FILE                       | DESCRIPTION                  |
|----------------------------|------------------------------|
| MAX20343EVKitSetupV140.zip | MAX20343 Evaluation Kit Tool |

Evaluates: MAX20343/MAX20344

## Quick Start

## Required Equipment

The following equipment is required to verify the functionality of this EV kit. The list assumes the EV kit is used with the I 2 C-controlled version of MAX20343.

- USB-A to Micro-USB Cable
- Host PC with One USB Port and the MAX20343 Evaluation Kit Tool Installed
- Adjustable Power Supply with 5.5V Capability
- Voltmeter

## Optional Equipment

The following equipment can be used for more complete evaluation of the EV kit:

- Two (2) Ammeters
- Load (Electronic or Passive)

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation when using the I 2 C controlled version of MAX20343:

- 1) Install the MAX20343 Evaluation Kit Tool on the host PC.
- 2) Connect  the  USB  cable  from  the  host  PC  to  the MAX20343EVKIT and run the GUI.
- 3) Verify  that  the  shunt  jumpers  are  installed  in  their default positions.
- 4) Set  the  voltage  on  the  power  supply  to  3.3V,  then connect  the  positive  terminal  to  V IN   and  the  common/negative terminal to GND.
- 5) Verify that the GUI has detected and connected to the EV kit and that LED D5 on the EV kit is illuminated.
- 6) On the General tab of the GUI, uncheck the boxes for  Output  Voltage  Interrupt  Mask  and  Input  UVLO Interrupt Mask.
- 7) Press the Read button to read the interrupt states. Verify that LED D2 is off.
- 8) Switch to the Buck-Boost tab of the GUI and verify that  the  Output  Voltage  slider  is  set  to  5.5V,  then enable  the  regulator  using  the  Buck-Boost  Enable radio button.
- 9) Verify that LED D2 is illuminated.

<!-- image -->

## MAX20343 Evaluation Kit

- 10) Use the voltmeter to measure V OUT and confirm that it is 5.5V ± 3%.

To measure the efficiency of the MAX20343:

- 11) Remove the shunt jumpers from J1 and J2.
- 12) Connect the first ammeter in series to the input sup -ply by attaching the input terminal to pin 1 of J1 and the output terminal to pin 2 of J1.
- 13) Connect the second ammeter in series to output load by attaching the input terminal to pin 1 of J2 and the output terminal to pin 2 of J2.
- 14) Attach the load to V OUT  and measure the input voltage, input current, output voltage, and output current.

## Detailed Description of Software

The MAX20343 Evaluation Kit Tool is a GUI that provides a  simple  and  quick  way  to  test  different  configuration settings for the I 2 C-controlled version of the MAX20343. The  GUI  contains  several  tabs  to  configure  different parameters  of  the  MAX20343  and  a  register  map  to access all registers.

## Connecting to the Hardware

When the GUI is first opened, a splash screen appears. The splash screen displays the GUI software revision and links

## Evaluates: MAX20343/MAX20344

to the Maxim Integrated main website and support website. It can be disabled by checking the box 'Disable Splash.'

After the splash screen closes, the main window opens to the General tab of the GUI. The GUI starts up assuming  all  configuration  bits  are  set  to  0,  so  the  information  displayed  might  not  match  the  values  stored  in  the MAX20343 until the device is read manually or automatically through polling.

Figure 1. Initial Splash Screen

<!-- image -->

Figure 2. GUI Main Tab on Startup

<!-- image -->

│

## MAX20343 Evaluation Kit

If the EV kit is not connected to the host PC, the connection status in the bottom right corner reads, 'Not Connected.'

When the EV kit is connected to the host PC, but power is not applied to V IN , the status instead reads, 'MAX20343 Not Found.'

When power is supplied to the MAX20343 and the EV kit is connected to the host PC, the status reads, 'Connected.' At this point, the GUI is successfully communicating with the EV kit and evaluation can begin.

If the connection status still shows that the device is not connected or found, but EV kit is connected to the host PC and power is supplied to V IN , it might be necessary to manually connect to the EV kit. Under the Device menu, find and press on the Connect button.

Figure 3. Connection Status when EV Kit is Disconnected

<!-- image -->

Figure 4. Connection Status when the MAX20343 is Not Powered

<!-- image -->

## Evaluates: MAX20343/MAX20344

## Interacting with the GUI

There  are  five  types  of  controls  in  the  GUI  main  page: Buttons,  Radio  Buttons,  Toggle  Switches,  Drop  Downs, and Sliders.

Figure 5. Connection Status when the GUI Detects the MAX20343

<!-- image -->

Figure 6. Manually Connecting to the Device

<!-- image -->

│

## Buttons

Buttons are used to perform one-time functions such as reading or writing bits. All tabs include a Read All button that reads the MAX20343 registers and updates all the fields on the current tab with the contents. Pressing a button performs the function of the button once. For example, the Set button in the Buck-Boost tab writes the value selected by the Output Voltage slider to BBstVSet.

Figure 7. Buttons on the Buck-Boost Tab

<!-- image -->

## Radio Buttons

Radio buttons are similar to buttons, but come in sets and are latched. Only one button from a set can be enabled at a time. Data is written to the MAX20343 when a radio button is pressed. A radio button with a blue fill is considered 'pressed' and indicates the corresponding bit is set to 1. For example, the Buck-Boost Enable radio buttons control the BBstEn bit. The bit has two options, but can hold only one value.

Figure 8. Radio Buttons on the Buck-Boost Tab

<!-- image -->

## Toggle Switches

Toggle switches set individual bits and latch to indicate the bit state. The GUI writes data when the toggle switch is pressed. Unlike radio buttons, toggle switches can be enabled in any combination. A toggle switch with a blue fill indicates the corresponding bit is set to 1.

Figure 9. Toggle Switches in the Buck-Boost Tab

<!-- image -->

## Drop Downs

Drop down lists allow a bitfield value to be selected from a list of all possible values. To expand a list, click on the downward arrow on the right of the displayed value. The GUI writes data when the value is selected from the list.

Figure 10. Drop Down lists in the Buck-Boost Tab

<!-- image -->

## Sliders

Sliders  select  a  specific  value  when  there  is  a  large  number  of  potential  values.  For  example,  the  Output  Voltage slider in the Buck-Boost tab selects the BBstVSet value out of the 64 possible values. The value selected by a slider is displayed in the text box to the right of the slider. Note that selecting a value on the slider does not write the value to the MAX20343. To write slider data, press the button that corresponds to the slider.

Figure 11. Slider in the Buck-Boost Tab

<!-- image -->

## MAX20343 Evaluation Kit

## GUI Tabs

The MAX20343 GUI is organized into three tabs: General, Buck-Boost, and Register Map. Clicking on a tab name opens the tab.

## General Tab

The  General  tab  configures  and  reads  data  that  is mostly  independent  of  the  buck-boost  performance.

## Evaluates: MAX20343/MAX20344

This  includes  reading  back  the  status  bits,  locking  and unlocking the output voltage setting, enabling FAST mode through the FAST pin, and masking and unmasking interrupts from the INT pin.

To use the FAST and INT functions, shunt jumpers must be installed on J5 and J7, respectively, to connect the pins to the USB bridge.

Figure 12. General Tab

<!-- image -->

│

## Buck-Boost Tab

The Buck-Boost tab reads and configures settings that directly affect the buck-boost performance and output. Refer to the MAX20343/MAX20344 IC data sheet for more information regarding the functions and settings.

Note that the Fast Mode control in the Buck-Boost tab writes the BBstFast bit instead of toggling the FAST pin as in the General tab.

Figure 13. Buck-Boost Tab

<!-- image -->

## MAX20343 Evaluation Kit

## Register Map Tab

The Register Map tab presents the full MAX20343 register map for reading and configuring bit settings.

To  open  a  register,  click  on  the  register  in  the  left section of the tab. Register values are updated automatically when that register is selected. Registers can be read

## Evaluates: MAX20343/MAX20344

manually by pressing the Read button in the bottom right section, or by pressing Read All in the top left.

To write data to a register, set the bit values and press the Write button. Bits are set by clicking on the bit name in the bottom section of the tab. A boldface bit is 1 while a regular face bit is 0.

Figure 14. Register Map Tab

<!-- image -->

│

## MAX20343 Evaluation Kit

## Detailed Description of Hardware

The  MAX20343  EV  kit  is  a  fully  assembled  and  tested PCB for evaluating the MAX20343/MAX20344 buck-boost regulator. Although the I 2 C version of the MAX20343 is installed on the EV kit, the buck-boost function is identical in the single-pin-enable version of MAX20343/MAX20344 and the EV kit can be used to identify the optimal settings for  an  application. The GUI cannot be used to evaluate the single-pin-enabled MAX20343/MAX20344.

## PC to I 2 C USB Bridge

To simplify evaluation using the MAX20343 EV kit GUI, the MAX20343 EV kit has an on-board USB to I 2 C bridge. An FTDI FT2232 translates communication from the host PC  into  I 2 C  to  control  the  MAX20343.  Additionally,  the FT2232 reads the INT status and toggles the FAST pin.

To connect the MAX20343 I 2 C pins to the FT2232, install shunt jumpers in the 1-2 positions of J3 and J4.

## Status Indicators

Several  status  indicators  for  LEDs  on  the  EV  kit  communicate  the  board  and  MAX20343  states.  LEDs  that correspond  to  MAX20343  signals  are  driven  by  the U2  and  U3  buffers.  These  signals  are INT /PGOOD, INGOOD, and EN. Signals can be connected or disconnected from the buffers using 0Ω resistors. Because the I 2 C version of MAX20343 installed on the EV kit replaces INGOOD and EN with SCL and SDA, these signals are not connected by default. Table 1 lists the LED indicators and their corresponding signals.

Note that the U2 buffer that drives the INT /PGOOD LED is inverting. If the EV kit is used with a single-pin-enabled device, U2 should be replaced with NC7WZ125K8X.

## Table 1. LED Status Signals

| LED   | SIGNAL/FUNCTION                                                                                                                                                                      |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1    | FAST Control. Indicates the state of the external FAST control pin when controlled by the FT2232.                                                                                    |
| D2    | INT /PGOOD. Indicates when an unmasked interrupt is triggered (I 2 C version) or that the output voltage is high enough to support full load operation (single-pin-enabled version). |
| D3    | Enable. Indicates the state of the EN pin (single-pin-enabled version).                                                                                                              |
| D4    | INGOOD. Indicates that the input voltage is high enough to support full load operation (single-pin-enabled version).                                                                 |
| D5    | Device Connected. Indicates that the GUI is connected to the EV kit.                                                                                                                 |

## Evaluates: MAX20343/MAX20344

## Test Points

Test  points  enable  easy  probing  and  measuring  of  voltages and signals. See Table 2 for a list of all test points and their corresponding signals.

The  uninstalled  test  points  TP16-TP19  can  be  used to  make  an  oscilloscope  probe  point  for  probing  the buck-boost output voltage. TP16 connects to V OUT  and TP17-TP19  connect  to  GND.  By  attaching  a  ground spring  to  any  of  the  three  GND  test  points  and  probing TP16,  an  easily  accessible,  low-inductance  probe  point becomes available.

Table 2. Test Point Assignments

| TEST POINT   | SIGNAL                                                                                                 |
|--------------|--------------------------------------------------------------------------------------------------------|
| TP1          | External V IN Supply. Select the external supply by placing a shunt jumper on J1 in the 2-3 position.  |
| TP2          | GND                                                                                                    |
| TP3          | Jumper J2 Connection. Connect to output load if a shunt jumper is installed on J2.                     |
| TP4          | GND                                                                                                    |
| TP5          | V IN . Connect to input voltage to bypass J1.                                                          |
| TP6          | GND                                                                                                    |
| TP7          | SDA(I 2 C version) or EN (single-pin-enabled version)                                                  |
| TP8          | GND                                                                                                    |
| TP9          | SCL (I 2 C version) or INGOOD (single-pin-enabled version)                                             |
| TP10         | GND                                                                                                    |
| TP11         | INT (I 2 C version) or PGOOD (single-pin-enabled version)                                              |
| TP12         | GND                                                                                                    |
| TP13         | FAST Control (I 2 C version)                                                                           |
| TP14         | External Logic Supply. Select the external supply by placing a shunt jumper on J8 in the 1-2 position. |
| TP15         | GND                                                                                                    |
| TP16         | V OUT                                                                                                  |
| TP17         | GND                                                                                                    |
| TP18         | GND                                                                                                    |
| TP19         | GND                                                                                                    |

│

## Jumpers

## Table 3. Jumper Configurations

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2              | Connects V IN of the MAX20343 to the Board 3.3V Supply.                                                                                               |
| J1       | 2-3*             | Connects V IN of the MAX20343 to TP1.                                                                                                                 |
| J2       | Installed*       | Connects V OUT of the MAX20343 to TP3.                                                                                                                |
| J2       | Not Installed    | V OUT of the MAX20343 disconnected from TP3.                                                                                                          |
| J3       | 1-2*             | Connects SDAof the MAX20343 to the FT2232. If a shunt jumper is also installed in the 1-2 position of J4, the GUI can communicate with the MAX20343.  |
| J3       | 2-3              | Connects EN of the MAX20343 to J6.                                                                                                                    |
| J4       | 1-2*             | Connects SCL of the MAX20343 to the FT2232. If a shunt jumper is also installed in the 1-2 position of J3, the GUI can communicate with the MAX20343. |
| J4       | 2-3              | Connects a 10kΩ pullup resistor from INGOOD to 3.3V.                                                                                                  |
| J5       | Installed*       | Connects FAST to the output of U2 for GUI FAST control.                                                                                               |
| J5       | Not Installed    | FAST not controllable by the GUI.                                                                                                                     |
| J6       | Installed        | Connects pin 3 of J3 to 3.3V.                                                                                                                         |
| J6       | Not Installed*   | Pin 3 of J3 connected to a 10kΩ pulldown resistor to GND.                                                                                             |
| J7       | Installed*       | Connects INT to the FT2232. The GUI can read the INT state.                                                                                           |
| J7       | Not Installed    | INT not connected to the FT2232. The GUI cannot read the INT state.                                                                                   |
| J8       | 1-2              | MAX20343 logic voltage connected to TP14.                                                                                                             |
| J8       | 2-3*             | MAX20343 logic voltage connected to board 3.3V supply.                                                                                                |
| J9       | Installed*       | Connects the board 3.3V Supply to U2.                                                                                                                 |
| J9       | Not Installed    | U2 Unpowered                                                                                                                                          |
| J10      | Installed        | Connects the Board 3.3V Supply to U3.                                                                                                                 |
| J10      | Not Installed*   | U3 Unpowered                                                                                                                                          |

## Component Suppliers

| SUPPLIER        | WEBSITE              |
|-----------------|----------------------|
| Murata Americas | www.murata.com/en-us |

Note: Indicate that you are using the MAX20343 when contact- ing these component suppliers.

Evaluates: MAX20343/MAX20344

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20343EVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

│

## MAX20343 Evaluation Kit

## MAX20343 EV Kit Bill of Materials

| CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT; 0603; CERAMIC; 0.01uF; 50V; 10%; X7R; -55degC to + 125degC CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; CAPACITOR; SMT; 0603; CERAMIC; 33pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85   | DEGC CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                                                                                     | IF=0.02A SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 3PINS MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 2PINS CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS INDUCTOR; SMT (1008); SHIELDED; 2.2UH; 20%; 2.3A INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A RESISTOR; 0402; 6.65K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM RESISTOR; 0402; 470 OHM; 5%; 200PPM; 0.10W; THICK FILM RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0402; 15K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0402; 12.1K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE   | WIRE SIL; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE   | WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; EVKIT PART - IC; ULTRA-LOW QUIESCENT CURRENT; LOWNOISE 3.5W BUCKBOOST REGULATOR; WLP16; PACKAGE OUTLINE: 21-100328; PACKAGE CODE: W161C2+1   | IC; BUF; TINYLOGIC UHS DUAL INVERTING BUFFER WITH 3-STATE OUTPUTS; US8-8 IC; BUF; TINYLOGIC UHS DUAL BUFFER WITH 3-STATE OUTPUT; US8-8 IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64 IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6 IC; CONV; PWMSTEP-DOWNDC-DC CONVERTER; TDFN10-EP 3X3   | CRYSTAL; SMT; 20PF; 12MHZ; +/-50PPM; +/-50PPM PCB:MAX20343 CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ; CAPACITOR; SMT (0204); CERAMIC CHIP; 0.1UF; 6.3V; TOL=20%; MODEL=LLL SERIES; TG=-55 DEGC TO +105 DEGC; TC=X6S   | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1UF 1.0UF LTD. 0.01UF 4.7UF                                                                                                                                                                                                                                                                                                                                               | ELECTRONICS 0.1UF 33PF ELECTRONICS;MURATA;TAIYO YUDEN 10UF                                                                                                                                                                                                                                                                                                                   | 1UF 1000PF                                                                                                                                                                                                           | ELECTRONICS INC 150060VS75000 VF=2V; 330 INDUCTOR; " 22-28-4033" CONNECTOR; " 22-28-4023" CONNECTOR; CO LTD. ZX62RD-AB-5P8(30) 2.2UH 3.3UH 6.65K PHICOMP 10K DALE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 470 10K 15K 12.1K 10 PHICOMP 2.2K 100 ELECTRONICS CORP. SX1100-B                                                                    | N/A N/A N/A                                                                                                                                                                                                                                                                                                                       | KEYSTONE N/A N/A N/A                                                                                                                                                                                                                                                         | MAX20343EEWE+ NC7WZ240K8X NC7WZ125K8X TECHNOLOGY DEVICES INTL LTD. FT2232HL 93LC66BT-I/OT MAX1556ETB+ 12MHZ                                                                                                                                                                                                  | PCB MURATA 22UF 0.1UF DALE;YAGEO PHICOMP 10K                                                                                                                                                                                                  | N/A                                                                                                                                                                       |
| 1 GRM033R61A105ME15 MURATA 1 GMK107BJ105KA; C1608X5R1V105K080AB TAIYO YUDEN;TDK 1 C0603C103K5RAC;GRM188R71H103K;C0603X7R500-103KNE KEMET;MURATA;VENKEL 3 GRM21BR71C475KA73;0805YC475KAT2A MURATA;AVX                                                                                                                                                                      | 11 1VB1H104K;GRM188R71H104KA93;CGJ3E2X7R1H104K080A A;C1608X7R1H104K080AA;CL10B104KB8NNN;CL10B104KB8 NFN KEMET;TDK;PANASONIC;MURATA;TDK;TDK;SAMSUNG ELECTRO-MECHANICS;SAMSUNG 2 C0603C330J5GAC;GRM1885C1H330JA01;ECU-V1H330JCV KEMET;MURATA;PANASONIC 1 CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD SAMSUNG                                                             | 1 UMK107BJ105KA;C1608X5R1H105K080AB;CL10A105KB8NN N;GRM188R61H105KAAL TAIYO YUDEN;TDK;SAMSUNG;MURATA 1 C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500- 102KNE KEMET;MURATA;VENKEL C0805C226M9PAC; GRM21BR60J226ME39; | 5 150060VS75000 WURTH 3 BLM21PG331SN1 MURATA 4 " 22-28-4033" MOLEX 6 " 22-28-4023" MOLEX 1 ZX62RD-AB-5P8(30) HIROSE ELECTRIC 1 DFE252012F-2R2M MURATA 1 B82432T1332K000 TDK 1 ERJ-2RKF6651 PANASONIC 7 CRCW040210K0FK;RC0402FR-0710KL VISHAY DALE;YAGEO 5 CRCW04020000Z0EDHP; RCS04020000Z0 VISHAY DRALORIC;VISHAY 5 ERJ-2GEJ471 PANASONIC 1 ERJ-2RKF1002 PANASONIC 1 ERJ-2RKF1502 PANASONIC ERJ-2RKF1212 PANASONIC CRCW060310R0FK; MCR03EZPFX10R0;ERJ-3EKF10R0 VISHAY DALE;ROHM CRCW04022K20FK;RC0402FR-072K2L VISHAY DALE;YAGEO VISHAY DALE;PANASONIC KYCON;KYCON;SULLINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 1 2 1 1 CRCW0603100RFK;ERJ-3EKF1000;RC0603FR-07100RL 8 S1100-B;SX1100-B;STC02SYAN                                                   | 3 5010 KEYSTONE 3 5011 KEYSTONE 2 5116 KEYSTONE 5 5001                                                                                                                                                                                                                                                                            | 1 5004 KEYSTONE 2 5002 KEYSTONE 1                                                                                                                                                                                                                                            | MAX20343EEWE+ MAXIM 1 NC7WZ240K8X ONSEMICONDUCTOR 1 NC7WZ125K8X ONSEMICONDUCTOR 1 FT2232HL FUTURE 1 93LC66BT-I/OT MICROCHIP 1 MAX1556ETB+ MAXIM ECS-120-20-33 ECS INC MAX20343 MAXIM                                                                                                                         | 1 1 0 GRM155R60J226ME11 0 LLL153C80J104ME01 MURATA 0 CRCW040210K0FK;RC0402FR-0710KL VISHAY                                                                                                                                                    | 0 5001 KEYSTONE 103                                                                                                                                                       |

│

## MAX20343 EV Kit Schematics

<!-- image -->

## MAX20343 EV Kit Schematics (continued)

<!-- image -->

## MAX20343 EV Kit PCB Layout Diagrams

<!-- image -->

MAX20343 EV Kit PCB Layout -Top Silkscreen

│

## MAX20343 EV Kit PCB Layout Diagrams (continued)

MAX20343 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20343 EV Kit PCB Layout Diagrams (continued)

MAX20343 EV Kit PCB Layout-Layer 1

<!-- image -->

│

## MAX20343 EV Kit PCB Layout Diagrams (continued)

MAX20343 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX20343 EV Kit PCB Layout Diagrams (continued)

MAX20343 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX20343 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20343 EV Kit PCB Layout-Bottom Silkscreen

│

## MAX20343 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/19            | Initial release                                                                                                                                                                       | -               |
|                 1 | 12/20           | Updated the title, General Description, Quick Start, MAX20343 EV Kit Files, Buck- Boost Tab, Description of Hardware, Status Indicators , and Table 3; replaced Figures 1-2, and 6-14 | 1-13            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20343/MAX20344