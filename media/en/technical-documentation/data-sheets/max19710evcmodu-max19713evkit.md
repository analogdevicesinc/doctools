<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## General Description

The MAX19710-MAX19713 evaluation systems (EV systems) consist of MAX19710-MAX19713 evaluation kits  (EV  kits),  a  companion  Maxim command module (CMODUSB) interface board, and software. Order the complete EV system (see the Ordering Information) for comprehensive evaluation of the MAX19710-MAX19713 using a personal computer. Order the EV kit if the command module has already been purchased with a previous Maxim EV system, or for custom use in other microcontroller-based (µC) systems.

The MAX19710-MAX19713 EV kits are fully assembled and tested PCBs that contain all the components necessary  to  evaluate  the  performance  of  the MAX19710-MAX19713 analog front-ends (AFEs). These AFEs integrate a dual-receive analog-to-digital converter (Rx ADC), a dual-transmit digital-to-analog converter (Tx DAC), a 1.024V internal voltage reference, three low-speed serial DACs, and one low-speed serial ADC. The EV kit boards accept AC- or DCcoupled, differential or single-ended analog inputs for the  Rx  ADC and include circuitry that converts the Tx DAC differential output signals to singleended analog outputs. The EV kits include circuitry that generates a clock signal from an AC sine-wave input signal. The EV kits operate from a +3.0V analog power supply, a +1.8V digital power supply, a +3.0V clock power supply, and ±5V bipolar power supplies.

The  Maxim  command  module  interface  board (CMODUSB) allows a PC to use its USB port to emulate an SPI™ 3-wire interface. Windows ® 98SE/2000/XPcompatible software, which can be downloaded from www.maxim-ic.com/evkitsoftware, provides a userfriendly interface to exercise the features of the MAX19710-MAX19713. The program is menu driven and offers a graphical user interface (GUI) with control buttons and a status display.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

## Part Selection Table

| PART           |   SPEED (Msps) | Tx CDMA FILTERS   |
|----------------|----------------|-------------------|
| MAX19710EVKIT+ |            7.5 | No                |
| MAX19711EVKIT+ |             11 | Yes               |
| MAX19712EVKIT+ |             22 | No                |
| MAX19713EVKIT+ |             45 | No                |

## MAXIM

## Features

- ♦ ADC/DAC Sampling Rates from 7.5Msps to 45Msps
- ♦ Low-Voltage and Low-Power Operation
- ♦ Adjustable-Gain, Low-Speed DAC Buffers
- ♦ On-Board Clock-Shaping Circuitry
- ♦ On-Board Level-Translating I/O Drivers
- ♦ Assembled and Tested
- ♦ Downloadable Windows 98SE/2000/XP-Compatible Software

## Ordering Information

| PART             | TEMP RANGE*   | IC PA CK A G E             | SPI IN TER F AC E T YPE          |
|------------------|---------------|----------------------------|----------------------------------|
| 0°C to +70°C     | 56 TQFN- EP** | Not included               | MAX19710EVKIT +                  |
| 0°C to +70°C     | 56 TQFN- EP** | CMODUSB                    | M A X1 9 7 10 EVCM O D U +       |
| 0°C to +70°C     | 56 TQFN- EP** | Not included               | MAX19711EVKIT +                  |
| 0°C to +70°C     | 56 TQFN- EP** | CMODUSB                    | M A X1 9 7 11 EVCM O D U +       |
| 0°C to +70°C     | 56 EP**       | TQFN- Not included         | MAX19712EVKIT +                  |
| 0°C to +70°C     | 56 EP**       | TQFN- CMODUSB              | M A X1 9 7 12 EVCM O D U +       |
| 0°C to +70°C     |               | 56 TQFN- EP** Not included | MAX19713EVKIT +                  |
| 1 3 0°C to +70°C | 56 EP**       | TQFN-                      | M A X1 9 7 EVC M O D U + CMODUSB |

Note: The MAX19710-MAX19713 EV kit software is available online; however, the CMODUSB board is required to interface the EV kit to the computer when using the software.

## MAX19710-MAX19713 EV Kit

## Software Files

| PROGRAM                                                               | DESCRIPTION                            |
|-----------------------------------------------------------------------|----------------------------------------|
| INSTALL.EXE                                                           | Installs the EV kit software           |
| M AX 19710.E X E , M AX 19711.E X E , M AX 19712.E X E , MAX19713.EXE | Application program*                   |
| UNINST.INI                                                            | U ni nstal l s the E V ki t softw ar e |
| TRO U BLE S H OOTIN G _U S B.P D F                                    | USB driver installation help file      |

