<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX1437B evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the MAX1437B octal, 12-bit, 50Msps analog-to-digital converter (ADC). The MAX1437B accepts differential analog input  signals  and  the  EV  kit  generates  these  signals from user-supplied single-ended input sources. The EV kit's digital outputs produced by the ADC can be easily sampled with a user-supplied high-speed logic analyzer or data-acquisition system. The EV kit also features an on-board deserializer to simplify integration with standard logic analysis systems. The EV kit operates from 1.8V and 3.3V (plus 1.5V if the FPGA is used) power supplies and includes circuitry that generates a clock signal from an AC signal supplied by the user.

The MAX1437B EV kit comes standard with the MAX1437B installed. However, the EV kit can also be used to evaluate the MAX1438B by replacing the MAX1437B (U1) with a MAX1438B octal 64Msps ADC IC.

| DESIGNATION                                                   |   QTY | DESCRIPTION                                                                                                      |
|---------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| CLOCK, IN0-IN7                                                |     9 | SMA PC-mount connectors                                                                                          |
| C1-C8, C10, C11, C12, C57-C64, C81-C85, C139, C140, C147-C156 |    36 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K Murata GRM155R61A104K                           |
| C9, C29-C44, C56, C77, C78, C80, C92, C93, C146               |    24 | 1.0µF ±10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K Murata GRM155R60J105K                          |
| C13-C20, C65-C72                                              |     0 | Not installed, ceramic capacitors-shorted by PCB (0603)                                                          |
| C21-C28, C126-C133                                            |    16 | 39pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H390J Murata GRM1555C1H390J                             |
| C45, C46, C47, C86-C89, C143                                  |     8 | 220µF ±20%, 6.3V tantalum capacitors (C case) AVX TPSC227M006R0250 AVX TPSC227M006R0125 KEMET T495C227K006ATE225 |
| C48, C49, C50, C144                                           |     0 | Not installed, ceramic capacitors (C case)                                                                       |

## Features

- ♦ Low-Voltage and Power Operation
- ♦ Optional On-Board Clock-Shaping Circuitry
- ♦ Serial, Scalable Low-Voltage Signaling (SLVS)/ Low-Voltage Differential Signaling (LVDS) Outputs
- ♦ On-Board LVPECL Differential Output Drivers
- ♦ On-Board Deserializer
- ♦ LVDS Test Mode
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX1437BEVKIT+ | EV Kit |

## Component List

| DESIGNATION                   |   QTY | DESCRIPTION                                                                             |
|-------------------------------|-------|-----------------------------------------------------------------------------------------|
| C51, C52, C53, C90, C91, C145 |     6 | 10µF ±20%, 10V X5R ceramic capacitors (1210) TDK C3225X5R1A106M Murata GRM32ER61A106K   |
| C54                           |     1 | 2.2µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225M Murata GRM188R60J225K  |
| C55, C157-C176                |    21 | 0.01µF±10%, 25V X7R ceramic capacitors (0402) TDK C1005X7R1E103K Murata GRM155R71E103K  |
| C73-C76, C122-C125            |     0 | Not installed, ceramic capacitors (0402)                                                |
| C79, C138, C142               |     3 | 10µF ±20%, 4V X5R ceramic capacitors (0603) TDK C1608X5R0G106M Murata GRM188R60J106M    |
| C94-C121                      |    28 | 0.1µF ±20%, 6.3V X5R ceramic capacitors (0201) TDK C0603X5R0J104M Murata GRM033R60J104K |
| C141                          |     1 | 100µF ±20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J107M Murata GRM32ER60J107M  |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1437B Evaluation Kit

## Component List (continued)

