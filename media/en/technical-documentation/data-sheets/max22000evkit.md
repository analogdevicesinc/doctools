<!-- lastmod 2022-08-03 -->
## MAX22000 Evaluation Kit

## General Description

The  MAX22000  evaluation  kit  (EV  kit)  provides  the hardware and software necessary to evaluate the MAX22000 industrial configurable analog I/O, both natively,  and  in  conjunction  with  the  MAX14914A  industrial digital  I/O.  The  MAX22000  EV  kit  communicates  with  a graphical  user  interface  (GUI)  running  on  a  PC  through  a USB port.

## MAX22000 EV Kit Photo

<!-- image -->

Windows is a registered trademark of Microsoft Corporation.

## Features

- All Modes Accessible: Voltage Input, Voltage Output, Current Input, Current Output, and Temperature Measurement
- Accesses All Spare Inputs
- Includes MAX14914A Industrial Digital I/O
- Windows® 10, Windows 8.1, and Windows 7 Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX22000

<!-- image -->

## MAX22000 EV Kit Block Diagram

<!-- image -->

│

## Quick Start

## Required Equipment

- MAX22000 EV kit
- Micro-USB cable
- 24V, 1A DC power supply
- Windows 10 or Windows 8.1 PC with a spare USB port
- Multimeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX22000EVKITSetupV1.0.EXE.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer by running t he MAX22000EVKITSetupV1.0.EXE program inside the temporary  folder.  The  program  files  are  copied  to your PC and icons are created in the Windows Start | Programs | Maxim Integrated menu. During software installation,  some  versions  of  Windows  might show  a  warning  message  indicating  that  this  software is from Maxim Integrated. This is not an error condition and it is safe to proceed with installation. Administrator  privileges  are  required  to  install  the USB device driver.
- 3) Verify  that  all  the  jumpers  are  in  their  default  positions, as shown in Table 1.
- 4) Connect the 24V Adapter supplied with the EV kit or use a 24V DC power supply connected on the gray 24V (TP101) and black AGND (TP102) connectors on the EV kit board.
- 5) Connect the multimeter to pins 1 and 4 of J12, and set the multimeter to read voltage.
- 6) Connect the  USB cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the  EV  kit  board  to  the  PC  for  the  first  time.  Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then proceed to the next step.
- 7) Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start | Programs | Maxim Integrated menu. The  EV  kit  software Configurable  IO tab  appears. Select the Analog Output tab, as shown in Figure 1.
- 8) Verify  that Status:  MAX22000EVKIT  Connected is  displayed  on  the  status  bar  at  the  bottom  of  the application window (Figure 1).
- 9) In the AO Mode drop down, select 'Voltage +/-10V'
- 10)  Select the Setting edit box and type '10.'
- 11) Click the Set button. Verify that the multimeter now reads about 10 Volts.
- 10)  Select the Register tab and click on the Read All button to read all of the registers in the device.
- 11) Inspect  the  bottom  16  bits  of  register  0x00  (GEN\_ PROD)  and  the  bottom  16  bits  of  register  0x01 (GEN\_REV) are not all zeroes (Figure 2).

Evaluates: MAX22000

│

&gt;

Figure 1. MAX22000 EV Kit Software, Analog Output Test

<!-- image -->

Figure 2. MAX22000 EV Kit Software, Register Access Test

<!-- image -->

## MAX22000

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                                               |
|----------|-----------------|-----------------------------------------------------------------------------------------------------------|
| J1       | 1-2*            | Input AI1 dedicated to analog output-current mode                                                         |
| J1       | 2-3             | Input AI1 available on J19 pin 6                                                                          |
| J2       | 1-2*            | Input AI2 dedicated to analog output-currrent mode                                                        |
| J2       | 2-3             | Input AI2 available on J19 pin 5                                                                          |
| J3       | 1-2*            | Input AI3 dedicated to analog output-voltage mode                                                         |
| J3       | 2-3             | Input AI3 available on J19 pin 3                                                                          |
| J4       | Open            | AUX1 input open                                                                                           |
| J4       | Closed          | Connect Thermistor to AUX1 for cold junction compensation for Thermocouple                                |
| J5       | Open            | AUX2 input open                                                                                           |
| J5       | Closed          | Connect Thermistor to AUX2 for cold junction compensation for Thermocouple                                |
| J6       | 1-2             | Select on-board 2.500V source for external DAC reference                                                  |
| J6       | 2-3*            | Use an on-chip reference for DAC (Grounds REF_DAC_EXT)                                                    |
| J6       | Open            | Select voltage at TP25 (EXT) for external DAC reference                                                   |
| J7       | 1-2             | Select on-board 2.500V source for externalADC reference                                                   |
| J7       | 2-3*            | Use on-chip reference forADC (Grounds REF_ADC_EXT)                                                        |
| J7       | Open            | Select voltage at TP38 (EXT) for externalADC reference                                                    |
| J8       | Open*           | GPIO4 selects between voltage and current measurement at J19 pin 2 to input AI4                           |
| J8       | Closed          | Force current measurement only at J19 pin 2 to input AI4                                                  |
| J10      | Open*           | Input AI5 connected to J12 pin 3, high-side remote sense of the analog output                             |
| J10      | Closed          | Input AI5 connected directly to the high-side of the analog output                                        |
| J11      | Open*           | Input AI6 connected to J12 pin 2, low-side remote sense of the analog output                              |
| J11      | Closed          | Input AI6 connected directly to the low-side of the analog output                                         |
| JP10     | Open            | Connect HVDD net to external supply on TP110                                                              |
| JP10     | Closed*         | Connect HVDD net to on-board +18V regulator                                                               |
| JP20     | Open            | Connect HVSS net to external supply on TP120                                                              |
| JP20     | Closed*         | Connect HVSS net to on-board -18V regulator                                                               |
| JP30     | 1-2*            | Connect HVDDO net to on-board voltage positioning (+5V/+10V/+15V) regulator                               |
| JP30     | 2-3             | Connect HVDDO net to +24V supply on J100 or TP101                                                         |
| JP30     | Open            | Connect HVDDO net to supply on TP130                                                                      |
|          | Open            | Connect HVSSO net to external supply on TP140                                                             |
| JP40     | Closed*         | Connect HVSSO net to on-board voltage positioning (-5V-10V/-15V) regulator                                |
| J107     | 1-2             | Connect AVDD and DVDD nets to the output of U50, a MAX17552 buck regulator                                |
| J107     | 2-3*            | Connect AVDD and DVDD nets to the output of U60, a MAX8902B low-voltage post regulator                    |
| J107     | Open            | Connect AVDD net to external supply on TP150 and DVDD net to external supply on TP103                     |
|          | Open            | Analog I/O only, MAX14914A disconnected from J12                                                          |
| J300     | Closed*         | Configurable I/O, MAX14914A connected to J12                                                              |
| SW1      | Open            | MAX22000 control signals disconnected from isolated USB interface, connected to J201 for external control |
| SW1      | Closed*         | MAX22000 control signals connected to isolated USB interface from PC                                      |

Evaluates: MAX22000

Table 2. Test Point Description

