<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAXM86146

## General Description

The MAXM86146 evaluation system (EV system) allows for the quick evaluation of the MAXM86146 optical module for applications at various sites on the body, particularly the wrist. MAXM86146 supports UART, I 2 C, and SPI compatible interfaces. MAXM86146 has two optical readout channels that operate simultaneously. The EV system allows  flexible  configurations  to  optimize  measurement signal quality at minimal power consumption. It helps the user  quickly  learn  about  how  to  configure  and  use  the MAXM86146.

The EV system consists of two boards. MAXSensor BLE# is  the  main  data  acquisition  board  while  MAXM86146\_ OSB#  is  the  sensor  daughter  board  for  MAXM86146. The  EV  system  can  be  powered  using  the  USB-C supply  or  LiPo  Battery.  The  EV  system  comes  with  a MAXM86146CFU+.

## Features

- Quick Evaluation of the MAXM86146
- Supports Optimization of Configurations
- Facilitates Understanding MAXM86146 Architecture and Solution Strategy
- Real-Time Monitoring
- Data Logging Capabilities
- On-Board Accelerometer
- Bluetooth LE

Windows are registered trademarks and registered service marks of Microsoft Corporation.

Click here to ask an associate for production status of specific part numbers.

## MAXM86146 Evaluation System

## Quick Start

## Required Equipment

- MAXM86146 EV system
- Data Acquisition EV system Micro-PCB (MAXSensorBLE#)
- MAXM86146 EV system sensor PCB (MAXM86146\_OSB#)
- Flex cable
- USB-C cable
- MAXM86146 EV system GUI software
- MAXM86146 parser and user guide (included in MAXM86146GUISetupVxxx.ZIP)
- Windows system with a USB port and Bluetooth 4 with BLE supported on its hardware (Win BLE)
- Optional LiPo battery (LP-401230 suggested, not shipped with EV system)

Ordering Information appears at end of data sheet.

319-100549; Rev 1; 4/22

## MAXM86146 Evaluation System

## Procedure

The  EV  system  is  fully  assembled  and  tested.  Use  the following steps to verify board operation:

- 1) Visit www.maximintegrated.com/evkit-software to download the most recent version of the EV system software, MAXM86146GUISetupVxxx\_Web.ZIP. Save the EV system software to a temporary folder and uncompress the ZIP file.
- 2) Enable bluetooth on user's Windows system/PC.

Figure 1. Setup MAXM86146 EV System GUI Software Step 1

<!-- image -->

Evaluates: MAXM86146

- 3) Open up MAXM86146GUISetupVxxx.exe and follow the instructions from the pop-up windows as shown in Figure 1 to Figure 7.
- 4) If the MAXM86146 EV system flex cable is not already connecting the data acquisition EV system micro PCB to the MAXM86146 sensor PCB, then connect the two PCBs with the cable as shown in Figure 8 and Figure 9.

│

## MAXM86146 Evaluation System

- 5) Connect USB-C cable or LiPo battery to the data acquisition board to power up the EV system. If the LiPo battery is used, press the power switch (SW) to turn on/off the device. The green LED toggles, when the power is on.
- 6) Start the MAXM86146 EVSYS GUI program to open the Connect to Device window. Select a device and press the Connect button as shown in Figure 10.

## Evaluates: MAXM86146

- 7) The GUI then launches as shown in Figure 11.
- 8) Configure the EV system on the GUI and click the Start button on the bottom right side to start the data acquisition.
- 9) When running, the LEDs on the micro PCB should illuminate and the plots on the GUI should stream with data as shown in Figure 12 and Figure 13.

Figure 2. Setup MAXM86146 EV System GUI Software Step 2

<!-- image -->

Figure 3. Setup MAXM86146 EV System GUI Software Step 3

<!-- image -->

Figure 4. Setup MAXM86146 EV System GUI Software Step 4

<!-- image -->

Evaluates: MAXM86146

Figure 5. Setup MAXM86146 EV System GUI Software Step 5

<!-- image -->

Evaluates: MAXM86146

Figure 6. Setup MAX86140 EV System GUI Software Step 6

<!-- image -->

Figure 7. Setup MAXM86146 EV System GUI Software Step 7

<!-- image -->

## Evaluates: MAXM86146

Figure 8. Hardware Setup (MAXM86146 EV System Micro PCB)

<!-- image -->

