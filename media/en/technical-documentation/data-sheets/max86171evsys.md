<!-- lastmod 2022-08-04 -->
## MAX86171 Evaluation System

## General Description

The  MAX86171  evaluation  system  (EV  sys)  allows  for the  quick  evaluation  of  the  MAX86171  optical  AFE  for applications at various sites on the body, particularly the wrist. MAX86171 supports both I 2 C and SPI compatible interfaces. MAX86171 has two optical readout channels that  operate  simultaneously.  The  EV  sys  allows  flexible configurations  to  optimize  measurement  signal  quality at  minimal  power  consumption.  The  EV  sys  helps  the user  quickly  learn  about  how  to  configure  and  use  the MAX86171.

The EV  sys consists of two boards.  MAXSensor BLE is the main data acquisition board while MAX86171\_OSB# is the sensor daughter board for MAX86171. The EV sys can be powered using the USB-C supply or LiPo Battery.

The EV sys comes with a MAX86171ENI+ in a 28-bump WLP .

## Features

- Quick Evaluation of the MAX86171
- Supports Optimization of Configurations
- Facilitates Understanding MAX86171 Architecture and Solution Strategy
- Real-time Monitoring
- Data Logging Capabilities
- On-Board Accelerometer
- Bluetooth LE

Ordering Information appears at end of data sheet.

Evaluates: MAX86171/

MAX86170A/MAX86170B

## Quick Start

## Required Equipment

- MAX86171 EV sys
- Data Acquisition EV sys Micro-PCB (MAXSensorBLE#)
- MAX86171 EV sys sensor PCB (MAX86171\_OSB#)
- Flex cable
- USB-C cable
- MAX86171 EV sys GUI software
- MAX86171 parser and user guide (included in MAX86171GUISetupVxxx.ZIP)
- Windows PC
- Required bluetooth LE dongle CY5677 or CY5670 (not shipped with EV sys)
- Optional LiPo battery ( LP-401230 suggested, not shipped with EV sys)

Note: If you do not already have one of the listed BLE dongles above, purchasing one is recommended.

## Procedure

- 1) The EV sys is fully assembled and tested. Follow the steps below to verify board operation: Visit www.maximintegrated.com/evkit-software to download the most recent version of the EV sys software, MAX86171GUISetupVxxx\_Web.ZIP. Save the EV sys software to a temporary folder and decompress the ZIP file.
- 2) Plugged in the BLE dongle to one of the USB port on the PC.
- 3) Open up MAX86171GUISetupVxxx.exe and follow the instructions from the pop-up windows, as shown in Figure 1 to Figure 7 .
- 4) The BLE Dongle driver installation will also be completed after the GUI installation, as shown in Figure 8 .
- 5) If the MAX86171 EV sys flex cable is not already connecting the Data Acquisition EV sys Micro PCB to the MAX86171 Sensor PCB, then please connect the two PCBs with the cable as shown in Figure 9 and Figure 10 .

<!-- image -->

## MAX86171 Evaluation System

- 6) Connect USB-C cable or LiPo Battery to the Data Acquisition Board to power up the EV sys. If LiPo battery is used, press the power switch (SW) to turn on/off the device. When powered on, the green LED will toggle.
- 7) After that, start the MAX86171 EV sys GUI program. 'Connect Device' will appears, choose your device and press 'Connect' as shown in Figure 11 .
- 8) The GUI will then be launched as shown in Figure 12 . and Figure 13 .
- 9) Configure the EV sys on the GUI and Click on the &lt;Start&gt; button on the bottom left side to start the data acquisition.
- 10) When running, the LEDs on the Micro PCB should illuminate and the plots on the GUI should stream with data as shown in Figure 14 and Figure 15 .

## Evaluates: MAX86171/ MAX86170A/MAX86170B

Figure 1. Setup MAX86171 EV Sys GUI Software Step 1

<!-- image -->

Figure 2. Setup MAX86171 EV Sys GUI Software Step 2

<!-- image -->

Figure 3. Setup MAX86171 EV Sys GUI Software Step 3

<!-- image -->

Figure 4. Setup MAX86171 EV Sys GUI Software Step 4

<!-- image -->

Figure 5. Setup MAX86171 EV Sys GUI Software Step 5

<!-- image -->

Evaluates: MAX86171/

Figure 6. Setup MAX86171 EV Sys GUI Software Step 6

<!-- image -->