*EV Kit software dependant.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Common Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                                |
|----------------------------|-------|--------------------------------------------------------------------------------------------|
| J2                         |     1 | Dual-row, 40-pin header                                                                    |
| J3                         |     1 | Dual-row, 20-pin header                                                                    |
| J4, J5, JU2                |     3 | 2-pin headers                                                                              |
| JU1                        |     1 | Jumper, dual-row, 8-pin header                                                             |
| JU3                        |     1 | Jumper, 3-pin header                                                                       |
| R1-R4, R55, R56, R61       |     7 | 49.9 Ω ±1% resistors (0603)                                                                |
| R5-R16, R37-R42            |     0 | Not installed, resistors (0402)                                                            |
| R17-R20                    |     4 | 24.9 Ω ±1% resistors (0402)                                                                |
| R21-R36, R43-R46, R62, R66 |     0 | Not installed, resistors (0603)                                                            |
| R47-R54                    |     8 | 10k Ω ±1% resistors (0603)                                                                 |
| R57, R58                   |     2 | 4.02k Ω ±1% resistors (0603)                                                               |
| R59                        |     1 | 6.04k Ω ±1% resistor (0603)                                                                |
| R60                        |     1 | 2.0k Ω ±1% resistor (0603)                                                                 |
| R63                        |     1 | 5k Ω potentiometer, 19-turn, 3/8in                                                         |
| RA1-RA2                    |     2 | 100 Ω ± 5% r esi stor ar r ays ( 1206- 16L) Panasonic EXB-2HV-101J                         |
| RA3-RA6                    |     4 | 51 Ω ±5% resistor arrays (1206-16L) Panasonic EXB-2HV-510J                                 |
| T1, T2                     |     2 | 1:1 RF transformers Coilcraft TTWB3010-1L                                                  |
| TP1-TP4                    |     4 | Test points (red)                                                                          |
| TP5                        |     1 | Test point (black)                                                                         |
| U1                         |     1 | Note: See the EV Kit-Specific Component List                                               |
| U2                         |     1 | 16-bit buffer/driver (48-pin TSSOP) Texas Instruments SN74ALVCH16244DGGR                   |
| U3                         |     1 | Dual LVDS line receiver Maxim MAX9113ESA+ (8-pin SO)                                       |
| U4, U5                     |     2 | 400M H z ul tr a- l ow - d i stor ti on op am p s Maxim MAX4108ESA+ (8-pin SO)             |
| U6                         |     1 | Low-noise, low-distorion, wide- band, rail-to-rail op amp Maxim MAX4478AUD+ (14-pin TSSOP) |

| DESIGNATION                                                                        |   QTY | DESCRIPTION                                                                                               |
|------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1-C6, C17, C21, C23, C24, C25, C28, C29, C37-C40, C45-C48, C73-C76, C78, C80, C81 |    28 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M                                          |
| C7-C10                                                                             |     4 | 22pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H220J                                            |
| C11, C31-C36                                                                       |     0 | Not installed, capacitors (0402)                                                                          |
| C12                                                                                |     0 | Not installed, capacitor (0603)                                                                           |
| C13, C14, C82                                                                      |     3 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H102J                                          |
| C15, C16                                                                           |     2 | 0.33µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71C334K                                      |
| C18, C19, C20, C67-C72                                                             |     9 | 1.0µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M                                         |
| C22, C26, C27                                                                      |     3 | 0.1µF ±20%, 6.3V X5R ceramic capacitors (0201) TDK C0603X5R0J104M                                         |
| C30, C41-C44, C77, C84                                                             |     7 | 2.2µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225M                                         |
| C49-C60                                                                            |    12 | 220µF ±20%, 6.3V tantalum capacitors (C-case) AVX TPSC227M006R0250                                        |
| C61-C66                                                                            |     6 | 10µF ±20%, 10V X5R ceramic capacitors (1210) TDK C3225X5R1A106M                                           |
| C79                                                                                |     1 | 0.01µF ±5%, 25V C0G ceramic capacitor (0603) TDK C1608C0G1E103J                                           |
| C83                                                                                |     1 | 0.33µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A334K                                       |
| CLOCK, IA, IAN, IAP, ID, QA, QAN, QAP, QD                                          |     9 | SMA PC mount connectors                                                                                   |
| D1                                                                                 |     1 | Dual Schottky diode (SOT23) C entr al S em i cond uctor C M P D 6263S Vishay BAS70-04 Diodes Inc BAS70-04 |
| J1                                                                                 |     1 | 2 x 20 right-angle female connector                                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Common Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| U7            |     1 | Quad-level translator M axi m MAX 3023E UD + (14- pi n TS S OP) |
| -             |     6 | Shunts                                                          |
| -             |     1 | PCB: MAX19710/1/2/3 Evaluation Kit+                             |