Figure 9. Hardware Setup (MAXM86146 EV System Sensor PCB)

<!-- image -->

│

## MAXM86146 Evaluation System

Evaluates: MAXM86146

Figure 10. Connect to BLE Device

<!-- image -->

Figure 11. MAXM86146 EV System GUI Settings

<!-- image -->

Figure 12. MAXM86146 EV System GUI (PPG Plots)

<!-- image -->

Figure 13. MAXM86146 EV System GUI (Accelerometer Plots)

<!-- image -->

## Detailed Description of Software

The  EV  system  includes  one  sensor  PCB.  It  contains MAXM86146  optical  module,  a  3-axis  accelerometer together, and 4 LEDs (in 3 LED packages). MAXM86146\_ OSB# comes with 1 Red/IR LED package (Osram SFH 7015) and 2 green LEDs (Osram CT DBLP31.12-6C5D56-J6U6). The EV system allows raw optical and accelerometer data to be sampled and transferred to the GUI for both dynamic viewing and logging for later analysis. The EV system microcontroller PCB is used to do SPI to BLE communication, transporting the raw optical, and accelerometer data to the PC through BLE.

Most functionality of the MAXM86146 has been mapped to the GUI so the wide variety of applications supported by the MAXM86146 can be rapidly explored. The following is a brief description of this functionality options.

## Sample Rate

The  sample  rate  can  take  on  values  between  8sps  to 4096sps. The dual pulse mode option are modes where the  samples  are  unevenly  spaced  and  averaged  to improve the ambient rejection of mains line rate ambient signals.

Table 1 shows the maximum supported sampling rates (in sps) for the MAXM86146 for the given number of exposure sequences and use of accelerometer. The maximum sample rate is limited by the BLE protocol, not the AFE itself.

For  a  given  sample  rate,  the  number  listed  can  be increased to the next available MAXM86146 sample rate (i.e., 500sps-512sps).

## Table 1. MAXM86146 Max Sample Rates (sps)

|   ACCELEROMETER NUMBER OF SEQUENCES |   WITH |   WITHOUT |
|-------------------------------------|--------|-----------|
|                                   1 |    500 |      1000 |
|                                   2 |    250 |       500 |
|                                   3 |    125 |       250 |
|                                   4 |    125 |       125 |
|                                   5 |    125 |       125 |
|                                   6 |   62.5 |       125 |

## Integration Pulse Width

The pulse width setting adjusts the integration time of an exposure. The MAXM86146 supports exposure integration  times  of  14.8μs,  29.4μs,  58.7μs,  and  117.3μs.  The exposure pulse width is a critical parameter in any optical measurement. The Longer exposures allow for more optical photons to be integrated but also increase the system power and reduce the ambient rejection capability.

## Burst Rate

When  burst  mode  is  disabled,  PPG  data  conversions are  continuous  at  the  sample  rate  defined  by  PPG\_SR register.  When  Burst  mode  is  enabled,  a  burst  of  PPG data  conversions  occurs  at  the  sample  rate  defined  by sample  rate  (PPG\_SR)  register.  Number  of  conversion in the burst is defined by the SMP\_AVE register. Average data from the burst of data conversions are pushed to the FIFO at the rate of burst average rate. The burst repeats at the rate of 8Hz, 32Hz, 84Hz, or 256Hz can be configured in burst average field. The burst average rate field defines the rate at which data is pushed into the FIFO. If the number of conversions cannot be accommodated, the device  uses  the  next  highest  number  of  conversions.  If the effective sample rate is too slow to accommodate the burst rate programmed, BURST\_EN is automatically set to 0, and the device runs in continuous mode.

## Ambient Light Cancellation

The on-chip ambient light cancellation incorporates a proprietary scheme to cancel ambient light generated photo diode current, allowing the sensor to work in high ambient light conditions.

## ADC Full-Scale Range

The MAXM86146 optical channel has 4 full-scale ranges. These ranges are 4μA, 8μA, 16μA, and 32μA.

## Sample Average

The MAXM86146 has the capability to do sample averaging of 2 ~ 128 samples internally. This feature is useful if more optical energy is needed to make a low perfusion measurement but the data rate across the interface or the processing power in a host micro is not desirable. This mode  is  also  useful  to  further  suppress  the  mains  line noises in indoor lighting conditions.

## MAXM86146 Evaluation System

## PD Bias

