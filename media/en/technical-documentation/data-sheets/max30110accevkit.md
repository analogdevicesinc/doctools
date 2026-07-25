<!-- lastmod 2022-08-03 -->
## MAX30110 Evaluation Kit

## General Description

The MAX30110 evaluation kit (EV kit) allows for the quick evaluation of the MAX30110 and MAX30112 optical AFE for applications at various sites on the body, particularly the  wrist.  MAX30110  supports  standard  SPI  compatible interface,  whereas  MAX30112  supports  I 2 C  compatible interface.  The  EV  kit  allows  flexible  configurations  to optimize  measurement  signal  quality  at  minimal  power consumption. The EV kit helps the user quickly learn how to configure and use the MAX30110 and MAX30112.

The  EV  kit  consists  of  three  boards.  MAX30110\_UC\_ EVKIT is the main data acquisition board while MAX30110\_ SFH7050\_EVKIT  and  MAX30110\_OSB\_EVKIT  are  the sensor daughter boards in which the MAX30110 devices are placed in different optical configurations. The EV kit is powered using the USB supply to generate +1.8V for the AFE and accelerometer and +4.5V for the LEDs.

The EV kit comes with a MAX30110EWG+ in a 24-bump wafer-level package (WLP).

## Features

- Quick Evaluation of the MAX30110
- Supports Optimization of Configurations
- Facilitates Understanding MAX30110 Architecture and Solution Strategy
- Real-Time Monitoring
- Data-Logging Capabilities
- USB-Powered
- On-Board Accelerometer

Ordering Information appears at end of data sheet.

Evaluates: MAX30110 and MAX30112

## Quick Start

## Required Equipment

- MAX30110 EV Kit
- MAX30110 EV Kit Micro-PCB (MAX30110\_UC\_EVKIT)
-  MAX30110 EV Kit Sensor PCB 1 (MAX30110\_OSB\_EVKIT)
-  MAX30110 EV Kit Sensor PCB 2 (MAX30110\_SFH7050\_EVKIT)
- 10-pin Flex cable
- Micro-USB cable
- MAX30110 EV Kit GUI Software
- Windows PC

## Procedure

- 1) The EV kit is fully assembled and tested. Follow  the  steps  below  to  verify  board  operation: Visit www.maximintegrated.com/evkit-software to  download  the  most  recent  version  of  the  EV kit software, MAX30110GUISetupVxxx\_Web.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Open  up  MAX30110GUISetupVxxx.exe  and  follow the instructions from the pop-up windows as shown in Figure 1 , Figure 2 , Figure 3 , and Figure 4 .
- 3) If  the  MAX30110  EV  kit  10-pin  flex  cable  is  not already  connecting  the  MAX30110  EV  kit  microPCB to the MAX30110 EV kit sensor PCB 1/2, then connect  the  two  PCBs  with  the  cable  as  shown  in Figure 5 , Figure 6 , Figure 7 , Figure 8 , and Figure 9 .
- 4) Use the micro-USB cable to connect the MAX30110 EV Kit micro-PCB to any USB adapter in a Window 7, or Window 10 compatible PC.
- 5) After that, start the MAX30110 EV kit GUI program. The GUI will be launched as shown in Figure 10 .
- 6) Look for the 'Connected' statement in the lower right hand of the GUI as shown in Figure 10. If 'Disconnected'  is  shown  in  the  Connection  Status,  please check the USB connection.
- 7) Click on the &lt;Start Monitor&gt; button on the left side to start the data acquisition.
- 8) When running,  the  LEDs  on  the  micro-PCB  should illuminate  and  the  five  graphs  on  the  GUI  should stream with data.

<!-- image -->

Figure 1. MAX30110 EV Kit-Setup GUI Software Step 1

<!-- image -->

Figure 2. MAX30110 EV Kit-Setup GUI Software Step 2

<!-- image -->

Figure 3. MAX30110 EV Kit-Setup GUI Software Step 3