## MAX19713EVCMODU (MAX19713 EV System) Component List

| PART           |   QTY | DESCRIPTION         |
|----------------|-------|---------------------|
| CMODUSB        |     1 | SPI interface board |
| MAX19713EVKIT+ |     1 | MAX19713 EV kit     |

## EV Kit-Specific Component List

| EV KIT PART NUMBER   | D ESIG N AT IO N   | DESCRIPTION                                                 |
|----------------------|--------------------|-------------------------------------------------------------|
| M AX19713E V KIT+    | U1                 | Maxim MAX19713ETN+ ( 56- p i n, 7mm x 7m m Thi n QFN- E P ) |
| MAX19712EVKIT+       | U1                 | Maxim MAX19712ETN+ ( 56- p i n, 7mm x 7m m Thi n QFN- E P ) |
| MAX19711EVKIT+       | U1                 | Maxim MAX19711ETN+ ( 56- p i n, 7mm x 7m m Thi n QFN- E P ) |
| MAX19710EVKIT+       | U1                 | Maxim MAX19710ETN+ ( 56- p i n, 7mm x 7m m Thi n QFN- E P ) |

## Quick Start

## Recommended Equipment

- DC power supplies:
- Signal generator with low phase noise and low jitter for  clock input signal (e.g., HP/Agilent 8662A, HP/Agilent 8644B)
- Two signal generators with low phase noise for analog signal inputs (e.g., HP/Agilent 8662A, HP/Agilent 8644B)
- Logic analyzer or data-acquisition system with one data pod (e.g., HP/Agilent 16500C, TLA621)

| Analog (VDD)          | +3.0V, 100mA   |
|-----------------------|----------------|
| Clock (CVDD)          | +3.0V, 100mA   |
| Digital (OVDD)        | +1.8V, 100mA   |
| Op-amp positive (VOP) | 5.0V, 250mA    |
| Op-amp negative (VON) | -5.0V, 250mA   |

<!-- image -->

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| AVX Corp.             | 843-946-0238 | www.avxcorp.com       |
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Coilcraft             | 847-639-6400 | www.coilcraft.com     |
| Diodes Inc.           | 805-446-4800 | www.diodes.com        |
| Murata                | 770-436-1300 | www.murata.com        |
| Panasonic             | 714-373-7366 | www.panasonic.com     |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |
| Vishay                | 203-268-6261 | www.vishay.com        |

Note: Indicate that you are using the MAX19710, MAX19711, MAX19712, or MAX19713 when contacting these component suppliers.

- Analog bandpass filters (e.g., Allen Avionics, K&amp;L Microwave) for input and clock signal
- Two spectrum analyzers (e.g., HP/Agilent 8560E)
- One digital pattern generator with one 10-bit data pod (e.g., Tektronix DG2020A)

## Procedure

The MAX19710-MAX19713 EV kits are fully assembled and tested surface-mount boards. Follow the steps below to verify board operation. Caution: Do not turn on power supplies or enable signal/data generators until all connections are completed.

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Command Module Setup (CMODUSB)

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  on  your  computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Place a shunt across pins 2-3 of the VDD select jumper (command module working voltage set to 3.3V).
- 4) Connect a USB cable from the computer's USB port to the command module (CMODUSB) interface board. Use a standard USB A-B cable. A Building

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Driver Database window appears in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable  from  the  CMODUSB  and  reconnect  it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the document TROUBLESHOOTING\_USB.PDF included with the software if you have any problems.

- 5) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program  Files\MAX19713 , \MAX19712 , \MAX19711 ,  or \MAX19710 (default installation directory) using the Browse button.

## EV Kit Setup

- 6) Verify that shunts are installed in the following locations:

JU1 (1-2) → CS connected

JU1 (3-4) → SCLK connected

JU1 (5-6) → DIN connected

