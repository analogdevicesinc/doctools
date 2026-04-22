<!-- lastmod 2023-03-28 -->
<!-- image -->

Evaluates: MAX78002

## General Description

The MAX78002 evaluation kit (EV kit) provides a platform and tools for leveraging device capabilities to build new generations of artificial intelligence (AI) products.

The kit provides optimal versatility with a modular peripheral  architecture,  allowing  a  variety  of  input  and  output devices to be remotely located. DVP and CSI cameras, I 2 S  audio  peripherals,  digital  microphones,  and  analog sensors are supported, while a pair of industry-standard QWIIC  connectors  supports  a  large  and  growing  array of  aftermarket  development  boards. An  onboard  stereo audio codec offers line-level audio input and output, and tactile  input  is  provided  by  a  touch-enabled  2.4in  TFT display.  The  MAX78002  energy  consumption  is  tracked by a power accumulator, with four channels of formatted results presented on a secondary TFT display. All device GPIOs are accessible on 0.1in pin headers. A standard coaxial  power  jack  serves  as  power  input,  using  the included  5V,  3A  wall-mount  adapter.  Two  USB  connec -tors provide serial access to the MAX78002, one directly and  the  other  through  a  USB  to  UART  bridge.  A  third USB connector allows access to the MAX78002 energy consumption data. Rounding out the features, a microSD connector  provides  the  capability  for  inexpensive  highdensity portable data storage.

## EV Kit Contents

- EV Kit Board with Directly Soldered MAX78002
- MAX32625PICO Debugger with Cables
- Olimex ARM-USB-OCD-H
- Olimex ARM-JTAG 20-10 Adapter
- 5V, 3A Wall-Mount Power Adapter
- SPH0645-Based I 2 S Digital Microphone
- DVP and CSI Camera Modules
- 2 USB Standard-A to USB Micro-B Cables
- 1 USB Standard-A to USB Standard-B Cable
- Extra Shunts

©

Click here to ask an associate for production status of specific part numbers.

## MAX78002 Evaluation Kit

## Benefits and Features

- Power Accumulator with Dedicated Display to Track Device Energy Consumption
- Connectorized I 2 S Digital Microphone
- Stereo Audio Codec with 3.5mm Line-in and Line-out Jacks
- USB 2.0 High Speed
- SWD JTAG 10-Pin Header
- RISC-V Coprocessor JTAG 10-Pin Header
- 8MB QSPI SRAM
- microSD Flash Memory Card Connector
- 100% of Device GPIOs Accessible through 0.1in Headers
- Eight ADC Inputs
- Touch-Enabled, 2.4in, 320 x 240 Color TFT Display
- UART Access over USB Bridge
- Dual Industry-Standard QWIIC Connectors
- All IC Power Rails May Be Isolated for Individual Current Measurements
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

Ordering Information appears at end of data sheet.

## MAX78002 EV Kit Board Photos

<!-- image -->

## Quick Start

## Required Equipment

- MAX78002 EV Kit
- One USB Standard-A to USB Micro-B Cable
- 5V, 3A Wall-Mount Power Adapter

## Procedure

The MAX78002 EV kit is preprogrammed with a sample application  to  aid  in  verifying  that  the  hardware  is  connected and functioning properly. Use the following steps to set up the board and run the sample application which displays messages on the primary TFT display and out -puts messages on UART0 through USB Micro-B connec -tor CN2:

- 1) While observing safe ESD practices, carefully re -move the MAX78002 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are factory-installed to default locations prior to testing and packaging.
- 2) Verify that the UART0 EN jumpers are installed on JP20. These jumpers connect HW flow control, UART0 Rx, and UART0 Tx to the serial-to-USB bridge.
- 3) Connect a USB cable from the PC to the USB/UART connector (CN2) of the EV kit. This cable provides a virtual serial port connection to the MAX78002's UART0.
- 4) On your PC, open a serial terminal application (such as minicom or GTKTerm) and connect to the virtual serial port using a baud rate of 115200 and 8-N-1 settings.
- 5) Verify that the wall-mount power adapter is inserted into a valid AC power source and connect its coaxial plug to power jack 5V IN (J1).
- 6) Blue LED 5V (D2) will illuminate when power switch PWR (SW1) is in the ON position. After a brief delay, green LEDs 3V3 (D3) and 1V1 (D4) will also illumi -nate, verifying operation of the regulator modules and the presence of their respective voltage rails.
- 7) You will see a startup message from the MAX78002 appear in the terminal and on the primary TFT dis -play. This verifies proper EV kit operation.

## Detailed Description of Hardware

## Power Management

The EV kit is powered by 5V sourced from coaxial power jack J1. A compatible wall-mount power adapter is includ -ed  in  the  kit.  Raw  5V  is  converted  to  3.3V  by  the  inte -grated regulator module U2, labeled 'Peripheral and DUT Power.' The regulated 3.3V is further divided between the peripherals and the MAX78002. The EV kit has provisions to monitor the total energy consumed by the MAX78002, as well as the energy consumed by specific internal functional blocks.

## CNN Core Power Delivery

The  MAX78002  contains  an  integrated  single-inductor multiple-output  (SIMO)  switching  power  supply,  offering high efficiency and multiple output voltages while requiring only a single inductor. It maintains excellent efficiency across  all  operating  modes,  but  for  peak  performance the  dynamic,  pattern  dependent  load  presented  by  the CNN  core  requires  an  external  regulator  optimized  for higher power operation. Regulator module U4 meets this requirement, deriving a nominal 1.1V from the 3.3V net and supplementing the SIMO's output when peak CNN computing speed is required. Regulators U2 and U4 are cascaded, with U2 supplying 3.3V to both CNN core regu -lator U4 and SIMO input VREGI of the MAX78002. A shunt on this branch of the 3.3V line allows power accumulator U5 to accurately gauge total device energy consumption. As shown in the MAX78002 EV Kit Schematic , the default setting for jumper JP14 connects SIMO output VREGO\_C and  the  output  of  U4  together  through  net  VCOREA, placing the outputs of the two regulators in parallel. This simple  connection  works  because  the  SIMO  features reverse-current blocking on its outputs, and regulator U4 presents high impedance at its output when in shutdown. At system power-up, VREGO\_C drives net VCOREA, and for extreme low-power applications, the SIMO alone can power core A. In higher power applications, such as this EV kit, U4 is typically programmed to output 1.1V, which is slightly more than the voltage setting of VREGO\_C. As a result, once the MAX78002 startup sequence completes, regulator U4 is enabled and services the entire load on net  VCOREA,  ultimately  powering  both  core A  and  the CNN core of the MAX78002.

