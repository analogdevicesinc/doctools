<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## General Description

The MAX19705-MAX19708 evaluation systems (EV systems) consist of a MAX19705-MAX19708 evaluation kits (EV kits), a companion Maxim command module (CMOD232 or CMODUSB) interface board, and software. Order the complete EV system (see the Ordering Information )  for  comprehensive evaluation of the MAX19705-MAX19708 using a personal computer. Order the EV kit if the command module has already been purchased with a previous Maxim EV system, or for custom use in other microcontroller-based (µC) systems.

The MAX19705-MAX19708 EV kits are fully assembled and tested circuit boards that contain all the components necessary to evaluate the performance of the MAX19705-MAX19708 analog front-ends (AFEs). The MAX19705-MAX19708 integrate a dual-receive analogto-digital converter (Rx ADC), a dual-transmit digital-toanalog converter (Tx DAC), a 1.024V internal voltage reference, three low-speed serial DACs, and one lowspeed serial ADC. The EV kit boards accept AC- or DCcoupled, differential or single-ended analog inputs for the  Rx  ADC and include circuitry that converts the Tx DAC differential output signals to single-ended analog outputs. The EV kits include circuitry that generates a clock signal from an AC sine-wave input signal. The EV kits  operate from a +3.0V analog power supply, a +1.8V digital power supply, a +3.0V clock power supply, and ±5V bipolar power supplies.

The  Maxim  command  module  interface  board (CMOD232 or CMODUSB) allows a PC to use its serial or USB port to emulate an SPI™ 3-wire interface. Windows ® 98/2000/XP-compatible software, which can be downloaded from www.maxim-ic.com, provides a user-friendly interface to exercise the features of the MAX19705-MAX19708. The program is menu driven and offers a graphical user interface (GUI) with control buttons and a status display.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

## Part Selection Table

| PART          |   SPEED (Msps) | DAC TRANSMIT FILTER   |
|---------------|----------------|-----------------------|
| MAX19705EVKIT |            7.5 | Disabled              |
| MAX19706EVKIT |             22 | Disabled              |
| MAX19707EVKIT |             45 | Disabled              |
| MAX19708EVKIT |             11 | Enabled               |

## Features

- ♦ ADC/DAC Sampling Rates from 7.5Msps to 45Msps
- ♦ Low Voltage and Power Operation
- ♦ Adjustable-Gain, Low-Speed DAC Buffers
- ♦ On-Board Clock-Shaping Circuitry
- ♦ On-Board Level-Translating I/O Drivers
- ♦ Assembled and Tested
- ♦ Windows 98/2000/XP-Compatible Software Included

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE        | I 2 C INTERFACE TYPE   |
|--------------|--------------|-------------------|------------------------|
| 0°C to +70°C | 48           | TQFN Not included | MAX19705EVKIT          |
| 0°C to +70°C | 48 TQFN      | CMOD232           | MAX19705EVCMOD2        |
| 0°C to +70°C | 48 TQFN      | CMODUSB           | MAX19705EVCMODU        |
| 0°C to +70°C | 48 TQFN      | Not included      | MAX19706EVKIT          |
| 0°C to +70°C | 48 TQFN      | CMOD232           | MAX19706EVCMOD2        |
| 0°C to +70°C | 48 TQFN      | CMODUSB           | MAX19706EVCMODU        |
| 0°C to +70°C | 48 TQFN      | Not included      | MAX19707EVKIT          |
| 0°C to +70°C | 48 TQFN      | CMOD232           | MAX19707EVCMOD2        |
| 0°C to +70°C | 48 TQFN      | CMODUSB           | MAX19707EVCMODU        |
| 0°C to +70°C | 48           | TQFN Not included | MAX19708EVKIT          |
| 0°C to +70°C | 48           | TQFN CMOD232      | MAX19708EVCMOD2        |
| 0°C to +70°C | 48           | TQFN CMODUSB      | MAX19708EVCMODU        |

Note: The MAX19705-MAX19708 EV kit software is provided with the MAX19705EVKIT-MAX19708EVKIT; however, the CMOD232/CMODUSB board is required to interface the EV kit to the computer when using the included software.

## MAX19705-MAX19708 EV Kit Files

