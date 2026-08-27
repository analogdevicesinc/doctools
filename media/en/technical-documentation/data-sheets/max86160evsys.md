<!-- lastmod 2022-08-02 -->
## MAX86160 Evaluation System

## General Description

The  MAX86160  Evaluation  System  (EVSYS)  allows for  the  quick  evaluation  of  the  MAX86160  optical  AFE for  applications  at  various  sites  on  the  body,  particularly  in-ear  applications.  The  MAX86160  supports  a standard  I 2 C-compatible  interface.  MAX86160  consists of  two  optical  readout  channels  that  can  operate  simultaneously  (Green  and  IR).  The  EVSYS  allows  flexible configurations to optimize measurement signal quality at minimal power consumption, and helps the user quickly learn to configure and use the MAX86160.

The EVSYS  consists of two circuit boards. The MAXSensorBLE is the main data acquisition board while the  MAX86160\_Flex\_Bd\_EVKIT  is  a  sensor  rigid-flex board.  The  EVSYS  can  be  powered  using  the  USB-C supply or LiPo Battery.

The EVSYS comes with a MAX86160EFN+ device in an 18-lead OESIP package.

## Features

- Quick Evaluation of the MAX86160
- Supports Optimization of Configurations
- Facilitates Understanding MAX86160 Architecture and Solution Strategy
- Real-time Monitoring
- Data Logging Capabilities
- On-Board Accelerometer
- Bluetooth LE

Ordering Information appears at end of data sheet.

Evaluates: MAX86160

## Quick Start

## Required Equipment

- MAX86160 EVSYS
- Data Acquisition EVSYS Micro-PCB (MAXSensorBLEEK#)
- MAX86160 EVSYS Sensor PCB (MAX86160OSBEK#)
- Flex cable
- USB-C cable
- MAX86160 EVSYS GUI Software
- MAX86160 Parser and User guide (included in MAX86160GUISetupVxxx.ZIP)
- Windows PC
- Required Bluetooth LE Dongle CY5677 or CY5670 (not shipped with EVSYS)
- Optional LiPo Battery (LP-401230 suggested, not shipped with EVSYS)

Note: If you do not already have one of the listed BLE dongles above, purchasing one is recommended.

## Procedure

- 1) The EVSYS is fully assembled and tested. Follow the steps below to verify board operation: Visit www.maximintegrated.com/evkit-software to download the most recent version of the EVSYS software, MAX86160GUISetupVxxx\_Web.ZIP. Save the EVSYS software to a temporary folder and decompress the ZIP file.
- 2) Plugged in the BLE dongle to one of the USB port on the PC.
- 3) Open up MAX86160GUISetupVxxx.exe and follow the instructions from the pop-up windows, as shown in Figure 1 to Figure 7 .
- 4) The BLE Dongle driver installation also completes after the GUI installation.
- 5) If the MAX86160 EVSYS flex cable is not already connecting the Data Acquisition EVSYS Micro PCB to the MAX86160 Sensor Flex Board, then please connect the two PCBs with the cable as shown in Figure 8 and Figure 9 .

<!-- image -->

## MAX86160 Evaluation System

- 6) Connect USB-C cable or LiPo Battery to the Data Acquisition Board to power up the EVSYS. If LiPo battery is used, press the power switch (SW) to turn on/off the device. When powered on, the green LED will toggle.
- 7) After that, start the MAX86160 EVSYS GUI program. 'Connect Device' will appears, choose your device and press 'Connect' as shown in Figure 10 .

## Evaluates: MAX86160

- 8) The GUI will then be launched as shown in Figure 11 .
- 9) Configure the EVSYS on the GUI and Click on the &lt;Start&gt; button on the bottom left side to start the data acquisition.
- 10) When running, the LEDs on the Micro PCB should illuminate and the plots on the GUI should stream with data as shown in Figure 12 and Figure 13 .

Figure 1. Setup MAX86160 EVSYS GUI Software Step 1

<!-- image -->

Figure 2. Setup MAX86160 EVSYS GUI Software Step 2

<!-- image -->

Figure 3. Setup MAX86160 EVSYS GUI Software Step 3

<!-- image -->

Evaluates: MAX86160