| DESIGNATION               |   QTY | DESCRIPTION                                                                       |
|---------------------------|-------|-----------------------------------------------------------------------------------|
| R57                       |     1 | 13.0k Ω ±1% resistor (0603)                                                       |
| R94, R95                  |     2 | 4.7k Ω ±5% resistors (0603)                                                       |
| R96, R97                  |     2 | 330 Ω ±5% resistors (1206)                                                        |
| R99                       |     1 | 162 Ω ±1% resistor (0603)                                                         |
| R104                      |     1 | 10k Ω ±5% resistor (0603)                                                         |
| SW1                       |     1 | Momentary tact switch                                                             |
| T1-T8                     |     8 | 1:1 800MHz RF transformers Mini-Circuits ADT1-1WT+                                |
| TP1-TP8, TP13, TP14, TP15 |     0 | Not installed, test points                                                        |
| TP9-TP12                  |     4 | PC test points (red)                                                              |
| TP16                      |     1 | PC test point (black)                                                             |
| U1                        |     1 | Octal 12-bit serial ADC (68 TQFN-EP*) Maxim MAX1437BETK+                          |
| U2                        |     1 | Single LVDS line receiver (8 SO) Maxim MAX9111ESA+                                |
| U3                        |     1 | Low-noise, low-distortion op amp (5 SOT23) Maxim MAX4250EUK+                      |
| U4                        |     1 | TinyLogic UHS dual inverter (6 SC70) Fairchild NC7WZ04P6X_NL (Top Mark: Z04)      |
| U5                        |     1 | Virtex II Platform FPGA (256 FGBGA) Xilinx XC2V80-5FGG256C Xilinx XC2V80-5FGG256I |
| U6                        |     1 | PROM (20 SO) Xilinx XC18V01SOG20C                                                 |
| U7-U16                    |    10 | LVDS/Anything-to-LVPECL translator (8 µMAX ® ) Maxim MAX9375EUA+                  |
| -                         |    13 | Shunts                                                                            |
| -                         |     1 | PCB: MAX1437B EVALUATION KIT+                                                     |

*EP = Exposed pad.

| DESIGNATION                                      |   QTY | DESCRIPTION                                                                                                          |
|--------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------------|
| D1                                               |     1 | Dual Schottky diode (SOT23) Central Semiconductor CMPD6263S+ or Zetex BAT54S                                         |
| D2, D3                                           |     2 | Green surface-mount LEDs (0603)                                                                                      |
| J1-J8, JU14                                      |     9 | 2-pin headers (cut to fit)                                                                                           |
| J9-J13, J15                                      |     6 | Dual-row (2 x 20) 40-pin headers                                                                                     |
| J14                                              |     1 | 9-pin header (cut to fit)                                                                                            |
| JU1-JU6, JU8-JU11, JU13                          |    11 | 3-pin headers (cut to fit)                                                                                           |
| JU12                                             |     1 | Dual-row (2 x 4) 8-pin header                                                                                        |
| N1                                               |     1 | Digital logic n-channel MOSFET (SOT23) Central Semiconductor 2N7002FC (Top Mark: 702) Zetex 2N7002TA                 |
| R1-R8, R22-R25, R62-R73                          |     0 | Not installed, resistors-shorted by PCB (0603)                                                                       |
| R9-R16, R26-R34, R35, R77, R78-R81, R87-R93, R98 |     0 | Not installed, resistors (0402) R9-R16, R35, and R77 are open; R26-R34, R78-R81, R87-R93, and R98 are shorted by PCB |
| R17-R21, R58-R61                                 |     9 | 49.9 Ω ±1% resistors (0603)                                                                                          |
| R36, R105-R133                                   |    30 | 49.9 Ω ±1% resistors (0402)                                                                                          |
| R37-R44, R74, R75, R76, R82-R86                  |    16 | 10 Ω ±1% resistors (0805)                                                                                            |
| R45-R50, R100-R103                               |    10 | 100 Ω ±1% resistors (0603)                                                                                           |
| R51                                              |     1 | 100k Ω potentiometer, 19-turn, 3/8in                                                                                 |
| R52, R53, R56                                    |     3 | 4.02k Ω ±1% resistors (0603)                                                                                         |
| R54                                              |     1 | 5k Ω potentiometer, 19-turn, 3/8in                                                                                   |
| R55                                              |     1 | 2k Ω ±1% resistor (0603)                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Mini-Circuits                          | 718-934-4500 | www.minicircuits.com        |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Zetex Semiconductors                   | 631-543-7100 | www.zetex.com               |