| PROGRAM      | DESCRIPTION                        |
|--------------|------------------------------------|
| INSTALL.EXE  | Installs the EV kit software       |
| MAX19705.EXE | Application program                |
| HELPFILE.HTM | MAX19705-MAX19708 EV kit help file |
| UNINST.INI   | Uninstalls the EV kit software     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## Common Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                           |
|----------------------------|-------|---------------------------------------------------------------------------------------|
| JU1                        |     1 | Jumper, dual-row, 8-pin header                                                        |
| JU2, JU3, JU5              |     3 | Jumpers, 3-pin headers                                                                |
| JU4                        |     1 | 2-pin header                                                                          |
| JU6                        |     0 | Not installed                                                                         |
| R1-R4, R55, R56, R61       |     7 | 49.9 Ω ±1% resistors (0603)                                                           |
| R5-R16, R37-R42, R64, R65  |     0 | Not installed (0402)                                                                  |
| R17-R20                    |     4 | 24.9 Ω ±1% resistors (0402)                                                           |
| R21-R36, R43-R46, R62, R66 |     0 | Not installed (0603)                                                                  |
| R47-R54                    |     8 | 10k Ω ±1% resistors (0603)                                                            |
| R57, R58                   |     2 | 4.02k Ω ±1% resistors (0603)                                                          |
| R59                        |     1 | 6.04k Ω ±1% resistor (0603)                                                           |
| R60                        |     1 | 2.0k Ω ±1% resistor (0603)                                                            |
| R63                        |     1 | 5k Ω potentiometer, 19-turn, 3/8in Vishay T93YB-5K-10-D06                             |
| RA1, RA2                   |     2 | 100 Ω ±5% resistor arrays (1206-16L) Panasonic EXB-2HV-101J                           |
| RA3, RA4                   |     2 | 51 Ω ±5% resistor arrays (1206-16L) Panasonic EXB-2HV-510J                            |
| RA5, RA6                   |     2 | Not installed (1206-16L)                                                              |
| T1, T2                     |     2 | 1:1 RF transformers Coilcraft TTWB3010-1                                              |
| TP1-TP5                    |     5 | Test points (black)                                                                   |
| U1                         |     1 | Note: See the EV Kit Specific Component List                                          |
| U2                         |     1 | 20-bit, dual-supply bus transceiver (56-pin TSSOP) Texas Instruments SN74AVCH20T245GR |
| U3                         |     1 | Maxim MAX9113ESA (8-pin SO)                                                           |
| U4, U5                     |     2 | Maxim MAX4108ESA (8-pin SO)                                                           |
| U6                         |     1 | Maxim MAX4478AUD (14-pin TSSOP)                                                       |
| U7                         |     1 | Maxim MAX3023EUD (14-pin TSSOP)                                                       |
| U8                         |     1 | Dual-supply, 5-bit signal translator (14-pin DQFN) Fairchild FXL5T244                 |
| -                          |     8 | Shunts                                                                                |
| -                          |     1 | MAX19705-MAX19708 PC board                                                            |

| DESIGNATION                                                                   |   QTY | DESCRIPTION                                                                                     |
|-------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------------|
| C1-C6,C17,C21, C23,C25,C28,C29, C37-C40,C45-C48, C73-C76,C78,C80, C81,C84,C85 |    29 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M                                |
| C7-C10                                                                        |     4 | 22pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H220J                                  |
| C11, C31-C36                                                                  |     0 | Not installed (0402)                                                                            |
| C12                                                                           |     0 | Not installed (0603)                                                                            |
| C13, C14, C82                                                                 |     3 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H102J                                |
| C15, C16                                                                      |     2 | 0.47µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A474M                               |
| C18, C19, C20, C67-C72                                                        |     9 | 1.0µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M                               |
| C22, C24, C26, C27                                                            |     4 | 0.1µF ±20%, 6.3V X5R ceramic capacitors (0201) TDK C0603X5R0J104M                               |
| C30, C41-C44, C77, C86                                                        |     7 | 2.2µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225M                               |
| C49-C60                                                                       |    12 | 220µF ±20%, 6.3V tantalum capacitors (C-case) AVX TPSC227M006R0250                              |
| C61-C66                                                                       |     6 | 10µF ±20%, 10V X5R ceramic capacitors (1210) TDK C3225X5R1A106M                                 |
| C79                                                                           |     1 | 0.01µF ±5%, 25V C0G ceramic capacitor (0603) TDK C1608C0G1E103J                                 |
| C83                                                                           |     1 | 0.47µF ±20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J474K                               |
| D1                                                                            |     1 | Dual Schottky diode (SOT23) Central Semiconductor CMPD6263S Vishay BAS70-04 Diodes Inc BAS70-04 |
| J1                                                                            |     1 | 2 x 20 right-angle female connector                                                             |
| J2, J3, J5, J6, J8, J9, J10, J12, J13                                         |     9 | SMA PC mount connectors                                                                         |
| J4, J7                                                                        |     2 | 2-pin headers                                                                                   |
| J11                                                                           |     1 | Dual-row, 40-pin header                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| AVX                   | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Coilcraft             | 847-639-6400 | 847-639-1469 | www.coilcraft.com     |
| Diodes Inc.           | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| Panasonic             | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Texas Instruments     | 972-644-5580 | 214-480-7800 | www.ti.com            |
| Vishay/Vitramon       | 203-268-6261 | 203-452-5670 | www.vishay.com        |