Figure 4. Setup MAX86160 EVSYS GUI Software Step 4

<!-- image -->

Figure 5. Setup MAX86160 EVSYS GUI Software Step 5

<!-- image -->

Evaluates: MAX86160

Figure 6. Setup MAX86160 EVSYS GUI Software Step 6

<!-- image -->

Figure 7. Setup MAX86160 EVSYS GUI Software Step 7

<!-- image -->

Figure 8. Hardware Setup (MAX86160 EVSYS Micro-PCB)

<!-- image -->

Figure 9. Hardware Setup (MAX86160 EVSYS Sensor PCB)

<!-- image -->

Figure 10. Connect to BLE Device

<!-- image -->

Figure 11. MAX86160 EVSYS GUI

<!-- image -->

Evaluates: MAX86160

Figure 12. MAX86160 EVSYS GUI (PPG Plots)

<!-- image -->

Figure 13. MAX86160 EVSYS GUI (Accelerometer Plots)

<!-- image -->

## Detailed Description of Software

The EVSYS contains two circ uit  boards: 1) A Flex-Rigid Board that contains the MAX86160 device, an integrated optical  system  containing  two  embedded  LEDs  (Green and  IR)  and  photodiode,  with  a  3-axis  accelerometer, and 2) a MAXSensorBLE board that facilitates data communications and configuration management. The EVSYS allows raw optical and accelerometer data to be sampled and transferred to the GUI for both dynamic viewing and logging  for  later  analysis.  The  EVSYS  microcontroller PCB is used to conduct I 2 C to BLE communication, transporting the raw optical and accelerometer data to the PC through BLE.

Most of functionality of the MAX86160 has been mapped to the GUI so the wide variety of applications supported by the MAX86160 can be rapidly explored. The following is a brief description of these functions..

## Sample Rate

The  sample  rate  can  take  on  values  between  10  to 3200Sps. The dual pulse mode option are modes where the samples are unevenly spaced and averaged to improve the ambient rejection of mains line rate ambient signals.

Table  1 shows  the  maximum  supported  sampling  rates (in Sps) for the MAX86160 for the given number of expo -sure sequences and use of accelerometer. The maximum sample rate is limited by the BLE protocol, not the AFE itself.

For a  given  sample  rate,  the  number  listed  can  be increased  to  the  next  available  MAX86160  sample  rate (i.e., 5 00Sps → 512Sps).

## Integration Pulse Width

The pulse width setting adjusts the integration time of an exposure. The MAX86160 supports exposure integration times  of  50μs,  100μs,  200μs  and  400μs. The  exposure pulse width is a critical parameter in any optical measurement. Longer exposures allow for more optical photons to be integrated but also increase system power and reduce ambient rejection capability.

## Ambient Light Cancellation

The  on-chip  Ambient  Light  Cancellation  incorporates  a proprietary  scheme  to  cancel  ambient  light  generated photo diode current, allowing the sensor to work in high ambient light conditions.

## ADC Full-Scale Range

The MAX86160 optical channel has 4 full-scale ranges. These ranges are 4μA (4.096μA), 8μA (8.192μA), 16μA (16.384μA), and 32μA (32.768μA).

## Sample Average

The MAX86160 has the capability to do sample averag -ing  of  1~32  samples  internally.  This  feature  is  useful  if more optical energy is needed to make a low perfusion measurement but the data rate across the interface or the processing power in a host micro is not desirable. This mode  is  also  useful  to  further  suppress  the  mains  line noises in indoor lighting conditions.

## LED Sequence Control (FIFO Time Slots)

The LED Sequence Control specifies the data acquisition sequence  that  the  internal  state  machine  controller  will follow and where the converted data will be mapped into the FIFO.

Each  FIFO  field  can  be  applied  to  one  measurement. Acquired data can be from LED1 or LED3 (optical expo -sure from LED1 or LED3) illuminated independently. The None option skips the acquisition. LED2 and LED 4 are not  supported  with  the  Flex-Cable  sensor  board.  If  a custom sensor board with MUX is used, LED2 and LED4 can be configured. Only LED1 and LED3 are available in this EVSYS.