Note: Indicate that you are using the MAX1437B when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- DC power supplies: Clock (CVDD) 3.3V, 100mA Analog (AVDD) 1.8V, 500mA Digital (OVDD) 1.8V, 150mA Buffers (VPECL) 3.3V, 400mA (optional) Deserializer core (VD1.5) 1.5V, 200mA (optional)

Deserializer I/O (VD3.3) 3.3V, 200mA (optional)

- Signal generator with low phase noise and low jitter for clock input signal (e.g., HP 8662A, HP 8644B)
- Signal generator for analog signal inputs (e.g., HP 8662A, HP 8644B)
- Logic analyzer or data-acquisition system (e.g., HP 16500C, TLA621)
- Analog bandpass filters (e.g., Allen Avionics, K&amp;L Microwave) for input signal and clock signal
- Digital voltmeter

JU9, JU10, JU11 (pins 2-3) → channels 0-3 output from FPGA

JU12 (pins 3-4) → internal reference enabled JU14 (not installed) → disconnect external reference buffer

- 2) Verify that shunts are installed in the following locations:
2. JU5, JU6, JU13 (pins 2-3) → 45MHz to 50MHz clock frequency range
- 3) Connect the clock signal generator to the input of the clock bandpass filter.
- 4) Connect the output of the clock bandpass filter to the CLOCK SMA connector.
- 5) Connect the analog input signal generator to the input of the analog bandpass filter.
- 6) Connect the output of the analog bandpass filter to either one of the SMA connectors labeled IN0-IN8. The analog input signals can also be monitored at the 2-pin headers (J1-J8). Note: All 8 channels can be operated independently or simultaneously.
- 7) Connect the logic analyzer to either header J9 (SLVS or  LVDS compatible signals) or J12, J13 (deserialized 3.3V CMOS-compatible signals). See the Output Bit Locations section for header connections.
- 8) Connect the 1.8V, 500mA power supply to AVDD. Connect the ground terminal of this supply to GND.
- 9) Connect the 1.8V, 150mA power supply to OVDD. Connect the ground terminal of this supply to GND.
- 10) Connect the 3.3V, 100mA power supply to CVDD. Connect the ground terminal of this supply to GND.
- 11) Connect the 3.3V, 400mA power supply to VPECL. Connect the ground terminal of this supply to GND.
- 12) Connect the 1.5V, 200mA power supply to VD1.5. Connect the ground terminal of this supply to GND.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The MAX1437B EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution: Do not turn on power supplies or enable signal generators until all connections are completed.

- 1) Verify that shunts are installed in the following locations:
2. JU1 (pins 2-3) → single termination

JU3 (pins 2-3) → normal operation

- JU2 (pins 2-3) → LVDS outputs

JU4 (pins 2-3) → chip enabled

JU8 (pins 2-3) → FPGA enabled

<!-- image -->

## MAX1437B Evaluation Kit

- 13) Connect the 3.3V, 200mA power supply to VD3.3. Connect the ground terminal of this supply to GND.
- 14) Turn on the VD3.3 power supply.
- 15) Turn on the VD1.5 power supply.
- 16) Verify that the programming LED (D2) and the locked LED (D3) are off.
- 17) Turn on the rest of the power supplies.
- 18) Enable the signal generators. Set the clock signal generator to output as specified to configuration signal with 2.6VP-P amplitude or higher. Set the analog input signal generators to output the desired frequency with an amplitude ≤ 1.4VP-P. All signal generators should be phase-locked.
- 19) Verify that the programming LED (D2) is off.
- 20) Momentarily press switch SW1, and verify that the locked LED (D3) is on.
- 21) Enable the logic analyzer.
- 22) Collect data using the logic analyzer.

## Detailed Description of Hardware

The MAX1437B EV kit is a fully assembled and tested circuit  board  that  contains  all  the  components necessary  to  evaluate  the  performance  of  the MAX1437B ADC.