## External Peripheral Device Power Protection

The  port  headers,  I 2 S  headers,  and  QWIIC  device connectors  all  incorporate  power  delivery  pins.  These pins  are  protected  from  accidental  short  circuits  by  the MAX4793 current limit switches. Trip current is nominally 300mA (500mA, max). When a fault occurs on a power delivery circuit, a corresponding error LED illuminates and power delivery to the faulting peripheral is halted. Should this occur, the user must find and correct the fault, then cycle board power to resume normal peripheral operation. Note  that  the  I 2 S  header  supports  both  1.8V  and  3.3V peripherals, selectable by J34. I 2 S 1.8V power is derived from 3.3V I 2 S power, so a fault against a 1.8V peripheral illuminates the 'I2S 3V ERR' LED. The recovery proce -dure is the same whether the I 2 S interface is set to run at 1.8V or 3.3V-locate the fault, correct it, and cycle board power to resume normal operation.

## CNN Power Delivery Partitioning

To enhance MAX78002 efficiency, CNN core power deliv -ery is partitioned into quadrants, with separate power  pins at each quadrant for CNN core and RAM. The MAX78002 controls power delivery to core and RAM at each quad -rant using a bank of eight load switches, each with its own enable control. Individual enable controls allow idle CNN quadrants to be powered off when not needed, while the option to leave RAM powered on preserves the state in idled CNN quadrants.

## Power Accumulator

The specialized IC U5 provides cumulative energy con -sumption data on four power domains of the MAX78002. It functions by monitoring voltage at each of its 4 channels and calculating load currents by measuring voltage drops for each channel across appropriately sized shunts. Raw data  is  formatted  by  the  power  monitor  processor  U20, which drives the energy monitor TFT display. Operating mode  options  are  selected  with  the  LEFT  and  RIGHT PWR MODE SEL pushbuttons, which allow the operator to cycle through the presentation options.

## Power Accumulator Channel Assignments

Channel 1 tracks total MAX78002 energy by monitoring the  3V3\_PM  net.  This  net  drives  the  MAX78002  SIMO input VREGI and CNN core voltage regulator U4. Other 3V3  loads  are  connected  prior  to  the  channel  1  shunt, excluding them from MAX78002 energy measurements. Jumper JP2 serves as a test point to verify voltage drop across the channel 1 shunts (R5 and R111).

Channel  2  tracks  energy  on  net  VCOREB\_PM,  which drives  the  MAX78002  VCOREB.  Its  shunt  is  R24,  with JP5 serving as a voltage drop test point.

Channel  3  tracks  energy  on  net  VCOREA\_PM,  which drives the CNN core. Its shunt is comprised of R14 and R112, with JP4 serving as a voltage drop test point. Note that  SIMO tap VREGO\_C is connected to the output of CNN core regulator U4 through jumper JP14. In practice, U4  is  set  to  a  slightly  higher  voltage  than  VREGO\_C, allowing U4 to carry the load once the board power has stabilized. Jumper JP3 serves as a test point for verifying U4 current  by  replacing  0Ω  jumpers  R13  and  R17  with an  appropriately  valued  shunt.  Conversely,  VREGO\_C current  may be checked by removing jumper JP14 and connecting an appropriate current meter.

Channel  4  tracks  energy  on  net  VREGO\_A\_PM,  which drives  the  MAX78002 VDDA and VDDIO through jump -ers JP11 and JP12, respectively. Individual currents may be checked at these jumpers, while total current may be verified at jumper JP6, which is in parallel with shunt R32.

## UART-to-USB Bridge

The  EV  kit  provides  a  USB-to-serial  bridge  to  the MAX78002  UART0  and  UART1.  UARTs  are  accessed through USB Micro-B connector CN2. Jumpers JP20 and JP23 select UART0 or UART1, respectively.

## USB2 High Speed Interface

The  MAX78002  USB  High-Speed  device  interface  is available at USB Micro-B connector CN3.

## I 2 S

Header  JH3  is  provided  for  an  included  digital  micro -phone. Other I 2 S peripherals may be connected by way of the I 2 S I/O header JH4. Opening JP32 selects the I 2 S mic input, and installing the shunt selects alternate I 2 S devic -es.  JP31  selects  which  channel  that  microphone  data appears  upon;  however,  the  operator  should  be  aware that  some  I 2 S  microphone  modules  pull  the  select  line low. For those modules, JP31.1 may be wired to I 2 S\_VDD to select the alternate channel. I 2 S clocking options include an  onboard,  low  jitter,  12.288  MHz  clock  oscillator  and provisions for external I 2 S clocking using SMA connector J6.  The  clock  input  expects  a  1.8V  CMOS  level,  but  is 5V tolerant. JP37 is the clock-select jumper-remove the shunt for the internal oscillator, and install the shunt for external clocking.

## MAX7802 Evaluation Kit

## Color TFT Display

The display provided is a 2.4in, 320 x 240 color TFT. It has three-wire serial control and a white LED backlight, and it uses a resistive touch-sensitive screen.

## RV JTAG/Arm ® SWD (Serial Wire Debug) Support

The RISC-V coprocessor JTAG is accessed through an Arm Cortex ® standard 10-pin connector (JH5). Logic levels are set to VDDIO (1.8V). The Arm Cortex processor using SWD is accessed through an Arm Cortex standard 10-pin connector (JH8), also using VDDIO (1.8V) levels.

## Reset Pushbutton

Pushbutton SW6 manually resets the MAX78002.

## Auxiliary LEDs

The  indicator  LED0  (D9)  is  connected  to  GPIO  P2.4. Indicator LED1 (D10) is connected to GPIO P2.5. These GPIOs must be configured for VDDIOH (3.3V) for proper operation.  Buffer  U2  prevents  loading  the  ports,  since these ports also may serve multiple functions. JP44 and JP45 serve to totally isolate the LED buffer from the ports.

## Analog Inputs

A total of eight analog inputs are provided at JH11. Note that only the first two inputs do not have secondary functions tied  to  them  in  the  EV  kit.  Secondary  functions  may  be isolated by jumpers; see the MAX78002 EV Kit Schematic for details.

## GPIO Pushbuttons

Pushbuttons  PB1  and  PB2  connect  to  P2.6  and  P2.7, respectively. Depressing the button pulls the associated port low.

## GPIO Headers

All  GPIOs  are  accessible  through  0.1in-spaced  header pins.  The  IC  provides  support  for  both  1.8V  and  3.3V peripherals  through  power  rails  VDDIO  and  VDDIOH. GPIO voltages can be programmed on a pin-by-pin basis. Refer to the MAX78002 User Guide for more detail.