Note:

Indicate that you are using the MAX19705-MAX19708 when contacting these component suppliers.

## EV Kit Specific Component List

| EVKITPART NUMBER   | DESIGNATION   | DESCRIPTION                               |
|--------------------|---------------|-------------------------------------------|
| MAX19708EVKIT      | U1            | MaximMAX19708ETM (48-pinthinQFN,7mmx7mm)  |
| MAX19707EVKIT      | U1            | MaximMAX19707ETM (48-pinthinQFN, 7mmx7mm) |
| MAX19706EVKIT      | U1            | MaximMAX19706ETM (48-pinthinQFN,7mmx7mm)  |
| MAX19705EVKIT      | U1            | MaximMAX19705ETM (48-pinthinQFN,7mmx7mm)  |

## Quick Start

## Recommended Equipment

- DC power supplies:
- Signal generator with low phase noise and low jitter for  clock input signal (e.g., HP/Agilent 8662A, HP/Agilent 8644B)
- Two signal generators with low phase noise for analog signal inputs (e.g., HP/Agilent 8662A, HP/Agilent 8644B)
- Logic analyzer or data-acquisition system (e.g., HP/Agilent 16500C, TLA621)
- Analog bandpass filters (e.g., Allen Avionics, K&amp;L Microwave) for input and clock signal
- Two spectrum analyzers (e.g., HP/Agilent 8560E)
- One 10-bit digital pattern generator (e.g., Tektronix DG2020A)

| Analog (VDD)          | 3.0V, 100mA   |
|-----------------------|---------------|
| Clock (CVDD)          | 3.0V, 100mA   |
| Digital (OVDD)        | 1.8V, 100mA   |
| Buffers (BVCC)        | 3.3V, 100mA   |
| Op-amp positive (VOP) | 5.0V, 250mA   |
| Op-amp negative (VON) | -5.0V, 250mA  |

<!-- image -->

## Procedure

The MAX19705-MAX19708 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to  verify  board operation. Do not turn on power supplies or enable signal/data generators until all connections are completed.

## Command Module Setup (CMOD232)

- 1) If you are using the CMODUSB board skip to step 6.
- 2) Set both switches at SW1 to the OFF position to disable the SDA/SCL pullup resistors.
- 3) Place a shunt across pins 1-2 of the VDD select jumper (command module working voltage set to 3.3V).
- 4) Connect a cable from the computer's serial port to the command module (CMOD232) interface board. Use a straight-through 9-pin male-to-female cable. To avoid damaging the EV kit or your computer, do not use a 9-pin null-modem cable or any other proprietary interface cable that is physically similar to the straightthrough cable.
- 5) Connect the provided wall-cube power supply to the CMOD232 board.

## Command Module Setup (CMODUSB)

- 6) If you are using the CMOD232 board skip to step 11.
- 7) Set both switches at SW1 to the OFF position to disable the SDA/SCL pullup resistors.
- 8) Place a shunt across pins 1-2 of the VDD select jumper (command module working voltage set to 3.3V).
- 9) Connect a cable from the computer's USB port to the command module (CMODUSB) interface board. Use a standard USB A-B cable.
- 10) Connect the provided wall-cube power supply to the CMODUSB board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## EV Kit Software Setup

- 11) The MAX19707.EXE software program can be run from  the  CD-ROM  or  hard  drive.  Use  the INSTALL.EXE program to copy the files and create icons in the Windows 98/2000/XP Start menu.

## EV Kit Setup

- 12) Verify that shunts are installed in the following locations:

JU1 (1-2) → CS connected

JU1 (3-4) → SCLK connected

JU1 (5-6) → DIN connected

JU1 (7-8) → DOUT connected

JU2 (1-2) → MAX19707 enabled

JU4 (INSTALLED) → Internal reference enabled

JU5 (1-2) → Digital bus level-shifting enabled

- 13) Connect a 3.0V, 100mA power supply to VDD. Connect the ground terminal of this supply to GND.
- 14) Connect a 3.0V, 100mA power supply to CVDD. Connect the ground terminal of this supply to GND.
- 15) Connect a 1.8V, 100mA power supply to OVDD. Connect the ground terminal of this supply to DGND.
- 16) Connect a 3.3V, 100mA power supply to BVCC. Connect the ground terminal of this supply to DGND.
- 17) Connect a 5V, 250mA power supply to VOP. Connect the ground terminal of this supply to GND.
- 18) Connect a -5V, 250mA power supply to VON. Connect the ground terminal of this supply to GND.
- 19) Carefully  align  the  40-pin  connector  of  the MAX19705-MAX19708 EV kits (J1) with the 40-pin header of the CMOD232/CMODUSB interface board (P4). Gently press them together.
- 20) The MAX19705-MAX19708 EV kits support three modes of operation:
- a. To connect a logic analyzer to the EV kit and test the Rx ADCs, skip to step 21.
- b. To connect a spectrum analyzer to the EV kit and test the Tx DACs, skip to step 43.
- c. To connect an ASIC or FPGA to the EV kit, see the Configuring for ASIC/FPGA Connection section.