The MAXM86146 provides multiple photo diode biasing options.  These  options  allow  the  MAXM86146  to  operate  with  a  large  range  of  photo  diode  capacitance. The PDBIAS values adjust the PD\_IN bias point impedance to ensure that the photo diode settles rapidly enough to support the sample timing. PDBIAS is configured depending on the capacitance (CPD) of the photodiode used.

## LED Sequence Control (FIFO Time Slots)

The  LED  sequence  control  specifies  the  data  acquisition  sequence  that  the  internal  state  machine  controller follows and where the converted data is mapped into the FIFO.

Each  FIFO  field  can  be  applied  to  one  measurement. acquired data can be from LED1, LED2, or LED3 (optical exposure  from  LED1~3)  illuminated  independently.  The LED1 &amp; LED2, LED1 &amp; LED3, LED2 &amp; LED3, and LED1 &amp; LED2 &amp; LED3 are optical exposures from LEDs illuminated simultaneously. The other options are Ambient (optical data with no exposure, just ambient illumination) or None (skip this acquisition). The LED4-6 (Mux Control) are not supported with the sensor PCB. If a custom sensor board with MUX is used, LED4, LED5, and LED6 can also be configured. Only LED1, LED2, and LED3 are available in this EV system.

The  exposure  sequence  is  the  entry  in  sequence  1 (LEDC1)  slot,  sequence  2  (LEDC  2)  slot,  sequence  3 (LEDC3), sequence 4 (LEDC4), sequence 5 (LEDC5) slot then sequence 6 (LEDC6) slot. This sequence repeats for each  sample  instance.  Each  Sequence  if  programmed, will be plot in the PPG Plot x tabs respectively as shown in Figure 12.

Refer  to  the  MAXM86146  data  sheet  under FIFO Configuration section for details.

## LED Driver Configurations

Each  of  the  three  LED  drivers  has  a  range  and  peak LED current setting. There are 4 full-scale range settings 31mA, 62mA, 93mA, and 124mA. Each range has an 8-bit current source DAC. The peak LED current box allows for an  actual  current  to  be  entered.  The  nearest  available DAC current is selected and displayed in the field.

## LED Settling Time

The LED settling time is the time prior to the start of integration  (pulse-width  setting)  that  the  LED  is  turned  on. There are  four  settlings,  12μs,  8μs,  6μs,  and  4μs.  This time is necessary to allow the LED driver to settle before integrating the exposure photo current.

## GPIO Control

Various  options  of  GPIO  controls  are  available  on MAXM86146.  For  the  EV  system,  when  set  to  GPIO options  2,  the  sample  rate  is  triggered  by  the  on-board accelerometer.

Please refer to the MAXM86146 data sheet under GPIO Configuration section for details.

## Accelerometer Configuration

The on-board accelerometer can be enabled or disabled by  using  the  GUI.  Supported  accelerometer  full-scale range are ±2g, ±4g, ±8g, and ±16g. The output data of the accelerometer can also be configured from 15.63Hz to 2000Hz when used with GPIO control option 2.

## Picket Fence Configuration

Under  typical  situations,  the  rate  of  change  of  ambient light is such that the ambient signal level during exposure can  be  accurately  predicted  and  high  levels  of  ambient rejection  are  obtained.  However,  it  is  possible  to  have situations where the ambient light level changes extremely rapidly, for example when in a car with direct sunlight exposure passes under a bridge and into a dark shadow. In these situations, it is possible for the on-chip ambient light correction (ALC) circuit to fail and produce and erroneous estimation of the ambient light during the exposure interval.  The  optical  controller  has  a  built-in  algorithm, call  the  picket  fence  function,  that  can  correct  for  these extreme conditions resultant failure of the ALC circuit.

Refer to the MAXM86146 data sheet under Picket Fence Detect-and-Replace Function section for details.

## Proximity Configuration

The  optical  controller  also  includes  an  optical  proximity  function which could significantly reduce energy consumption and extend battery life when the sensor is not in contact with the skin.

Refer  to  the  MAXM86146  data  sheet  under Proximity Mode section for details.

## MAXM86146 Evaluation System

## System Control

When the MAXM86146 is used, it uses Dual PD simultaneously (PD1 and PD2). The data log shows data from both PD for each configured sequence.

## Start and Stop Button