## Wakeup Input

The  MAX78002  offers  multiple  low-  and  micro-power operating modes. WAKEUP pushbutton SW4 provides a signal to bring the IC back into normal operating mode.

## QWIIC Connectors

Two  industry-standard  QWIIC  compatible  connectors, JH1 and JH2, support a large and growing array of after -market I 2 C development boards. See the MAX78002 EV Kit  Schematic for  details;  in  particular,  I 2 C  termination options are shown on individual schematic pages.

## DVP Parallel Camera Module

The MAX78002 supports parallel camera interface devices. The included camera module plugs into the EV kit board and uses an OVM7692 integrated camera/lens device.

## CSI Serial Camera Module

The MAX78002 supports serial camera interface devices. The included camera module plugs into the EV kit board and uses an OV5640 integrated camera/lens device.

## 8MB QSPI PSRAM

QSPI0 has 8MB of user PSRAM.

## microSD Connector

A microSD connector provides inexpensive, high-density portable data storage.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## Evaluates: MAX78002

## MAX7802 Evaluation Kit

Table 1. MAX78002 EV Kit Jumper Settings

| JUMPER   | SIGNAL              | SETTINGS   | DESCRIPTION                                                                       |
|----------|---------------------|------------|-----------------------------------------------------------------------------------|
| JP1      | 3V3 MON             | 1-2*       | Normal operation in conjunction with JP3 jumpered 1-2                             |
| JP1      | 3V3 MON             | Open       | Test access point for current measurement                                         |
| JP2      | 3V3 SW PM BYPASS    | 1-2        | Power monitor shunts for main 3.3 V system power are bypassed                     |
| JP2      | 3V3 SW PM BYPASS    | Open*      | Main 3.3V input routes through shunts for power accumulator measurements          |
| JP3      | CNN MON             | 1-2*       | Normal operation in conjunction with JP6 jumpered 1-2                             |
| JP3      | CNN MON             | Open       | Test access point for current measurement of U4's share of VCOREAand CNN loads    |
| JP4      | VCOREAPM BYPASS     | 1-2        | Power monitor shunts for U4's share of VCOREA+ CNN loads are bypassed             |
| JP4      | VCOREAPM BYPASS     | Open*      | VCOREA+ CNN loads route through shunts for power accumulator                      |
| JP5      | VCOREB PM BYPASS    | 1-2        | Power monitor shunts for VCOREB are bypassed                                      |
| JP5      | VCOREB PM BYPASS    | Open*      | VCOREB power routes through shunts for power accumulator                          |
| JP6      | VREGO_APM BYPASS    | 1-2        | Power monitor shunts for VREGO_Aare bypassed                                      |
| JP6      | VREGO_APM BYPASS    | Open*      | VREGO_Apower routes through shunts for power accumulator                          |
| JP7      | VBAT                | 1-2*       | Enables 3V3 VBAT power                                                            |
| JP7      | VBAT                | Open       | Disables 3V3 VBAT power                                                           |
| JP8      | VREGI               | 1-2*       | Enables 3V3 VREGI power                                                           |
| JP8      | VREGI               | Open       | Disables 3V3 VREGI power                                                          |
| JP9      | VREGI/VBAT (SELECT) | 1-2*       | Onboard 3V3_PM supplies VREGI/VBAT                                                |
| JP9      | VREGI/VBAT (SELECT) | 2-3        | External source at TP10 supplies VREGI/VBAT                                       |
| JP10     | VDDIOH (SELECT)     | 1-2*       | Onboard 3V3_PM supplies VDDIOH                                                    |
| JP10     | VDDIOH (SELECT)     | 2-3        | Onboard 3V3_SW supplies VDDIOH                                                    |
| JP11     | VDDA(SELECT)        | 1-2*       | VREGO_A_PM powers VDDA                                                            |
| JP11     | VDDA(SELECT)        | Open       | VDDAmay be powered using TP6                                                      |
| JP12     | VDDIO (SELECT)      | 1-2*       | VREGO_A_PM powers VDDIO                                                           |
| JP12     | VDDIO (SELECT)      | Open       | VDDIO may be powered using TP7                                                    |
| JP13     | VCOREB (SELECT)     | 1-2*       | VREGO_B powers VCOREB                                                             |
| JP13     | VCOREB (SELECT)     | Open       | VCOREB may be powered using TP8                                                   |
| JP14     | VCOREA(SELECT)      | 1-2*       | VREGO_C ties to net VCOREA                                                        |
| JP14     | VCOREA(SELECT)      | Open       | Net VCOREAmay be powered using TP9; JP17 may also be used as a current test point |
| JP15     | VREF                | 1-2*       | DUTADC VREF is supplied by precision external reference                           |
| JP15     | VREF                | Open       | ExternalADC VREF disabled; ref voltage may be injected at JP18.1                  |
| JP16     | I2C1 SDA            | 1-2*       | I2C1 DATA pullup                                                                  |
| JP16     | I2C1 SDA            | Open       | Close this jumper as needed to assure proper termination                          |
| JP17     | I2C1 SCL            | 1-2*       | I2C1 CLOCK pullup                                                                 |
| JP17     | I2C1 SCL            | Open       | Close this jumper as needed to assure proper termination                          |

Evaluates: MAX78002

## MAX7802 Evaluation Kit