JU1 (7-8) → DOUT connected

JU2 (Installed) → Internal reference enabled

JU3 (1-2) → Power U2 with OVDD

- 7) Connect a +3.0V, 100mA power supply to VDD. Connect the ground terminal of this supply to GND.
- 8) Connect a +3.0V, 100mA power supply to CVDD. Connect the ground terminal of this supply to GND.
- 9) Connect a +1.8V, 100mA power supply to OVDD. Connect the ground terminal of this supply to OGND.
- 10) Connect a +5V, 250mA power supply to VOP. Connect the ground terminal of this supply to GND.
- 11) Connect a -5V, 250mA power supply to VON. Connect the ground terminal of this supply to GND.
- 12) Carefully align the 40-pin connector of the EV kit (J1) with the 40-pin header of the CMODUSB interface board (P4). Gently press them together.
- 13) The MAX19710-MAX19713 support two modes of operation:
- a. To connect a logic analyzer to the EV kit and test the Rx ADCs, skip to step 14.
- b. To connect a spectrum analyzer to the EV kit and test the Tx DACs, skip to step 34.

## Rx ADC Setup

- 14) Connect the clock signal generator to the input of the clock bandpass filter.
- 15) Connect the output of the clock bandpass filter to the EV kit SMA connector labeled CLOCK.
- 16) Connect the first analog signal generator to the input of the desired bandpass filter.
- 17) Connect the output of the bandpass filter to the EV kit SMA connector labeled IA (I channel).
- 18) Connect the second analog signal generator to the input of the desired bandpass filter.
- 19) Connect the output of the bandpass filter to the EV kit SMA connector labeled QA (Q channel).
- 20) Ensure that all signal generators are phase-locked to a common reference frequency for coherent sampling.
- 21) Connect the logic analyzer to J2. Use the bit labels (AD\_) located next to header J2 for proper bit alignment or see the Digital Data Bit Locations section for header connections.
- 22) Set the logic analyzer to capture 10-bit CMOS data on the falling edge for the I channel or the rising edge for the Q channel.
- 23) Turn on the -5V power supply.
- 24) Turn on all remaining power supplies.
- 25) Enable the signal generators.
- 26) Set the clock signal generator to output a 45MHz signal. The amplitude of the generator should be sufficient to produce a +16dBm signal at the SMA input of the EV kit. Insertion losses due to the series-connected filter (step 14) and the interconnecting cables decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude.
- 27) Set the analog input signal generators to output the desired frequency. The amplitude of the generator should produce a signal that is no larger than +5dBm, as measured at the SMA input of the EV kit. Insertion losses, due to the series-connected filters (steps 17 and 19) and the interconnecting cables, decrease the amount of power seen at the EV kit input.  Account for these losses when setting the signal generator amplitude.
- 28) Start the MAX19710-MAX19713 program by opening its icon in the Start menu.
- 29) Normal device operation can be verified by the Status: Interface Board Operational text in the Interface box of the program.
- 30) Select the Maxim device that you are using from the Device combo box.
- 31) Click the POR Reset button on the EV kit software GUI.
- 32) Enable the logic analyzer.
- 33) Capture data using the logic analyzer.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Tx DAC Setup

- 34) Connect the clock signal generator to the input of the clock bandpass filter.
- 35) Connect the output of the clock bandpass filter to the EV kit SMA connector labeled CLOCK.
- 36) Connect the output of the clock signal generator to the data generator synchronization input.
- 37) Connect the first spectrum analyzer to the EV kit SMA connector labeled QD (Q channel).
- 38) Connect the second spectrum analyzer to the EV kit SMA connector labeled ID (I channel).
- 39) Connect the data generator to J3. Use the bit labels (DA\_) located next to header J3 for proper bit alignment, or see the Digital Data Bit Locations section for header connections.
- 40) Turn on the -5V power supply.
- 41) Turn on all remaining power supplies.
- 42) Enable the signal generator.
- 43) Set the clock signal generator to output a 45MHz signal.  The  amplitude of the generator should be sufficient to produce a +16dBm signal at the SMA input of the EV kit. Insertion losses, due to the series-connected filter (step 34) and the interconnecting cables, decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude.
- 44) Load the desired test pattern into the data generator. Data clocked on the rising edge of the clock is transmitted to the Q channel. Data clocked on the falling edge of the clock is transmitted to the I channel.
- 45) Start the MAX19710-MAX19713 program by opening its icon in the Start menu.
- 46) Normal device operation can be verified by the Status: Interface Board Operational text in the Interface box.
- 47) Select the Maxim device that you are using in the Device combo box.
- 48) Click the POR Reset button on the EV kit software GUI.
- 49) Enable the data generator.
- 50) Enable the spectrum analyzers.
- 51) Analyze the data on the EV kit outputs (QD and ID) with the spectrum analyzers.

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Detailed Description of Software