The Start Monitor button is used to start data acquisition from the demo. The Start Monitor button is only effective when the EV system is connected and detected. Once the Start  has  been  pushed the Stop button  appears,  which can be used to stop the acquisition. Once the acquisition has started, all settings are locked. Terminate the acquisition to change any settling.

## Reset Button

The Reset button clears out all register settlings back to the programs start up.

## Data Logging

Raw optical and accelerometer data can be logged from the Logging pulldown menu item. There are two options available: Data saved to file or in the flash. When file data logging  is  selected,  the  GUI  asks  for  a  folder  location where the logging file  is  saved.  Create  a  new  folder  or accept the default. Data logging starts on the next Start button and continues until the Stop button is pressed. The final file write is only done when the File pulldown menu item is accessed and the data-logging button is pressed.

Flash  logging  allows  raw  sensor  data  to  be  stored  to the  integrated  32MB  flash  memory  chip  in  a  binary  file format. The max duration for flash logging is dependent on: sample rate, number of optical channels, and use of accelerometer.

The GUI enables/disables flash logging. It can be disconnected while flash logging, allowing for remote operation (PPG  plots  not  available).  Preparing  the  flash  memory can take up to 30s after enabling. If the flash memory fills or battery power drops too low, flash logging automatically stops and the file closes. Only one file can be saved at a time. The file must be downloaded since it is erased on the next log request.

If a log has completed, a binary file is found on the device. The binary log  file  must  be  downloaded  via  the  USB-C cable; it cannot be downloaded through BLE. When the device is plugged into the PC, it enumerates as a USB mass storage device. However, the file can only be copied from  this  device.  No  other  operations  (such  as  deleting or saving other files) works on this device. Copy the file to a local PC volume. Then run the parser to generate a CSV file.

## Evaluates: MAXM86146

Refer to the Evaluation Kit Parser User Guide (MAX8614x demo + eval kit parser user guide 20170719.pdf) for the details operation.

## Register Map Access

Under the Registers tab the user can access to sensor register map as shown in Figure 14. Click the Read All button,  to  read  all  the  register  value  currently  in  configured in the Optical AFE. Bolded font bits are logic one. Normal font bits are logic zero. Click on the bits to toggle their value and click on W to write the value to the device. The  register  value  does  not  change  until W is  clicked. Click R to read the register value to verify the write.

## Detailed Description of Hardware

## Status LED Indicators

The on-board tri-color LEDs are use as status indicator.

## LED Green

Toggling (1Hz 50% duty cycle) = BLE advertising Toggling (1Hz 10% duty cycle) = BLE connected

## LED Red

USB-C cable connected to charger

On = charging

Off = charge complete

## Flash Logging

On = busy preparing the flash memory or flash memory is full  toggling  (synchronously  with  the green LED) = logging

Off = not logging

Note that flash logging indication takes precedence over the charging indication. I.e., if the device is plugged into a  charger,  the  red  LED  indicates  charge  status.  If  flash logging is enabled while plugged into the charger, the red LED indicates flash log status.

## Power Switch

Press  the  power  switch  (SW)  to  turn  on/off  the  device. When powered on, the green LED toggles per the LED indicator section. When powered off, the green LED goes out. The red LED may light temporarily, indicating that the flash log is closing. Plugging in the USB-C cable is also power up the device.

## Battery/Charging

Use the USB-C cable to charge the integrated singlecell LiPo battery. The integrated PMIC initiates and stops charging automatically. Charge status is indicated through the red LED and GUI.

## MAXM86146 Evaluation System

Figure 14. Register Map Access

<!-- image -->

## Ordering Information

| PART            | TYPE      |
|-----------------|-----------|
| MAXM86146EVSYS# | EV system |

#Denotes RoHS compliance.

## Component List

## MAXM86146 EV System

| PART            |   QTY | DESCRIPTION                    |
|-----------------|-------|--------------------------------|
| MAXSensorBLE#   |     1 | MAXM86146 EV System µC PCB     |
| MAXM86146_OSB#  |     1 | MAXM86146 EV System sensor PCB |
| 150150225       |     1 | Molex, flex cable, 25 pin      |
| 101181XX-000XXX |     1 | USB-C to USB-A cable, 3ft      |

│

## MAXM86146 Evaluation System

## MAXM86146 EV System Bill of Materials

## MAXSensorBLE#