Table 1. MAX78002 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL           | SETTINGS   | DESCRIPTION                                                                       |
|----------|------------------|------------|-----------------------------------------------------------------------------------|
| JP18     | TRIG1            | 1-2*       | PWR accumulator trigger signal 1 ties to port 1.6                                 |
| JP18     | TRIG1            | Open       | TRIG1 is disabled, so DVP camera PCIF_D10 may be used instead                     |
| JP19     | TRIG2            | 1-2*       | PWR accumulator trigger signal 2 ties to port 1.7                                 |
| JP19     | TRIG2            | Open       | TRIG2 is disabled, so DVP camera PCIF_D11 may be used instead                     |
| JP20     | UART0 EN         | Closed*    | USB-UART bridge connected to DUT UART0 (RTS and CTS are supported)                |
| JP20     | UART0 EN         | Open       | USB-UART bridge disconnected from DUT UART0                                       |
| JP21     | I2C0 SDA         | 1-2*       | I2C0 DATA pull-up                                                                 |
| JP21     | I2C0 SDA         | Open       | Close this jumper as needed to assure proper termination                          |
| JP22     | I2C0 SCL         | 1-2*       | I2C0 CLOCK pull-up                                                                |
| JP22     | I2C0 SCL         | Open       | Close this jumper as needed to assure proper termination                          |
| JP23     | UART1 EN         | Closed     | USB-UART bridge connected to DUT UART1 (no HW flow control)                       |
| JP23     | UART1 EN         | Open*      | USB-UART bridge disconnected from DUT UART1                                       |
| JP24     | EXT I2C0 EN      | 1-2*       | QWIIC interface for I2C0 enabled by default                                       |
| JP24     | EXT I2C0 EN      | Open       | Open this jumper to place the QWIIC level translator into a high-Z state          |
| JP25     | PB1 PU           | 1-2*       | 100kΩ pull-up enabled for pushbutton mode, port 2.6                               |
| JP25     | PB1 PU           | Open       | Pull-up disabled, allowing port pin to be repurposed (this port shared with AIN6) |
| JP26     | PB2 PU           | 1-2*       | 100kΩ pull-up enabled for pushbutton mode, port 2.7                               |
| JP26     | PB2 PU           | Open       | Pull-up disabled, allowing port pin to be repurposed (this port shared with AIN7) |
| JP27     | I2C2 SDA         | 1-2*       | I2C2 DATA pull-up                                                                 |
| JP27     | I2C2 SDA         | Open       | Close this jumper as needed to assure proper termination                          |
| JP28     | I2C2 SCL         | 1-2*       | I2C2 CLOCK pull-up                                                                |
| JP28     | I2C2 SCL         | Open       | Close this jumper as needed to assure proper termination                          |
| JP29     | (SELECT)         | 1-2*       | DUT USB XCVR VDDB powered from VBUS regulated with dedicated 3.3V LDO             |
| JP29     | (SELECT)         | 2-3        | USB XCVR VDDB powered full time by system 3V3_PM                                  |
| JP30     | EXT I2C2 EN      | 1-2*       | QWIIC interface for I2C2 enabled by default                                       |
| JP30     | EXT I2C2 EN      | Open       | Open this jumper to place the QWIIC level translator into a high-Z state          |
| JP31     | L/R SEL          | 1-2*       | MIC ON R CH, I 2 S microphone data stream                                         |
| JP31     | L/R SEL          | Open       | MIC ON L CH, I 2 S microphone data stream                                         |
| JP32     | MIC-I2S I/O      | 1-2        | External I 2 S data from I 2 S I/O header connected to I 2 S SDI                  |
| JP32     | MIC-I2S I/O      | Open*      | External MIC data from I 2 S MIC header connected to I 2 S SDI                    |
| JP33     | MIC-I2S/CODEC    | 1-2        | Onboard CODEC data connects to I 2 S SDI                                          |
| JP33     | MIC-I2S/CODEC    | Open*      | External I 2 S data (mic or slave I 2 S) from header connects to I 2 S SDI        |
| JP34     | I2S VDD (SELECT) | 1-2*       | External MIC and DATA I 2 S interface headers run at 1.8V                         |
| JP34     | I2S VDD (SELECT) | 2-3        | External MIC and DATA I 2 S interface headers run at 3.3V                         |

## Table 1. MAX78002 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL               | SETTINGS   | DESCRIPTION                                                                             |
|----------|----------------------|------------|-----------------------------------------------------------------------------------------|
| JP35     | I2C1 SDA             | 1-2        | I2C1 DATA pull-up                                                                       |
| JP35     | I2C1 SDA             | Open*      | Close this jumper as needed to assure proper termination                                |
| JP36     | I2C1 SCL             | 1-2        | I2C1 CLOCK pull-up                                                                      |
| JP36     | I2C1 SCL             | Open*      | Close this jumper as needed to assure proper termination                                |
| JP37     | I2S CK SEL           | 1-2        | I 2 S master clock sourced from SMAconnector J6                                         |
| JP37     | I2S CK SEL           | Open*      | I 2 S master clock sourced from onboard crystal oscillator                              |
| JP38     | DVP CAM PWR (SELECT) | 1-2*       | Sets state of DVP camera PWDN input; default is OFF for OVM7692                         |
| JP38     | DVP CAM PWR (SELECT) | 2-3        | Sets state of DVP camera PWDN input; 2-3 will power up OVM7692                          |
| JP39     | SW CAM PWUP          | 1-2        | Camera reset and power up under port pin control                                        |
| JP39     | SW CAM PWUP          | Open*      | Digilent P5C camera powered down, JP39 can over ride this condition                     |
| JP40     | HW PWUP/SW PWUP      | 1-2        | Camera will reset and power up as soon as 3.3V reaches a valid level                    |
| JP40     | HW PWUP/SW PWUP      | Open*      | Camera reset and power up under port pin control if JP39 is installed; else, camera off |
| JP41     | CSI CAM I2C EN       | 1-2        | CSI camera Digilent P5C I 2 C connects to I2C1 for register setup                       |
| JP41     | CSI CAM I2C EN       | Open*      | Level translator and I 2 C PU are in high-Z state; I2C1 disconnected from P5C registers |
| JP42     | TFT_DC               | 1-2*       | TFT data/command select connects to port 2.2                                            |
| JP42     | TFT_DC               | Open       | Pull jumper if using AIN2                                                               |
| JP43     | TFT CS (SELECT)      | 1-2*       | TFT CS driven by port 0.3, shared with UART0 RTS                                        |
| JP43     | TFT CS (SELECT)      | 2-3        | TFT CS driven by port 1.7, shared with DVP DATA 11 and TRIG2                            |
| JP44     | LED0 EN              | 1-2*       | LED0 illuminates when port 2.4 is high                                                  |
| JP44     | LED0 EN              | Open       | Pull jumper if using AIN4                                                               |
| JP45     | LED1 EN              | 1-2*       | LED1 illuminates when port 2.5 is high                                                  |
| JP45     | LED1 EN              | Open       | Pull jumper if using AIN5                                                               |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX78002EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX78002

## MAX7802 Evaluation Kit

## MAX78002 EV Kit Bill of Materials