## Rx ADC Setup

- 21) Ensure that a shunt is placed across pins 2 and 3 of jumper JU3.
- 22) Connect the clock signal generator to the input of the clock bandpass filter.
- 23) Connect the output of the clock bandpass filter to the EV kit SMA connector labeled J10.
- 24) Connect the first analog signal generator to the input of the desired bandpass filter.
- 25) Connect the output of the bandpass filter to the EV kit SMA connector labeled J3 (I channel).
- 26) Connect the second analog signal generator to the input of the desired bandpass filter.
- 27) Connect the output of the bandpass filter to the EV kit SMA connector labeled J6 (Q channel).
- 28) Ensure that all signal generators are phase-locked to a common reference frequency.
- 29) Connect the logic analyzer to J11. See the Digital Data Bit Locations section for header connections.
- 30) Set the logic analyzer to capture 10-bit CMOS data on the falling edge for the I channel (J3) or the rising edge for the Q channel (J6).
- 31) Turn on the -5V power supply.
- 32) Turn on all remaining power supplies.
- 33) Plug the CMOD232/CMODUSB wall cube into an electrical outlet.
- 34) Enable the signal generators.
- 35) Set the clock signal generator to output the desired clock frequency. The amplitude of the generator should be sufficient to produce a 13.8dBm signal at the SMA input of the EV kit. Insertion losses due to the series-connected filter (step 22) and the interconnecting cables decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude.
- 36) Set the analog input signal generators to output the desired frequency. The amplitude of the generator should produce a signal that is no larger than 4.5dBm as measured at the SMA input of the EV kit. Insertion losses due to the series-connected filter (steps 24 and 26) and the interconnecting cables decrease the amount of power seen at the EV kit input.  Account for these losses when setting the signal generator amplitude.
- 37) Start the MAX19705-MAX19708 program by opening its icon in the Start menu.
- 38) Select the device that you are using in the Device drop-down box.
- 39) Normal device operation can be verified by the 'Status: Interface Board Operational' text in the Interface box.
- 40) Click the POR Reset button on the MAX19705MAX19708 EV kit software GUI.
- 41) Enable the logic analyzer.
- 42) Capture data using the logic analyzer.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Tx DAC Setup

- 43) Ensure that a shunt is placed across pins 1 and 2 of jumper JU3.
- 44) Connect the clock signal generator to the input of the clock bandpass filter.
- 45) Connect the output of the clock bandpass filter to the EV kit SMA connector labeled J10.
- 46) Connect the output of the clock signal generator to the data generator synchronization input.
- 47) Connect the first spectrum analyzer to the EV kit SMA connector labeled J8 (Q channel).
- 48) Connect the second spectrum analyzer to the EV kit SMA connector labeled J9 (I channel).
- 49) Connect the data generator to J11. See the Digital Data Bit Locations section for header connections.
- 50) Turn on the -5V power supply.
- 51) Turn on all remaining power supplies.
- 52) Plug the CMOD232/CMODUSB wall cube into an electrical outlet.
- 53) Enable the signal generator.
- 54) Set the clock signal generator to output the desired clock frequency. The amplitude of the generator should be sufficient to produce a 13.8dBm signal at the SMA input of the EV kit. Insertion losses due to the  series-connected filter (step 43) and the interconnecting cables decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude.
- 55) Load the desired test pattern into the data generator. Data clocked on the rising edge of the clock is transmitted to the Q channel. Data clocked on the falling edge of the clock is transmitted to the I channel.
- 56) Start the MAX19705-MAX19708 EV kits program by opening the icon in the Start menu.
- 57) Select the device that you are using in the Device drop-down box.
- 58) Normal device operation can be verified by the 'Status: Interface Board Operational' text in the box.
- 59) Click the POR Reset button on the MAX19705MAX19708 EV kit software GUI.
- 60) Enable the data generator.
- 61) Enable the spectrum analyzers.
- 62) Analyze the data on the EV kit outputs (J8 and J9) with the spectrum analyzers.

<!-- image -->

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## Detailed Description of Software

## User-Interface Panel