<!-- image -->

Figure 4. MAX30110 EV Kit-Setup EVKIT GUI Software Step 4

<!-- image -->

Figure 5. MAX30110 EV Kit-Hardware Setup (Micro-PCB)

<!-- image -->

Figure 6. MAX30110 EV Kit-Hardware Setup (Sensor PCB 1)

<!-- image -->

## Evaluates: MAX30110 and MAX30112

Figure 7. MAX30110 EV Kit-Hardware Setup (Sensor PCB 1 - Top View)

<!-- image -->

Figure 8. MAX30110 EV Kit-Hardware Setup (Sensor PCB 2 - Bottom View)

<!-- image -->

Figure 9. MAX30110 EV Kit-Hardware Setup (Sensor PCB 2 - Top View)

<!-- image -->

Figure 10. MAX30110 EV Kit-GUI

<!-- image -->

## Detailed Description of Software

The MAX30110 EV kit includes two sensor PCBs. Each contains a MAX30110 optical AFE, a 3-axis accelerometer together with two different  photodiodes  and  LEDs combination.  MAX30110\_OSB\_EVKIT  comes  with  a discreet photodiode (TEMD5010X01) and two green LEDs (LT  P4SG-V1AB-36-F),  while  MAX30110\_SFH7050\_ EVKIT comes with OSRAM SFH7050 integrated module. SFH7050 consists of an integrated photodiode and three LEDs (Red/Green/Infrared). The EV kit allows raw optical and  accelerometer  data  to  be  sampled  and  transferred to the GUI for both dynamic viewing and logging for later analysis.  The  MAX30110  EV  kit  microcontroller  PCB  is used to do SPI to HID transaction translation, transporting the raw optical and accelerometer data to the PC through the USB.

Most functionality of the MAX30110 has been mapped to the GUI so the wide variety of applications supported by the MAX30110 can be rapidly explored. The following is a brief description of this functionality's options.

Note that the accelerometer is operated in the 8G gain mode and its sampling rate is set to nominally match the selected sample rate of the MAX30110 with the exception of the 84sps. The two devices control sample rates internally and are inherently asynchronous. Thus the log file generated includes  a  sample  time  column  that  is  unique  for  each device.

## Sample Rate

The  sample  rate  can  take  on  values  between  25  to 400sps.  The  values  marked  with  a  (2)  are  dual  pulse modes. These are modes where the samples are unevenly spaced  and  averaged  to  improve  the  ambient  rejection of  mains  line  rate  ambient  signals.  The  MAX30110  can support rates up to 3.2ksps but the HID interface for the MAX30110  EV-kit  has  insufficient  bandwidth  to  support rates above 400sps. Thus, these higher rates are unavailable in the MAX30110 EV kit.

## Low Power Mode

Low power is  an  auto-shutdown  mode  that  significantly reduces the average power of the AFE. This is available for all sample rates at or below 100sps. If sample rates above 100sps is selected the MAX30110 will run in regular power mode.

## Sample Average

The MAX30110 has the capability to do sample averaging of 2, 4, 8, 16, and 32 samples internally. This feature is useful if more optical energy is needed to make a low

## Evaluates: MAX30110 and MAX30112

perfusion  measurement  but  the  data  rate  across  the interface or the processing power in a host micro is not desirable. This mode is also useful to further suppress the mains line noises in indoor lighting conditions.

## Pulse Width

The pulse width setting adjusts the integration time of an exposure. The MAX30110 supports exposure integration times of 52μs, 104μs, 208μs, and 417μs. The integrated pulse width is a critical parameter in any optical measurement. Longer  exposures  allow  for  more  optical  photons  to  be integrated  but  also  increase  system  power  and  reduce ambient rejection capability.

Longer  exposures  also  reduce  the  MAX30110  effective noise  bandwidth and reduce the quantization step size. With a 417μs integration time, the MAX30110 quantization level equals the full-scale range/2 19 . This quantization level reduces by a factor of two with each factor of two reduction in pulse width such that the quantization level with a 50μs integration time is full-scale range/2 16 .