## User-Interface Panel

The user interface (Figure 1) is easy to operate; use the mouse, or a combination of the Tab and arrow keys to manipulate the software. Each of the buttons correspond to bits in the command and configuration bytes of  the  Maxim IC. By selecting them, the correct SPI write operation is generated to update the internal registers of the MAX19710-MAX19713.

The software divides EV kit functions into logical blocks. The Interface box indicates the Device ,  the Register Address Sent ,  the Data Sent/Received for the last write operation, and the SPI Clock Frequency . This data is used to confirm proper device operation. Adjust the SPI Clock Frequency through the combo box. Use the Device combo box to select the proper AFE and features.

The controls for the Tx DAC , Auxiliary DACs ,  and Auxiliary ADC are accessed through tab sheets. Device Control is  accessed at the right-hand side of the main window. Return the EV kit to its power-on-reset state by selecting the POR Reset button.

The MAX19710-MAX19713 EV kit software features additional functions to simplify operation. Automatic Diagnostics probes the command module board to make sure a connection exists between the PC and the command module.

Figure 1. MAX19713 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Device Control

Configure the operating mode of the device through the intuitive  controls  in  the Device Control box. Select a mode, as outlined in the MAX19710, MAX19711, MAX19712,  MAX19713  data  sheets,  using  the Operating Mode control. For a detailed description of the  MAX19710-MAX19713 operating modes and their specific names, refer to Table 4 in the MAX19710, MAX19711, MAX19712, and MAX19713 data sheets.

The MAX19710-MAX19713 feature an 8-bit SPI signaling mode to increase communications speed. Check the Use Enable-8 Signaling checkbox to use this mode. Refer to the MAX19710, MAX19711, MAX19712, and MAX19713 data sheets for more details on Enable-8 signaling.

## Tx DAC Control

Adjust the Common Mode Voltage and the DAC Full Scale voltage by selecting the desired option from the pulldown box. Note that the DAC Full Scale control is only available when using the MAX19711. The DAC fullscale  output  of  the  MAX19710,  MAX19712,  and MAX19713 is fixed. Refer to the respective data sheet for more details.

The DAC I-Offset and Q-Offset voltages can be adjusted in 800µV increments by adjusting the appropriate slider  in  the Tx  DAC  Offset  Control box.  The MAX19711 allows for two adjustable full-scale ranges of 820mVP-P (yields 800µV increments), and a full-scale range of 1.0VP-P (yields 980µV increments). The MAX19710/MAX19712/MAX19713 only allow one fullscale range of 800mVP-P, which yields 780µV increments. Alternatively, a value (specified in millivolts) can be directly entered in the boxes below each slider. If no value has been entered, 0.800/0.980 is used. The software automatically rounds the number to the nearest 800µV/980µV increment and sends the proper data to the MAX19710-MAX19713.

## Auxiliary DAC Control

Access the MAX19710-MAX19713 auxiliary DACs through the Auxiliary DACs tab of the EV kit software (Figure 2). Set the output voltage of the desired auxiliary DAC by adjusting the Aux-DAC 1 , Aux-DAC 2 , or AuxDAC 3 sliders. Enter a number in the edit box below the slider  for  precise  adjustments. Enable each DAC by setting the checkbox below the slider.

Figure 2. MAX19713 EV Kit Software Auxiliary DAC Control

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Auxiliary ADC Controls

Access the MAX19710-MAX19713 auxiliary ADC through the Auxiliary ADC tab (Figure 3) of the EV kit software. Although these AFEs feature only one 10-bit, low-speed ADC, they can multiplex four voltages onto their input. Select the desired ADC Input Source in the ADC Conversion box. Read the CODE and VOLTAGE of the ADC by selecting the Start Conversion and Read ADC Value button.