The user interface (Figure 1) is easy to operate; use the mouse, or a combination of the Tab and arrow keys to manipulate the software. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct SPI write operation is generated to update the internal registers of the MAX19705-MAX19708. Words in bold represent visible items on the GUI.

The software divides EV kit functions into logical blocks. The Interface box indicates the current Device , the Register Address Sent ,  and the Data Sent/ Received for the last write operation. This data is used to  confirm proper device operation. Adjust the SPI Clock Frequency through the pulldown box.

The controls for the Tx DAC , Auxiliary DACs ,  and Auxiliary ADC are accessed through tab sheets. Device Control is  accessed at the right-hand side of the main window. Return the EV kit to its power-on-reset state by clicking the POR Reset button.

The MAX19707 EV kit software features additional functions to simplify operation. Automatic Diagnostics probes the command module board to make sure that a connection exists between the PC and the command module.

Figure 1. MAX19705-MAX19708 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## Device Control

Configure the operating mode of the device through the intuitive  controls  in  the Device Control box. Select a mode as outlined in the MAX19705-MAX19708 data sheet using the Operating Mode control. For a detailed description of the MAX19705-MAX19708 operating modes and their specific names, refer to the PowerManagement  Modes table  in  the  MAX19705, MAX19706, MAX19707, or MAX19708 data sheets.

The MAX19705-MAX19708 feature an 8-bit SPI signaling mode to increase communications speed. Check the Use Enable-8 Signaling box to use this mode. Refer to the MAX19705, MAX19706, MAX19707, or MAX19708 data sheets for more details on Enable-8 signaling.

When using the SPI Tx/Rx Control , ensure that jumper JU3 is set appropriately. See the Digital Data Direction section for details regarding JU3.

## Tx DAC Control

Adjust the Common Mode Voltage and the DAC Full Scale voltage by selecting the desired option from the pulldown box. The Common Mode Voltage control  is only available when using the MAX19708. The com- mon-mode voltage of the MAX19705, MAX19706, MAX19707 is fixed. Refer to the respective data sheet for more details.

The DAC I-Offset and Q-Offset voltages can be adjusted in 801.5µV/977.5µV increments by adjusting the appropriate slider in the Tx DAC Offset Control box.

The increment value is dependent on the DAC Full

Scale range. A full-scale range of 820mVP-P yields an 801.5µV increment. A full-scale range of 1VP-P yields a 977.5µV increment. Alternatively, a number (specified in  millivolts)  can  be  entered  in  the  boxes  below  each slider.  If  a  number  not  divisible  by  0.8015/0.9775  is entered, the software automatically rounds the number to  the  nearest  801.5µV/977.5µV increment and sends the appropriate data to the MAX19705-MAX19708.

## Auxiliary DAC Control

Access the MAX19705-MAX19708 auxiliary DACs through the Auxiliary DACs tab of the MAX19707 EV kit software (Figure 2). Set the output voltage of the desired auxiliary DAC by adjusting the Aux-DAC 1 , Aux-DAC 2 , or Aux-DAC 3 sliders.  Enter  a  number in the edit box below the slider for precise adjustments. Enable each DAC by setting the checkbox below the slider.

Figure 2. MAX19705-MAX19708 EV Kit Software Auxiliary DAC Control

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

## Auxiliary ADC Controls

Access the MAX19705-MAX19708 auxiliary ADC through the Auxiliary ADC tab of the MAX19705-MAX19708 EV kit software. Although the MAX19705-MAX19708 feature only one 10-bit, low-speed ADC, they can multiplex four voltages onto their input. Select the desired ADC Input Source in  the ADC Conversion box. Read the CODE and VOLTAGE of  the ADC by clicking the Start Conversion and Read ADC Value button.

Other ADC features such as ADC Averaging and Conversion Clock Divide Ratio are accessed through the ADC Control box. Disable the auxiliary ADC by checking the Shutdown Auxiliary ADC checkbox. The MAX19705-MAX19708 can use either an Internal 2.048V reference or VDD ( Internal VDD )  for  the  auxiliary  ADC reference. If VDD is used for the reference voltage, enter the value of VDD in the box beside the Internal VDD checkbox.

## Simple SPI Commands

There are two methods for communicating with the MAX19705-MAX19708: through the normal user-interface panel or through the SPI commands available by selecting the 3-Wire Interface Diagnostic item from the Options pulldown menu. A window is displayed that executes an SPI read/write operation.

The SPI ( 3-Wire Interface ) dialog box accepts numeric data in hexadecimal format. Hexadecimal numbers should be prefixed by a $ or 0x. Data entered in the Data bytes to be written: edit box will be sent to the device. Eight-bit hexadecimal numbers should be comma delimited. Data appearing in the Data bytes received: box is data read from the device.