|   ITEM |   QTY | REF DES                             | DNI/DNP   | MFG PART #                                                                | MANUFACTURER               | VALUE               | DESCRIPTION                                                                                                                                                               |
|--------|-------|-------------------------------------|-----------|---------------------------------------------------------------------------|----------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     1 | A1                                  | -         | 2450AT18A100                                                              | JOHANSON TECHNOLOGY        | 2450AT18A100        | ANTENNA; 2450AT SERIES; BOARDMOUNT; MINI 2.45 GHZANTENNA; 2450MHz                                                                                                         |
|      2 |     1 | BAT                                 | -         | B2B-PH-K-S(LF)(SN)                                                        | JST MANUFACTURING          | B2B-PH-K-S(LF)(SN)  | CONNECTOR; MALE; THROUGH HOLE; PH CONNECTOR; 2MM PITCH; SHROUDED HEADER; STRAIGHT; 2PINS                                                                                  |
|      3 |    11 | C1, C22, C26, C30-C37               | -         | GRM033R61A104KE15; LMK063BJ104KP                                          | MURATA;TAIYO YUDEN         | 0.1µF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 10V; TOL=10%; MODEL = ; TG = -55°C TO +125°C; TC = X5R                                                                        |
|      4 |     9 | C2, C15, C25, C38-C43               | -         | GRM033R61A105ME15                                                         | MURATA                     | 1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 1µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                   |
|      5 |     7 | C3, C4, C8, C9, C12, C16, C27       | -         | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC | MURATA;SAMSUNG; MURATA;TDK | 4.7µF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL=20%; TG = -55°C TO +85°C; TC = X5R                                                                                   |
|      6 |     7 | C5-C7, C10, C13, C14, C47           | -         | GRM155R60J226ME11                                                         | MURATA                     | 22µF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 22µF; 6.3V; TOL = 20%; TC = X5R ; NOTE: THESE PARTS HAVE 52 WEEKS LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT |
|      7 |     1 | C19                                 | -         | GJM0335C1E1R0WB01                                                         | MURATA                     | 1PF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL = 0.05PF; TG = -55°C TO +125°C; TC = C0G                                                                               |
|      8 |     7 | C20, C21, C28, C29, C45, C46, Z44   | -         | GRM0335C1H120GA01                                                         | MURATA                     | 12PF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 12PF; 50V; TOL = 2%; TG = -55°C TO +125°C; TC = C0G                                                                                  |
|      9 |     2 | C23, C24                            | -         | GRM0335C1H101JA01                                                         | MURATA                     | 100PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                 |
|     10 |     1 | CN1                                 | -         | DX07S024JJ3R1300                                                          | JAE ELECTRONIC INDUSTRY    | DX07S024JJ3         | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHTANGLE; 24PINS                                                                                  |
|     11 |     2 | DS1, DS2                            | -         | SML-P11UTT86                                                              | ROHM                       | SML-P11UTT86        | DIODE; LED; SMT; PIV = 1.8V; IF = 0.02A                                                                                                                                   |
|     12 |     1 | J3                                  | -         | 5035662500                                                                | MOLEX                      | 5035662500          | CONNECTOR; FEMALE; SMT; EASY-ON TYPE HOUSING ASSEMBLY; RIGHTANGLE; 25PINS                                                                                                 |
|     13 |     2 | L1, L2                              | -         | DFE18SBN2R2MELL                                                           | MURATA                     | 2.2UH               | EVKIT PART - INDUCTOR; SMT (0603); SHIELDED; 2.2µH; 20%; 1.2A                                                                                                             |
|     14 |     1 | L3                                  | -         | DFE201610E-4R7M=P2                                                        | MURATA                     | 4.7UH               | INDUCTOR; SMT (2016); METALALLOY CHIP; 4.7µH; TOL = ±20%; 1.3A                                                                                                            |
|     15 |     1 | L4                                  | -         | LQP03HQ3N3B02                                                             | MURATA                     | 3.3NH               | INDUCTOR; SMT (0201); FILM TYPE; 3.3NH; TOL = ±0.1nH; 0.5A                                                                                                                |
|     16 |     1 | LED                                 | -         | SML-LX0404SIUPGUSB                                                        | LUMEX OPTO COMPONENTS INC  | SML- LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF = 2 95V; IF = 0.1A                                                                                 |
|     17 |    11 | R2, R3, R11, R15, R24, R27-R31, R34 | -         | ERJ-2GE0R00                                                               | PANASONIC                  | 0                   | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                         |

Evaluates: MAXM86146