Other ADC features, such as ADC Averaging and Conversion Clock Divide Ratio ,  are  accessed through the ADC Control box. Disable the auxiliary ADC by checking the Shutdown Auxiliary ADC checkbox. These AFEs can use either the Internal 2.048V reference or VDD ( Internal VDD )  for  the  auxiliary  ADC reference. If VDD is used for the reference voltage, enter the value of VDD in the box beside the Internal VDD checkbox.

## Simple SPI Commands

There are two methods for communicating with the AFEs: through the normal GUI panel, or through the SPI commands available by selecting the 3-Wire Interface Diagnostic item from the Options pulldown menu. A window is displayed that executes an SPI read/write operation.

The SPI ( 3-Wire Interface ) dialog box accepts numeric data in hexadecimal format. Hexadecimal numbers should be prefixed by a $ or 0x. Data entered in the Data bytes to be written: edit box is sent to the device. Eight-bit hexadecimal numbers should be comma delimited. Data appearing in the Data bytes received: box is data read from the device.

<!-- image -->

Figure 3. MAX19713 EV Kit Software Auxiliary ADC Control

<!-- image -->

Selecting the Send Now button in Figure 4 transmits the hexadecimal numbers 0x55 and 0xAA. 0x00 and 0x00 are the received values from the device. For a detailed description of SPI communications, refer to the MAX19710, MAX19711, MAX19712, and MAX19713 data sheets.

## Detailed Description of Hardware

The MAX19710-MAX19713 EV kits are fully assembled and tested PCBs that contain all the components necessary to evaluate the performance of the MAX19710, MAX19711, MAX19712, or MAX19713 AFEs.

The AFE's receive ADCs (Rx ADCs) accept differential input signals; however, on-board transformers (T1, T2) convert a user's single-ended source output to the required differential signal. The input signals of the MAX19710-MAX19713 are measured using a differential oscilloscope probe at headers J4 and J5. A buffer/driver (U2) buffers the parallel ADC digital output signals. The digital ADC data is accessible at header J2.

The AFE's transmit DACs (Tx DACs) are buffered with on-board ultra-low-distortion, split-supply op amps.

The EV kits are designed as four-layer PCBs to optimize the  performance  of  the  MAX19710-MAX19713.

Figure 4. MAX19713 EV Kit Software 3-Wire Interface Diagnostics

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Separate analog, digital, clock, and buffer power planes minimize noise coupling between analog and digital signals.  Analog ADC inputs and DAC outputs use 100 Ω differential  microstrip transmission lines, while 50 Ω microstrip transmission lines are used for all digital outputs and the clock input. The trace lengths of the ADC input and DAC output paths are well matched to minimize layout-dependent input-signal skew.

## Power Supplies

For optimal performance, the MAX19710-MAX19713 EV kits require separate analog, digital, clock, and buffer power supplies; however, two separate +3.0V and +1.8V power supplies are recommended to power the analog (VDD) and digital (OVDD) portions of the AFEs, respectively. The clock circuitry (CVDD) is powered by a +3.0V power supply. The DAC outputs are buffered by split-supply op amps. Power the positive rail  (VOP) with a +5V supply and the negative rail (VON) with a -5V supply. A separate +1.8V power supply (BVCC) can be used to isolate the power source to the buffer driver (U2). See Table 1 for the proper jumper configurations for JU3.

## Table 1. U2 Power Source (JU3)

| SHUNT POSITION   | DESCRIPTION                                               |
|------------------|-----------------------------------------------------------|
| 1-2*             | U2 is powered through OVDD.                               |
| 2-3              | U2 is powered through BVCC. (Note: BVCC must equal OVDD.) |

If  the  OVDD current is measured at the OVDD and OGND pads on the EV kit, a measurement error occurs due to the extra current flowing into U2. Power U2 through BVCC for a more accurate measurement of the OVDD current into the AFEs.

## Clock

An on-board clock-shaping circuit generates a clock signal from an AC sine-wave signal applied to the CLOCK SMA connector. The frequency of the signal should not exceed 45MHz for the MAX19713 (see the Part Selection Table for the maximum sampling rate of other devices). The frequency of the sinusoidal input signal determines the sampling frequency (fCLK) of the AFEs. A differential line receiver (U3) processes the input signal to generate the CMOS clock signal. The signal's duty cycle can be adjusted with potentiometer R63. A clock signal with a 50% duty cycle (recommended) is achieved by adjusting R63 until 1.32V is produced across test points TP4 and TP5 when the clock voltage supply (CVDD) is set to +3.0V. The clock signal is available at J2-3 (CLKOUT), which can be used to synchronize the output signal to the logic analyzer. Measure the clock signal with an oscilloscope at TP3.