<!-- image -->

Figure 3. MAX19705-MAX19708 EV Kit Software Auxiliary ADC Control

<!-- image -->

Clicking the Send Now button in Figure 4 transmits the hexadecimal numbers 0x4A and 0xC1. 0x00 and 0x00 are the received values from the device. For a detailed description of  SPI  communications  with  the MAX19705-MAX19708, refer  to  the  MAX19705, MAX19706, MAX19707, and MAX19708 data sheets.

## Detailed Description of Hardware

The MAX19705-MAX19708 EV kits are fully assembled and tested circuit boards that contain all the components necessary to evaluate the performance of the MAX19705, MAX19706, MAX19707, or MAX19708 analog front-end (AFE) ICs.

The MAX19705-MAX19708 receive ADCs (Rx ADCs) accept differential input signals; however, on-board transformers (T1, T2) convert a readily available singleended source output to the required differential signal. The input signals of the MAX19705-MAX19708 can be measured using a differential oscilloscope probe at headers J4 and J7.

The MAX19705-MAX19708 transmit DACs (Tx DACs) are buffered with on-board ultra-low-distortion split-supply operational amplifiers.

Figure 4. MAX19705-MAX19708 EV Kit Software 3-Wire Interface Diagnostics

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

A bidirectional driver (U2) buffers and level-translates the parallel data bus signals of the MAX19705-MAX19708. The parallel data bus of the MAX19705-MAX19708 EV kits is accessible at header J11.

The EV kits are designed as four-layer PC boards to optimize the performance of the MAX19705-MAX19708. Separate analog, digital, clock, and buffer power planes minimize noise coupling between analog and digital signals.  100 Ω differential  microstrip  transmission lines are used for analog ADC inputs and analog DAC outputs. 50 Ω microstrip transmission lines are used for all digital outputs and the clock input. The trace lengths of the ADC input and DAC output paths are well matched to minimize layout-dependent signal skew.

## Power Supplies

For optimal performance, the MAX19705-MAX19708 EV kits require separate analog, digital, clock, and buffer power supplies. +3.0V and +1.8V power supplies are recommended to power the analog (VDD) and digital  (OVDD) portions of the MAX19705-MAX19708, respectively. A separate +3.3V power supply (BVCC) is used to power the I/O level-translating buffer (U2). The clock circuitry (CVDD) is powered by a +3.0V power supply. The DAC outputs of the MAX19707 are buffered by split-supply op amps. Power the positive rail  (VOP)  with  a  +5V  supply.  Power  the  negative  rail (VON) with a -5V supply.

## MAX19705-MAX19708 Power-Down

The MAX19705-MAX19708 feature a global device power-down pin. Jumper JU2 controls this feature. See Table 1 for jumper configuration.

## Table 1. Power-Down Shunt Settings (JU2)

| SHUNT POSITION   | PD PIN   | DESCRIPTION                     |
|------------------|----------|---------------------------------|
| 1-2*             | OVDD     | Normal operation.               |
| 2-3              | DGND     | MAX19705-MAX19708 powered down. |

* Default configuration: JU2 (1-2).

## Measuring the OVDD Supply Current

The level-translating buffer (U2) requires a voltage supply  on  each  side  of  the  device.  By  default  the MAX19705-MAX19708 side of the device is connected to  OVDD. If the OVDD current is measured at the OVDD and GND pads of the EV kit, a measurement error occurs due to the extra current flowing into U2. To accurately measure OVDD current, connect the MAX19705-MAX19708 side of U2 to BVCC by configuring jumper JU5. See Table 2 for jumper configuration. Ensure that BVCC is equal to OVDD, when operating in this mode.

## Clock

An on-board clock-shaping circuit generates a clock signal from an AC sine-wave signal applied to the CLOCK SMA connector. The input signal should not exceed a magnitude of 2.6VP-P. The frequency of the signal should not exceed 45MHz for the MAX19707 (see the Part Selection Table for the maximum sampling rate of other devices). The frequency of the sinusoidal input signal determines the sampling frequency (fCLK) of the MAX19705-MAX19708. A differential line receiver (U3) processes the input signal to generate the CMOS clock signal. The signal's duty cycle can be adjusted with potentiometer R63. A clock signal with a 50% duty cycle (recommended) can be achieved by adjusting R63 until 1.32V is produced across test points TP3 and TP4 when the clock voltage supply (CVDD) is set to 3.0V. The clock signal is available at J11-1 (CLK), which can be used to synchronize the output signal to the logic analyzer. Measure the clock signal with an oscilloscope at TP5.

## Rx ADC Inputs