The  default  exposure  sequence  is  the  entry  in  the Sequence  1  (LEDC1)  slot,  Sequence  3  (LEDC3),  and Sequence  4  (LEDC4).  This  sequence  repeats  for  each sample instance.

Please  refer  to  the  MAX86160  datasheet  under  FIFO Configurat ion Section for details.

## Table 1. MAX86160 Max Sample Rates (Sps)

|   ACCELEROMETER # OF SEQUENCES |   WITH |   WITHOUT |
|--------------------------------|--------|-----------|
|                              1 |    500 |      1000 |
|                              2 |    500 |      1000 |
|                              3 |    250 |       500 |
|                              4 |    250 |       500 |

## LED Driver Configurations

Each of the three LED drivers has a Range and Peak LED Current setting. There are 4 full-scale range settings 51mA, 102mA,  153mA,  and  204mA.  Each  range  has  an  8-bit current source DAC. The Peak LED Current box allows for an actual current to be entered. The nearest available DAC current is selected and displayed in the field.

## Accelerometer Configuration

The on-board accelerometer can be enabled or disabled by  using  the  GUI.  Supported  accelerometer  Full-Scale Range are ±2g, ±4g, ±8g, and ±16g.

## Proximity Configuration

The  optical  controller  also  includes  an  optical  proxim -ity  function which could significantly reduce energy con -sumption and extend battery life when the sensor is not in contact with the skin.

Please refer to the MAX86160 datasheet under Proximity Mode Section for details.

## &lt;Start &gt;/&lt;Stop &gt; Button

The &lt;Start Monitor&gt; button is used to start data acquisition from the demo. The &lt;Start Monitor&gt; button will only be effective when the EVSYS is connected and detected. Once  the  &lt;Start  &gt;  has  been  pushed  the  &lt;Stop&gt;  button appears, which can be used to stop the acquisition. Once the acquisition has started, all settings are locked. Terminate the acquisition to change any settling.

## &lt;Reset&gt; Button

The  &lt;Reset&gt;  button  will  clear  out  all  register  settlings back to the programs start up.

## Data Logging

Raw optical and accelerometer data can be logged from the  &lt;Logging&gt;  pull-down  menu  item.  There  are  two options available: Data saved to file or in the flash. When 'file'  data  logging  is  selected,  the  GUI  asks  for  a  folder location  where  the  logging  file  will  be  saved.  Create  a new folder or accept the default. Data logging will start on the next &lt;Start&gt; button and will continue until the &lt;Stop &gt; button is pressed. The final file write is only done when the &lt;File&gt; pull-down menu item is accessed and the datalogging button is pressed.

Flash  logging  allows  raw  sensor  data  to  be  stored  to the  integrated  32MB  flash  memory  chip  in  a  binary  file format. The max duration for flash logging is dependent on: sample rate, number of optical channels, and use of accelerometer.

The  GUI  enables/disables  flash  logging.  The  GUI  can be disconnected while flash logging, allowing for remote operation (PPG Plots not available). Preparing the flash memory can  take  up  to  30s  after  enabling.  If  the  flash memory fills or battery power drops too low, flash logging will  automatically  stop  and  the  file  will  close.  Only  one file can be saved at a time. The file must be downloaded since it will be erased on the next log request.

If a log has completed, a binary file will be found on the device. The binary log file  must  be  downloaded  via  the USB-C  cable;  it  cannot  be  downloaded  through  BLE. When the device is plugged into the PC, it enumerates as a USB mass storage device. However, the file can only be  copied  from  this  device.  No  other  operations  (such as deleting or saving other files) will work on this device. Copy the file to a local PC volume. Then run the parser to generate a CSV file.

Please  refer  to  the  Evaluation  Kit  Parser  User  Guide (max8614x demo + eval kit parser user guide 20170719. pdf) for details operation.

## Register Map Access

Under the &lt;Register&gt; Tab the user can access to sensor register  map as shown in Figure 14 .  Press  &lt;Read All&gt;, to read all the register value currently in configured in the Optical AFE. Bolded font bits are logic one. Normal font bits are logic zero. Click on the bits to toggle their value and click  on  &lt;W&gt;  to  write  the  value  to  the  device.  The register value does not change until &lt;W&gt; is clicked. Click &lt;R&gt; to read the register value to verify the write.