| TEST POINT       | DESCRIPTION                                                                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| HART_GND (BLACK) | AGND: co-located with HART test points                                                                                                              |
| HART_IN (WHITE)  | HART IN: Input from HART source                                                                                                                     |
| HART_OUT (WHITE) | HART OUT: output to HART peripheral                                                                                                                 |
| J12 (GREEN)      | I/O: Configurable I/O terminal block, consisting of force high, AI5 sense high, AI6 sense low, and return. Includes Digital I/O if J300 is shorted. |
| J19 (GREEN)      | SPAREANALOG INPUTS: Access to analog inputs, AI1, AI2, AI3, and AI4                                                                                 |
| TP3 (BLACK)      | AGND                                                                                                                                                |
| TP4 (YELLOW)     | LDAC: MAX22000 LDAC pin monitor point                                                                                                               |
| TP6 (YELLOW)     | SS: MAX22000 CS pin monitor point                                                                                                                   |
| TP8 (YELLOW)     | SCK: MAX22000 SCLK pin monitor point                                                                                                                |
| TP9 (YELLOW)     | MOSI: MAX22000 SDI pin monitor point                                                                                                                |
| TP10 (WHITE)     | AUX1: MAX22000 AUX1 analog input                                                                                                                    |
| TP11 (YELLOW)    | MISO: MAX22000 SDO pin monitor point                                                                                                                |
| TP12 (GREEN)     | DGND: co-located with MAX22000 digital interface monitor points                                                                                     |
| TP13 (WHITE)     | AUX2: MAX22000 AUX2 analog input                                                                                                                    |
| TP14 (YELLOW)    | INT: MAX22000 INT pin monitor point                                                                                                                 |
| TP15 (GREEN)     | DGND: co-located with MAX22000 digital interface monitor points                                                                                     |
| TP16 (YELLOW)    | RST: MAX22000 RST pin monitor point                                                                                                                 |
| TP17 (BLACK)     | AGND: co-located with AUX1 and AUX2 test points                                                                                                     |
| TP18 (YELLOW)    | RDY: MAX22000 RDY pin monitor point                                                                                                                 |
| TP20 (YELLOW)    | SYNC: MAX22000 SYNC pin access, has a 22kΩ pulldown to DGND                                                                                         |
| TP21 (YELLOW)    | CLK: MAX22000 CLK pin access, has a 22kΩ pulldown to DGND                                                                                           |
| TP22 (GREEN)     | DGND: co-located with SYNC and CLK test points                                                                                                      |
| TP24 (WHITE)     | DAC REF: MAX22000 REF_DAC monitor point                                                                                                             |
| TP25 (WHITE)     | DAC REF EXT: provide an external off-board DAC reference here; see J6                                                                               |
| TP26 (WHITE)     | ADC REF: MAX22000 REF_ADC monitor point                                                                                                             |
| TP27 (BLACK)     | AGND: co-located with DAC reference test points                                                                                                     |
| TP30 (YELLOW)    | GPIO0: MAX22000 GPIO0 pin access                                                                                                                    |
| TP31 (YELLOW)    | GPIO1: MAX22000 GPIO1 pin access                                                                                                                    |
| TP32 (YELLOW)    | GPIO2: MAX22000 GPIO2 pin access                                                                                                                    |
| TP33 (YELLOW)    | GPIO3: MAX22000 GPIO3 pin access                                                                                                                    |
| TP34 (YELLOW)    | GPIO4: MAX22000 GPIO4 pin access                                                                                                                    |
| TP35 (YELLOW)    | GPIO5: MAX22000 GPIO5 pin access                                                                                                                    |
| TP37 (GREEN)     | DGND: co-located with GPIO test points                                                                                                              |
| TP38 (WHITE)     | ADC REF EXT: provide an external off-boardADC reference here; see J7                                                                                |
| TP39 (BLACK)     | AGND: co-located withADC reference test points                                                                                                      |
| TP101 (GRAY)     | 24V power input                                                                                                                                     |
| TP102 (BLACK)    | DGND: 24V power input return                                                                                                                        |

Evaluates: MAX22000

## Table 2. Test Point Description (continued)

| TEST POINT     | DESCRIPTION                                                                                            |
|----------------|--------------------------------------------------------------------------------------------------------|
| TP103 (RED)    | AVDD: external analog supply voltage input, remove R170 if supplied externally                         |
| TP106 (BLACK)  | AGND: co-located with AVDD supply test point                                                           |
| TP110 (ORANGE) | HVDD: externall high-voltage positive analog supply input; see JP10                                    |
| TP111 (BLACK)  | AGND: co-located with HVDD and HVSS supply test points                                                 |
| TP120 (PURPLE) | HVSS: external high-voltage negative supply input, must be more negative than HVSSO                    |
| TP130 (ORANGE) | HVDDO: external high-voltage positive drive supply input                                               |
| TP131 (BLACK)  | AGND: co-located with HVDDO and HVSSO supply test points                                               |
| TP140 (PURPLE) | HVSSO: external high-voltage negative drive supply input                                               |
| TP150 (BROWN)  | DVDD: external digital supply voltage input, remove R170 if DVDD and AVDD are both supplied externally |
| TP151 (GREEN)  | DGND: co-located with DVDD supply test point                                                           |

## Detailed Description of Software

## Generating an Analog Output

The Analog Output tab of the MAX22000 EV kit GUI quickly sets a voltage or current at IO+ and IO- of J12. T o set a voltage or current:

- Select the desired voltage or current range using the AO Mode drop-down
- Enter a voltage or current in the Setting edit box
- Click the Set button

Instead of a voltage or current value, a specific DAC code can be entered in the Hex edit box.

The DAC Reference drop-down selects between the on-chip reference and an off-chip reference. With the default jumper configuration, this is a MAX6126 on-board reference, but an off-board reference can also be used. To use an off-board reference, remove any shunt on J6, and supply the reference on TP25.

## Analog Output Calibration

The  MAX22000 EV kit  supports  analog  output  calibration, maintaining  unique  calibration  parameters  for  each  output mode and automatically programming them when the mode changes using the Analog Output tab.

To  perform  a  2-point  calibration,  first  set  the AO  Mode appropriately, then click the Calibrate button. The dialog box in Figure 3 appears. Clicking the DAC Calibrate push button brings up the Autocal dialog box as shown in Figure 4. Using a precision voltmeter or ammeter, measure the voltage or current, and enter the value in the edit box of the Autocal dialog box. After clicking OK , the Autocal dialog box appears a second time, with a new value to report back.

The interface returns to the dialog box in Figure 3. The calibration parameters are now in effect. To have them persist across power cycles of the EV kit, this data is automatically written and all calibration parameters are stored in on-board flash memory.

│

Evaluates: MAX22000

Figure 3. MAX22000 EV Kit Software, DAC Calibration Dialog

<!-- image -->

Figure 4. MAX22000 EV Kit Software, Autocal Dialog

<!-- image -->

## Measuring Analog Inputs

To read analog voltages, select the Analog Input tab of the MAX22000 EV kit GUI as seen in Figure 5. Clicking the Read All button reads all voltages that have their associated check box selected, updating both the voltage and the hex value for those channels.

Some inputs can be combined. For example, channels AI3 and AI4 can form a differential input. The Mode drop-downs permit  the  selection  of  these  alternative  inputs.  Also,  the AI5/6 drop-down selects from among the various ranges of the  PGA supporting those inputs. It is especially important to correctly select from these drop-downs during calibration.

The ADC Reference drop-down selects between the on-chip reference and an off-chip reference. With the default jumper configuration, this is a MAX6126 on-board reference, but an off-board reference can also be used. To use an off-board

Evaluates: MAX22000

reference, remove any shunt on J7, and supply the reference on TP38.

## Analog Input Calibration

Like the DAC, the ADC supports 2-point calibration. In the case of the ADC, the MAX22000 accepts gain/offset paramter pairs for each possible ADC multiplexer input, automatically switching between them as needed.