Although the MAX19705-MAX19708 accept differential analog input signals, the EV kits only require a singleended analog input signal, with an amplitude of less than 4.5dBm provided by the user. Connect the single-ended sources to J3 (I channel) and J6 (Q channel). Insertion losses due to series-connected filters and the interconnecting cables decrease the amount of power seen at the EV kit input. Account for these losses when setting the signal generator amplitude. On-board transformers(T1, T2) convert the single-ended analog input signals and generate differential analog signals at the ADC's differential  input  pins.  The  MAX19705-MAX19708 also accept single-ended input signals. See the Configuring for Single-Ended ADC Operation section for details on how to  modify the MAX19705-MAX19708 EV kits to support this mode of operation.

## Configuring for Single-Ended ADC Operation

The MAX19705-MAX19708 can be configured to accept AC-coupled single-ended signals presented at the input. Configure the EV kit to support this mode of operation by completing these steps:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 2. OVDD Supply Connections (JU5)

| SHUNT POSITION   | DESCRIPTION                                          |
|------------------|------------------------------------------------------|
| 1-2*             | Normal operation.                                    |
| 2-3              | OVDD measurement mode. (Note: BVCC must equal OVDD.) |

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

- 1) Cut the trace at locations R11, R12, R13, and R14.
- 2) Install 0 Ω resistors at locations R7, R8, R9, R10, R15, and R16.
- 3) Install 2k Ω ±1% resistors at locations R21, R22, R23, and R24.
- 4) Connect  the  single-ended  sources  to  J2 (I channel) and J5 (Q channel).

Configure the EV kit for DC-coupled single-ended signals by removing capacitors C1, C2, removing resistors R9, R10, and installing 0 Ω resistors at locations R5 and R6.

## Tx DAC Outputs

By default, on-board ultra-low-distortion op amps (U4 and U5) buffer the DAC outputs on the MAX19705MAX19708 EV kits. The op amps convert the differential signal from the MAX19705-MAX19708 to a singleended 50 Ω signal. Measure the buffered output signals at J8 (Q channel) and J9 (I channel).

Measure the differential output of the MAX19705MAX19708 at the IDN/IDP and QDN/QDP pads. Fullscale output, offset voltage, and common-mode voltage  functions  are  controlled  through  the MAX19705-MAX19708 EV kit software.

## Reference

The MAX19705-MAX19708 feature two reference operation modes. The EV kits can be configured to use either  the  MAX19705-MAX19708 internal (1.024V) reference or an external user-supplied reference applied at the REFIN pad. The MAX19705-MAX19708 generate the  REFP and REFN voltages from the selected reference voltage (refer to the MAX19705, MAX19706, MAX19707, and MAX19708 data sheets for more details). Measure the REFP and REFN voltages at TP1 and TP2, respectively. Jumper JU4 controls the reference mode. See Table 3 for jumper configuration.

Table 3. Reference Shunt Settings (JU4)

| SHUNT POSITION   | DESCRIPTION                                                                    |
|------------------|--------------------------------------------------------------------------------|
| Installed*       | Internal reference mode.                                                       |
| Not Installed    | External reference mode. Apply an external reference voltage to the REFIN pad. |

## Digital Data Header

The MAX19705-MAX19708 feature a single 10-bit parallel,  bidirectional  data  bus  that  transmits/receives  the converted analog signals. Refer to the MAX19705, MAX19706, MAX19707, MAX19708 data sheets for more details.

<!-- image -->

## Digital Data Direction

The MAX19705-MAX19708 EV kits feature an on-board bidirectional level-translating buffer in the parallel digital data path. Jumper JU3 controls the direction of the data bus. See Table 4 for jumper configuration.

## Table 4. Output Format Shunt Settings (JU3)

| SHUNT POSITION   | DESCRIPTION                              |
|------------------|------------------------------------------|
| 1-2              | Transmit path enabled. D0-D9 are inputs. |
| 2-3*             | Receive path enabled. D0-D9 are outputs. |

## Digital Data Bit Locations

A  driver  (U2)  buffers  the  digital  I/Os  of  the MAX19705-MAX19708. This driver is able to drive large capacitive loads, which may be present at the logic analyzer connection. The outputs of the buffer are connected to a 40-pin header (J11). See Table 5 for bit locations on header J11.

Table 5. Digital Data Bit Locations