Figure 7. Setup MAX86171 EV Sys GUI Software Step 7

<!-- image -->

Figure 8. BLE Dongle Driver Installation

<!-- image -->

Figure 9. Hardware Setup (MAX86171 EV Sys Micro-PCB)

<!-- image -->

## MAX86171 Evaluation System

Figure 10. Hardware Setup (MAX86171 EV Sys Sensor PCB)

<!-- image -->

Figure 11. Connect to BLE Device

<!-- image -->

Figure 12. MAX86171 EV Sys GUI Settings

<!-- image -->

## MAX86171 Evaluation System

Evaluates: MAX86171/

Figure 13. MAX86171 EV Sys GUI Measurement Settings

<!-- image -->

Evaluates: MAX86171/

Figure 14. MAX86171 EV Sys GUI (PPG Plots)

<!-- image -->

Figure 15. MAX86171 EV Sys GUI (Accelerometer Plots)

<!-- image -->

## MAX86171 Evaluation System

## Detailed Description of Software

The  EV  sys  includes  one  sensor  PCB.  It  contains MAX86171 optical AFE, a 3-axis accelerometer together  with  four  photodiodes  and  8  LEDs  (in  4  LED packages).  MAX86171\_OSB#  comes  with  4  discrete photodiodes  (Vishay  VEMD8080),  2  Red/IR/Green  LED packages (Osram SFH 7013) and 2 green LEDs (Osram CT DBLP31.12-6C5D-56-J6U6). The EV sys allows raw optical and accelerometer data to be sampled and trans -ferred to the GUI for both dynamic viewing and logging for later  analysis.  The  EV  sys  microcontroller  PCB  is  used to  do  SPI  to  BLE  communication,  transporting  the  raw optical and accelerometer data to the PC through BLE.

Most functionality of the MAX86171 has been mapped  to  the  GUI  so  the  wide  variety  of  applications supported by the MAX86171 can be rapidly explored. The following is a brief description of this functionality options.

## Frame Rate

Frame rate defines how frequently a frame is repeated. Frame is a collection of measurements that can have a minimum of 1 measurement and a maximum of 9 measurements. The frame rate can take on any value from 1fps to 2.9kfps.

Table  1 shows  the  maximum  supported  frame  rates  (in fps) for the MAX86171 for the given number of measurements  and  use  of  accelerometer.  The  maximum  frame rate is limited by the BLE protocol, not the AFE itself.

## Table 1. MAX86171 Max Frame Rates (fps)

| MAXIMUM FRAME RATE     | WITH ACCELEROMETER   | WITH ACCELEROMETER   | WITHOUT ACCELEROMETER   | WITHOUT ACCELEROMETER   |
|------------------------|----------------------|----------------------|-------------------------|-------------------------|
| NUMBER OF MEASUREMENTS | 1 PD                 | 2 PD                 | 1 PD                    | 2PD                     |
| 1                      | 500                  | 500                  | 1000                    | 1000                    |
| 2                      | 500                  | 250                  | 1000                    | 500                     |
| 3                      | 250                  | 125                  | 500                     | 250                     |
| 4                      | 250                  | 125                  | 500                     | 125                     |
| 5                      | 125                  | 125                  | 250                     | 125                     |
| 6                      | 125                  | 62.5                 | 250                     | 125                     |
| 7                      | 125                  | 62.5                 | 125                     | 62.5                    |
| 8                      | 125                  | 62.5                 | 125                     | 62.5                    |
| 9                      | 125                  | 62.5                 | 125                     | 62.5                    |

## Evaluates: MAX86171/ MAX86170A/MAX86170B

## Picket Fence Configuration

Under  typical  situations,  the  rate  of  change  of  ambient light is such that the ambient signal level during exposure can  be  accurately  predicted  and  high  levels  of  ambient rejection  are  obtained.  However,  it  is  possible  to  have situations where the ambient light level changes extremely rapidly, for example when in a car with direct sunlight exposure passes under a bridge and into a dark shadow. In these situations, it is possible for the on-chip ambient light correction (ALC) circuit to fail and produce and erroneous estimation of the ambient light during the exposure interval.  The  optical  controller  has  a  built-in  algorithm, called the picket fence function, that can correct for these extreme conditions on the ALC circuit.

Refer to the MAX86171 data sheet under  Picket  Fence Detect-and-Replace Function Section for details.

## System Control