## Rx ADC Inputs

Although the MAX19710-MAX19713 AFEs accept differential  analog input signals, the EV kits only require a single-ended analog input signal provided by the user. Connect the single-ended sources to the IA SMA connector (I channel) and QA SMA connector (Q channel). Insertion losses due to series-connected bandpass filters  and  the  interconnecting cables decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude. On-board transformers (T1, T2) convert the single-ended analog input signals and generate differential analog signals at the ADC's differential input pins. The AFEs also accept single-ended input signals. See the Configuring for Single-Ended ADC Operation section for details on how to modify the EV kits to support this mode of operation.

## Configuring for Single-Ended ADC Operation

The MAX19710-MAX19713 can be configured to accept AC-coupled, single-ended signals presented at the input. Configure the EV kit to support this mode of operation by completing the following steps:

- 1) Cut open the traces at locations R11-R14.
- 2) Install  0 Ω resistors at locations R7-R10, R15, and R16.
- 3) Install 2k Ω ±1% resistors at locations R21-R24.
- 4) Connect the single-ended sources to the IAP connector (I channel) and/or to the QAP SMA connector (Q channel).

Configure the EV kit for DC-coupled, single-ended signals by removing capacitors C1 and C2, removing resistors R9 and R10, and installing 0 Ω resistors at locations R5 and R6.

## Tx DAC Outputs

By default, on-board ultra-low-distortion op amps (U4 and U5)  buffer  the  DAC  outputs  on  the  MAX19710MAX19713 EV kits. The op amps convert the differential signal from the AFEs to a single-ended 50 Ω signal. Measure the buffered output signals at the QD SMA connector  (Q  channel)  and  the  ID  SMA  connector (I channel).

Measure the differential output of the AFEs at the IDN/IDP and QDN/QDP pads. Full-scale output, offset voltage, and common-mode voltage functions are controlled through the EV kit software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

## Reference

The MAX19710-MAX19713 feature two reference operation modes. The EV kits can be configured to use either the internal (1.024V) reference or an external user-supplied reference applied at the REFIN pad. The AFEs generate the REFP and REFN voltages from the selected reference voltage (refer to the MAX19710, MAX19711, MAX19712, and MAX19713 data sheets for more details). Measure the REFP and REFN voltages at TP1 and TP2, respectively. Jumper JU2 controls the reference mode. See Table 2 for jumper configurations.

Table 2. Reference Shunt Settings (JU2)

| SHUNT POSITION   | DESCRIPTION                                                                    |
|------------------|--------------------------------------------------------------------------------|
| Installed*       | Internal reference mode.                                                       |
| Not installed    | External reference mode. Apply an external reference voltage to the REFIN pad. |

*Default configuration.

Table 3. Digital Data Bit Locations

| SIGNAL   | LOCATION   | TYPE   | DESCRIPTION                                 |
|----------|------------|--------|---------------------------------------------|
| AD0      | J2-37      | Output | Data Bit 0 (LSB)                            |
| AD1      | J2-35      | Output | Data Bit 1                                  |
| AD2      | J2-33      | Output | Data Bit 2                                  |
| AD3      | J2-31      | Output | Data Bit 3                                  |
| AD4      | J2-29      | Output | Data Bit 4                                  |
| AD5      | J2-27      | Output | Data Bit 5                                  |
| AD6      | J2-25      | Output | Data Bit 6                                  |
| AD7      | J2-23      | Output | Data Bit 7                                  |
| AD8      | J2-21      | Output | Data Bit 8                                  |
| AD9      | J2-19      | Output | Data Bit 9 (MSB)                            |
| CLKOUT   | J2-3       | Output | Incoming Clock Signal                       |
| BDOUT    | J2-9       | Output | Aux-ADC Digital Output (requires R38 short) |
| DA0      | J3-19      | Input  | Data Bit 0 (LSB)                            |
| DA1      | J3-17      | Input  | Data Bit 1                                  |
| DA2      | J3-15      | Input  | Data Bit 2                                  |
| DA3      | J3-13      | Input  | Data Bit 3                                  |
| DA4      | J3-11      | Input  | Data Bit 4                                  |
| DA5      | J3-9       | Input  | Data Bit 5                                  |
| DA6      | J3-7       | Input  | Data Bit 6                                  |
| DA7      | J3-5       | Input  | Data Bit 7                                  |
| DA8      | J3-3       | Input  | Data Bit 8                                  |
| DA9      | J3-1       | Input  | Data Bit 9 (MSB)                            |