To effect calibration, click the corresponding Calibrate button. In the Calibration Channel dialog box, click the ADC Calibrate button. Use a precision source to supply a voltage near the application maximum, and then report that value in the Autocal dialog box. Click the Accept button. Repeat a second time, using a voltage near the application minimum, All further ADC reads of that channel now correct based on these calibration parameters.

Figure 5. MAX22000 EV Kit Software, Analog Input Tab

<!-- image -->

│

## Analog and Digital on One Pin

The MAX22000 EV kit includes a MAX14914A industrial digital I/O. Shorting J10, J11, and J300 connects the MAX22000 and the MAX14914A together, forming a configurable (analog or digital) I/O solution.

Evaluates: MAX22000

The Configurable IO (CIO)  tab  controls  this  feature,  refer to Figure 6. The CIO Mode drop-down selects from voltage output,  current  output,  digital  output,  voltage  input,  current input, or digital input, all electronically switched from J12 pins 1 and 4, IO+ and IO-.

Before leaving the Configurable IO tab, ensure that the CIO Mode drop-down is set to Not Setup .

Figure 6. MAX22000 EV Kit Software, Configurable IO Tab

<!-- image -->

│

## Configuring the Registers (Low Level)

The Register tab  permits  read/write  access  to  individual  MAX22000  regsiters.  The  left  table  lists  each  of  the MAX22000 registers. The right table lists the bit fields for any register selected in the left table.

To modify the writeable bits of any register, update either the value in the register table, or the fields in the bit field table, then click the Write Selected button.

The row associated with a modified register highlights  red until that register is either written or read.

## Analysis

The Analysis tab  shown  in  Figure  7  permits  capture  and visual display of any analog-input channel as an oscilloscope format (time) or as a FFT (Frequency) format. In Scope mode the x-axis is either time or a count of the number of samples, while the y-axis is either voltage or current, or LSB format. In FFT mode, the x-axis is frequency (Hz) and the y-axis is dB. Captured data can be saved to an 'Analog Datapoint file' in .csv format. To support system evaluation, a step-response feature is included for the DAC.

Figure 7. MAX22000 EV Kit Software, Analysis Tab

<!-- image -->

## Evaluates: MAX22000

│

## Detailed Description of Hardware

The MAX22000 EV kit includes the MAX22000 configurable analog I/O, and the external components needed to evaluate the device. All important signals are available on color coded test points.

## Isolation Domains

To reduce noise induced to loop currents going off-board, the MAX22000 isolates the connection to a PC through the USB connector.

Most of the MAX22000 EV kit powers through a 24V supply made available either through TP101/TP102, or through J100. Power supply circuits convert this 24V into the HVDD, HVDDO, HVSS, HVSSO, DVDD, and AVDD supplies needed by the MAX22000.

The  isolated  USB  section  takes  power  exclusively  from the  USB  connector  J202.  Data  isolators  U201  and  U202 (MAX14483) keep the USB grounds separate from the rest of the EV kit circuitry.

## Powering Options

The MAX22000 configurable analog I/O needs 6 voltage supplies and has several options to provide these.

The  MAX22000  powers  its  analog  input  stages  from  a high-voltage  bipolar  supply  (HVDD  and  HVSS)  referenced to AGND. Though they usually take the same voltages, the analog output supplies (HVDDO and HVSSO) are  on  distinct  pins  from  their  analog  input  equivalents. HVDDO and HVSSO are also referenced to AGND.

The  on-chip  data  converters  power  through  AVDD, referenced  to  AGND,  and  digital  logic  powers  through DVDD, referenced to DGND.

The high-voltage supplies can source from on-board bipolar supplies, or can be powered externally.

## Configuring the High-Voltage Supplies

The  MAX22000  EV  kit  makes  it easy to provide power  through  a  barrel  connector  J100.  Provide  24V through this connector, positive in the center. If a barrel connector is not handy, the user can instead supply this 24V  through  TP101  and  TP102.  LED100,  near  barrel connector  J100,  illuminates  when  voltage  is  applied either  through  J100  or  TP101/TP102.  In  the  default jumper  configuration,  ±18V  supply  HVDD/HVSS,  ±15V supply  HVDDO/HVSSO,  and  +3.3V  supply  both  AVDD and DVDD.

Ensure that the MAX22000 EV kit is unpowered before reconfiguring any jumpers.

To supply HVDD from the on-board +18V supply, ensure that JP10 is closed. If powering off-board, open JP10 and provide a suitable voltage on TP110. LED110 illuminates to confirm that HVDD is powered.

To supply HVSS from the on-board -18V supply, ensure that JP20 is closed. If powering off-board, open JP20 and provide a suitable voltage on TP120. LED120 illuminates to confirm that HVSS is powered.

To supply HVDDO from the on-board +15V supply, ensure that  JP30  is  in  the  1-2  position.  If  powering  off-board, open  JP30  and  provide  a  suitable  voltage  on  TP130. LED130 illuminates to confirm that HVDDO is powered.

To supply HVSSO from the on-board -15V supply, ensure that JP40 is closed. If powering off-board, open JP40 and provide a suitable voltage on TP140. LED140 illuminates to confirm that HVSSO is powered.

CAUTION: when configuring HVSS and/or HVSSO externally,  recall  that  HVSSO  must  never  go  more  negative than HVSS. Refer to the Absolute Maximum rating in the MAX2200 IC data sheet, HVSSO to HVSS of -0.3V to +40V.

## Configuring for 24V Voltage Output Mode

For  most  applications,  the  MAX22000  high-voltage  circuits power from a ±15V or ±18V supply. However, for 24V voltage-output  mode  or  4mA-20mA  output-current  mode  with 500Ω load, HVDD/HVDDO need to be about +28V.

To power for these modes select the 2-3 position for JP30, and provide +28V on TP101 and ground on TP102.

## Configuring the Low-Voltage Supplies

Besides the four high-voltage supplies described above, the MAX22000 also needs a +3.3V supply on DVDD and a +3.3V supply on AVDD.

Usually, AVDD and DVDD come from the same supply. A filter, consisting of R170, R171, and C172 further cleans up the power rail for AVDD.

In  the  default  jumper  configuration,  a  buck  regulator, followed by a linear post-regulator, supply both AVDD and DVDD. Select this by setting J107 to the 2-3 position.

Alternatively,  setting  J107  to  the  1-2  position  bypasses the  linear  post-regulator,  supplying  AVDD  and  DVDD directly from the buck regulator. This is a convenience for those  users  wishing  to  verify  the  noise  performance  of the MAX22000. Most users do not need a post-regulator in their applications.

To power AVDD and DVDD externally, ensure that J107 is open, and provide +3.3V to TP150. This supplies DVDD directly,  and  AVDD  through  an  RC  filter,  as  described above.

In the rare case where the user wishes to supply DVDD and AVDD separately, unsolder R170 from the MAX22000 EV kit, and supply DVDD to TP150, and AVDD to TP103.

Table 3. Input Configuration Options

| DESIRED OUTPUT CONFIGURATIONS   | DESIRED OUTPUT CONFIGURATIONS   | DESIRED OUTPUT CONFIGURATIONS   | DESIRED OUTPUT CONFIGURATIONS   | AVAILABLE SPARE INPUTS   | AVAILABLE SPARE INPUTS               |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|--------------------------|--------------------------------------|
| AOVM                            | AOCM                            | AIVM                            | AICM                            | SINGLE-ENDED             | DIFFERENTIAL                         |
| √                               | √                               | √                               | √                               | AI4                      | AI5-AI6 (±25V, PGA)                  |
| √                               |                                 | √                               |                                 | AI1, AI2, AI4            | AI5-AI6 (±25V, PGA)                  |
| √                               |                                 | √                               |                                 | AI4                      | AI1-AI2 (±1.25V) AI5-AI6 (±25V, PGA) |
|                                 | √                               |                                 | √                               | AI3, AI4                 | AI5-AI6 (±25V, PGA)                  |
|                                 | √                               |                                 | √                               | NONE                     | AI3-AI4 (±25V) AI5-AI6 (±25V, PGA)   |