There  is  option  to  power  down  one  of  the  PPG  readout channels or use dual PPG channels simultaneously. When dual PPG channels are used, the data log will shows data from both PDs for each configured measurement.

## Photodiode Bias

The  MAX86171  provides  multiple  photodiode  biasing options.  These  options  allow  the  MAX86171  to  oper -ate  with  a  large  range  of  photodiode  capacitance.  The PDBIAS values adjust the PD\_IN bias point impedance to ensure that the photodiode settles rapidly enough to support the sample timing. PDBIAS is configured depending on the capacitance of the photodiode used.

## Accelerometer Configuration

The on-board accelerometer can be enabled or disabled by  using  the  GUI.  Supported  accelerometer  Full-Scale Ranges  are  ±2g,  ±4g,  and  ±8g.  The  output  data  of  the accelerometer  can  also  be  configured  from  15.63Hz  to 2000Hz when used with Sync Mode of External Clock or External Frame.

## Measurements Enable

The Measurement Enable specifies the data acquisition sequence  that  the  internal  state  machine  controller  will follow and where the converted data will be mapped into the FIFO.

Each  FIFO  field  can  be  applied  to  one  measurement. Acquired data can be from LED1~9 (optical exposure from LED1~9) illuminated independently. The other options are Ambient  (optical  data  with  no  exposure,  just  ambient illumination) or Disable (skip this acquisition).

## MAX86171 Evaluation System

MAX86171 supports up to nine measurements per frame. Each  of  the  nine  measurements  are  configured  in  the MEAS1 setup to Meas9 Setup registers. Any measurement can be enabled and the measurements do not need to be contiguous. If direct ambient needs to be measured, it should always be the last enabled measurement in the frame.

This  enabled  measurements  sequence  will  repeat  for each frame. Each Measurement if enabled will be plotted in  the  Meas  x  (x  =  0...9)  tabs  respectively  as  shown  in Figure 14 .

Please refer to the MAX86171 data sheet under System Control and MEASx Setup Sections for details.

## Integration Time

The  MAX86171  supports  exposure  integration  times  of 14.8μs, 29.4μs, 58.7μs, and 117.3μs. The exposure pulse width is a critical parameter in any optical measurement. Longer  exposures  allow  for  more  optical  photons  to  be integrated  but  also  increase  system  power  and  reduce ambient rejection capability.

## Measurement Average

The MAX86171 has the capability to do sample averaging of 2 ~ 128 samples internally. This feature is useful if more optical energy is needed to make a low perfusion measurement but the data rate across the interface or the processing power in a host micro is not desirable.

## PPG Range

The  MAX86171  optical  channel  has  4  ADC  full-scale ranges. These ranges are 4μA, 8μA, 16μA, and 32μA.

## PPG PD Select

There are 2 PPG readout ADC channels. These 2 PPG readout  channels  can  support  up  to  4  photodiodes. PPG channel 1 can be mux-ed to PD1 or PD3 and PPG Channel 2 can be mux-ed to PD2 or PD4.

## LED Driver Configurations

In  each  Measurement,  the  three  LED  drivers  have  a Range.  There  are  4  full-scale  range  settings  31mA, 62mA, 93mA and 124mA.

Each of the three LED drivers has a LED Pulse Amplitude Current setting. Each measurement can drive one, two, or all three LED drivers. This configuration of LED driver and LED mux is highly flexible, allowing for any of the nine LED driver pins to sink current from one LED driver (or 2 LED drivers for LED1, LED2, LED3). Each LED driver has an 8-bit current source DAC. The Peak LED Current box allows for an actual current to be entered. The near-

## Evaluates: MAX86171/ MAX86170A/MAX86170B

est  available  DAC  current  is  selected  and  displayed  in the field.

## LED Settling Time

The  LED  Settling  Time  is  the  time  prior  to  the  start  of Integration Time that the LED is turned on. There are four settlings, 24μs, 18μs, 12μs and 6μs. This time is necessary to allow the LED driver to settle before integrating the exposure photo current.

## Ambient Light Cancellation

The  on-chip  Ambient  Light  Cancellation  incorporates  a proprietary  scheme  to  cancel  ambient  light  generated photodiode current,  allowing  the  sensor  to  work  in  high ambient light conditions.

## PPG Offset

Each optical signal  path  also  incorporates  a  2-bit  offset DAC for extending the optical dynamic range. This allow for a larger convertible exposure range by sourcing some of the exposure current from the offset DAC.