## MAXM86146 EV System Bill of Materials (continued)

## MAXSensorBLE#

|   ITEM |   QTY | REF DES                         | DNI/DNP   | MFG PART #        | MANUFACTURER         | VALUE             | DESCRIPTION                                                                                                                                  |
|--------|-------|---------------------------------|-----------|-------------------|----------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|     18 |     2 | R5, R9                          | -         | ERJ-1GEF1002      | PANASONIC            | 10K               | RESISTOR; 0201; 10KΩ; 1%; 200PPM; 0.05W; THICK FILM                                                                                          |
|     19 |     7 | R6, R7, R16, R17, R23, R25, R26 | -         | ERJ-1GEF4701C     | PANASONIC            | 4.7K              | RESISTOR; 0201; 4.7KΩ; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                       |
|     20 |     1 | R8                              | -         | ERJ-1GEF3902      | PANASONIC            | 39K               | RESISTOR; 0201; 39KΩ; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                        |
|     21 |     1 | R10                             | -         | NCP15XH103F03     | MURATA               | 10K               | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL = ±1%                                                                           |
|     22 |     1 | R13                             | -         | ERJ-1GEF2613C     | PANASONIC            | 261K              | RESISTOR; 0201; 261KΩ; 1%; 200PPM; 0.05W; THICK FILM                                                                                         |
|     23 |     1 | R14                             | -         | CRCW0201100KFK    | VISHAY DALE          | 100K              | RESISTOR; 0201; 100KΩ; 1%; 100PPM; 0.05W; THICK FILM                                                                                         |
|     24 |     2 | R18, R19                        | -         | ERJ-1GEF2000C     | PANASONIC            | 200               | RESISTOR; 0201; 200Ω; 1%; 200PPM; 0.05W; THICK FILM                                                                                          |
|     25 |     4 | RA1-RA4                         | -         | ERJ-1GEF33R0C     | PANASONIC            | 33                | RESISTOR; 0201; 33Ω; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                         |
|     26 |     1 | SW                              | -         | EVP-AWCD2A        | PANASONIC            | EVP-AWCD2A        | SWITCH; SPST; SMT; STRAIGHT; 15V; 0.02A; EVP-AW SERIES                                                                                       |
|     27 |     1 | U1                              | -         | MAX20303KEWN+     | MAXIM                | MAX20303KEWN+     | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21- 100104 |
|     28 |     1 | U2                              | -         | NRF52832-CIAA     | NORDIC SEMICONDUCTOR | NRF52832-CIAA     | IC; SOC; MULTIPROTOCOL BLUETOOTH LOW ENERGY; ANT; 2.4GHZ RF SOC; WLCSP50                                                                     |
|     29 |     5 | U3-U6, U9                       | -         | MAX14689EWL+      | MAXIM                | MAX14689EWL+      | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED-CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                                    |
|     30 |     1 | U7                              | -         | IP4221CZ6-S       | NXP                  | IP4221CZ6-S       | IC; PROT; ESD PROTECTION FOR HIGH-SPEED INTERFACE; XSON6                                                                                     |
|     31 |     1 | U8                              | -         | S25FS256SAGNFI001 | SPANSION             | S25FS256SAGNFI001 | IC; MMRY; MIRRORBIT FLASH; NON-VOLATILE MEMORY; 1.8V SINGLE SUPPLY WITH CMOS I/O; SERIAL PERIPHERAL INTERFACE WITH MULTI- I/O; WSON8-EP      |
|     32 |     2 | U10, U11                        | -         | MAX9062EBS+G45    | MAXIM                | MAX9062EBS+G45    | IC; COMP; ULTRA-SMALL; LOW-POWER SINGLE COMPARATOR; UCSP4                                                                                    |
|     33 |     1 | U12                             | -         | MAX32620IWG+      | MAXIM                | MAX32620IWG+      | IC; UCON; HIGH-PERFORMANCE; ULTRA-LOW POWER CORTEX-M4F MICROCONTROLLER FOR RECHARGEABLE DEVICES; WLP81                                       |

## MAXM86146 EV System Bill of Materials (continued)

## MAXSensorBLE#