AOVM = Analog Output-Voltage Mode AOCM = Analog Output-Current Mode AIVM = Analog Input-Voltage Mode

AICM = Analog Input-Current Mode

LED105 illuminates to confirm that DVDD is powered, and LED106 illuminates to confirm that AVDD is powered.

## Output Configuration Options

The  MAX22000  EV  kit  analog  input/output  port  is  very flexible.  Under electronic control, it can behave as a voltage  output,  a  current  output,  a  voltage  input,  or  a  current  input.  However, you can trade some of this flexibility for more inputs. Table 3 summarizes how you can trade off output flexibiility for more analog inputs.

Depending on the output modes desired, analog inputs AI1, AI2, and AI3 can become available as analog inputs.

AOCM and AICM reserve analog input channels AI1 and AI2.  To  permit AOCM  and/or AICM,  select  position  1-2 for both J1 and J2. If neither AOCM nor AICM is needed, select position 2-3 for J1 and J2. In this case, AI1 and AI2 are available either as 2 single-ended analog inputs, or as a differential analog input on J19 pins 5 and 6.

AOVM and AIVM reserve  analog-input  channel AI3.  To enable AOVM and/or AIVM, select position 1-2 on J3. If neither AOVM nor AIVM is  needed,  select  position  2-3 for J3. In this case, AI3 is available as an analog input on J19 pin 3.

No  matter  what  output  configuration  is  selected,  AI4  is always available as an analog input on J19 pin 2. Also, AI5 and AI6 are available either as a differential analog input on J12 pins 2 and 3.

In  addition,  analog  inputs  AUX1  and  AUX2  are  always available on TP10 and TP13.

│

## ADC Reference Options

Besides  the  on-chip  reference  in  the  MAX22000,  the MAX22000 EV kit also provides an on-board reference, as well as the means to connect an off-board bench reference.

To choose the on-chip reference for the ADC, select the internal ADC reference in the GUI, and ensure that J7 is in the 2-3 position.

To  choose  the  on-board  reference,  select  the  external ADC reference in the GUI, and ensure that J7 is in the 1-2 position.

To  choose  an  off-board  reference,  select  external  ADC reference in the GUI, ensure that J7 is open, and provide a 2.500V reference voltage on TP38.

## DAC Reference Options

Besides  the  on-chip  reference  on  the  MAX22000,  the MAX22000 EV kit also has an on-board reference, as well as the means to connect an off-board bench reference.

To choose the on-chip reference for the DAC, select the internal DAC reference in the GUI and ensure that J6 is in the 2-3 position.

To  choose  the  on-board  reference,  select  the  external DAC reference in the GUI and ensure that J6 is in the 1-2 position.

To choose an off-board reference, select an external ADC reference in the GUI, ensure that J6 is open, and provide a 2.500V reference voltage on TP25.

## AI4 as a Voltage or Current Input

As an example, AI4 can measure either voltage or current, electronically. GPIO4 effects this control when programmed as an output.

Measure current setting GPIO4 high to switch in a 250Ω current-to-voltage conversion resistor. Setting GPIO4 low removes this resistor and measures voltage instead.

This can also be done manually through jumper J8. Closing J8 connects the resistor. To electronically remove the 250Ω resistor from the circuit, both J8 must be open, and GPIO4 must  drive  low.  Do  not  leave  GPIO4  as  an  input  when measuring a signal on AI4. The control signal to the analog switch is in an indeterminate state in this case.

Refer to Application Note AN7134 MAX22000 Software Configurable Universal Analog I/O for more details of all the modes of use.

## Analog/Digital Combination

The  MAX22000  EV  kit  includes  a  MAX14914A  that parallels  the  MAX22000  on  its  output.  Using  some  of the  MAX22000  GPIO,  the  GUI  communicates  with  the MAX14914A, allowing J12 to provide a truly configurable industrial  I/O  port.  Refer  to Application  Note  AN7133 Configurable  Analog-Digital  Input/Output  Modes  (CIO) for PLC Systems using MAX22000 and MAX14914A for more details.

## HART Communication

The  MAX22000  EV  kit  allows  highway-addressable remote  tranducer  (HART)  protocol  communication  with external  HART  enabled  sensors.  Connect  an  external HART  modem  with  the  appropriate  resistive  or  capacitive divider between J20.4 (HART) and J20.1 (GND) test points. For more details regarding HART communication, refer to the MAX22000 data sheet.

## Temperature Measurement

The  MAX22000  EV  kit  supports  temperature  measurement  by  connecting  an  external  resistive-temperature detector  (RTD)  or  thermocouple  (TC)  sensor.  Select the  desired  sensor  type  from  the  drop  down  menu  in Configurable  IO  tab  as  shown  in  Figure  6.  The  GUI block  diagram  shows  the  proper  connection  for  the sensor.  Refer  to Application  Note  AN7186 Guidelines to  Implementing  Temperature  Measurements  with  the MAX22000 for more details.

## Communicating with the MAX22000

The MAX22000 EV kit communicates to a PC through a commonly available A-to-micro-B cable. Since there is no on-board  microprocessor,  all  coordination  and  low-level SPI  transactions  are  managed  by  code  on  the  PC,  as part of the GUI. This is ideal for quick evaluation and to explore the features and functions of the MAX22000.