The MAX1437B ADC accepts differential input signals; however, on-board RF transformers (T1-T8) convert the single-ended signals applied to the IN0-IN7 SMA connectors to the required differential signal. The input signals of the ADC can be measured using a differential oscilloscope probe at headers J1-J8.

Output level translators (U7-U16) buffer and convert the SLVS or LVDS output signals of the ADC to higher voltage LVPECL signals, which can be captured by a wide variety of logic analyzers. The SLVS/LVDS output signals are accessible at header J9 and the LVPECL outputs signals are accessible at header J15.

The EV kit PCB is designed as a six-layer board to optimize performance of the MAX1437B. Separate analog, digital,  clock,  and  buffer  power  planes  minimize  noise coupling between analog and digital signals. 50 Ω coplanar transmission lines are used for analog and clock inputs. 100 Ω differential  coplanar transmission lines are used for all digital LVDS outputs. All differential outputs are terminated with 100 Ω termination resistors between the true and complementary digital outputs. The trace lengths of the 100 Ω differential  SLVS/LVDS lines are matched to within a few thousands of an inch to minimize layout-dependent data skew.

## Clock

By default, the user-supplied AC-coupled clock signal applied to the EV kit's CLOCK SMA connector is buffered on board with two inverters (U4). In this mode, diode D1 limits the amplitude of the clock signal. Overdriving the clock input can increase the slew rate of  the  differential  signal,  thereby  reducing  clock  jitter. The frequency of the signal should not exceed the maximum sampling rate of the ADC. The sinusoidal input signal frequency (fCLK) determines the sampling rate of the ADC. The clock signal applied to the ADC can be observed at test point TP10.

## Optional Clock-Shaping Circuit

The EV kit also features an optional on-board clockshaping circuit that generates a clock signal with variable duty cycle from the AC-coupled sine-wave signal applied to the CLOCK SMA connector. The MAX9111 differential line receiver (U2) processes the clock input signal and generates the required CMOS clock signal. To use this circuitry, cut the trace on the PCB at R78 and install 0 Ω resistors  at  R77  and  R35.  The  signal's duty cycle can be adjusted with potentiometer R54. With a 3.3V clock supply voltage (CVDD), a clock signal with a 50% duty cycle (recommended) can be achieved by adjusting R54 until a voltage of 1.32V is produced across test points TP12 and TP16.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Power Supplies

For best performance, the EV kit requires separate analog, digital, clock, and buffer power supplies. Two 1.8V power supplies are used to power the analog (AVDD) and digital (OVDD) portion of the ADC. The clock circuitry  (CVDD) is powered by a 3.3V power supply. A separate 3.3V power supply (VPECL) is used to power the output buffers (U7-U16) of the EV kit. 1.5V (VD1.5) and 3.3V (VD3.3) power supplies are required to power the deserializer circuit.

## Standby

Jumper JU4 controls the power-management standby feature of data converter U1. See Table 1 for jumper JU4 shunt positions.

Table 1. Standby Shunt Settings (JU4)

| SHUNT POSITION   | POWER-DOWN CONNECTIONS   | EV KIT FUNCTION    |
|------------------|--------------------------|--------------------|
| 1-2              | AVDD                     | U1 in standby mode |
| 2-3*             | GND                      | U1 enabled         |

## MAX1437B Evaluation Kit

## PLL Frequency Mode Selection

When driving the EV kit with clock signals lower than the maximum specified sampling rate of the ADC, the phase-locked-loop (PLL) circuit of the ADC must be set accordingly. Refer to the PLL Inputs (PLL0, PLL1, PLL3) section in the MAX1437B IC data sheet for further details about the operation of the internal PLL. Jumpers JU5, JU6, and JU13 control the PLL mode of the ADC. See Table 2 for shunt positions. Configure jumpers JU5, JU6, and JU13 accordingly and ensure that the clock signal frequency falls between the minimum and maximum limits listed in Table 2.

Table 3. Reference Shunt Settings (JU12)