Figure 14. Register Map Access

<!-- image -->

## MAX86160 Evaluation System

## Detailed Description of Hardware

## Status LED Indicators

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
| MAX86160EVSYS# | EVSYS  |

# Denotes RoHS compliant.

Evaluates: MAX86160

Note that flash logging indication takes precedence over the charging indication. I.e., if the device is plugged into a  charger,  the  red  LED  indicates  charge  status.  If  flash logging is enabled while plugged into the charger, the red LED indicates flash log status.

## Power Switch

Press  the  power  switch  (SW)  to  turn  on/off  the  device. When powered on, the green LED will toggle per the LED indicator section. When powered off, the green LED will go out. The red LED may light temporarily, indicating that the flash log is closing. Plugging in the USB-C cable will also power up the device.

## Battery/Charging

Use the USB-C cable to charge the integrated single-cell LiPo  battery.  The  integrated  PMIC  initiates  and  stops charging automatically. Charge status is indicated through the red LED and GUI.

## Component List

## MAX86160 EVSYS

| PART                    |   QTY | DESCRIPTION                     |
|-------------------------|-------|---------------------------------|
| MAXSensorBLE_EVKIT      |     1 | MAX86160 EVSYS µC PCB           |
| MAX86160_FLEX_BD_ EVKIT |     1 | Optical Sensor Flex-Rigid Board |
| 150150225               |     1 | Molex, Flex Cable, 25 Pins      |
| CY5677                  |     1 | Cypress, BLE Dongle             |
| 101181XX-000XXX         |     1 | USB-C to USB-A Cable, 3 Ft.     |

## MAX86160 EV Kit Bill of Materials

## MAXSENSORBLEEK#

|   ITEM | REF_DES                             | DNI/DNP   |   QTY | MFGPART #                        | MANUFACTURER            | VALUE              | DESCRIPTION                                                                                               | COMMENTS   |
|--------|-------------------------------------|-----------|-------|----------------------------------|-------------------------|--------------------|-----------------------------------------------------------------------------------------------------------|------------|
|      1 | A1                                  | -         |     1 | 2450AT18A100                     | JOHANSON TECHNOLOGY     | 2450AT18A100       | ANTENNA; 2450AT SERIES; BOARDMOUNT; MINI 2.45 GHZ ANTENNA; 2450MHZ                                        |            |
|      2 | BAT                                 | -         |     1 | B2B-PH-K-S(LF)(SN)               | JST MANUFACTURING       | B2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; PH CONNECTOR; 2MMPITCH; SHROUDED HEADER; STRAIGHT; 2PINS                   |            |
|      3 | C1, C22, C26, C30-C37               | -         |    11 | GRM033R61A104KE15; LMK063BJ104KP | MURATA;TAIYO YUDEN      | 0.1UF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R        |            |
|      4 | C2, C15, C25, C38-C43               | -         |     9 | GRM033R61A105ME15                | MURATA                  | 1UF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |            |
|      5 | C3, C4, C8, C9, C12, C16, C27       | -         |     7 | C1005X5R1A475M050BC              | TDK                     | 4.7UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R |            |
|      6 | C5-C7, C10, C13, C14, C47           | -         |     7 | GRM155R60J226ME11                | MURATA                  | 22UF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R                                          |            |
|      7 | C19                                 | -         |     1 | GJM0335C1E1R0WB01                | MURATA                  | 1PF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G               |            |
|      8 | C20, C21, C28, C29, C45, C46, Z44   | -         |     7 | GRM0335C1H120GA01                | MURATA                  | 12PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 12PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                  |            |
|      9 | C23, C24                            | -         |     2 | GRM0335C1H101JA01                | MURATA                  | 100PF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                 |            |
|     10 | CN1                                 | -         |     1 | DX07S024JJ3                      | JAE ELECTRONIC INDUSTRY | DX07S024JJ3        | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHT ANGLE; 24PINS                 |            |
|     11 | DS1, DS2                            | -         |     2 | SML-P11UTT86                     | ROHM                    | SML-P11UTT86       | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                       |            |
|     12 | J3                                  | -         |     1 | 5035662500                       | MOLEX                   | 5035662500         | CONNECTOR; FEMALE; SMT; EASY-ON TYPE HOUSING ASSEMBLY; RIGHT ANGLE; 25PINS                                |            |
|     13 | L1, L2                              | -         |     2 | DFM18PAN2R2MG0L                  | MURATA                  | 2.2UH              | INDUCTOR; SMT (0603); CERAMIC CHIP; 2.2UH; TOL=+/-20%; 1.1A;                                              |            |
|     14 | L3                                  | -         |     1 | DFE201610E-4R7M=P2               | MURATA                  | 4.7UH              | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7UH; TOL=+/-20%; 1.3A                                           |            |
|     15 | L4                                  | -         |     1 | LQP03HQ3N3B02                    | MURATA                  | 3.3NH              | INDUCTOR; SMT (0201); FILM TYPE; 3.3NH; TOL=+/-0.1nH; 0.5A                                                |            |
|     16 | LED                                 | -         |     1 | SML-LX0404SIUPGUSB               | LUMEX OPTOCOMPONENTS    | SML-LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF=2.95V; IF=0.1A                     |            |
|     17 | R2, R3, R11, R15, R24, R27-R31, R34 | -         |    11 | ERJ-2GE0R00X                     | PANASONIC               |                    | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                    |            |
|     18 | R5, R9                              | -         |     2 | ERJ-1GEF1002C                    | PANASONIC               | 10K                | RESISTOR; 0201; 10K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                    |            |
|     19 | R6, R7, R16, R17, R23, R25, R26     | -         |     7 | ERJ-1GEF4701C                    | PANASONIC               | 4.7K               | RESISTOR; 0201; 4.7K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                 |            |
|     20 | R8                                  | -         |     1 | ERJ-1GEF3902C                    | PANASONIC               | 39K                | RESISTOR; 0201; 39K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                  |            |