The logged data and displayed graph continue to show a  19-bit  signal  range  regardless  of  integration  time. However, the LSBs at shorter pulse widths are fixed at zero.  Thus  with  a  pulse  integration  time  of  417μs,  all 19-bits are active. At 208μs pulse width, the upper 18-bits are active and the LSB is fixed at zero. At 104μs pulse width, the upper 17-bits are active and the two lower bits (B1 and B0) are fixed at zero. Finally at 52μs pulse width, the upper 16-bits are active and the lower three bits (B2, B1, and B0) are fixed at zero.

## ADC Full-Scale Range

The MAX30110 optical channel has 4 gain ranges. When the feedback DAC (see below) is enabled, these ranges are 6μA, 12μA, 24μA, 48μA. When the feedback DAC is disabled,  these  ranges  drop  by  a  factor  of  8  (3-bits)  to 0.75μA, 1.5, 3μA, and 6μA.

## Feedback DAC

The feedback DAC is a dynamic range extension to the native  16-bit  ΔΣ  ADC.  When  enabled,  the  optical  ADC channel is extended to 19-bits. When disabled the optical ADC channel has 16-bits of resolutions. This feature was added because virtually all the DNL in the converter comes from the  feedback  DAC. Thus,  by  disabling  this DAC, one can significantly improve the DNL of the ADC with  a  compromise  in  overall  dynamic  range.  Note  that when  disabling  the  feedback  DAC,  the  full-scale  gain ranges all divide by a factor of 8x.

## MAX30110 Evaluation Kit

## Add Offset

Add  Offset  is  a  test  option  designed  for  dark  current measurement. By adding offset to the PPG Data would allow  dark  current  measurement  without  clipping  the signal below 0. When Add Offset is On, an offset is added to the PPG Data to be able to measure the dark current. The offset is 8192 counts if Sample Rate is programmed for single-pulse mode. The offset is 4096 counts if PPG\_SR is programmed for dual-pulse mode.

## AFE Supply Current

Average AFE supply current is computed from the AFE settings and displayed. This is not a measured current but is computed from measured models.

## LED Driver Settings

Each of the two LED drivers has a Range and Peak LED Current setting. There are 4 full-scale range settings 50mA, 100mA,  150mA  and  200mA.  Each  range  has  an  8-bit current  source  DAC. The  Peak  LED  Current  box  allows for an actual current to be entered. The nearest available DAC current is selected and displayed in the field.

## Avg LED Current

The  Avg  LED  Current  field  displays  the  average  LED current based on the current AFE and LED settlings. This is a computed value based on measure characterization data. This value assumes the LED current source is fully saturated.

## LED Settling Time

The  LED  Settling  Time  is  the  time  prior  to  the  start  of integration  (pulse-width  setting)  that  the  LED  is  turned on.  There  are  four  settlings,  20μs  (default),  10μs,  5μs, and 2.5μs. This time is necessary to allow the LED driver to settle before integrating the exposure photo current. In practice 5μs proves to be sufficient LED settling time for low-noise applications.

## LED Mode Timing Slots

The LED Mode Timing Slots specifies the data acquisition sequence  that  the  internal  state  machine  controller  will follow and where the converted data will be mapped into the FIFO. Each FIFO field can be applied to one measure -ment. Acquired data can be LED1 (optical exposure from LED1  illumination),  LED2  (optical  exposure  from  LED2

## Evaluates: MAX30110 and MAX30112

illumination),  LED1  and  LED2  (optical  exposure  from LED1  and  LED2  fired  simultaneous),  Ambient  (optical data with no exposure, just ambient illumination) or None (skip this acquisition). The exposer sequence will be the entry in FIFO1 slot, FIFO2 slot, FIFO3 slot, then FIFO4 slot. This sequence will repeat for each sample instance. The data from FIFO4 Slot will not be plotted in the GUI, but will be saved to the log file.