## Table 2. MAX1437B PLL Shunt Settings (JU5, JU6, JU13)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | CLOCK INPUT RANGE (MHz)   | CLOCK INPUT RANGE (MHz)   |
|------------------|------------------|------------------|---------------------------|---------------------------|
| JU13 (PLL1)      | JU6 (PLL2)       | JU5 (PLL3)       | MIN                       | MAX                       |
| 2-3*             | 2-3*             | 2-3*             | 45.0                      | 50.0                      |
| 2-3              | 2-3              | 1-2              | 32.5                      | 45.0                      |
| 2-3              | 1-2              | 2-3              | 22.5                      | 32.5                      |
| 2-3              | 1-2              | 1-2              | 16.3                      | 22.5                      |
| 1-2              | 2-3              | 2-3              | 11.3                      | 16.3                      |
| 1-2              | 2-3              | 1-2              | 8.1                       | 11.3                      |
| 1-2              | 1-2              | 2-3              | 5.6                       | 8.1                       |
| 1-2              | 1-2              | 1-2              | 4.0                       | 5.6                       |

| SHUNT POSITION   | REFADJ PIN CONNECTION                  | EV KIT FUNCTION                                                                                                                     |
|------------------|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | Connected to AVDD                      | Internal reference disabled. Apply an external reference voltage at the REFIO pad. Verify that a shunt is installed on jumper JU14. |
| 3-4*             | Connected to GND                       | Internal reference enabled. Verify that a shunt is not installed on jumper JU14.                                                    |
| 5-6**            | Connected to REFIO through R57 and R51 | Increase full-scale range by adjusting potentiometer R51.                                                                           |
| 7-8**            | Connected to GND through R57 and R51   | Compensate for gain errors by adjusting potentiometer R51.                                                                          |

## Output Signal

The MAX1437B ADC features eight serial LVDS-compatible  digital  outputs.  Each  output  transmits  the  converted analog input signals of channel 0-channel 7. Two additional outputs (CLKOUT and FRAME) are provided for data synchronization. Refer to the MAX1437B IC data sheet for more details.

## Double-Termination Settings

The MAX1437B ADC features trimmed, internal 100 Ω termination resistors between the positive (true) and negative (complementary) line of each output (D0-D7, CLK, and FRAME). The EV kit circuit also features 100 Ω termination resistors located at the far end of each differential  output  pair.  Activating  the  internal  termination helps eliminate unwanted reflections on the signal traces. Use jumper JU1 to activate either single or double termination. See Table 4 for appropriate shunt positions that select the termination architecture.

## Table 4. Double-Termination Shunt Settings (JU1)

| SHUNT POSITION   | DT PIN CONNECTION   | EV KIT FUNCTION                                             |
|------------------|---------------------|-------------------------------------------------------------|
| 1-2              | AVDD                | Double termination selected (outputs are double terminated) |
| 2-3*             | GND                 | Single termination selected (outputs are single terminated) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Input Signal

Although the MAX1437B ADC accepts differential analog input signals, the EV kit only requires a singleended analog input signal with amplitude of less than 1.4VP-P provided by the user. On-board transformers (T1-T8) convert the single-ended analog input signal and generate differential analog signals at the ADC's differential input pins. Connect the single-ended analog input signals to SMA connectors IN0-IN7 for channel 0-channel 7, respectively.

## Reference Voltage

The EV kit can be configured to use the ADC's 1.24V internal reference, or a stable, low-noise, external reference. Use dual-row (2 x 4) 8-pin header JU12 to configure the desired reference mode. See Table 3 for the appropriate shunt settings.

<!-- image -->

## MAX1437B Evaluation Kit

## SLVS/LVDS Outputs

The MAX1437B ADC is capable of generating SLVS or LVDS signals at its outputs. Jumper JU2 controls this feature of the ADC. See Table 5 for shunt positions. Regardless of which output signal type is selected, the output buffers (U7-U16) will convert the data to LVPECL logic levels. When operating in SLVS output mode, JU1 must be configured for double termination (shunt across pins 1-2).