For  users  who  prefer  more  direct  control  through  their own  hardware,  important  signals  are  made  available through  J201,  a  6x2  header  with  0.1'  spacing  that  is sometimes called a PMod header, making it compatible with  many  FPGA and microcontrollers systems. As well as independent dedicated connection, J201 can also be paired  with  Maxim's  USB2GPIO control card. If J201 is used,  disconnect  the  PC  interface  from  the  MAX22000 EV kit by opening all switches on SW1.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22000EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX22000 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                           | VAR STATUS   | MAXINV        | MFG PART #                                                                                                         | MANUFACTURER                              | VALUE   | DESCRIPTION                                                                                                                                           |
|--------|-------|-------------------------------------------------------------------|--------------|---------------|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |    15 | C1-C4, C9, C11, C15, C37, C38, C113, C123, C133, C143, C180, C185 | Pref         | 20-0001U-R1   | GRM188R70J105KA01; CL10B105KQ8NNNC                                                                                 | MURATA; SAMSUNG ELECTRONICS               | 1.0µF   | CAPACITOR; SMT (0603); CERAMIC; 1µF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG = -55°C TO +125°C; TC = X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-0001u-63  |
|      2 |     1 | C5                                                                | Pref         | 20-0047P-26   | 06035A470KAT2A                                                                                                     | AVX                                       | 47PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 47PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = C0G                                                             |
|      3 |     1 | C6                                                                | Pref         | 20-0047P-F3   | C1005C0G1H470F050; GRM1555C1H470FA01                                                                               | TDK;MURATA                                | 47PF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL = 1%; TG = -55°C TO +125°C; TC = C0G                                                              |
|      4 |    10 | C7, C8, C22, C23, C36, C112, C122, C132, C142, C150               | Pref         | 20-0001U-72   | C1206C105K5RAC; GRM31CR71H105KA61; GRM31MR71H105KA88; GCM31MR71H105KA55; CGA5L3X7R1H105K160AB; C3216X7R1H105K160AE | KEMET;MURATA; MURATA;MURATA; TDK;TDK      | 1µF     | CAPACITOR; SMT (1206); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC=X7R                                                                |
|      5 |     7 | C12, C21, C24, C27, C181, C183, C186                              | Pref         | 20-000U1-R1   | C0603C104K9RAC; GRM188R70J104KA01                                                                                  | KEMET;MURATA                              | 0.1µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 6.3V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-000u1-01 |
|      6 |     1 | C13                                                               | Pref         | 20-0001U-63   | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC     | KEMET;MURATA; TDK;TAIYO YUDEN; MURATA;TDK | 1µF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                                                    |
|      7 |     1 | C16                                                               | Pref         | 20-0100P-15   | 06035C101JAT                                                                                                       | AVX                                       | 100PF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                                                             |
|      8 |     3 | C17, C18, C162                                                    | Pref         | 20-00U01-11   | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01                                                  | MURATA; PANASONIC; SAMSUNG; MURATA        | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 16V; TOL = 10%; TG = -55°C TO +125°; TC = X7R                                                            |
|      9 |     2 | C19, C184                                                         | Pref         | 20-004U7-S6   | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC                                                            | MURATA; TAIYO YUDEN;TDK                   | 4.7µF   | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                            |
|     10 |     2 | C20, C152                                                         | Pref         | 20-00U22-12   | C0603C224K3RAC; GMC10X7R224K25; GRM188R71E224KA88; C1608X7R1E224K080AC                                             | KEMET;MURATA; MURATA;TDK                  | 0.22µF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                           |
|     11 |     8 | C28-C35                                                           | Pref         | 20-3300P-M8   | C0603C332K2RAC                                                                                                     | KEMET                                     | 3300PF  | CAP; SMT (0603); 3300PF; 10%; 200V; X7R; CERAMIC CHIP                                                                                                 |
|     12 |     1 | C41                                                               | Pref         | 20-1000P-E7   | C0402C102K5GAC                                                                                                     | KEMET                                     | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = C0G                                                 |
|     13 |    10 | C111, C114, C115, C124, C125, C131, C134, C135, C144, C145        | Pref         | 20-0010U-Y6   | C3216X5R1H106K160AB; GRM31CR61H106KA12                                                                             | TDK;MURATA                                | 10µF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +85°C; TC=X5R                                                                |
|     14 |     2 | C121, C141                                                        | Pref         | 20-0001U-X8   | C4532X7R2A105M230KA                                                                                                | TDK                                       | 1µF     | CAPACITOR; SMT (1812); CERAMIC CHIP; 1µF; 100V; TOL = 20%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R                                           |
|     15 |     3 | C151, C161, C163                                                  | Pref         | 20-0010U-A4   | GRM31CR71E106KA12; CL31B106KAHNNN                                                                                  | MURATA; SAMSUNG ELECTRONICS               | 10µF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                             |
|     16 |     2 | C171, C173                                                        | Pref         | 20-0022U-CA99 | C2012X5R1V226M125AC                                                                                                | TDK                                       | 22µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 22µF; 35V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                              |

## MAX22000 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES                        | VAR STATUS   | MAXINV           | MFG PART #                                                                                                                      | MANUFACTURER                                         | VALUE    | DESCRIPTION                                                                                                    |
|--------|-------|--------------------------------|--------------|------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|----------|----------------------------------------------------------------------------------------------------------------|
|     17 |     1 | C172                           | Pref         | 20-1000P-27      | GRM1555C1H102JA01; C1005C0G1H102J050                                                                                            | MURATA;TDK                                           | 1000PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                               |
|     18 |     1 | C182                           | Pref         | 20-0047P-E7      | C0402C470K5GAC                                                                                                                  | KEMET                                                | 47PF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC = ±           |
|     19 |     1 | C201                           | Pref         | 20-00U01-BA47    | C1005X7R1V103K050BB                                                                                                             | TDK                                                  | 0.01µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                    |
|     20 |     2 | C202, C203                     | Pref         | 20-0018P-27      | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                                                          | KEMET;MURATA; TDK                                    | 18PF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                       |
|     21 |     1 | C204                           | Pref         | 20-004U7-16      | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN                                             | KEMET; TAIYO YUDEN; TDK;TDK; SAMSUNG ELECTRONICS     | 4.7µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                      |
|     22 |    13 | C205-C215, C230, C231          | Pref         | 20-000U1-31      | C0402C104J4RAC; GCM155R71C104JA55                                                                                               | KEMET;MURATA                                         | 0.1µF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 16V; TOL = 5%; MODEL = ; TG = -55°C TO +125°C; TC = X7R            |
|     23 |     1 | C301                           | Pref         | 20-0001U-04      | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG; CGA4J3X7R1H105K125AB                                     | MURATA; SAMSUNG ELECTRONICS; TDK;TAIY                | 1µF      | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC=X7R                         |
|     24 |     1 | C302                           | Pref         | 20-000U1-16B     | C1005X5R1A104K050BA; LMK105BJ104KV                                                                                              | TDK;TAIYO YUDEN                                      | 0.1UF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                      |
|     25 |     1 | C303                           | Pref         | 20-0001U-P6      | GRM188R71E105KA12; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64; C1608X7R1E105K080AE; CGA3E1X7R1E105K080AC | MURATA;TDK; TAIYO YUDEN;AVX; MURATA; TAIYO YUDEN;TDK | 1µF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                       |
|     26 |     1 | CP1                            | Pref         | 20-0010U-23A     | CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD                                                                               | SAMSUNG ELECTRONICS; MURATA; TAIYO YUDEN             | 10µF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 16V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                       |
|     27 |     1 | CP2                            | Pref         | 20-0001U-O3      | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                                           | TAIYO YUDEN; TDK; SAMSUNG; MURATA                    | 1µF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 50V; TOL = 10%; MODEL = _MK SERIES; TG = -55°C TO +85°C              |
|     28 |     1 | CP3                            | Pref         | 20-1000P-77      | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                                       | MURATA; TDK;MURATA                                   | 1000PF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                               |
|     29 |     1 | CP4                            | Pref         | 20-0022U-K7      | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN                                                                | KEMET;MURATA; TAIYO YUDEN; SAMSUNG EL                | 22µF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 22µF; 6.3V; TOL = 20%; TG = -55°C TO +125°C; TC = X5R                     |
|     30 |     2 | CP5, CP6                       | Pref         | 20-004U7-89      | GRM21BR71C475KA73; 0805YC475KAT2A; GCM21BR71C475KA73; CGA4J3X7R1C475K125AE                                                      | MURATA;AVX; MURATA:TDK                               | 4.7µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R |
|     31 |     6 | D1, D2, D121, D131, D141, D142 | Pref         | 30-DFLS1150-00   | DFLS1150                                                                                                                        | DIODES INCORPORATED                                  | DFLS1150 | DIODE; RECT; SMT (POWERDI-123); PIV = 150V; IF = 1A                                                            |
|     32 |     1 | D13                            | Pref         | 30-SMBJ36CA-00   | SMBJ36CA                                                                                                                        | FAIRCHILD SEMICONDUCTOR                              | 36V      | DIODE; TVS; SMB (DO-214AA); VRM = 36V; IPP = 10.3A                                                             |
|     33 |     2 | D143, D144                     | Pref         | 30-MMSZ5226BS-00 | MMSZ5226BS-7-F                                                                                                                  | DIODES INCORPORATED                                  | 3.3V     | DIODE; ZNR; SMT (SOD-323); Vz = 3.3V; Izm = 0.01A                                                              |

│