## &lt;Start Monitor&gt;/&lt;Stop Monitor&gt; Button

The &lt;Start Monitor&gt; button is used to start data acquisition from  the  demo.  The  &lt;Start  Monitor&gt;  button  will  only be  highlighted  when  the  MAX301100  EV-kit  USB  is connected and detected. Once the &lt;Start Monitor&gt; has been pushed the &lt;Stop Monitor&gt; button appears, which can be used to stop the acquisition. Once the acquisition has started, all settling are locked. T erminate the acquisition to change any settling.

## &lt;Restore Defaults&gt; Button

The &lt;Restore Defaults&gt; button will clear out all register settlings back to the programs start up.

## Data Logging

Raw optical and accelerometer data can be logged from the  &lt;File&gt;  pull-down  menu  item.  When  data  logging  is selected, the GUI asks for a filename with a default timestamped entered into the familiar &lt;filename&gt; field. Enter a  new  filename  or  accept  the  default.  Data  logging  will start on the next &lt;Start Monitor&gt; button and will continue until the &lt;Stop Monitor&gt; button is pressed. The final file write is only done when the &lt;File&gt; pull-down menu item is accessed and the data-logging button is pressed.

## Direct Register Write

Under the &lt;Options&gt; pull-down menu is a direct register write  button.  This  button  opens  two  fields,  an  address and  data  field,  below  the  LED  Mode  Timing  Slots  box. Any register address byte and data byte can be entered in these fields. Caution should be exercised when using this feature. Some of these registers will result in undocumented behavior. There is no risk of damaging the part. However,  it  is  possible  to  lock  up  the  part,  requiring  a power  cycle  induced,  power  on  reset  (unplug  the  USB and plug it back in again) to exit a locked-up condition.

## MAX30110 EV Kit Bill of Materials

## MAX30110\_UC\_EVKIT