## &lt;Start&gt;/&lt;Stop&gt; Button

The &lt;Start&gt; button is used to start data acquisition from the demo. The &lt;Start&gt; button will only be effective when the EV sys is connected and detected. Once the &lt;Start&gt; has been pushed the &lt;Stop&gt; button appears, which can be used to stop the acquisition. Once the acquisition has started, all settings are locked. Terminate the acquisition to change any settling.

## &lt;Reset&gt; Button

The  &lt;Reset&gt;  button  will  clear  out  all  register  settlings back to the programs start up.

## Data Logging

Raw optical and accelerometer data can be logged from the  &lt;Logging&gt;  pull-down  menu  item.  There  are  two options available: Data saved to file or in the flash. When 'file'  data  logging  is  selected,  the  GUI  asks  for  a  folder location  where  the  logging  file  will  be  saved.  Create  a new folder or accept the default. Data logging will start on the next &lt;Start&gt; button and will continue until the &lt;Stop &gt; button is pressed. The final file write is only done when the &lt;File&gt; pull-down menu item is accessed and the datalogging button is pressed.

Flash  logging  allows  raw  sensor  data  to  be  stored  to the  integrated  32MB  flash  memory  chip  in  a  binary  file format. The max duration for flash logging is dependent on:  frame  rate,  number  of  optical  channels,  and  use  of accelerometer.

## MAX86171 Evaluation System

The  GUI  enables/disables  flash  logging.  The  GUI  can be disconnected while flash logging, allowing for remote operation (PPG Plots not available). Preparing the flash memory can  take  up  to  30s  after  enabling.  If  the  flash memory fills or battery power drops too low, flash logging will  automatically  stop  and  the  file  will  close.  Only  one file can be saved at a time. The file must be downloaded since it will be erased on the next log request.

If a log has completed, a binary file will be found on the device. The binary log file must be downloaded through the USB-C cable; it cannot be downloaded through BLE. When the device is plugged into the PC, it enumerates as a USB mass storage device. However, the file can only be  copied  from  this  device.  No  other  operations  (such as deleting or saving other files) will work on this device.

## Evaluates: MAX86171/ MAX86170A/MAX86170B

Copy the file to a local PC volume. Then run the parser under the Logging menu to generate a CSV file.

Please  refer  to  the  Evaluation  Kit  Parser  User  Guide (MAX86171  demo  +  eval  kit  parser  user  guide.pdf)  for details operation.

## Register Map Access

Under the &lt;Register&gt; Tab the user can access to sensor register  map as shown in Figure 16 .  Press  &lt;Read All&gt;, to read all the register value currently in configured in the Optical AFE. Bolded font bits are logic one. Normal font bits are logic zero. Click on the bits to toggle their value and click  on  &lt;W&gt;  to  write  the  value  to  the  device.  The register value does not change until &lt;W&gt; is clicked. Click &lt;R&gt; to read the register value to verify the write.

Figure 16. Register Map Access

<!-- image -->

## MAX86171 Evaluation System

## Detailed Description of Hardware

Status LED Indicators

The onboard tri-color LEDs are use as status indicator.

## LED Green

Toggling (1Hz 50% duty cycle) = BLE advertising

Toggling (1Hz 10% duty cycle) = BLE connected

## LED Red

USB-C cable connected to charger

On = charging

Off = charge complete

## Flash Logging

On = busy preparing  the  flash  memory  or  flash memory is full

Toggling  (synchronously  with  the  green  LED) = logging

Off = not logging

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX86171EVSYS# | EV Sys |

# Denotes RoHS compliant.

## Evaluates: MAX86171/ MAX86170A/MAX86170B

Note that flash logging indication takes precedence over the charging indication. (i.e., if the device is plugged into a charger, the red LED indicates charge status). If flash logging is enabled while plugged into the charger, the red LED indicates flash log status.

## Power Switch

Press  the  power  switch  (SW)  to  turn  on/off  the  device. When powered on, the green LED will toggle per the LED indicator section. When powered off, the green LED will go out. The red LED may light temporarily, indicating that the flash log is closing. Plugging in the USB-C cable will also power up the device.

## Battery/Charging

Use the USB-C cable to charge the integrated single-cell LiPo  battery.  The  integrated  PMIC  initiates  and  stops charging automatically. Charge status is indicated through the red LED and GUI.

## Component List

## MAX86171 EV Sys