Note:

Pins 1, 5, 7, 11, 13, 15, 17, and 39 of J2 are open. All other pins are connected to OGND.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Digital Data Headers

The MAX19710-MAX19713 EV kits feature two 10-bit parallel data buses used for full-duplex operation. The two data buses are accessed on the EV kit through header connectors J2 (Rx ADC bus) and J3 (Tx DAC bus).

## Digital Data Bit Locations

Driver U2 buffers the digital outputs of the Rx ADC. This driver is able to drive large capacitive loads, which may be present at the logic analyzer connection. The outputs of the buffer are connected to a 40-pin header (J2). The 20-pin header (J3) is used to connect to the digital input of the Tx DAC. See Table 3 for bit locations on headers J2 and J3.

## Configuring the Low-Speed DAC Buffers

The MAX19710-MAX19713 EV kits feature on-board configurable buffers. By default, these buffers are configured for unity gain. Measure the buffered voltage at the BDAC1, BDAC2, and BDAC3 pads. Measure the unbuffered voltage at the DAC1, DAC2, and DAC3 pads.

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Configure the on-board buffers for a positive (noninverting) gain by performing the following steps:

- 1) Cut open the trace at locations R31, R33, and R35.
- 2) Select a value of 10k Ω for  resistors R32, R34, and R36.
- 3) Calculate resistors R31, R33, and R35 using the equations below.
- 4) Install R31, R33, and R35 in their respective locations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Disconnect the buffers from the AFEs by cutting the trace at locations R28, R29, and R30. Connect the lowspeed DAC loads to the DAC1, DAC2, and DAC3 pads on the EV kit. If  the  load  capacitance is  between 5pF and 15pF, cut the trace and install 10k Ω resistors  at locations R25, R26, and R27. Resistors are not required if the load is less than 5pF.

## Using an Alternative SPI Interface

The EV kits provide pads and jumpers that allow an alternative  SPI  interface  to  be  used.  Connect  the  interface to the CS ,  SCLK, DIN, DOUT, and OGND pads. Ensure that the SPI voltages are compatible with all of the AFE's working voltages. Refer to the individual MAX19710, MAX19711, MAX19712, and MAX19713 data sheets for suitable SPI interface voltages. Remove the shunts from jumper JU1. See Table 4 for jumper configurations.

## Table 4. Alternative SPI Interface (JU1)

| SHUNT POSITION   | DESCRIPTION                                                                                                                    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 1-2*             | Normal Operation. Four shunts are installed across pins 1-2, 3-4, 5-6, and 7-8.                                                |
| 3-4*             | Normal Operation. Four shunts are installed across pins 1-2, 3-4, 5-6, and 7-8.                                                |
| 5-6*             | Normal Operation. Four shunts are installed across pins 1-2, 3-4, 5-6, and 7-8.                                                |
| 7-8*             | Normal Operation. Four shunts are installed across pins 1-2, 3-4, 5-6, and 7-8.                                                |
| Not installed    | Alternative SPI Interface. No shunts are installed on JU1, connect the SPI signals to the CS , SCLK, DIN, DOUT, and OGND pads. |

where:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Driving Unbuffered Loads

The low-speed buffers (U6) on the EV kits are optional and, if  desired, can be disconnected from the DAC outputs of the AFEs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5a. MAX19710 EV Kit Schematic (Sheet 1 of 2)

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5b. MAX19711 EV Kit Schematic (Sheet 1 of 2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MXI

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5c. MAX19712 EV Kit Schematic (Sheet 1 of 2)

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5d. MAX19713 EV Kit Schematic (Sheet 1 of 2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MXI

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 6. MAX19710-MAX19713 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Figure 7. MAX19710-MAX19713 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 8. MAX19710-MAX19713 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Figure 9. MAX19710-MAX19713 EV Kit PCB Layout (Inner Layer 2)-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 10. MAX19710-MAX19713 EV Kit PCB Layout (Inner Layer 3)-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Figure 11. MAX19710-MAX19713 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19710-MAX19713 Evaluation Kits/Evaluation Systems

Figure 12. MAX19710-MAX19713 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Revision History

Pages changed at Rev 1: 1-6, 8, 9, 11-18

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.