|   ITEM |   QTY | REF DES             | MFG PART #                                              | MANUFACTURER                | VALUE          | DESCRIPTION                                                                                                |
|--------|-------|---------------------|---------------------------------------------------------|-----------------------------|----------------|------------------------------------------------------------------------------------------------------------|
|      1 |     5 | C1, C6, C7, C9, C13 | C0603C104K4RACAUTO                                      | KEMET                       | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R AUTO            |
|      2 |     1 | C2                  | GRM32ER71H106KA12L; CL32B106KBJNNN                      | MURATA; SAMSUNG ELECTRONICS | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                  |
|      3 |     4 | C3, C4, C8, C14     | UMK107AB7105KA                                          | TAIYO YUDEN                 | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                   |
|      4 |     2 | C5, C12             | C1608X5R1E475K080AC; GRM188R61E475KE11                  | TDK; MURATA                 | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                  |
|      5 |     1 | C10                 | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA                 | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                 |
|      6 |     1 | C11                 | C1608X5R1E106M080AC; CL10A106MA8NRNC                    | TDK/SAMSUNG ELECTRONICS     | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                   |
|      7 |     1 | DS1                 | HSMH-C190                                               | AVAGO TECHNOLOGIES          | HSMH-C190      | DIODE; LED; SURFACE MOUNT CHIP LED; RED; SMT (0603); PIV = 1.8V; IF = 0.02A                                |
|      8 |     1 | DS2                 | HSMG-C190                                               | AVAGO TECHNOLOGIES          | HSMG-C190      | DIODE; LED; SURFACE MOUNT CHIP LED; GREEN; SMT (0603); PIV = 2.2V; IF = 0.02A                              |
|      9 |     1 | J1                  | ZX62RD-AB-5P8                                           | HIROSE ELECTRIC CO LTD.     | ZX62RD-AB-5P8  | CONNECTOR; MALE; SMT; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS     |
|     10 |     1 | J2                  | GRPB031VWVN-RC                                          | SULLINS ELECTRONICS CORP.   | GRPB031VWVN-RC | CONNECTOR; MALE; THROUGH HOLE; 0.050 SINGLEROW MALE HEADER CONNECTOR; STRAIGHT; 3PINS; -40°C TO +105°C     |
|     11 |     1 | J3                  | 68711014522                                             | WURTH ELECTRONICS INC.      | 68711014522    | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                    |
|     12 |     3 | R1, R4, R5          | ERJ-2GEJ471X                                            | PANASONIC                   | 470            | RESISTOR; 0402; 470 Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                      |
|     13 |     2 | R2, R3              | ERJ-2GEJ472X                                            | PANASONIC                   | 4.7K           | RESISTOR; 0402; 4.7K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                     |
|     14 |     2 | R6, R7              | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00              | VISHAY DALE/ROHM/PANASONIC  | 0              | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                        |
|     15 |     2 | R8, R11             | N/A                                                     | N/A                         | OPEN           | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                      |
|     16 |     1 | R9                  | CRCW040213K7FK                                          | VISHAY DALE                 | 13.7K          | RESISTOR; 0402; 13.7K Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                   |
|     17 |     1 | R10                 | CRCW040236K5FK                                          | PANASONIC                   | 36.5K          | RESISTOR; 0402; 36.5K Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                   |
|     18 |     2 | R12, R13            | CRCW06034K70FK                                          | VISHAY DALE                 | 4.7K           | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                        |
|     19 |     4 | R14-R17             | CRCW0603100RFK; ERJ-3EKF1000                            | VISHAY DALE/ PANASONIC      | 100            | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                      |
|     20 |     1 | R18                 | RC0201FR-078R2                                          | YAGEO PHYCOMP               | 8.2            | RESISTOR; 0201; 8.2 Ω ; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                    |
|     21 |     1 | U1                  | C8051F321                                               | SILICON LABORATORIES        | C8051F321      | IC; CTRL; FULL SPEED USB, 16K ISP FLASH MCU FAMILY; QFN28-EP                                               |
|     22 |     1 | U2                  | MAX3207EAUT+                                            | MAXIM                       | MAX3207EAUT    | IC; PROT; DUAL, QUAD, AND HEX HIGH-SPEED DIFFERENTIAL ESD-PROTECTION IC; SOT23-6                           |
|     23 |     1 | U3                  | MAX8510EXK18                                            | MAXIM                       | MAX8510EXK18   | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                          |
|     24 |     1 | U4                  | 74AVC4TD245GU                                           | NXP                         | 74AVC4TD245GU  | IC; TXRX; 4-BIT DUAL SUPPLY TRANSLATING TRANSCEIVER WITH CONFIGURABLE VOLTAGE TRANSLATION; 3-STATE; XQFN16 |
|     25 |     1 | U5                  | MAX8512EXK                                              | MAXIM                       | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable V OUT , SC70-5                                            |
|     26 |     1 | U6                  | 74AVCH2T45DC                                            | PHILIPS SEMICONDUCTORS/NXP  | 74AVCH2T45DC   | IC; TXRX; DUAL-BIT, DUAL-SUPPLY VOLTAGE LEVEL TRANSLATOR/TRANSCEIVER; 3-STATE; VSSOP8                      |
|     27 |     1 |                     | MAX                                                     | MAXIM                       | PCB            | PCB: MAX                                                                                                   |

## MAX30110 EV Kit Bill of Materials (continued)

## MAX30110\_OSB\_EVKIT