| PART            |   QTY | DESCRIPTION                 |
|-----------------|-------|-----------------------------|
| MAXSensorBLE#   |     1 | MAX86171 EV Sys µC PCB      |
| MAX86171_OSB#   |     1 | MAX86171 EV Sys Sensor PCB  |
| 150150225       |     1 | Molex, Flex Cable, 25 Pins  |
| CY5677          |     1 | Cypress, BLE Dongle         |
| 101181XX-000XXX |     1 | USB-C to USB-A Cable, 3 Ft. |

## MAX86171 EV Kit Bill of Materials

## MAXSENSORBLE#

|   ITEM |   QTY | REF DES                             | DNI/DNP   | MFG PART #                                                                | MANUFACTURER               | VALUE              | DESCRIPTION                                                                                                                                                               |
|--------|-------|-------------------------------------|-----------|---------------------------------------------------------------------------|----------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     1 | A1                                  | -         | 2450AT18A100                                                              | JOHANSON TECHNOLOGY        | 2450AT18A100       | ANTENNA; 2450AT SERIES; BOARDMOUNT; MINI 2.45 GHZ ANTENNA; 2450MHz                                                                                                        |
|      2 |     1 | BAT                                 | -         | B2B-PH-K-S(LF)(SN)                                                        | JST MANUFACTURING          | B2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; PH CONNECTOR; 2MM PITCH; SHROUDED HEADER; STRAIGHT; 2PINS                                                                                  |
|      3 |    11 | C1, C22, C26, C30-C37               | -         | GRM033R61A104KE15; LMK063BJ104KP                                          | MURATA;TAIYO YUDEN         | 0.1µF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 10V; TOL=10%; MODEL = ; TG = -55°C TO +125°C; TC = X5R                                                                        |
|      4 |     9 | C2, C15, C25, C38-C43               | -         | GRM033R61A105ME15                                                         | MURATA                     | 1µF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                   |
|      5 |     7 | C3, C4, C8, C9, C12, C16, C27       | -         | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC | MURATA;SAMSUNG; MURATA;TDK | 4.7µF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL=20%; TG = -55°C TO +85°C; TC = X5R                                                                                   |
|      6 |     7 | C5-C7, C10, C13, C14, C47           | -         | GRM155R60J226ME11                                                         | MURATA                     | 22µF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 22µF; 6.3V; TOL = 20%; TC = X5R ; NOTE: THESE PARTS HAVE 52 WEEKS LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT |
|      7 |     1 | C19                                 | -         | GJM0335C1E1R0WB01                                                         | MURATA                     | 1PF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL = 0.05PF; TG = -55°C TO +125°C; TC = C0G                                                                               |
|      8 |     7 | C20, C21, C28, C29, C45, C46, Z44   | -         | GRM0335C1H120GA01                                                         | MURATA                     | 12PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 12PF; 50V; TOL = 2%; TG = -55°C TO +125°C; TC = C0G                                                                                  |
|      9 |     2 | C23, C24                            | -         | GRM0335C1H101JA01                                                         | MURATA                     | 100PF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                 |
|     10 |     1 | CN1                                 | -         | DX07S024JJ3R1300                                                          | JAE ELECTRONIC INDUSTRY    | DX07S024JJ3        | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHT ANGLE; 24PINS                                                                                 |
|     11 |     2 | DS1, DS2                            | -         | SML-P11UTT86                                                              | ROHM                       | SML-P11UTT86       | DIODE; LED; SMT; PIV = 1.8V; IF = 0.02A                                                                                                                                   |
|     12 |     1 | J3                                  | -         | 5035662500                                                                | MOLEX                      | 5035662500         | CONNECTOR; FEMALE; SMT; EASY-ON TYPE HOUSING ASSEMBLY; RIGHT ANGLE; 25PINS                                                                                                |
|     13 |     2 | L1, L2                              | -         | DFE18SBN2R2MELL                                                           | MURATA                     | 2.2UH              | EVKIT PART - INDUCTOR; SMT (0603); SHIELDED; 2.2µH; 20%; 1.2A                                                                                                             |
|     14 |     1 | L3                                  | -         | DFE201610E-4R7M=P2                                                        | MURATA                     | 4.7UH              | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7µH; TOL = ± 20%; 1.3A                                                                                                          |
|     15 |     1 | L4                                  | -         | LQP03HQ3N3B02                                                             | MURATA                     | 3.3NH              | INDUCTOR; SMT (0201); FILM TYPE; 3.3NH; TOL = ±0.1nH; 0.5A                                                                                                                |
|     16 |     1 | LED                                 | -         | SML-LX0404SIUPGUSB                                                        | LUMEX OPTO COMPONENTS INC  | SML-LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF = 2 95V; IF = 0.1A                                                                                 |
|     17 |    11 | R2, R3, R11, R15, R24, R27-R31, R34 | -         | ERJ-2GE0R00                                                               | PANASONIC                  | 0                  | RESISTOR; 0402; 0 ; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                         |
|     18 |     2 | R5, R9                              | -         | ERJ-1GEF1002                                                              | PANASONIC                  | 10K                | RESISTOR; 0201; 10KΩ; 1%; 200PPM; 0.05W; THICK FILM                                                                                                                       |
|     19 |     7 | R6, R7, R16, R17, R23, R25, R26     | -         | ERJ-1GEF4701C                                                             | PANASONIC                  | 4.7K               | RESISTOR; 0201; 4.7KΩ; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                                                    |
|     20 |     1 | R8                                  | -         | ERJ-1GEF3902                                                              | PANASONIC                  | 39K                | RESISTOR; 0201; 39KΩ; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                                                     |
|     21 |     1 | R10                                 | -         | NCP15XH103F03                                                             | MURATA                     | 10K                | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL = ± 1%                                                                                                       |
|     22 |     1 | R13                                 | -         | ERJ-1GEF2613C                                                             | PANASONIC                  | 261K               | RESISTOR; 0201; 261KΩ; 1%; 200PPM; 0.05W; THICK FILM                                                                                                                      |
|     23 |     1 | R14                                 | -         | CRCW0201100KFK                                                            | VISHAY DALE                | 100K               | RESISTOR; 0201; 100KΩ; 1%; 100PPM; 0.05W; THICK FILM                                                                                                                      |
|     24 |     2 | R18, R19                            | -         | ERJ-1GEF2000C                                                             | PANASONIC                  | 200                | RESISTOR; 0201; 200Ω; 1%; 200PPM; 0.05W; THICK FILM                                                                                                                       |
|     25 |     4 | RA1-RA4                             | -         | ERJ-1GEF33R0C                                                             | PANASONIC                  | 33                 | RESISTOR; 0201; 33Ω; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                                                      |
|     26 |     1 | SW                                  | -         | EVP-AWCD2A                                                                | PANASONIC                  | EVP-AWCD2A         | SWITCH; SPST; SMT; STRAIGHT; 15V; 0.02A; EVP-AW SERIES                                                                                                                    |
|     27 |     1 | U1                                  | -         | MAX20303KEWN+                                                             | MAXIM                      | MAX20303KEWN+      | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21-100104                               |
|     28 |     1 | U2                                  | -         | NRF52832-CIAA                                                             | NORDIC SEMICONDUCTOR       | NRF52832-CIAA      | IC; SOC; MULTIPROTOCOL BLUETOOTH LOW ENERGY; ANT; 2.4GHZ RF SOC; WLCSP50                                                                                                  |