## Table 5. SLVS/LVDS Shunt Settings (JU2)

| SHUNT POSITION   | SLVS/LVDS PIN CONNECTION   | ADC OUTPUT   |
|------------------|----------------------------|--------------|
| 1-2              | AVDD                       | SLVS         |
| 2-3*             | GND                        | LVDS         |

## Table 6. LVDS Test Pattern Shunt Settings (JU3)

| SHUNT POSITION   | LVDSTEST PIN CONNECTION   | EV KIT FUNCTION                                               |
|------------------|---------------------------|---------------------------------------------------------------|
| 1-2              | AVDD                      | Test pattern transmitted, LSB first, on all SLVS/LVDS outputs |
| 2-3*             | GND                       | Normal operation                                              |

## LVDS Test Pattern

To debug signal integrity problems, the MAX1437B ADC can generate a factory-set test pattern on all of the output channels. Jumper JU3 controls this feature. See Table 6 for the appropriate shunt positions. The test pattern for the MAX1437B is 0000 1011 1101.

## Table 7. Output Bit Locations

| SIGNAL   | SIGNAL   | UNBUFFERED (LVDS or SLVS)   | BUFFERED (LVPECL)   | DESCRIPTION   |
|----------|----------|-----------------------------|---------------------|---------------|
| CH0      | P        | J9-1                        | J15-1               | Channel 0     |
| CH0      | N        | J9-2                        | J15-2               | Channel 0     |
| CH1      | P        | J9-5                        | J15-5               | Channel 1     |
| CH1      | N        | J9-6                        | J15-6               | Channel 1     |
| CH2      | P        | J9-9                        | J15-9               | Channel 2     |
| CH2      | N        | J9-10                       | J15-10              | Channel 2     |
| CH3      | P        | J9-13                       | J15-13              | Channel 3     |
| CH3      | N        | J9-14                       | J15-14              | Channel 3     |
| CLKOUT   | P        | J9-17                       | J15-17              | Clock         |
| CLKOUT   | N        | J9-18                       | J15-18              | Clock         |
| FRAME    | P        | J9-21                       | J15-21              | Frame         |
| FRAME    | N        | J9-22                       | J15-22              | Frame         |
| CH4      | P        | J9-25                       | J15-25              | Channel 4     |
| CH4      | N        | J9-26                       | J15-26              | Channel 4     |
| CH5      | P        | J9-29                       | J15-29              | Channel 5     |
| CH5      | N        | J9-30                       | J15-30              | Channel 5     |
| CH6      | P        | J9-33                       | J15-33              | Channel 6     |
| CH6      | N        | J9-34                       | J15-34              | Channel 6     |
| CH7      | P        | J9-37                       | J15-37              | Channel 7     |
| CH7      | N        | J9-38                       | J15-38              | Channel 7     |

P = True.

N = Complementary.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Bit Locations

The digital outputs of the MAX1437B ADC are connected to 40-pin header J9. All PCB trace lengths are matched to minimize data skew and improve the overall dynamic performance of the device. Additionally, 10 drivers (U7-U16) buffer and level-translate the digital outputs to LVPECL-compatible signals. The drivers increase the differential voltage swing, and are capable of driving large capacitive loads that may be present at the logic analyzer connection. The outputs of the buffers are connected with 40-pin header J15. See Table 7 for output bit locations of headers J9 and J15.

<!-- image -->

## MAX1437B Evaluation Kit

## On-Board Deserializer

The MAX1437B EV kit features an on-board deserializer that converts the serial outputs of the ADC to a parallel data stream. The deserializer uses a delayed-locked loop (DLL) to synchronize itself with the incoming serial data stream. After every change in ADC clock frequency, reset this DLL by pressing switch SW1. If LED D3 is not lit, the serial data stream is not synchronized and the outputs of the deserializer are not valid.

Table 9. Output Bit Locations (J10-J13)

Channel 0-channel 7 data is captured on headers J10-J13. Only 4 channels can be captured at a time on the EV kit. Configure jumpers JU9, JU10, and JU11 to select the location of the channels. See Table 8 for jumpers JU9, JU10, and JU11 configuration. See Table 9 for output bit locations.