|   ITEM |   QTY | REF DES        | MFG PART #                            | MANUFACTURER           | VALUE             | DESCRIPTION                                                                                                                                            |
|--------|-------|----------------|---------------------------------------|------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     4 | C2, C3, C8, C9 | C0402X5R100-105KNE; GRM155R61A105KE15 | VENKEL LTD./MURATA     | 1UF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL = 10%; MODEL=; TG = -55°C TO +85°C; TC = X5R                                                        |
|      2 |     3 | C4, C5, C15    | C0603X5R1C104K030BC                   | TDK                    | 0.1UF             | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 16V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                              |
|      3 |     1 | C7             | CL05A106MP5NUNC                       | SAMSUNG ELECTRONICS    | 10UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TG = -55°C TO +85°C; TC = X5R                                                                          |
|      4 |     3 | C11, C13, C14  | C1005X5R1A475K050                     | TDK                    | 4.7UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                              |
|      5 |     1 | C12            | GRM033R61C103KA12                     | MURATA                 | 0.01UF            | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                             |
|      6 |     1 | D1             | TEMD5010X01                           | VISHAY SEMICONDUCTORS  | TEMD5010X01       | DIODE; PIN; SILICON PIN PHOTODIODE; SMT; PIV = 60V; IF = 0.000055A                                                                                     |
|      7 |     2 | DS7, DS8       | LT P4SG-V1AB-36-F                     | OSRAM                  | LT P4SG-V1AB-36-F | DIODE; LED; POINTLED; GREEN; SMT; VF = 3.2V; IF = 0.02A                                                                                                |
|      8 |     1 | J1             | 68711014522                           | WURTH ELECTRONICS INC. | 68711014522       | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                                                                |
|      9 |     3 | R1, R2, R5     | CRCW02010000ZS; ERJ-1GN0R00C          | VISHAY DALE/ PANASONIC | 0                 | RESISTOR; 0201; 0 Ω ; 0%; JUMPER; 0.05W; THICK FILM                                                                                                    |
|     10 |     1 | U1             | MAX30110EWG+T                         | MAXIM                  | MAX30110EWG+T     | EVKIT PART-IC; COMPLETE OPTICAL ANALOG FRONT-END WITH DATA CONVERTER; LED DRIVER AND CONTROL; MAX30110; 0.4MM PITCH; PACKAGE OUTLINE: 21-100088; WLP24 |
|     11 |     1 | U6             | LIS2DH                                | ST MICROELECTRONICS    | LIS2DH            | IC; MEMS; MEMS DIGITAL OUTPUT MOTION SENSOR; ULTRA LOW-POWER HIGH PERFORMANCE 3-AXIS FEMTO ACCELEROMETER; LGA14 2X2                                    |
|     12 |     1 | U7             | MAX8510EXK18                          | MAXIM                  | MAX8510EXK18      | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                                      |
|     13 |     1 | PCB            | MAX                                   | MAXIM                  | PCB               | PCB:MAX                                                                                                                                                |

## MAX30110 EV Kit Bill of Materials (continued)

## MAX30110\_SFH7050\_EVKIT

|   ITEM |   QTY | REF DES       | MFG PART #                                              | MANUFACTURER                          | VALUE        | DESCRIPTION                                                                                                         |
|--------|-------|---------------|---------------------------------------------------------|---------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C2, C3        | UMK107AB7105KA                                          | TAIYO YUDEN                           | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                            |
|      2 |     3 | C4, C5, C15   | C0603C104K4RACAUTO                                      | KEMET                                 | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R AUTO                     |
|      3 |     1 | C7            | C1608X5R1E106M080AC; CL10A106MA8NRNC                    | TDK/SAMSUNG ELECTRONICS               | 10UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                            |
|      4 |     3 | C11, C13, C14 | C1608X5R1E475K080AC; GRM188R61E475KE11                  | TDK; MURATA                           | 4.7UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                           |
|      5 |     1 | C12           | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA                           | 0.01UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                          |
|      6 |     1 | J1            | 68711014522                                             | WURTH ELECTRONICS INC.                | 68711014522  | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                             |
|      7 |     2 | R2, R3        | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL          | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH  | 0            | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                                 |
|      8 |     3 | R11, R14, R15 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL        | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100          | RESISTOR; 0402; 100 Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                              |
|      9 |     2 | R13, R16      | CRCW04020000Z0EDHP                                      | VISHAY DRALORIC                       | 0            | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.2W; THICK FILM                                                                  |
|     10 |     1 | U1            | MAX30111                                                | MAXIM                                 | MAX30111     | EVKIT PART-IC; MAX30111; OPEN FRAME DIP ECONOMY; 0.4MM PITCH; PACKAGE OUTLINE: 21-100088; WLP24                     |
|     11 |     1 | U2            | Q65111A6271                                             | OSRAM                                 | Q65111A6271  | IC; SNSR; BIOMON SENSOR; MULTICHIP PACKAGE FEATURING THREE EMITTERS AND ONE DETECTOR; SMT                           |
|     12 |     1 | U6            | LIS2DH                                                  | ST MICROELECTRONICS                   | LIS2DH       | IC; MEMS; MEMS DIGITAL OUTPUT MOTION SENSOR; ULTRA LOW-POWER HIGH PERFORMANCE 3-AXIS FEMTO ACCELEROMETER; LGA14 2X2 |
|     13 |     1 | U7            | MAX8510EXK18                                            | MAXIM                                 | MAX8510EXK18 | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                   |
|     14 |     1 |               | MAX                                                     | MAXIM                                 | PCB          | PCB: MAX                                                                                                            |