## MAX86171 EV Kit Bill of Materials (continued)

## MAXSENSORBLE#

|   ITEM |   QTY | REF DES                        | DNI/DNP   | MFG PART #        | MANUFACTURER          | VALUE             | DESCRIPTION                                                                                                                            |
|--------|-------|--------------------------------|-----------|-------------------|-----------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------|
|     29 |     5 | U3-U6, U9                      | -         | MAX14689EWL+      | MAXIM                 | MAX14689EWL+      | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED-CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                              |
|     30 |     1 | U7                             | -         | IP4221CZ6-S       | NXP                   | IP4221CZ6-S       | IC; PROT; ESD PROTECTION FOR HIGH-SPEED INTERFACE; XSON6                                                                               |
|     31 |     1 | U8                             | -         | S25FS256SAGNFI001 | SPANSION              | S25FS256SAGNFI001 | IC; MMRY; MIRRORBIT FLASH; NON-VOLATILE MEMORY; 1.8V SINGLE SUPPLY WITH CMOS I/O; SERIAL PERIPHERAL INTERFACE WITH MULTI-I/O; WSON8-EP |
|     32 |     2 | U10, U11                       | -         | MAX9062EBS+G45    | MAXIM                 | MAX9062EBS+G45    | IC; COMP; ULTRA-SMALL; LOW-POWER SINGLE COMPARATOR; UCSP4                                                                              |
|     33 |     1 | U12                            | -         | MAX32620IWG+      | MAXIM                 | MAX32620IWG+      | IC; UCON; HIGH-PERFORMANCE; ULTRA-LOW POWER CORTEX-M4F MICROCONTROLLER FOR RECHARGEABLE DEVICES; WLP81                                 |
|     34 |     1 | U13                            | -         | 74AUP1G97GF       | NXP                   | 74AUP1G97GF       | IC; LOGC; LOW-POWER CONFIGURABLE MULTIPLE FUNCTION GATE; XSON6                                                                         |
|     35 |     1 | U29                            | -         | MAX1819EBL33+     | MAXIM                 | MAX1819EBL33+     | IC; VREG; 500MA LOW-DROPOUT LINEAR REGULATOR IN UCSP; UCSP6                                                                            |
|     36 |     2 | X2, Y2                         | -         | ECS-.327-6-12     | ECS INC               | 32.768KHZ         | CRYSTAL; SMT 2.0 MM X 1.2 MM; 6PF; 32.768KHZ; ± 20PPM; -0.03PPM/°C2                                                                    |
|     37 |     1 | Y1                             | -         | US3200005Z        | PERICOM SEMICONDUCTOR | 32MHZ             | CRYSTAL; SMT 1.6 MM X 1.2MM; 8PF; 32MHZ; ±10PPM; ±10PPM                                                                                |
|     38 |     1 | PCB                            | -         | MAXSENSORBLE      | MAXIM                 | PCB               | PCB:MAXSENSORBLE                                                                                                                       |
|     39 |     0 | R1, R4, R12, R20-R22, R32, R33 | DNP       | ERJ-2GE0R00       | PANASONIC             | 0                 | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                                    |
|     40 |     0 | Z17                            | DNP       | GJM0335C1E1R0WB01 | MURATA                | 1PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL = 0.05PF; TG = -55°C TO +125°C; TC = C0G                                            |
|     41 |     0 | Z18                            | DNP       | 250R05L1R8AV4     | JOHANSON TECHNOLOGY   | 1.8PF             | CAPACITOR; SMT (0201); MICROWAVE; 1.8PF; 25V; TOL=0.05PF; TG = -55°C TO +125°C; TC = C0G                                               |
|     42 |     0 | Jan-36                         | DNP       | N/A               | N/A                   | N/A               | TEST POINT; PAD DIA = 0.762MM; BOARD HOLE = 0.381MM                                                                                    |