| SIGNAL   | LOCATION   | TYPE   | DESCRIPTION              |
|----------|------------|--------|--------------------------|
| D0       | J11-37     | I/O    | Data Bit 0 (LSB)         |
| D1       | J11-35     | I/O    | Data Bit 1               |
| D2       | J11-33     | I/O    | Data Bit 2               |
| D3       | J11-31     | I/O    | Data Bit 3               |
| D4       | J11-29     | I/O    | Data Bit 4               |
| D5       | J11-27     | I/O    | Data Bit 5               |
| D6       | J11-25     | I/O    | Data Bit 6               |
| D7       | J11-23     | I/O    | Data Bit 7               |
| D8       | J11-21     | I/O    | Data Bit 8               |
| D9       | J11-19     | I/O    | Data Bit 9 (MSB)         |
| SHDN     | J11-13     | I/O*   | Shutdown Status*         |
| Tx/ Rx   | J11-9      | I/O*   | Transmit/Receive Status* |
| CLK      | J11-3      | Output | Incoming Clock Signal    |
| CLK      | J11-1      | Output | Incoming Clock Signal    |

Note: All signal directions are with respect to the EV kit. Pins 5, 7, 11, 15, 17, 39, and 40 of J11 are open. All other pins are connected to DGND.

## Configuring for ASIC/FPGA Connection

The MAX19705-MAX19708 EV kits are designed to be connected to an ASIC or FPGA. To complete this connection, follow the list of instructions:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

- 1) Remove the shunt from jumper JU2.
- 2) Remove the shunt from jumper JU3.
- 3) Connect an ASIC/FPGA to header J11 (see the Digital Data Bit Locations section for header connections).
- 4) Ensure that the voltage at BVCC matches the ASIC/FPGA I/O voltage.

The ASIC/FPGA must control all signals connected to the MAX19705-MAX19708, including SHDN and Tx/ Rx .

## Configuring the Low-Speed DAC Buffers

The MAX19705-MAX19708 EV kits feature on-board configurable buffers. By default these buffers are configured for unity gain. Measure the buffered voltage at the BDAC1, BDAC2, and BDAC3 pads. Measure the unbuffered voltage at the DAC1, DAC2, and DAC3 pads. Configure the on-board buffers for a positive (noninverting) gain by performing the following steps:

- 1) Cut the trace at locations R31, R33, and R35.
- 2) Select a value of 10k Ω for  resistors  R32,  R34, and R36.
- 3) Calculate resistors R31, R33, and R35 using the equations below.
- 4) Install R31, R33, and R35 in their respective locations.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Driving Unbuffered Loads

The low-speed buffers (U6) on the MAX19705-MAX19708 EV kits are optional and, if desired, can be disconnected from the DAC outputs of the MAX19705-MAX19708.

Disconnect the buffers from the MAX19705-MAX19708 by cutting the trace at locations R28, R29, and R30. Connect the low-speed DAC loads to the DAC1, DAC2, and DAC3 pads on the EV kit. If the load capacitance is between 5pF and 15pF, cut the trace and install 10k Ω resistors at locations R25, R26, and R27. Resistors are not required if the capacitive load is less than 5pF.

## Using an Alternative SPI Interface

The MAX19705-MAX19708 EV kits provide pads and jumpers that allow an alternative SPI interface to be used. Connect the interface to the CS , SCLK, DIN, and GND pads. Ensure that the SPI voltages are compatible with the MAX19705-MAX19708 working voltages. Refer to  the  MAX19705,  MAX19706,  MAX19707,  and MAX19708 data sheets for suitable SPI interface voltages. Remove the shunts from jumper JU1. See Table 6 for jumper configuration.

## Table 6. Alternative SPI Interface (JU1)

| SHUNT POSITION   | DESCRIPTION                                                                                                                   |
|------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1-2*             | Normal Operation. Three shunts are installed across pins 1-2, 3-4, 5-6, 7-8.                                                  |
| 3-4*             | Normal Operation. Three shunts are installed across pins 1-2, 3-4, 5-6, 7-8.                                                  |
| 5-6*             | Normal Operation. Three shunts are installed across pins 1-2, 3-4, 5-6, 7-8.                                                  |
| 7-8*             | Normal Operation. Three shunts are installed across pins 1-2, 3-4, 5-6, 7-8.                                                  |
| Not Installed    | Alternative SPI Interface. No shunts are installed on JU1, connect the SPI signals to the CS , SCLK, DIN, DOUT, and GND pads. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

Figure 5b. MAX19706 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5c. MAX19707 EV Kit Schematic (Sheet 1 of 2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5d. MAX19708 EV Kit Schematic (Sheet 1 of 2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 5e. MAX19705-MAX19708 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

Figure 6. MAX19705-MAX19708 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 7. MAX19705-MAX19708 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 8. MAX19705-MAX19708 EV Kit PC Board Layout (Inner Layer 2)-Ground Planes

18

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

<!-- image -->

Figure 9. MAX19705-MAX19708 EV Kit PC Board Layout (Inner Layer 3)-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

Figure 10. MAX19705-MAX19708 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19705-MAX19708 Evaluation Kits/Evaluation Systems

Figure 11. MAX19705-MAX19708 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_