## MAX30110\_UC\_EVKIT Schematic

<!-- image -->

## MAX30110\_OSB\_EVKIT Schematic

<!-- image -->

## MAX30110\_SFH7050\_EVKIT Schematic

<!-- image -->

## MAX30110 EV Kit PCB Layouts

## MAX30110\_UC\_EVKIT

MAX30110 EV Kit-Top Silkscreen

<!-- image -->

MAX30110 EV Kit-Top

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_UC\_EVKIT (continued)

MAX30110 EV Kit-Level 2 GND

<!-- image -->

MAX30110 EV Kit-Level 3 GND

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_UC\_EVKIT (continued)

MAX30110 EV Kit-Bottom

<!-- image -->

MAX30110 EV Kit-Bottom Silkscreen

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_OSB\_EVKIT

MAX30110 EV Kit-Top Silkscreen

<!-- image -->

MAX30110 EV Kit-Top

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_OSB\_EVKIT (continued)

MAX30110 EV Kit-Level 2 SIGS

<!-- image -->

MAX30110 EV Kit-Level 3 GND

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_OSB\_EVKIT (continued)

MAX30110 EV Kit-Level 4 SIGS

<!-- image -->

MAX30110 EV Kit-Level 5 SIGS

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_OSB\_EVKIT (continued)

MAX30110 EV Kit-Bottom

<!-- image -->

MAX30110 EV Kit-Bottom Silkscreen

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_SFH7050\_EVKIT

MAX30110 EV Kit-Top Silkscreen

<!-- image -->

MAX30110 EV Kit-Top

<!-- image -->

MAX30110 EV Kit-Power

<!-- image -->

## MAX30110 EV Kit PCB Layouts (continued)

## MAX30110\_SFH7050\_EVKIT (continued)

MAX30110 EV Kit-GND

<!-- image -->

MAX30110 EV Kit-Bottom

<!-- image -->

MAX30110 EV Kit-Bottom Silkscreen

<!-- image -->

## Component List

## MAX30110 EV Kit

| PART                      |   QTY | DESCRIPTION                  |
|---------------------------|-------|------------------------------|
| MAX30110 _ UC_EVKIT       |     1 | MAX30110 EV Kit Micro PCB    |
| MAX30110 _ OSB_EVKIT      |     1 | MAX30110 EV Kit Sensor PCB 1 |
| MAX30110 _ SFH7050_ EVKIT |     1 | MAX30110 EV Kit Sensor PCB 2 |

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX30110ACCEVKIT# | EVKIT  |

#Denotes RoHS compliant.

## MAX30110 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 6/17            | Initial release                                             | -               |
|                 1 | 7/17            | Updated orderable part number in Ordering Informaiton table | 26              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX30110 and MAX30112