## MAX86171 EV Kit Bill of Materials (continued)

## MAX86171\_OSB#

| ITEM   |   QTY | REF DES                      | DNI/DNP   | MFG PART #                  | MANUFACTURER           | VALUE                     | DESCRIPTION                                                                                                                                                               |
|--------|-------|------------------------------|-----------|-----------------------------|------------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     8 | C1-C6, C10, C11              | -         | GRM155R60J226ME11           | MURATA                 | 22µF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 22µF; 6.3V; TOL = 20%; TC = X5R ; NOTE: THESE PARTS HAVE 52 WEEKS LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT |
| 2      |     3 | C7-C9                        | -         | GRM033R61A105ME15           | MURATA                 | 1µF                       | CAPACITOR; SMT (0201); CERAMIC CHIP; 1µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                   |
| 3      |     2 | D1, D2                       | -         | SFH 7013                    | OSRAM                  | SFH 7013                  | DIODE; LED; RED; GREEN; INFRARED; SMT; VF = 2.1V; 3V; 1.3V; IF = 0.04A; 0.03A; 0.06A; NOTE: ORDERED DIRECTLY FROM MANUFACTURER                                            |
| 4      |     2 | D3, D4                       | -         | CT DBLP31.12-6C5D-56-J6U6   | OSRAM                  | CT DBLP31.12-6C5D-56-J6U6 | DIODE; LED; GREEN; SMT; VF = 2.3V; IF = 0.02A                                                                                                                             |
| 5      |     1 | J1                           | -         | 5016162575                  | MOLEX                  | 5016162575                | CONNECTOR; FEMALE; SMT; EASY-ON TYPE FPC CONNECTOR; RIGHT ANGLE; 25PINS                                                                                                   |
| 6      |     4 | PD1-PD4                      | -         | VEMD8080                    | VISHAY SEMICONDUCTORS  | VEMD8080                  | EVKIT CUSTOM - DIODE; SILICON PIN PHOTODIODE; SMT; VR = 20V; IR = 0.00001A                                                                                                |
| 7      |    14 | R1-R3, R4A-R8A, R9-R13, R14A | -         | CRCW02010000ZS; ERJ-1GN0R00 | VISHAY DALE; PANASONIC | 0                         | RESISTOR; 0201; 0 Ω ; 0%; JUMPER; 0.05W; THICK FILM                                                                                                                       |
| 8      |     1 | U1                           | -         | MAX86171                    | MAXIM                  | MAX86171                  | EVKIT PART- IC; WLP28; 0.35MM PITCH; PKG. CODE: N281A2+1; PKG. DWG. NO.: 21-100259                                                                                        |
| 9      |     1 | U2                           | -         | BMA280                      | BOSCH                  | BMA280                    | IC; SNSR; 14 BIT DIGITAL TRIAXIAL ACCELERATION SENSOR WITH INTELLIGENT ON-CHIP MOTION-TRIGGRED INTERRUPT CONTROLLER; LGA12                                                |
| 10     |     1 | PCB                          | -         | MAX86171OSB                 | MAXIM                  | PCB                       | PCB:MAX86171OSB                                                                                                                                                           |
| 11     |     0 | R4B-R8B, R14B, R15           | DNP       | CRCW02010000ZS; ERJ-1GN0R00 | VISHAY DALE; PANASONIC | 0                         | RESISTOR; 0201; 0 Ω ; 0%; JUMPER; 0.05W; THICK FILM                                                                                                                       |
| TOTAL  |    37 |                              |           |                             |                        |                           |                                                                                                                                                                           |