## MAX22000 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES                                                                   | VAR STATUS   | MAXINV                | MFG PART #        | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                                                                                                               |
|--------|-------|---------------------------------------------------------------------------|--------------|-----------------------|-------------------|---------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     34 |     1 | D211                                                                      | Pref         | 30-LGL29KG2J124-00    | LG L29K-G2J1-24   | OSRAM                     | LG L29K-G2J1-24   | DIODE; LED; SMT (0603); Vf = 1.7V; If(test) = 0.002A; -40°C TO +100°C                                                                                                                     |
|     35 |     1 | FB1                                                                       | Pref         | 50-00600-SM2          | BLM21AG601SN1     | MURATA                    | 600               | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL = ± 25%; 0.2A                                                                                                                                |
|     36 |     2 | FB2, FB3                                                                  | Pref         | 51-00330-0AP          | BLM21PG331SN1     | MURATA                    | 330               | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL = ±25%; 1.5A                                                                                                                                 |
|     37 |     8 | HART_GND, TP3, TP27, TP39, TP102, TP106, TP111, TP131                     | Pref         | 02-TPMINI5011-00      | 5011              | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
|     38 |     6 | HART_IN, HART_OUT, TP24-TP26, TP38                                        | Pref         | 02-TPCOMP5007-00      | 5007              | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     39 |     1 | IC300                                                                     | Pref         | 00-SAMPLE-01          | MAX14914AATE+     | MAXIM                     | MAX14914AATE+     | EVKIT PART - IC; SWTC; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN NUMBER: 90-0070; TQFN16-EP                                                                                          |
|     40 |     7 | J1-J3, J6, J7, J107, JP30                                                 | Pref         | 01-9296470903I3P-17   | 929647-09-03-I    | 3M                        | 929647-09-03-I    | CONNECTOR; MALE; THROUGH HOLE; 929 SERIES; STRAIGHT; 3PINS                                                                                                                                |
|     41 |     9 | J4, J5, J8, J10, J11, J300, JP10, JP20, JP40                              | Pref         | 01-PEC02SAAN2P-21     | PEC02SAAN         | SULLINS                   | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                 |
|     42 |     2 | J12, J20                                                                  | Pref         | 01-17270364P-25       | 1727036           | PHOENIX CONTACT           | 1727036           | CONNECTOR; FEMALE; THROUGH HOLE; GREEN PCB TERMINAL BLOCK; STRAIGHT; 4PINS                                                                                                                |
|     43 |     1 | J19                                                                       | Pref         | 01-17270495P-25       | 1727049           | PHOENIX CONTACT           | 1727049           | CONNECTOR; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 5PINS                                                                                                                         |
|     44 |     1 | J100                                                                      | Pref         | 01-PJ202AH3P-27       | PJ-202AH          | CUI INC.                  | PJ-202AH          | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                                                                                          |
|     45 |     1 | J201                                                                      | Pref         | 01-TSW10608SDRA12P-17 | TSW-106-08-S-D-RA | SAMTEC                    | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS; NOTE: ALTERNATE PIN NUMBERING                                                                                 |
|     46 |     1 | J202                                                                      | Pref         | 01-ZX62RDAB5P8305P-26 | ZX62RD-AB-5P8(30) | HIROSE ELECTRIC CO LTD.   | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                                                                           |
|     47 |     2 | JP31, JP41                                                                | Pref         | 01-PBC05SAAN5P-21     | PBC05SAAN         | SULLINS ELECTRONICS CORP. | PBC05SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65°C TO +125°C                                                                                                                |
|     48 |     4 | L10, L20, L30, L40                                                        | Pref         | 50-0150U-0XT          | LPS4018-154MR     | COILCRAFT                 | 150µH             | INDUCTOR; SMT; FERRITE; 150µH; 20%; 0.40A                                                                                                                                                 |
|     49 |     1 | L50                                                                       | Pref         | 50-0068U-0LH          | LPS3015-683MR     | COILCRAFT                 | 68µH              | INDUCTOR; SMT; FERRITE CORE; 68µH; TOL = ± 20%; 0.33A                                                                                                                                     |
|     50 |    14 | LED0-LED5, LED100, LED105, LED106, LED110, LED120, LED130, LED140, LED201 | Pref         | 30-SMLP12PT-00        | SML-P12PT         | ROHM                      | SML-P12PT         | DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN; SMT (0402); VF = 2.2V; IF = 0.02A                                                                                    |

│