| ITEM   |   QTY | REF DES                        | DNI/DNP   | MFG PART #        | MANUFACTURER          | VALUE         | DESCRIPTION                                                                                 |
|--------|-------|--------------------------------|-----------|-------------------|-----------------------|---------------|---------------------------------------------------------------------------------------------|
| 34     |     1 | U13                            | -         | 74AUP1G97GF       | NXP                   | 74AUP1G97GF   | IC; LOGC; LOW-POWER CONFIGURABLE MULTIPLE FUNCTION GATE; XSON6                              |
| 35     |     1 | U29                            | -         | MAX1819EBL33+     | MAXIM                 | MAX1819EBL33+ | IC; VREG; 500MALOW-DROPOUT LINEAR REGULATOR IN UCSP; UCSP6                                  |
| 36     |     2 | X2, Y2                         | -         | ECS-.327-6-12     | ECS INC               | 32.768KHZ     | CRYSTAL; SMT 2.0 MM X 1.2 MM; 6PF; 32.768KHZ; ±20PPM; -0.03PPM/°C2                          |
| 37     |     1 | Y1                             | -         | US3200005Z        | PERICOM SEMICONDUCTOR | 32MHZ         | CRYSTAL; SMT 1.6 MM X 1.2MM; 8PF; 32MHZ; ±10PPM; ±10PPM                                     |
| 38     |     1 | PCB                            | -         | MAXSENSORBLE      | MAXIM                 | PCB           | PCB:MAXSENSORBLE                                                                            |
| 39     |     0 | R1, R4, R12, R20-R22, R32, R33 | DNP       | ERJ-2GE0R00       | PANASONIC             | 0             | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                           |
| 40     |     0 | Z17                            | DNP       | GJM0335C1E1R0WB01 | MURATA                | 1PF           | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL = 0.05PF; TG = -55°C TO +125°C; TC = C0G |
| 41     |     0 | Z18                            | DNP       | 250R05L1R8AV4     | JOHANSON TECHNOLOGY   | 1.8PF         | CAPACITOR; SMT (0201); MICROWAVE; 1.8PF; 25V; TOL=0.05PF; TG = -55°C TO +125°C; TC = C0G    |
| 42     |     0 | Jan-36                         | DNP       | N/A               | N/A                   | N/A           | TEST POINT; PAD DIA = 0.762MM; BOARD HOLE = 0.381MM                                         |
| TOTAL  |   104 |                                |           |                   |                       |               |                                                                                             |

Evaluates: MAXM86146

## MAXM86146 EV System Bill of Materials (continued)

## MAXM86146\_OSB#

| ITEM   |   QTY | REF DES             | DNI/DNP   | MFG PART #                                                         | MANUFACTURER          | VALUE                      | DESCRIPTION                                                                                                                                                          |
|--------|-------|---------------------|-----------|--------------------------------------------------------------------|-----------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     6 | C1-C3, C13 C15, C17 | -         | GRM033R61A105ME15                                                  | MURATA                | 1uF                        | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                              |
| 2      |     1 | C4                  | -         | GRM155R61A106ME44 GRM155R61A106ME11 0402ZD106MAT2A CL05A106MP5NUNC | MURATA                | 10uF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                             |
| 3      |     8 | C5-C10 C12, C16     | -         | GRM155R60J226ME11                                                  | MURATA                | 22uF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;NOTE: THESE PARTS HAVE 52 WEEKS LEAD TIME; MANUFACTURING DELAYS HAVE BEEN REPORTED ON THIS PRODUCT |
| 4      |     1 | D1                  | -         | SFH 7015                                                           | OSRAM                 | SFH 7015                   | EVKIT PART -DIODE; LED; RED-INFRARED; SMT                                                                                                                            |
| 5      |     2 | DS1, DS2            | -         | CT DBLP31.12-6C5D- 56-J6U6                                         | OSRAM                 | CT DBLP31.12-6C5D- 56-J6U6 | DIODE; LED; GREEN; SMT; VF=2.3V; IF=0.02A                                                                                                                            |
| 6      |     1 | J1                  | -         | 5016162575                                                         | MOLEX                 | 5016162575                 | CONNECTOR; FEMALE; SMT; EASY-ON TYPE FPC CONNECTOR; RIGHTANGLE; 25PINS                                                                                               |
| 7      |     1 | R1                  | -         | CRCW02010000ZS;ERJ- 1GN0R00                                        | VISHAY DALE PANASONIC | 0                          | RESISTOR; 0201; 0 OHM; 0%; JUMPER; 0.05W; THICK FILM                                                                                                                 |
| 8      |     2 | R7, R8              | -         | ERJ-1GNF1003                                                       | PANASONIC             | 100K                       | RESISTOR; 0201; 100K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                                              |
| 9      |     1 | U1                  | -         | MAXM86146                                                          | MAXIM                 | MAXM86146                  | EVKIT PART - IC; MOD; OPTICAL BIO-SENSING MODULE WITH LOW-POWERARM CORTEX-M4; OLG38; DIE TYPE: OB07; PACKAGE OUTLINE: 21-100323; PACKAGE LAND PATTERN: 90- 100112    |
| 10     |     1 | U2                  | -         | KX122-1037                                                         | KIONIX                | KX122-1037                 | IC; SNSR; +/-2G/4G/8G TRI-AXIS DIGITAL ACCELEROMETER; LGA12                                                                                                          |
| 11     |     1 | U4                  | -         | MAX14689EWL+                                                       | MAXIM                 | MAX14689EWL+               | IC; ASW; ULTRA-SMALL LOW-RON BEYOND- THE-RAILS DPDTANALOG SWITCHES; WLP9                                                                                             |
| 12     |     1 | Y1                  | -         | CM1610H32768DZB                                                    | CITIZEN               | 32.7680KHZ                 | CRYSTAL; SMT 1.6MMX1MM; 6PF; 32.7680KHZ; +/-20PPM                                                                                                                    |
| 13     |     1 | PCB                 | -         | MAXM86146OSB                                                       | MAXIM                 | PCB                        | PCB:MAXM86146OSB                                                                                                                                                     |
| 1      |     1 | R2                  | DNP       | CRCW02010000ZS;ERJ- 1GN0R00                                        | VISHAY DALE;PANASONIC | 0                          | RESISTOR; 0201; 0 OHM; 0%; JUMPER; 0.05W; THICK FILM                                                                                                                 |
| TOTAL  |    28 |                     |           |                                                                    |                       |                            |                                                                                                                                                                      |