| QUANTITY   | PART REFERENCE                                                                                                                                                                       | VALUE               | BOM_DESCRIPTION                          | MANUFACTURER_PN      | MANUFACTURER                     | ASSY_VARIANT   |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------------------------------|----------------------|----------------------------------|----------------|
| 2          | C1,C12                                                                                                                                                                               | 470uF               | CAP ALUM POLY 470UF 20% 6.3V T/H         | 6SEPC470MW+TSS       | Panasonic Electronic Components  |                |
| 2          | C2,C13                                                                                                                                                                               | 33uF                | CAP ALUM 33UF 20% 10V SMD                | EEE-FPA330UAR        | Panasonic Electronic Components  |                |
| 12         | C3,C5,C14,C16,C52,C57, C63,C67,C73,C81,C89,C96                                                                                                                                       | 22uF                | CAP CER 22UF 10V X7R 10% 1206            | LMK316AB7226KL-TR    | Taiyo Yuden                      |                |
| 72         | C71,C72,C74,C76,C77,C78, C79,C80,C82,C83,C86,C87, C88,C90,C91,C94,C95,C101, C102,C106,C107,C108,C109, C110,C111,C121,C124,C128, C129,C132,C137,C139,C140, C142,C143,C147,C148,C150,  | 1uF                 | CAP CER 1UF 16V 10% X5R 0402             | GRT155R61C105KE01D   | Murata Electronics North America |                |
| 2          | C6,C18                                                                                                                                                                               | 680uF               | CAP TANT POLY 680UF 2.5V 20% 2917        | ETCF680M6L           | Panasonic Electronic Components  |                |
| 2          | C7,C17                                                                                                                                                                               | 680uF               | CAP TANT POLY 680UF 2.5V 20% 2917        | ETCF680M6L           | Panasonic Electronic Components  | DNI            |
| 9          | C8,C20,C22,C24,C31,C104, C105,C112,C130                                                                                                                                              | 4.7uF               | CAP CER 4.7uF 10V 10% X5R 0603           | C0603C475K8PACTU     | Kemet                            |                |
| 2          | C9,C15                                                                                                                                                                               | 1uF                 | CAP CER 1UF 16V 10% X8R 0805             | CGA4J3X8R1C105K125AB | TDK Corporation                  |                |
| 41         | C19,C21,C23,C25,C26,C27, C28,C29,C32,C39,C41,C113, C114,C115,C119,C122,C123, C125,C131,C133,C134,C135, C136,C144,C145,C146,C151, C152,C157,C158,C159,C160, C164,C165,C166,C167,C168, | 100nF               | CAP CER 0.1UF 16V 10% X7R 0402           | GRM155R71C104KA88D   | Murata Electronics               |                |
| 2          | C34,C35                                                                                                                                                                              | 47uF                | CAP CER 47UF 6.3V 20% X5R 0805           | C2012X5R0J476M125AC  | TDK Corporation                  |                |
| 1          | C36                                                                                                                                                                                  | 3.3nF               | CAP CER 3300PF 16V 10% X7R 0402          | GRM15XR71C332KA86D   | Murata Electronics North America |                |
| 3          | C37,C38,C40                                                                                                                                                                          | 22uF                | CAP CER 22UF 6.3V 20% X5R 0603           | C1608X5R0J226M080AC  | TDK Corporation                  |                |
| 8          | C45,C48,C58,C64,C69,C75, C84,C93                                                                                                                                                     | 10uF                | CAP CER 10UF 25V 10% X7S 0805            | GRM21BC71E106KE11L   | Murata Electronics               |                |
| 2          | C85,C92                                                                                                                                                                              | DNI                 | DNI                                      |                      |                                  | DNI            |
| 2          | C97,C98                                                                                                                                                                              | 10pF                | CAP CER 10PF 50V 5% NP0 0402             | C0402C100J5GACTU     | Kemet                            |                |
| 4          | C99,C120,C127,C156                                                                                                                                                                   | 100nF               | CAP CER 0.1UF 50V 10% X7R 0603           | C0603C104K5RACTU     | Kemet                            |                |
| 3          | C100,C116,C126                                                                                                                                                                       | 1uF                 | CAP CER 1UF 35V 10% X5R 0603             | GMK107BJ105KA-T      | Taiyo Yuden                      |                |
| 1          | C103                                                                                                                                                                                 | 10nF                | CAP CER 10000PF 16V 10% X7R 0402         | GRM155R71C103KA01D   | Murata Electronics North America |                |
| 2          | C117,C118                                                                                                                                                                            | 47pF                | CAP CER 47PF 50V 1% NP0 0402             | C1005C0G1H470F050BA  | TDK Corporation                  |                |
| 2          | C138,C141                                                                                                                                                                            | 220uF               | CAP CER 220UF 4V 20% X5R 1210            | AMK325ABJ227MM-T     | Taiyo Yuden                      |                |
| 1          | C149                                                                                                                                                                                 | 2.2uF               | CAP CER 2.2UF 25V 10% X5R 0402           | ZRB157R61E225KE11D   | Murata Electronics North America |                |
| 3          | CN1,CN2,CN3                                                                                                                                                                          | MICRO USB B R/A     | CONN RCPT 5POS MICRO USB B R/A           | 47346-0001           | Molex                            |                |
| 1          | D1                                                                                                                                                                                   | SMF5.0A-TP          | TVS 200W 5V UNIDIR SOD-123FL             | SMF5.0A-TP           | Micro Commercial Co              |                |
| 1          | D2                                                                                                                                                                                   | BLUE                | LED 469NM BLUE DIFF 1206 SMD             | HSMR-C150            | Avago Technologies US Inc.       |                |
| 2          | D3,D4                                                                                                                                                                                | GRN                 | LED SMARTLED GREEN 570NM 0603            | LG L29K-G2J1-24-Z    | OSRAM Opto Semiconductors Inc    |                |
| 4          | D5,D6,D7,D10                                                                                                                                                                         | RED                 | LED 660NM RED WTR CLR 1206 SMD           | SML-LX1206SRC-TR     | Lumex Opto                       |                |
| 1          | D8                                                                                                                                                                                   | SML-LX0404SIUPGUSB  | LED RGB CLEAR 0404 SMD                   | SML-LX0404SIUPGUSB   | Lumex Opto/Components Inc.       |                |
| 1          | D9                                                                                                                                                                                   | GRN                 | LED 565NM WTR CLR GREEN 1206 SMD         | SML-LX1206GC-TR      | Lumex Opto                       |                |
| 1          | F1                                                                                                                                                                                   | 2.5A                | FUSE BRD MNT 2.5A 125VAC/VDC SMD         | 045102.5MRL          | Littelfuse Inc                   |                |
| 1          | FH1                                                                                                                                                                                  | 01550900M           | FUSE BLOK SMD                            | 01550900M            | Littelfuse Inc                   |                |
| 10         | H1,H2,H3,H4,H5,H6,H11,                                                                                                                                                               | DNI                 |                                          |                      |                                  |                |
|            |                                                                                                                                                                                      |                     | DNI MTG 125DRL 300PAD                    |                      |                                  |                |
| 4          | H12,H13,H14 H7,H8,H9,H10                                                                                                                                                             | DNI                 | DNI MTG 110DRL 225PAD                    |                      |                                  |                |
| 1          | J1                                                                                                                                                                                   | PJ-102B             | CONN POWER JACK 2.5MM PCB CIRC           | PJ-102B              | CUI Inc                          |                |
| 1          | J2                                                                                                                                                                                   | MAXDAP              | MAXDAP_POGO_PIN CBL PLUG-OF-NAILS 10-PIN | TC2050-IDC-NL        | Tag-Connect LLC                  | DNI            |
| 1          | J3                                                                                                                                                                                   | 503480-1000         | CONN FFC FPC 10POS 0.50MM R/A            | 503480-1000          | Molex, LLC                       |                |
| 2          | J4,J5                                                                                                                                                                                | SJ-3523-SMT-TR      | CONN JACK STEREO 3.5MM SMD R/A           | SJ-3523-SMT-TR       | CUI Inc                          |                |
| 1          | J6                                                                                                                                                                                   | SMA                 | CONN SMA JACK STR 50 OHM PCB             | 901-10112            | Amphenol                         |                |
| 1          | J7                                                                                                                                                                                   | 047571-0001         | CONN MICRO SD CARD PUSH-PULL R/A         | 047571-0001          | RF Molex                         |                |
| 1          | J8                                                                                                                                                                                   | SFW15R-1STE1LF (15P | CONN FFC BOTTOM 15POS 1.00MM R/A         | SFW15R-1STE1LF       | Amphenol ICC (FCI)               |                |

Evaluates: MAX7802

## MAX78002 EV Kit Bill of Materials (continued)

| QUANTITY   | PART REFERENCE                                                                                                                                                  | VALUE                 | BOM_DESCRIPTION                                                | MANUFACTURER_PN             | MANUFACTURER                                                    | ASSY_VARIANT   |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------------------------------------------------|-----------------------------|-----------------------------------------------------------------|----------------|
| 2          | JH1,JH2                                                                                                                                                         | SM04B-SRSS-TB(LF)(SN) | CONN HEADER SMD R/A 4POS 1MM                                   | SM04B-SRSS-TB(LF)(SN)       | JST Sales America Inc.                                          |                |
| 2          | JH3,JH4                                                                                                                                                         | 6P 1x6                | CONN HEADER .100 SINGL STR 6POS                                | PEC06SAAN                   | Sullins                                                         |                |
| 2          | JH5,JH8                                                                                                                                                         | 10P CORTEX DEBUG      | IDC BOX HEADER 0.050 10 POS SMD                                | 3220-10-0300-00             | CNC Tech                                                        |                |
| 3          | JH6,JH9,JH10                                                                                                                                                    | 20P 2x10              | CONN HEADER .100 DUAL STR 20POS                                | PEC10DAAN                   | Sullins                                                         |                |
| 1          | JH7                                                                                                                                                             | 40P 2x20 (1.27 PITCH) | CONN HEADER SMD 40POS 1.27MM                                   | 3220-40-0300-00-TR          | CNC Tech                                                        |                |
| 1          | JH11                                                                                                                                                            | 16P 2x8               | CONN HEADER .100 DUAL STR 16POS                                | PEC08DAAN                   | Sullins                                                         |                |
| 2          | JH12,JP20                                                                                                                                                       | 8P 2x4                | CONN HEADER .100 DUAL STR 8POS                                 | PEC04DAAN                   | Sullins                                                         |                |
| 1          | JH13                                                                                                                                                            | 16P 1x16              | CONN HEADER .100 SINGL STR 16POS                               | PEC16SAAN                   | Sullins                                                         |                |
| 1          | JH14                                                                                                                                                            | 12P 1x12              | CONN HEADER .100 SINGL STR 12POS                               | PEC12SAAN                   | Sullins                                                         |                |
| 37         | JP7,JP8,JP11,JP12,JP13, JP14,JP15,JP16,JP17,JP18, JP19,JP21,JP22,JP24,JP25, JP26,JP27,JP28,JP30,JP31, JP32,JP33,JP35, JP36,JP37, JP39,JP40,JP41,JP42, JP44,JP45 | JUMPER                | CONN HEADER .100 SINGL STR 2POS (2x1)                          | PEC02SAAN                   | Sullins                                                         |                |
| 6 1        | JP9,JP10,JP29,JP34, JP38,JP43 JP23                                                                                                                              | 3P JUMPER             | CONN HEADER .100 SINGL STR 3POS CONN HEADER .100 DUAL STR 4POS | PEC03SAAN                   | Sullins Sullins                                                 |                |
|            |                                                                                                                                                                 | 4P 2x2                |                                                                | PEC02DAAN                   |                                                                 |                |
| 1          | L1                                                                                                                                                              | 2.2uH                 | FIXED IND 2.2UH 1A 150 MOHM SMD 0805                           | MLP2012H2R2MT0S1            | TDK Corporation                                                 |                |
| 3          | L2,L3,L4                                                                                                                                                        | 742792097             | FERRITE BEAD 1.5 KOHM 0805 1LN                                 | 742792097                   | Wurth Elektronik                                                |                |
| 1          | PCB1                                                                                                                                                            | PCB                   |                                                                |                             |                                                                 |                |
| 1          | Q3                                                                                                                                                              | DMP210DUFB4-7         | MOSFET P-CH 20V 0.2A X2-DFN1006                                | DMP210DUFB4-7               | Diodes Incorporated                                             |                |
| 1          | Q4                                                                                                                                                              | SI2301CDS-T1-BE3      | MOSFET P-CHANNEL 20-V (D-S)                                    | SI2301CDS-T1-BE3            | Vishay                                                          |                |
| 1          | Q5                                                                                                                                                              | BSS806N               | MOSFET N-CH 20V 2.3A SOT23                                     | BSS806N H6327               | Infineon Technologies                                           |                |
| 1          | R1                                                                                                                                                              | 4.7K                  | RES 4.7K OHM 1/10W 1% 0402 SMD                                 | ERJ-2RKF4701X               | Panasonic                                                       |                |
| 4          | R2,R12,R20,R30                                                                                                                                                  | 33.2                  | RES 33.2 OHM 1/10W 1% 0603 SMD                                 | ERJ-3EKF33R2V               | Panasonic                                                       |                |
| 12         | R3,R4,R13,R17,R36,R37,R38, R39,R40,R41,R43,R44                                                                                                                  | 0R JUMP               | RES 0 OHM JUMPER 3/4W 1206                                     | HCJ1206ZT0R00               | Stackpole Electronics Inc                                       |                |
| 2          | R5,R14                                                                                                                                                          | 10 mOhms              | RES 0.01 OHM 1% 1W 1206                                        | LVT12R0100FER               | Ohmite                                                          |                |
| 16         | R6,R18,R26,R29,R46,R52,R59,R6 0,R72,R91,R92,R93,R94, R95,R96,R98                                                                                                | 10K                   | RES SMD 10K OHM 1% 1/16W 0402                                  | RC0402FR-0710KL             | Yageo                                                           |                |
| 2          | R7,R16                                                                                                                                                          | 1.5K                  | RES SMD 1.5K OHM 1% 1/10W 0402                                 | ERJ-2RKF1501X               | Panasonic                                                       |                |
| 1          | R9                                                                                                                                                              | 158K                  | RES SMD 158K OHM 1% 1/10W 0402                                 | ERJ-2RKF1583X               | Panasonic Electronic Components                                 |                |
| 2          | R10,R19                                                                                                                                                         | 47.5K                 | RES 47.5K OHM 1% 1/16W 0402                                    | RC0402FR-0747K5L            | YAGEO                                                           |                |
| 1          | R15                                                                                                                                                             | 21K                   | RES 21K OHM 1% 1/16W 0402                                      | RC0402FR-0721KL             | YAGEO                                                           |                |
| 26         | R21,R56,R58,R65,R66,R67, R70,R71,R73,R74,R77,R80, R82,R83,R84,R85,R86,R87, R97,R99,R100,R103,R104, R105,R107,R108                                               | 100K                  | RES SMD 100K OHM 1% 1/10W 0402                                 | ERJ-2RKF1003X               | Panasonic                                                       |                |
| 2          | R24,R32                                                                                                                                                         | 100 mOhms             | RES 0.1 OHM 1% 3/4W 1206                                       | KRL1632E-M-R100-F-T5        | Susumu                                                          |                |
| 1          | R25                                                                                                                                                             | 383K 34K              | RES SMD 383K OHM 1% 1/10W 0402 RES SMD 34K OHM 1% 1/10W 0402   | ERJ-2RKF3833X ERJ-2RKF3402X | Panasonic Electronic Components Panasonic Electronic Components |                |
| 1          | R28                                                                                                                                                             | 470                   | RES 470 OHM 1/10W 1% 0603 SMD                                  | ERJ-3EKF4700V               | Panasonic                                                       |                |
| 5 1        | R33,R34,R35,R90,R109 R42                                                                                                                                        | 0                     | RES 0.0 OHM 1/10W JUMP 0402 SMD                                | ERJ-2GE0R00X                | Panasonic                                                       | DNI            |
| 12         | R45,R47,R48,R49,R50,R51, R61,R63,R68,R69,R75,R76                                                                                                                | 2.21K                 | RES SMD 2.21K OHM 1% 1/10W 0402                                | ERJ-2RKF2211X               | Panasonic                                                       |                |
| 1          | R53                                                                                                                                                             | 2.7K                  | RES SMD 2.7K OHM 1% 1/10W 0402                                 |                             | Panasonic                                                       |                |
| 1          | R54                                                                                                                                                             | 1.4K                  | RES SMD 1.4K OHM 1% 1/10W 0402                                 | ERJ-2RKF2701X               | Panasonic Electronic                                            |                |
| 1          | R55                                                                                                                                                             | 1K                    | RES 1K OHM 1/10W 1% 0402 SMD                                   | ERJ-2RKF1401X ERJ-2RKF1001X | Components Panasonic                                            |                |
| 1          | R57                                                                                                                                                             | 100                   | RES SMD 100 OHM 1% 1/10W 0603                                  | RC0603FR-07100RL            | Yageo                                                           |                |
| 2          | R62,R64                                                                                                                                                         | 27                    | RES SMD 27 OHM 1% 1/10W 0402                                   | ERJ-2RKF27R0X               | Panasonic                                                       |                |
| 3          | R78,R79,R81                                                                                                                                                     | 33.2                  | RES SMD 33.2 OHM 1% 1/10W 0402                                 | ERJ-2RKF33R2X               | Panasonic                                                       |                |
| 4          | R88,R89,R101,R102                                                                                                                                               | 2.21K                 | RES SMD 2.21K OHM 1% 1/10W 0402                                | ERJ-2RKF2211X               | Panasonic                                                       | DNI            |
| 1          | R106                                                                                                                                                            | 332                   | RES 332 OHM 1/10W 1% 0603 SMD                                  | ERJ-3EKF3320V               | Panasonic                                                       |                |
| 1          | R110                                                                                                                                                            | 10K                   | RES 10K OHM 1/10W 1% 0603 SMD                                  | ERJ-3EKF1002V               | Panasonic                                                       |                |
| 2          | R111,R112                                                                                                                                                       | 100 mOhms             | RES 0.1 OHM 1% 3/4W 1206                                       | KRL1632E-M-R100-F-T5        | Susumu                                                          | DNI            |
| 2          | SH1,SH2                                                                                                                                                         | DNI                   | DNI 2 NET SHORT 25 MIL LINE                                    |                             |                                                                 |                |
| 4          | SH3,SH4,SH5,SH6                                                                                                                                                 | DNI                   | DNI 2 NET SHORT                                                |                             |                                                                 |                |
| 1          | SW1                                                                                                                                                             | SPDT 3A               | SWITCH TOGGLE SPDT 3A 120V                                     | ET01MD1AGE                  | C&K Components                                                  |                |
| 5          | SW2,SW3,SW4,SW5,SW6                                                                                                                                             | B3S-1000P             | SWITCH TACTILE SPST-NO 0.05A 24V                               | B3S-1000P                   | Omron Electronics                                               |                |
| 1          | SW7                                                                                                                                                             | B3S-1002 BY OMZ       | SWITCH TACTILE SPST-NO 0.05A 24V                               | B3S-1002 BY OMZ             | Omron Electronics                                               |                |

## Evaluates: MAX7802

## MAX78002 EV Kit Bill of Materials (continued)

|   QUANTITY | PART REFERENCE                   | VALUE              | BOM_DESCRIPTION                                                                       | MANUFACTURER_PN        | MANUFACTURER            | ASSY_VARIANT   |
|------------|----------------------------------|--------------------|---------------------------------------------------------------------------------------|------------------------|-------------------------|----------------|
|          6 | TP1,TP6,TP7,TP8,TP9,TP10         | RED                | TEST POINT PC MULTI PURPOSE RED                                                       | 5010                   | Keystone Electronics    |                |
|          4 | TP2,TP3,TP4,TP5                  | BLK                | TEST POINT PC MULTI PURPOSE BLK                                                       | 5011                   | Keystone Electronics    |                |
|          1 | TP11                             | WHT                | TEST POINT PC MULTI PURPOSE WHT                                                       | 5012                   | Keystone Electronics    |                |
|          1 | U1                               | MAX78002 144P BGA  | MAX78002 144P BGA                                                                     | MAX78002               | Maxim Integrated        |                |
|          1 | U2                               | MAXM17515ALI+      | Non-Isolated PoL Module DC DC Converter 1 Output 0.75 ~ 3.6V - - 5A 2.4V - 5.5V Input | MAXM17515ALI+          | Maxim Integrated        |                |
|          1 | U3                               | MAX8869EUE18+      | IC REG LDO 1.8V/ADJ 1A 16TSSOP-EP                                                     | MAX8869EUE18+          | Maxim Integrated        |                |
|          1 | U4                               | MAXM17516ALI+      | Non-Isolated PoL Module DC DC Converter Output 0.75 ~ 1.8V - - 6A 2.4V - 5.5V Input   | MAXM17516ALI+          | Maxim Integrated        |                |
|          1 | U5                               | MAX34417ENE+       | IC 4CH SMBUS MONITOR 16TWLP                                                           | MAX34417ENE+           | Maxim Integrated        |                |
|          1 | U6                               | MAX9120EXK+T       | IC COMPARATOR BTR SC70-5                                                              | MAX9120EXK+T           | Maxim Integrated        |                |
|          3 | U7,U8,U10                        | MAX4793EUK+T       | IC CURRENT-LIMIT SWITCH 1X1 SOT23-5                                                   | MAX4793EUK+T           | Maxim Integrated        |                |
|          1 | U9                               | MAX1818EUT18+      | IC REG LDO 1.8V/ADJ 0.5A SOT23-6                                                      | MAX1818EUT18+          | Maxim Integrated        |                |
|          1 | U11                              | MAX6071AAUT21+T    | IC VREF SERIES 0.04% SOT23-6                                                          | MAX6071AAUT21+T        | Maxim Integrated        |                |
|          8 | U12,U13,U14,U15,U16,U17, U18,U19 | ADP1196ACBZ-02-R7  | IC PWR SWITCH N-CHAN 1:1 6WLCSP                                                       | ADP1196ACBZ-02-R7      | Analog Devices Inc.     |                |
|          1 | U20                              | MAX32625ITK+       | MAX32625ITK+ 68P TQFN                                                                 | MAX32625ITK+           | Maxim Integrated        |                |
|          4 | U21,U28,U30,U39                  | MAX13202EALT+T     | ESD PROTECT 2CH 6-UDFN                                                                | MAX13202EALT+          | Maxim Integrated        |                |
|          1 | U22                              | MAX38902AATA+      | IC REG LDO LINEAR ADJ .5A 8TDFN                                                       | MAX38902AATA+          | Maxim Integrated        |                |
|          2 | U23,U31                          | MAX1818EUT33+T     | IC REG LIN POS ADJ 500MA SOT23-6                                                      | MAX1818EUT33+T         | Maxim Integrated        |                |
|          2 | U24,U47                          | 74LVC2G06GW,125    | IC INVERTER OD 2CH 2-INP 6TSSOP                                                       | 74LVC2G06GW,125        | Nexperia USA Inc.       |                |
|          1 | U25                              | CFAF128128B1-0145T | LCD TFT Full Color 1.45" 128x128                                                      | CFAF128128B1-0145T     | Crystalfontz            |                |
|          2 | U26,U42                          | DS1233AZ-10+T&R    | IC SUPERVISOR 1 CHANNEL SOT223-3                                                      | DS1233AZ-10+T&R        | Maxim Integrate         |                |
|          1 | U27                              | FT231XS-R          | IC USB SERIAL FULL UART 20SSOP                                                        | FT231XS-R              | FTDI                    |                |
|          3 | U29,U32,U46                      | MAX3373EEBL+T      | IC TRNSLTR BIDIRECTIONAL 9UCSP                                                        | MAX3373EEBL+T          | Analog Devices Inc.     |                |
|          4 | U33,U34,U40,U43                  | 74LVC1G157GV,125   | IC MULTIPLEXER 2INPUT 6TSOP                                                           | 74LVC1G157GV,125       | NXP Semiconductors      |                |
|          1 | U35                              | MAX9867EWV+T       | IC STEREO AUD CODEC LP 30WLP                                                          | MAX9867EWV+T           | Analog Devices Inc.     |                |
|          3 | U36,U37,U44                      | 74AVC2T245GUX      | IC TRNSLTR BIDIRECTIONAL 10XQFN                                                       | 74AVC2T245GUX          | Nexperia USA Inc.       |                |
|          1 | U38                              | 74LVC125ABQ,115    | IC BUF NON-INVERT 3.6V 14DHVQFN                                                       | 74LVC125ABQ,115        | Nexperia USA Inc.       |                |
|          1 | U41                              | 74LVC2G07GV,125    | IC BUFFER NON-INVERT 5.5V 6TSOP                                                       | 74LVC2G07GV,125        | Nexperia USA Inc.       |                |
|          1 | U45                              | APS6404L-3SQR-ZR   | DRAM IoT RAM 64Mb QSPI (x1,x4) SDR 133/84MHz, RBX, 3V, USON8                          | APS6404L-3SQR-ZR       | AP Memory               |                |
|          1 | U48                              | 3315               | FEATHERWING 2.4" 320X240 TFT LCD                                                      | 3315                   | Adafruit Industries LLC |                |
|          1 | Y1                               | 32.768kHz          | CRYSTAL 32.768KHZ 6.0PF SMD                                                           | ABS07-32.768KHZ-6-T    | Abracon Corp            |                |
|          1 | Y2                               | 25MHz              | CRYSTAL 25.0000MHZ 10PF SMD                                                           | FA-20H 25.0000MF20X-K3 | EPSON                   |                |
|          1 | Y3                               | 32.768KHz          | CRYSTAL 32.7680KHZ 6PF SMD                                                            | ECS-.327-6-12-TR       | ECS Inc.                |                |
|          1 | Y4                               | 12.2880MHZ         | XTAL OSC XO 12.2880MHZ CMOS SMD                                                       | ASCO2-12.288MHZ-EK-T3  | Abracon LLC             |                |

Evaluates: MAX7802

## MAX78002 Evaluation Kit

## MAX78002 EV Kit Schematic

<!-- image -->

Evaluates: MAX78002

## MAX78002 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78002

## MAX78002 EV Kit Schematic (continued)

<!-- image -->

## MAX78002 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78002

## MAX78002 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78002

## MAX78002 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78002

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX78002