## MAX86171 EV Kit Schematics

## MAXSensorBLE

<!-- image -->

## MAX86171 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86171 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86171 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86171 EV Kit Schematics (continued)

## MAX86171\_OSB#

<!-- image -->

## MAX86171 Evaluation System

## MAX86171 EV Kit PCB Layout Diagrams

## MAXSensorBLE\_EVKIT

<!-- image -->

MAXSensorBLE\_EVKIT-Top Silkscreen

MAXSensorBLE\_EVKIT-L02\_GND

<!-- image -->

MAXSensorBLE\_EVKIT-L04\_SIGS

<!-- image -->

<!-- image -->

MAXSensorBLE\_EVKIT-Top

MAXSensorBLE\_EVKIT-L03\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L05\_SIGS

<!-- image -->

## MAX86171 Evaluation System

## MAX86171 EV Kit PCB Layout Diagrams (continued)

## MAXSensorBLE\_EVKIT

MAXSensorBLE\_EVKIT-L06\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L08\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L07\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L09\_GND

<!-- image -->

## MAX86171 Evaluation System

## MAX86171 EV Kit PCB Layout Diagrams (continued)

## MAXSensorBLE\_EVKIT

MAXSensorBLE\_EVKIT-L10\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-BOTTOM

<!-- image -->

MAXSensorBLE\_EVKIT-L11\_GND

<!-- image -->

MAXSensorBLE\_EVKIT-Bottom Silkscreen

<!-- image -->

## MAX86171 Evaluation System

## MAX86171 EV Kit PCB Layout Diagrams (continued)

## MAX86171\_OSB\_EVKIT

MAX86171OSBEK#-Top Silkscreen

<!-- image -->

MAX86171OSBEK#-Top

<!-- image -->

MAX86171OSBEK#-L02\_GND

<!-- image -->

MAX86171OSBEK#- L03\_SIG

<!-- image -->

## MAX86171 Evaluation System

## MAX86171 EV Kit PCB Layout Diagrams (continued)

## MAX86171\_OSB\_EVKIT

MAX86171OSBEK#- L04\_GND

<!-- image -->

MAX86171OSBEK#-L05\_PDGND

<!-- image -->

MAX86171OSBEK#-Bottom

<!-- image -->

## MAX86171 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------|-----------------|
|                 0 | 12/19           | Initial release                                           | -               |
|                 1 | 1/20            | Updated the title to evaluate MAX86170A and MAX86170B     | 1-31            |
|                 2 | 2/20            | Updated the title to evaluate only MAX86171 and MAX86170B | 1-31            |
|                 3 | 4/20            | Updated the MAX86171OSBEK#-Top Silkscreen                 | 29              |
|                 4 | 5/20            | Updated the title to add MAX86170A                        | 1-31            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX86171/

MAX86170A/MAX86170B