Evaluates: MAX86160

## MAX86160 EV Kit Bill of Materials (continued)

## MAXSENSORBLEEK#

|   ITEM | REF_DES                        | DNI/DNP   |   QTY | MFGPART #         | MANUFACTURER          | VALUE                   | DESCRIPTION                                                                                                                                  | COMMENTS   |
|--------|--------------------------------|-----------|-------|-------------------|-----------------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     21 | R10                            | -         |     1 | NCP15XH103F03RC   | MURATA                | 10K                     | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                                           |            |
|     22 | R13                            | -         |     1 | ERJ-1GEF2613C     | PANASONIC             | 261K                    | RESISTOR; 0201; 261K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                      |            |
|     23 | R14                            | -         |     1 | CRCW0201100KFK    | VISHAY DALE           | 100K                    | RESISTOR; 0201; 100K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                                                      |            |
|     24 | R18, R19                       | -         |     2 | ERJ-1GEF2000C     | PANASONIC             |                         | 200 RESISTOR; 0201; 200 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                   |            |
|     25 | RA1-RA4                        | -         |     4 | ERJ-1GEF33R0C     | PANASONIC             |                         | 33 RESISTOR; 0201; 33 OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                   |            |
|     26 | SW                             | -         |     1 | EVP-AWCD2A        | PANASONIC             | EVP-AWCD2A              | SWITCH; SPST; SMT; STRAIGHT; 15V; 0.02A; EVP-AW SERIES                                                                                       |            |
|     27 | U1                             | -         |     1 | MAX20303          | MAXIM                 | MAXIM SENSOR PLATFORM 2 | EVKIT PART- IC; WEARABLE POWER MANAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21-100104; |            |
|     28 | U2                             | -         |     1 | NRF52832-CIAA     | NORDIC SEMICONDUCTOR  | NRF52832-CIAA           | IC; SOC; MULTIPROTOCOL BLUETOOTH LOW ENERGY; ANT; 2.4GHZ RF SOC; WLCSP50                                                                     |            |
|     29 | U3-U6, U9                      | -         |     5 | MAX14689EWL+      | MAXIM                 | MAX14689EWL+            | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED-CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                                    |            |
|     30 | U7                             | -         |     1 | IP4221CZ6-S       | NXP                   | IP4221CZ6-S             | IC; PROT; ESD PROTECTION FOR HIGH-SPEED INTERFACE; XSON6                                                                                     |            |
|     31 | U8                             | -         |     1 | S25FS256SAGNFI001 | SPANSION              | S25FS256SAGNFI001       | IC; MMRY; MIRRORBIT FLASH; NON-VOLATILE MEMORY; 1.8V SINGLE SUPPLY WITH CMOS I/O; SERIAL PERIPHERAL INTERFACE WITH MULTI-I/O; WSON8-EP       |            |
|     32 | U10, U11                       | -         |     2 | MAX9062EBS+G45    | MAXIM                 | MAX9062EBS+G45          | IC; COMP; ULTRA-SMALL; LOW-POWER SINGLE COMPARATOR; UCSP4                                                                                    |            |
|     33 | U12                            | -         |     1 | MAX32620IWG+      | MAXIM                 | MAX32620IWG+            | IC; UCON; HIGH-PERFORMANCE; ULTRA-LOW POWER CORTEX-M4F MICROCONTROLLER FOR RECHARGEABLE DEVICES; WLP81                                       |            |
|     34 | U13                            | -         |     1 | 74AUP1G97GF       | NXP                   | 74AUP1G97GF             | IC; LOGC; LOW-POWER CONFIGURABLE MULTIPLE FUNCTION GATE; XSON6                                                                               |            |
|     35 | U29                            | -         |     1 | MAX1819EBL50+     | MAXIM                 | MAX1819EBL50+           | IC; VREG; 500MA LOW-DROPOUT LINEAR REGULATOR IN UCSP; UCSP6                                                                                  |            |
|     36 | X2, Y2                         | -         |     2 | ECS-.327-6-12     | ECS INC               | 32.768KHZ               | CRYSTAL; SMT 2.0 MMX1.2 MM; 6PF; 32.768KHZ; +/-20PPM; -0.03PPM/DEGC2                                                                         |            |
|     37 | Y1                             | -         |     1 | US3200005Z        | PERICOM SEMICONDUCTOR | 32MHZ                   | CRYSTAL; SMT 1.6 MMX1.2MM; 8PF; 32MHZ; +/-10PPM; +/-10PPM                                                                                    |            |
|     38 | PCB                            | -         |     1 | MAXSENSORBLE      | MAXIM                 | PCB                     | PCB:MAXSENSORBLE                                                                                                                             | -          |
|     39 | MISC1                          | DNI       |     1 | 101181XX-000XXX   | N/A                   | 101181XX-000XXX         | CONNECTOR; MALE; PALETTE SERIES 3.0 USB-C TO USB-A; 3FT BLACK                                                                                |            |
|     40 | R1, R4, R12, R20-R22, R32, R33 | DNP       |     0 | ERJ-2GE0R00X      | PANASONIC             |                         | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                       |            |
|     41 | Z17                            | DNP       |     0 | GJM0335C1E1R0WB01 | MURATA                | 1PF                     | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                  |            |
|     42 | Z18                            | DNP       |     0 | 250R05L1R8AV4     | JOHANSON TECHNOLOGY   | 1.8PF                   | CAPACITOR; SMT (0201); MICROWAVE; 1.8PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                   |            |
|     43 | Jan-36                         | DNP       |     0 | N/A               | N/A                   | N/A                     | TEST POINT; PAD DIA=0.762MM; BOARD HOLE=0.381MM                                                                                              |            |