Table 8. Output Channel Locations (JU9, JU10, JU11)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | CHANNEL LOCATION   | CHANNEL LOCATION   | CHANNEL LOCATION   | CHANNEL LOCATION   |
|------------------|------------------|------------------|--------------------|--------------------|--------------------|--------------------|
| JU9 (S2)         | JU10 (S1)        | JU11 (S0)        | J10                | J11                | J12                | J13                |
| 2-3              | 2-3              | 2-3              | CH0                | CH1                | CH2                | CH3                |
| 2-3              | 2-3              | 1-2              | CH4                | CH5                | CH6                | CH7                |
| 2-3              | 1-2              | 2-3              | CH0                | CH4                | CH1                | CH5                |
| 2-3              | 1-2              | 1-2              | CH0                | CH6                | CH1                | CH7                |
| 1-2              | 2-3              | 2-3              | CH2                | CH4                | CH3                | CH5                |
| 1-2              | 2-3              | 1-2              | CH2                | CH6                | CH3                | CH7                |

<!-- image -->

| BIT   | LOCATION   | LOCATION   | LOCATION   | LOCATION   |
|-------|------------|------------|------------|------------|
| CLK   | J10-38     | J11-38     | J12-38     | J13-38     |
| D11   | J10-26     | J11-26     | J12-26     | J13-26     |
| D10   | J10-24     | J11-24     | J12-24     | J13-24     |
| D9    | J10-22     | J11-22     | J12-22     | J13-22     |
| D8    | J10-20     | J11-20     | J12-20     | J13-20     |
| D7    | J10-18     | J11-18     | J12-18     | J13-18     |
| D6    | J10-16     | J11-16     | J12-16     | J13-16     |
| D5    | J10-14     | J11-14     | J12-14     | J13-14     |
| D4    | J10-12     | J11-12     | J12-12     | J13-12     |
| D3    | J10-10     | J11-10     | J12-10     | J13-10     |
| D2    | J10-8      | J11-8      | J12-8      | J13-8      |
| D1    | J10-6      | J11-6      | J12-6      | J13-6      |
| D0    | J10-4      | J11-4      | J12-4      | J13-4      |

Note: Odd-numbered pins are connected to ground. Remaining pins are not connected.

## Deserializer Output Enables

Jumper JU8 controls the output enables of the deserializer. See Table 10 for jumper JU8 configuration.

Table 10. Deserializer Output Enables (JU8)

| SHUNT POSITION   | EV KIT FUNCTION              |
|------------------|------------------------------|
| 1-2              | Deserializer output disabled |
| 2-3*             | Deserializer output enabled  |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 1a. MAX1437B EV Kit Schematic-ADC

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 1b. MAX1437B EV Kit Schematic-Clock, Voltage Reference

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 1c. MAX1437B EV Kit Schematic-LVPECL Level Translators (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

Figure 1d. MAX1437B EV Kit Schematic-LVPECL Level Translators (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 1e. MAX1437B EV Kit Schematic-Deserializer Input and Outputs

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

Figure 1f. MAX1437B EV Kit Schematic-PROM and FPGA

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 2. MAX1437B EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

<!-- image -->

Figure 3. MAX1437B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 4. MAX1437B EV Kit PCB Layout (Inner Layer 2)-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

<!-- image -->

Figure 5. MAX1437B EV Kit PCB Layout (Inner Layer 3)-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 6. MAX1437B EV Kit PCB Layout (Inner Layer 4)-Signal Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

<!-- image -->

Figure 7. MAX1437B EV Kit PCB Layout (Inner Layer 5)-Signal Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

Figure 8. MAX1437B EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1437B Evaluation Kit

<!-- image -->

Figure 9. MAX1437B EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1437B Evaluation Kit

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------|-----------------|
|                 0 | 9/08            | Initial release                   | -               |
|                 1 | 8/09            | Added MAX1438B to parts evaluated | 1-21            |

## Revision History

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

22

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600