Evaluates: MAXM86146

## MAXM86146 Evaluation System

## MAXM86146 EV System Schematics

## MAXSensorBLE#

<!-- image -->

## MAXM86146 Evaluation System

## MAXM86146 EV System Schematics (continued)

## MAXSensorBLE#

<!-- image -->

## MAXM86146 EV System Schematics (continued)

## MAXSensorBLE#

<!-- image -->

## MAXM86146 EV System Schematics (continued)

## MAXSensorBLE#

<!-- image -->

## MAXM86146 EV System Schematics (continued)

MAXM86146\_OSB#

<!-- image -->

## MAXM86146 Evaluation System

## MAXM86146 EV System PCB Layouts

## MAXSensorBLE#

MAXSensorBLE EV System-Top Silkscreen

<!-- image -->

MAXSensorBLE EV System-Top

<!-- image -->

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-L02\_GND

<!-- image -->

MAXSensorBLE EV System-L03\_SIGS

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-L04\_SIGS

MAXSensorBLE EV System-L05\_SIGS

<!-- image -->

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-L06\_SIGS

<!-- image -->

MAXSensorBLE EV System-L07\_SIGS

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-L08\_SIGS

<!-- image -->

MAXSensorBLE EV System-L09\_GND

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-L10\_SIGS

MAXSensorBLE EV System-L11\_GND

<!-- image -->

│

## MAXM86146 EV System PCB Layouts (continued)

## MAXSensorBLE#

<!-- image -->

MAXSensorBLE EV System-BOTTOM

<!-- image -->

MAXSensorBLE EV System-Bottom Silkscreen

│

## MAXM86146 Evaluation System

## MAXM86146 EV System PCB Layouts

## MAXM86146\_OSB#

MAXM86146OSBEK#-Top Silkscreen

<!-- image -->

MAXM86146OSBEK#-Top

<!-- image -->

MAXM86146OSBEK#-L02\_GND

<!-- image -->

│

## MAXM86146 Evaluation System

## MAXM86146 EV System PCB Layouts (continued)

## MAXM86146\_OSB#

MAXM86146OSBEK#- L03\_SIG

<!-- image -->

MAXM86146OSBEK#-Bottom

<!-- image -->

│

## MAXM86146 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/20            | Initial release                                                                                                     | -               |
|                 1 | 4/22            | Updated Required Equipment and Procedure sections, removed Figure 8, replaced Figure 10, and updated Component List | 1, 2, 8, 10, 16 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAXM86146