Evaluates: MAX86160

## MAX86160 EV Kit Bill of Materials (continued)

## MAX86160\_Flex\_Bd\_EVKIT

| ITEM   | REF_DES                                            |     |   QTY | MFG PART #                                        | MANUFACTURER           | VALUE        | DESCRIPTION                                                                                                         |
|--------|----------------------------------------------------|-----|-------|---------------------------------------------------|------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
| 1      | C1-C3, C9                                          |     |     4 | 04026D226MAT2A                                    | AVX                    | 22UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                           |
| 2      | C4, C6                                             |     |     2 | C0402C475M7PAC; GRM155R60G475M; GRM155R60J475ME47 | KEMET; MURATA; MURATA  | 4.7UF        | CAPACITOR; SMT; 0402; CERAMIC; 4.7uF; 4V; 20%; X5R; -55°C to + 85°C                                                 |
| 3      | C5                                                 |     |     1 | GRM033R61A105ME15                                 | MURATA                 | 1UF          | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                             |
| 4      | J1                                                 |     |     1 | 5016162575                                        | MOLEX                  | 5016162575   | CONNECTOR; FEMALE; SMT; EASY-ON TYPE FPC CONNECTOR; RIGHT ANGLE; 25PINS                                             |
| 5      | R1-R3                                              |     |     3 | CRCW02010000ZS; ERJ-1GN0R00C                      | VISHAY DALE; PANASONIC | 0            | RESISTOR; 0201; 0Ω; 0%; JUMPER; 0.05W; THICK FILM                                                                   |
| 6      | U1                                                 |     |     1 | LIS2DH                                            | ST MICROELECTRONICS    | LIS2DH       | IC; MEMS; MEMS DIGITAL OUTPUT MOTION SENSOR; ULTRA LOW-POWER HIGH PERFORMANCE 3-AXIS FEMTO ACCELEROMETER; LGA14 2X2 |
| 7      | U2                                                 |     |     1 | MAX86160EFN+                                      | MAXIM                  | MAX86160EFN+ | IC; MOD; INTEGRATED HEART-RATE SENSOR FOR IN-EAR APPLICATION; OLGA18                                                |
| 8      | PCB                                                |     |     1 | MAX86160FLEXBD                                    | MAXIM                  | PCB          | PCB:MAX86160FLEXBD                                                                                                  |
| 9      | 1V8_A, 1V8_O, ACC_INT_N, GND, INTB, SCL, SDA, VLED | DNP |     0 | N/A                                               | N/A                    | N/A          | TEST POINT; PAD DIA = 0.762MM; BOARD HOLE = 0.381MM                                                                 |
| TOTAL  |                                                    |     |    14 |                                                   |                        |              |                                                                                                                     |