## MAX22000 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES                         | VAR STATUS   | MAXINV          | MFG PART #                                   | MANUFACTURER               | VALUE       | DESCRIPTION                                                                                 |
|--------|-------|---------------------------------|--------------|-----------------|----------------------------------------------|----------------------------|-------------|---------------------------------------------------------------------------------------------|
|     51 |     1 | LP1                             | Pref         | 50-003U3-0EO    | B82432T1332K000                              | TDK                        | 3.3UH       | INDUCTOR; SMT (1812); FERRITE CORE; 3.3µH; TOL = ± 10%; 0.9A                                |
|     52 |     2 | Q1, Q2                          | Pref         | 90-BSS84DW7F-19 | BSS84DW-7-F                                  | DIODES INCORPORATED        | BSS84DW-7-F | TRAN; DUAL P-CHANNEL ENHANCEMENT MODE MOSFET; PCH; SOT-363; PD-(0.3W); I-(-0.13A); V-(-50V) |
|     53 |     4 | Q31, Q32, Q41, Q42              | Pref         | 90-2N7002W-24   | 2N7002WT1G                                   | ON SEMICONDUCTOR           | 2N7002WT1G  | TRAN; SMALL SIGNAL MOSFET SINGLE N-CHANNEL; NCH; SC70; PD-(0.28W); I-(0.34A); V-(60V)       |
|     54 |     3 | R1, R7, R10                     | Pref         | 80-0100R-18     | ERJ-2RKF1000                                 | PANASONIC                  | 100         | RESISTOR; 0402; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                       |
|     55 |     4 | R2, R4-R6                       | Pref         | 80-0000R-26A    | ERJ-2GE0R00                                  | PANASONIC                  | 0           | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                           |
|     56 |     1 | R3                              | Pref         | 80-024K9-18     | ERJ-2RKF2492                                 | PANASONIC                  | 24.9K       | RESISTOR; 0402; 24.9KΩ; 1%; 100PPM; 0.10W; THICK FILM                                       |
|     57 |     1 | R8                              | Pref         | 80-0050R-DA53   | Y162550R0000B9                               | VISHAY FOIL RESISTORS      | 50          | RES; SMT (1206); 50; 0.1%; 0.2PPM/°C; 0.3W                                                  |
|     58 |     5 | R9, R207, R301-R303             | Pref         | 80-0010K-23     | CRCW040210K0FK; RC0402FR-0710KL              | VISHAY DALE; YAGEO PHICOMP | 10K         | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                        |
|     59 |     8 | R11-R18                         | Pref         | 80-04K75-AA58   | MMA02040C4751F                               | VISHAY BEYSCHLAG           | 4.75K       | RES; SMT; 4.75K; 1%; +/-50PPM/DEGK; 0.4W                                                    |
|     60 |     2 | R19, R29                        | Pref         | 80-0500R-U7     | PLT0805Z5000AS                               | VISHAY DALE                | 500         | RESISTOR; 0805; 500 OHM; 0.05%; 5PPM; 0.25W; THIN FILM                                      |
|     61 |    11 | R20-R26, R171, R175, R176, R201 | Pref         | 80-001K3-18     | ERJ-2RKF1301                                 | PANASONIC                  | 1.3K        | RESISTOR; 0402; 1.3KΩ; 1%; 100PPM; 0.10W; THICK FILM                                        |
|     62 |     2 | R27, R28                        | Pref         | 80-0100K-23     | CRCW0402100KFK; RC0402FR-07100KL             | VISHAY;YAGEO               | 100K        | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                       |
|     63 |     3 | R31, R32, R102                  | Pref         | 80-0022K-23     | CRCW040222K0FK                               | VISHAY DALE                | 22K         | RESISTOR, 0402, 22KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                       |
|     64 |     1 | R34                             | Pref         | 80-06K19-24     | ERJ-3EKF6191                                 | PANASONIC                  | 6.19K       | RESISTOR; 0603; 6.19KΩ; 1%; 100PPM; 0.10W; METAL FILM                                       |
|     65 |     2 | R41, R162                       | Pref         | 80-0100K-18     | ERJ-2RKF1003                                 | PANASONIC                  | 100K        | RESISTOR; 0402; 100KΩ; 1%; 100PPM; 0.10W; THICK FILM                                        |
|     66 |     1 | R42                             | Pref         | 80-0200R-22     | CRCW1206200RFK                               | VISHAY DALE                | 200         | RESISTOR; 1206; 200Ω; 1%; 100PPM; 1/4W; THICK FILM                                          |
|     67 |     4 | R110, R120, R130, R140          | Pref         | 80-016K2-AA23   | ERJ-2RKF1622                                 | PANASONIC                  | 16.2K       | RES; SMT (0402); 16.2K; 1%; ± 100PPM/°C; 0.1W                                               |
|     68 |     4 | R111, R121, R131, R141          | Pref         | 80-0499K-23     | CRCW0402499KFK                               | VISHAY DALE                | 499K        | RESISTOR; 0402; 499K; 1%; 100PPM; 0.0625W; THICK FILM                                       |
|     69 |     2 | R112, R122                      | Pref         | 80-026K1-AA4    | CRCW060326K1FK                               | VISHAY DALE                | 26.1K       | RESISTOR; 0603; 26.1KΩ; 1%; 100PPM; 0.1W; THICK FILM                                        |
|     70 |     5 | R113, R123, R133, R143, R151    | Pref         | 80-0000R-CA73   | RC0201JR-070RL                               | YAGEO                      | 0           | RESISTOR; 0201; 0Ω; 0%; JUMPER; 0.05W; THICK FILM                                           |
|     71 |     2 | R132, R142                      | Pref         | 80-0107K-18     | ERJ-2RKF1073                                 | PANASONIC                  | 107K        | RESISTOR; 0402; 107KΩ; 1%; 100PPM; 0.10W; THICK FILM                                        |
|     72 |     2 | R134, R144                      | Pref         | 80-090K9-AA18   | CRCW040290K9FK                               | VISHAY DALE                | 90.9K       | RESISTOR; 0402; 90.9KΩ; 1%; 100PPM; 0.063W; THICK FILM                                      |
|     73 |     2 | R135, R145                      | Pref         | 80-044K8-DA89   | RT0402BRE0744K8L                             | YAGEO                      | 44.8K       | RES; SMT (0402); 44.8K; 0.1%; ± 50PPM/°C; 0.063W                                            |
|     74 |     4 | R136, R137, R146, R147          | Pref         | 80-002K2-AA78   | CRCW020122K1FK                               | VISHAY DALE                | 22.1K       | RESISTOR; 0201; 22.1KΩ; 1%; 100PPM; 0.05W; THICK FILM                                       |
|     75 |     2 | R148, R149                      | Pref         | 80-003K3-24     | RCW06033K30FK; RC0603FR- 073K3L;RK73H1J3301F | VISHAY; YAGEO;VISHAY       | 3.3K        | RESISTOR, 0603, 3.3KΩ, 1%, 100PPM, 0.10W, THICK FILM                                        |
|     76 |     1 | R150                            | Pref         | 80-069K8-18     | ERJ-2RKF6982                                 | PANASONIC                  | 69.8K       | RESISTOR; 0402; 69.8KΩ; 1%; 100PPM; 0.10W; THICK FILM                                       |
|     77 |     1 | R152                            | Pref         | 80-022R1-AA23   | ERJ-2RKF22R1                                 | PANASONIC                  | 22.1        | RES; SMT (0402); 22.1; 1%; ± 100PPM/°C; 0.10W                                               |

│

## MAX22000 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES                                                           | VAR STATUS   | MAXINV            | MFG PART #                                     | MANUFACTURER                    | VALUE     | DESCRIPTION                                                                                                                                                                                 |
|--------|-------|-------------------------------------------------------------------|--------------|-------------------|------------------------------------------------|---------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     78 |     1 | R153                                                              | Pref         | 80-0162K-AA23     | ERJ-2RKF1623                                   | PANASONIC                       | 162K      | RESISTOR; 0402; 162KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                         |
|     79 |     1 | R154                                                              | Pref         | 80-049K9-18A      | ERJ-2RKF4992                                   | PANASONIC                       | 49.9K     | RESISTOR; 0402; 49.9KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                       |
|     80 |     1 | R161                                                              | Pref         | 80-0453K-18       | ERJ-2RKF4533                                   | PANASONIC                       | 453K      | RESISTOR; 0402; 453KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                        |
|     81 |     1 | R170                                                              | Pref         | 80-0001R-24       | ERJ-3RQF1R0; CRCW06031R00FK                    | PANASONIC;VISHAY                | 1         | RESISTOR, 0603, 1Ω, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                           |
|     82 |     2 | R191, R192                                                        | Pref         | 80-004K7-23       | CRCW04024K70FK; MCR01MZPF4701                  | VISHAY DALE; ROHM SEMICONDUCTOR | 4.7K      | RESISTOR, 0402, 4.7KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                      |
|     83 |     2 | R202, R203                                                        | Pref         | 80-0010R-24       | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0   | VISHAY DALE; ROHM               | 10        | RESISTOR; 0603; 10Ω; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                          |
|     84 |     1 | R204                                                              | Pref         | 80-0010K-24       | CRCW060310K0FK; ERJ-3EKF1002                   | VISHAY DALE; PANASONIC          | 10K       | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                          |
|     85 |     1 | R205                                                              | Pref         | 80-0015K-24       | CRCW060315K0FK                                 | VISHAY DALE                     | 15K       | RESISTOR, 0603, 15KΩ,1%, 100PPM, 0.10W, THICK FILM                                                                                                                                          |
|     86 |     1 | R206                                                              | Pref         | 80-0012K-24       | CRCW060312K0FK                                 | VISHAY DALE                     | 12K       | RESISTOR, 0603, 12KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                         |
|     87 |     1 | R208                                                              | Pref         | 80-002K2-23       | CRCW04022K20FK; RC0402FR-072K2L                | VISHAY DALE; YAGEO PHICOMP      | 2.2K      | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                      |
|     88 |     8 | R209, R210, R214, R217, R220-R222, R230                           | Pref         | 80-0010K-95       | CRCW020110K0FK                                 | VISHAY DALE                     | 10K       | RESISTOR; 0201; 10KΩ; 1%; 100PPM; 0.05W; THICK FILM                                                                                                                                         |
|     89 |     1 | R211                                                              | Pref         | 80-0665R-24       | CRCW0603665RFK                                 | VISHAY DALE                     | 665       | RESISTOR; 0603; 665Ω; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                         |
|     90 |     1 | RP1                                                               | Pref         | 80-0100R-24       | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC          | 100       | RESISTOR; 0603; 100Ω; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                         |
|     91 |     1 | RT1                                                               | Pref         | 85-0001K-0AH      | 32207638                                       | HERAEUS SENSOR TECHNOLOGY       | 1K        | RESISTANCE TEMPERATURE DETECTOR; SMT (0603); PLATINUM; 1KΩ; TOL = ± 0.12%                                                                                                                   |
|     92 |     1 | R_CLIM                                                            | Pref         | 80-082K5-26       | CRCW120682K5FK                                 | VISHAY DALE                     | 82.5K     | RESISTOR; 1206; 82.5KΩ; 1%; 100PPM; 0.25W; THICK FILM                                                                                                                                       |
|     93 |     1 | SW1                                                               | Pref         | 11-21912MST-00    | 219-12MST                                      | CTS                             | 219-12MST | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION = 1000MΩ                                                                                       |
|     94 |    16 | TP4, TP6, TP8, TP9, TP11, TP14, TP16, TP18, TP20, TP21, TP30-TP35 | Pref         | 02-TPCOMP5009-00  | 5009                                           | KEYSTONE                        | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST  |
|     95 |     5 | TP12, TP15, TP22, TP37, TP151                                     | Pref         | 02-TPMULTI5127-00 | 5127                                           | KEYSTONE                        | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST     |
|     96 |     1 | TP101                                                             | Pref         | 02-TPMULTI5128-00 | 5128                                           | KEYSTONE                        | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST     |
|     97 |     1 | TP103                                                             | Pref         | 02-TPMINI5010-00  | 5010                                           | KEYSTONE                        | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                               |
|     98 |     2 | TP110, TP130                                                      | Pref         | 02-TPMINI5013-00  | 5013                                           | KEYSTONE                        | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |

│

## MAX22000 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES            | VAR STATUS   | MAXINV             | MFG PART #           | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                                                                                                |
|--------|-------|--------------------|--------------|--------------------|----------------------|-------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     99 |     2 | TP120, TP140       | Pref         | 02-TPMULTI5126-00  | 5126                 | KEYSTONE                            | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|    100 |     1 | TP150              | Pref         | 02-TPMINI5125-00   | 5125                 | KEYSTONE                            | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|    101 |     1 | U1                 | Pref         | 00-SAMPLE-02       | MAX22000             | MAXIM                               | MAX22000       | EVKIT PART - IC; MAX22000; 9.5X9X1.1 MM; 0.5MM PITCH; LGA64-5EP; PACKAGE OUTLINE NUMBER: 90-100096                                                                                         |
|    102 |     1 | U2                 | Pref         | 10-MAX4690EAE-A    | MAX4690EAE+          | MAXIM                               | MAX4690EAE+    | IC; ASW; 1.25OHM; DUAL SPST; CMOS ANALOG SWITCHES; SSOP16                                                                                                                                  |
|    103 |     4 | U10, U20, U30, U40 | Pref         | 10-MAX15062CATA-T  | MAX15062CATA+        | MAXIM                               | MAX15062CATA+  | IC; CONV; ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN8                                                                                                       |
|    104 |     1 | U50                | Pref         | 10-MAX17552ATB-T   | MAX17552ATB+         | MAXIM                               | MAX17552ATB+   | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHROMOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                                                                                   |
|    105 |     1 | U60                | Pref         | 10-MAX8902BATA-T   | MAX8902BATA+         | MAXIM                               | MAX8902BATA+   | IC; VREG; LOW-NOISE LDO REGULATOR; TDFN8 2X2                                                                                                                                               |
|    106 |     1 | U80                | Pref         | 10-MAX6126AASA25-S | MAX6126AASA25+       | MAXIM                               | MAX6126AASA25+ | IC; VREF; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; VOUT = 2.5V, 3PPM/°C MAX TEMPCO; NSOIC8                                                                   |
|    107 |     2 | U201, U202         | Pref         | 10-MAX14483AAP-A   | MAX14483AAP+         | MAXIM                               | MAX14483AAP+   | IC; DISO; 6-CHANNEL; LOW-POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                                                                                                     |
|    108 |     1 | U203               | Pref         | 10-FT2232HQ-G      | FT2232HQ             | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HQ       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                                                                                          |
|    109 |     1 | U204               | Pref         | 10-93LC66BTIOT-U   | 93LC66BT-I/OT        | MICROCHIP                           | 93LC66BT-I/OT  | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                                                                             |
|    110 |     1 | U205               | Pref         | 10-MAX1556ETB-T    | MAX1556ETB+          | MAXIM                               | MAX1556ETB+    | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                                                                                     |
|    111 |     1 | U206               | Pref         | 10-M25P16VMN6P-S   | M25P16-VMN6P         | MICRON TECHNOLOGY INC.              | M25P16-VMN6P   | IC; MMRY; 16MBIT; SERIAL FLASH MEMORY; 75MHZ SPI BUS INTERFACE; NSOIC8 150MIL                                                                                                              |
|    112 |     1 | Y1                 | Pref         | 60-0012M-19        | ABM7-12.000MHZ-D2Y-T | ABRACON                             | 12MHZ          | CRYSTAL; SMT ; 18PF; 12MHZ; ± 20PPM; ±30PPM                                                                                                                                                |
|    113 |     1 | PCB                | -            | EPCB22000          | MAX22000             | MAXIM                               | PCB            | PCB:MAX22000                                                                                                                                                                               |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                              | DO NOT PURCHASE(DNP)                      | DO NOT PURCHASE(DNP)                                                                        |
|------------------------|------------------------|------------------------|------------------------|------------------------|-------------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                   | QTY                    | REF DES                | VAR STATUS             | MAXINV                 | MFG PART #                                                        | MANUFACTURER VALUE                        | DESCRIPTION                                                                                 |
| 1                      | 1                      | C14                    | DNP                    | 20-00U01-11            | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 | MURATA; PANASONIC; SAMSUNG; MURATA 0.01UF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R |
| 2                      | 1                      | R33                    | DNP                    | 80-0000R-26A           | ERJ-2GE0R00 PANASONIC                                             | 0                                         | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                         |
| 3                      | 1                      | R30                    | DNP                    | N/A                    | N/A N/A                                                           | SHORT                                     | PACKAGE OUTLINE 0402 RESISTOR - EVKIT                                                       |
| TOTAL                  | 3                      |                        |                        |                        |                                                                   |                                           |                                                                                             |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | VAR STATUS                                                                                  | MAXINV                                                                                      | MFG PART #                                                                                  | MANUFACTURER                                                                                | VALUE                                                                                       | DESCRIPTION                                                                                 |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

## MAX22000 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX22000

## MAX22000 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX22000

## MAX22000 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22000 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22000

## MAX22000E EV Kit PCB Layout Diagrams

MAX22000 EV Kit -Top Silkscreen

<!-- image -->

MAX22000 EV Kit -Top Layer

<!-- image -->

│

## MAX22000 EV Kit PCB Layout Diagrams (continued)

MAX22000 EV Kit -Layer 2

<!-- image -->

MAX22000 EV Kit -Layer 3

<!-- image -->

│

## MAX22000 EV Kit PCB Layout Diagrams (continued)

MAX22000 EV Kit -Layer 4

<!-- image -->

MAX22000 EV Kit -Layer 5

<!-- image -->

Evaluates: MAX22000

│

## MAX22000 EV Kit PCB Layout Diagrams (continued)

MAX22000 EV Kit -Layer 6

<!-- image -->

MAX22000 EV Kit -Layer 7

<!-- image -->

Evaluates: MAX22000

│

## MAX22000 EV Kit PCB Layout Diagrams (continued)

MAX22000 EV Kit -Bottom Layer

<!-- image -->

MAX22000 EV Kit -Bottom Silkscreen

<!-- image -->

Evaluates: MAX22000

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22000