Evaluates: MAX86160

## MAX86160 EV Kit Schematics

## MAXSensorBLE

<!-- image -->

## MAX86160 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86160 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86160 EV Kit Schematics (continued)

## MAXSensorBLE

<!-- image -->

## MAX86160 EV Kit Schematics (continued)

## MAX86160\_Flex\_Bd\_EVKIT

<!-- image -->

## MAX86160 Evaluation System

## MAX86160 EV Kit PCB Layout Diagrams

## MAXSensorBLE\_EVKIT

<!-- image -->

MAXSensorBLE\_EVKIT-Silk\_Top

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

## MAX86160 Evaluation System

## MAX86160 EV Kit PCB Layout Diagrams (continued)

## MAXSensorBLE\_EVKIT

MAXSensorBLE\_EVKIT-L06\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L08\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L07\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-L09\_GND

<!-- image -->

## MAX86160 Evaluation System

## MAX86160 EV Kit PCB Layout Diagrams (continued)

## MAXSensorBLE\_EVKIT

MAXSensorBLE\_EVKIT-L10\_SIGS

<!-- image -->

MAXSensorBLE\_EVKIT-BOTTOM

<!-- image -->

MAXSensorBLE\_EVKIT-L11\_GND

<!-- image -->

MAXSensorBLE\_EVKIT-SILK\_BOT

<!-- image -->

## MAX86160 EV Kit PCB Layout Diagrams (continued)

## MAX86160\_Flex\_Bd\_EVKIT

<!-- image -->

MAX86160OSBEK#-SILK\_TOP

MAX86160OSBEK#-Top

<!-- image -->

MAX86160OSBEK#-L02\_GND

<!-- image -->

Evaluates: MAX86160

## MAX86160 EV Kit PCB Layout Diagrams (continued)

## MAX86160\_OSB\_EVKIT

<!-- image -->

MAX86160OSBEK#- L03\_SIG

MAX86160OSBEK#-BOTTOM

<!-- image -->

MAX86160OSBEK#-BOTTOM\_SILKSCREEN

<!-- image -->

Evaluates: MAX86160

## MAX86160 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/16            | Initial release                                                                                                                                                                | -               |
|                 1 | 11/18           | Replaced and updated all pages of the data sheet to reflect changes from an Evaluation Kit to an Evaluation System, and a microcontroller board change to a stand-alone board. | 1-30            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX86160