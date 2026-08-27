<!-- lastmod 2021-04-02 -->
<!-- image -->

Data Sheet

## FEATURES

Per channel programmable output current ranges: 300 mA, 200 mA, 100 mA, 50 mA, 25 mA, 12.5 mA, 6.25 mA, and 3.125 mA

Flexible 2.1 V to VCC output supply voltages Flexible single- or dual-supply operation 0.6 V maximum dropout voltage guaranteed Separate voltage supply per output channel Internal switches to optional negative supply Full 16-bit resolution at all ranges Precision internal reference (10 ppm/°C typical VREF

temperature coefficient) or external reference Analog multiplexer monitors voltages and currents A/B toggle via SPI or dedicated pin 1.71 V to VCC digital I/O supply voltage

32-pad bare die

## APPLICATIONS

Tunable lasers Semiconductor optical amplifier biasing Resistive heaters Current mode biasing

## GENERAL DESCRIPTION

The LTC2672-16DICE is a five-channel, 16-bit current source, digital-to-analog converter (DAC) that provides five high compliance current source outputs with guaranteed 0.6 V dropout at 200 mA. There are eight current ranges that are programmable per channel with full-scale outputs of up to 300 mA. The channels can be paralleled to allow either ultrafine adjustments of large currents or combined outputs of up to 1.5 A. A dedicated supply pin is provided for each output channel. Each channel can be operated from 2.1 V to VCC, and internal switches allow any output to be pulled to the optional negative supply. The LTC2672-16DICE includes a precision integrated 1.25 V reference (10 ppm/°C

Rev. 0 Document Feedback Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is  granted by implication  or  otherwise  under any patent  or  patent  rights  of  Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Five-Channel, Low Dropout, 300 mA, Current Source Output, 16-Bit SoftSpan DAC

[LTC2672-16DICE](https://www.analog.com/LTC2672-16DICE?doc=LTC2672-16DICE.PDF)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

typical), with the option to use an external reference. The serial peripheral interface (SPI) compatible, 3-wire serial interface operates on logic levels as low as 1.71 V.

Note than throughout this data sheet, multifunction pins, such as CS/LD, are referred to by the entire pin name or by a single function of the pin.

The LTC2672-16DICE is available in a 32-pad bare die and is specified at room temperature. Additional application and technical information can be found in the LTC2672 data sheet.

## [LTC2672-16DICE](https://www.analog.com/LTC2672-16DICE?doc=LTC2672-16DICE.PDF)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| SPI Command Sequences ........................................................... 5                        |

## REVISION HISTORY

4/2021-Revision 0: Initial Version

| Absolute Maximum Ratings............................................................6           |
|-------------------------------------------------------------------------------------------------|
| ESD Caution ..................................................................................6 |
| Pin Configuration and Function Descriptions .............................7                      |
| Outline Dimensions..........................................................................9   |
| Die Specifications and Assesmbly Recommendations ............9                                  |
| Ordering Guide .............................................................................9   |

## SPECIFICATIONS

Wafer level probe specification, ambient temperature only.

All specifications apply at 25°C, unless otherwise noted. Typical values are at TJ = 25°C, VCC = IOVCC = 5 V, V -= -3.3 V, VDDx = 5 V, FSADJ = VCC, and reference output voltage (VREF) = 1.25 V external, unless otherwise specified.

## Table 1.

| Parameter                                          | Symbol     | Test Conditions/Comments                                                        |   Min |   Typ |   Max | Unit   |
|----------------------------------------------------|------------|---------------------------------------------------------------------------------|-------|-------|-------|--------|
| DC PERFORMANCE                                     |            |                                                                                 |       |       |       |        |
| Resolution                                         |            |                                                                                 |    16 |       |       | Bits   |
| Monotonicity                                       |            | All ranges 1                                                                    |    16 |       |       | Bits   |
| Differential Nonlinearity                          | DNL        | All ranges 1                                                                    |    -1 | +0.45 |    +1 | LSB    |
| Integral Nonlinearity                              | INL        | All ranges 1                                                                    |   -64 |   +12 |   +64 | LSB    |
| Current Offset Error                               | I OS       | All current ranges 1                                                            |  -0.4 |  +0.1 |  +0.4 | %FSR   |
| I OS Temperature Coefficient                       |            | All current ranges                                                              |       |    10 |       | ppm/°C |
| Gain Error                                         | GE 2       | 300mAand 200 mAoutput current ranges                                            |  -0.9 |  +0.3 |  +0.9 | %FSR   |
|                                                    |            | 100 mA, 50 mA, and 25 mAoutput current ranges                                   |  -1.2 |  +0.4 |  +1.2 | %FSR   |
|                                                    |            | 12.5 mA, 6.25 mA, and 3.125 mAoutput current ranges                             |  -1.5 |  +0.7 |  +1.5 | %FSR   |
| Gain Temperature Coefficient                       |            | FSADJ = V CC                                                                    |       |    30 |       | ppm/°C |
| Total Unadjusted Error                             | TUE 2      | 300mAand 200 mAoutput current ranges                                            |  -1.4 |  +0.4 |  +1.4 | %FSR   |
|                                                    |            | 100 mA, 50 mA, and 25 mAoutput current ranges                                   |  -1.7 |  +0.5 |  +1.7 | %FSR   |
|                                                    |            | 12.5mA,6.25mA,and3.125mAoutput current ranges                                   |    -2 |  +0.8 |    +2 | %FSR   |
| Power Supply Rejection                             | PSR        | Range=100mA,OUTxcurrent(I OUTx )=50mA                                           |       |       |       |        |
|                                                    |            | V CC = 4.75 V to 5.25 V                                                         |       |   0.5 |       | LSB    |
|                                                    |            | V DDx = 2.85 V to 3.15 V                                                        |       |   0.4 |       | LSB    |
|                                                    |            | V DDx = 4.75 V to 5.25 V                                                        |       |   0.7 |       | LSB    |
|                                                    |            | -                                                                               |       |   0.6 |       |        |
| 3                                                  |            | V = -3.25 V to -2.75 V                                                          |       |   0.1 |       | LSB    |
| DC Crosstalk Dropout Voltage 4 (V DDx - V OUTx 5 ) | V DROPOUT  | Result of a 200 mWchangeindissipated power 200 mArange, (V DDx - V - ) = 4.75 V |       |  0.45 |   0.6 | %FSR V |
|                                                    |            | 200 mArange, (V DDx - V - ) = 2.85 V                                            |       |   0.5 |  0.65 | V      |
|                                                    |            | 300 mArange, (V DDx - V - ) = 4.75 V                                            |       |  0.75 |       | V      |
|                                                    |            | 300 mArange, (V DDx - V - ) = 2.85 V                                            |       |  0.85 |  1.15 | V      |
| Off Mode Output Leakage Current 6                  |            | 800 Ωload toGND                                                                 |    -1 |  +0.1 |    +1 | μA     |
| OUTxSwitchtoV - Resistance                         | R PULLDOWN | Span code = 1000 binary, sinking80mA                                            |       |     8 |    12 | Ω      |
| AC PERFORMANCE                                     |            | T A =25°Cfor all ac performance specifications                                  |       |       |       |        |
| Settling Time 7, 8                                 | t SET      |                                                                                 |       |       |       |        |
| Full-Scale Step 3.125 mARange                      |            | ±0.0015% (±1 LSB at 16 binary)                                                  |       |  21.1 |       | μs     |
|                                                    |            | ±0.024% (±1 LSB at 12 binary)                                                   |       |   3.8 |       | μs     |
| 145mAto155mAStep200mARange                         |            | ±0.0015% (±1 LSB at 16 binary)                                                  |       |   7.2 |       | μs     |
|                                                    |            | ±0.024% (±1 LSB at 12 binary)                                                   |       |   3.6 |       | μs     |
| Full-Scale Step 200 mARange                        |            | ±0.0015% (±1 LSB at 16 binary)                                                  |       |   200 |       | μs     |
|                                                    |            | ±0.024% (±1 LSB at 12 binary)                                                   |       |   3.5 |       | μs     |

## [LTC2672-16DICE](https://www.analog.com/LTC2672-16DICE?doc=LTC2672-16DICE.PDF)

## Data Sheet

| Parameter                                                                         | Symbol       | Test Conditions/Comments                                                                                                                                                                             | Min               | Typ         | Max             | Unit                                          |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
|-----------------------------------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-------------|-----------------|-----------------------------------------------|-----------|---------------|-----------------------------------------|----|----------|------------------|-----------------|---------------------|-------------------------------|---------|--------------|----|----------|-----------------------------|---------------------------------|
| Glitch Impulse                                                                    |              | At midscale transition, 200 mArange, resistive load that connects the DAC output to GND(R LOAD )=4Ω                                                                                                  | 1.0               |             |                 | nA × s                                        |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| DAC to DAC Crosstalk 9                                                            |              |                                                                                                                                                                                                      |                   | 230         |                 | pA × s                                        |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| Noise Current                                                                     | i NOISE      | 100 mAto 200 mAstep, R LOAD =15Ω Output current noise density internal reference, I OUTx =150mA,R LOAD =4Ω,load capacitance (C )=10µF                                                                |                   |             |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| Frequency                                                                         |              | 1 kHz                                                                                                                                                                                                | 12                |             |                 | nA/√Hz                                        |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| REFERENCE V REF                                                                   |              | 1 MHz 5 V ± 10% 5.5 V, forcing output toGND 5.5 V, forcing output toGND 5 V, REF current (I REF ) = 100 µA sourcing REFCOMP current (C REFCOMP ) = REFCOMP capacitance (C REF ) = 0.1 µF, f = 10 kHz | 1.248 1.250       | 32 0.001 40 | 1.252           | nA/√Hz V ppm/°C µV/V mA µA mV/mA nV/√Hz µA pF | V V V V V | Short-Circuit | Regulation Regulation Voltage Reference |    | External | Line Load Output | Current Density | REF REF REF REF REF | Temperature Short-Circuit Pin | REFCOMP | 0.05 2.5 140 | 10 | 10 50 65 | V CC = V CC = V CC = V CC = | Coefficient Current Noise Input |
| Current Capacitance 11 Voltage 11 External Full-Scale Adjust Resistor             | R FSADJ V CC | REFCOMP pin is tied toGND toGND                                                                                                                                                                      | 1.225 19          | 20          | 1 1.275 41      | V kΩ                                          |           |               |                                         | 11 |          |                  |                 |                     | 11                            |         |              |    |          | R FSADJ                     |                                 |
| POWER SUPPLY Analog Supply Voltage                                                |              |                                                                                                                                                                                                      | 2.85 1.71         |             | 5.5 V CC        | V V                                           |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          | -                           |                                 |
|                                                                                   | IO VCC       |                                                                                                                                                                                                      |                   |             |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| Digital Input andOutputSupplyVoltage Negative Supply                              | V DDx        | mArange and below (relative to GND) 300 mArange and below (relative to GND) Safe operating area (V DDx relative to V - ) All ranges (code = 0, all channels) ranges (code = 0, all channels)         | -5.5 2.1 2.4 2.85 |             | 0 V CC          | V V                                           |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          | V 200                       |                                 |
| Output Supplies Output Supplies, Total Voltage 12                                 |              | All All ranges (code = 0, all channels) All ranges (code = 0, per channel) 25mArange(code=full-scale, per channel) 13 200 mArange(code=full-scale, per channel) 13                                   | 7.5 1.5 28 50     | 4 0.01      | V CC 9 5.3 1 11 | V V mA µA                                     |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| V CC Supply Current IO VCC Supply Current V - Supply Current V DDx Supply Current |              |                                                                                                                                                                                                      |                   | 205         | 2.2 32 215      | mA mA mA                                      |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
|                                                                                   | I SLEEP      |                                                                                                                                                                                                      |                   |             |                 | mA                                            |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| V CC Shutdown Current 14, 15                                                      |              |                                                                                                                                                                                                      |                   |             |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| VCC 14, 15                                                                        |              |                                                                                                                                                                                                      |                   |             | 500 1           | μA μA                                         |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| IO Shutdown Current - 14, 15                                                      |              |                                                                                                                                                                                                      |                   |             |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
|                                                                                   |              |                                                                                                                                                                                                      |                   | 0.01        |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| V Shutdown Current                                                                |              |                                                                                                                                                                                                      |                   |             | 1.2             |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| 14, 15                                                                            |              |                                                                                                                                                                                                      | 80                |             |                 |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
| V DDx Shutdown Current                                                            |              |                                                                                                                                                                                                      |                   | 0.29        |                 | mA                                            |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
|                                                                                   |              |                                                                                                                                                                                                      |                   |             |                 | μA                                            |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |
|                                                                                   |              |                                                                                                                                                                                                      |                   |             | 250             |                                               |           |               |                                         |    |          |                  |                 |                     |                               |         |              |    |          |                             |                                 |

## Data Sheet

| Parameter                | Symbol   | Test Conditions/Comments                                     | Min   |   Typ | Max   | Unit   |
|--------------------------|----------|--------------------------------------------------------------|-------|-------|-------|--------|
| MONITOR MULTIPLEXER      |          |                                                              |       |       |       |        |
| MUXDCOutput Impedance    |          |                                                              |       |    15 |       | kΩ     |
| MUXLeakage Current       |          | Monitor multiplexer disabled (high impedance)                | -1    |  +0.1 | +1    | μA     |
| MUXOutput Voltage Range  |          | Monitor multiplexer selected to OUT0 voltage to OUT4 voltage | V -   |       | V CC  | V      |
| MUXContinuous Current 12 |          | T A = 25°C (do not exceed)                                   | -1    |       | +1    | mA     |

- 1  Offset current is measured at Code 384 for the LTC2672-16DICE. Linearity is defined from Code 384 to Code 65,535 for the LTC2672-16DICE.
- 2 For a full-scale current (IFS) = 300 mA, load resistance (RLOAD) = 10 Ω. For a IFS = 200 mA, RLOAD = 15 Ω. For a IFS = 100 mA, RLOAD = 30 Ω. For a IFS = 50 mA, RLOAD = 50 Ω. For a IFS = 25 mA, RLOAD = 100 Ω. For a IFS = 12.5 mA, RLOAD = 200 Ω. For a IFS = 6.25 mA, RLOAD = 400 Ω. For a IFS = 3.125 mA, RLOAD = 800 Ω.
- 3 IFS = 200 mA and RLOAD = 15 Ω. DC crosstalk is measured with a 100 mA to 200 mA current step on all four aggressor channels. The total power dissipation change is 4 × 50 mW = 200 mW. The monitor channel is held at 3/4 × IFS or 150 mA.
- 4  Wafer probe testing is performed at output currents of up to 100 mA. Output currents above 100 mA are guaranteed by design and characterization.
- 5 VOUTx is the channel output (OUTx) voltage.
- 6  The loads attached to the OUTx pins must be terminated to GND.
- 7 VDDx = 5 V (3.125 mA range), VDDx = 3.6 V (200 mA range), and V -= -3.3 V for all ranges. For large current output steps, internal thermal effects result in a final settling tail. In most cases, the tail is too small to affect settling to ±0.024%, but several milliseconds can be needed for full settling to the ±0.0015% level. For optimal results, set VDDx as low as practicable for each channel to reduce power dissipation in the device. The listed results were obtained using the DC2903 A evaluation board demonstration circuit with no additional heatsinks.
- 8  Internal reference mode. The load is 15 Ω (200 mA range) or 800 Ω (3.125 mA range) terminated to GND.
- 9  DAC to DAC crosstalk is the glitch that appears at the output of one DAC because of a 100 mA to 200 mA step change in an adjacent DAC channel. The measured DAC is at midscale (100 mA output current) in the 200 mA span range, with the internal reference, VDDx = 5 V, V -= -3.3 V.
- 10  The temperature coefficient is calculated by first computing the ratio of the maximum change in the output voltage to the nominal output voltage, and then dividing the ratio by the specified temperature range.
- 11  Guaranteed by design and not production tested.
- 12 Stresses beyond those listed for extended periods can cause permanent damage to the device or affect device reliability and lifetime.
- 13 Single channel at a specified output.
- 14 VCC = IOVCC = 5 V, VDDx = 5 V, and V -= -3.3 V.
- 15 Digital inputs are at 0 V or IOVCC.

## SPI COMMAND SEQUENCES

Figure 3. 24-Bit SPI Command Sequence

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                                                                                                          | Rating                                                                                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V CC toGND IO VCC toGND V - toGND V DDx toGND V DDx to V - OUTx toGND MUX REF, REFCOMP, FSADJ CS/LD, SCK, SDI, LDAC, CLR, TGPtoGND FAULT toGND SDO | -0.3 V to +6 V -0.3 V to +6 V -6 V to +0.3 V -0.3 V to (V CC + 0.3 V) -0.3 V to +10 V (V - -0.3 V) to (V DDx +0.3 V) (V - - 0.3 V) to (V CC + 0.3 V) -0.3Vtominimum(V CC +0.3Vor6V) -0.3 V to +6 V -0.3 V to +6 V -0.3Vtominimum(V CC +0.3Vor6V) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 4. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions

| Pad No.   | Mnemonic   |   X-Axis (µm) |   Y-Axis (µm) | Pad Type 1   | Description                             |
|-----------|------------|---------------|---------------|--------------|-----------------------------------------|
| 1A        | GND        |      -1648.70 |      +1149.35 | P (double)   | Analog Ground                           |
| 1B        | GND        |      -1648.70 |      +1256.35 | P (double)   | Analog Ground                           |
| 2         | TGP        |      -1648.70 |       +882.50 | DI (single)  | Asynchronous Toggle Pin                 |
| 3         | SDI        |      -1648.70 |       +405.10 | DI (single)  | Serial Data Input                       |
| 4         | SDO        |      -1648.70 |        +16.45 | DO(single)   | Serial Data Output                      |
| 5         | SCK        |      -1648.70 |       -289.25 | DI (single)  | Serial Clock Input                      |
| 6         | CS/LD      |      -1648.70 |       -573.05 | DI (single)  | Serial Interface Chip Select/Load Input |
| 7         | LDAC       |      -1648.70 |       -852.85 | DI (single)  | Active Low Asynchronous DAC Update Pin  |
| 8A        | GND        |      -1648.70 |      -1310.15 | P (double)   | Analog Ground                           |
| 8B        | GND        |      -1648.70 |      -1203.15 | P (double)   | Analog Ground                           |
| 9         | REFLO      |       -882.85 |      -1623.30 | AI (single)  | Reference Low                           |
| 10        | REF        |       -466.25 |      -1623.30 | AI (single)  | Reference Input/Output                  |
| 11        | REFCOMP    |       -181.05 |      -1623.30 | AI (single)  | Internal Reference Compensation Pin     |
| 12        | FSADJ      |        +63.95 |      -1623.30 | AI (single)  | Full-Scale Current Adjust Pin           |
| 13A       | V CC       |       +381.30 |      -1623.30 | P (double)   | Analog Supply Voltage                   |
| 13B       | V CC       |       +488.30 |      -1623.30 | P (double)   | Analog Supply Voltage                   |
| 14        | GND        |       +956.95 |      -1623.30 | P (single)   | Analog Ground                           |
| 15        | V -        |      +1252.40 |      -1623.30 | P (single)   | Negative Supply Voltage                 |
| 16        | OUT4       |      +1648.70 |      -1468.00 | AO(single)   | DAC Analog Current Output 4             |
| 17        | V DD4      |      +1616.20 |       -997.10 | P (single)   | Output Supply 4                         |
| 18        | V DD3      |      +1626.20 |       -838.30 | P (single)   | Output Supply 3                         |
| 19        | OUT3       |      +1648.70 |       -389.50 | AO(single)   | DAC Analog Current Output 3             |
| 20        | OUT2       |      +1648.70 |       -226.30 | AO(single)   | DAC Analog Current Output 2             |
| 21        | V DD2      |       1626.20 |        222.50 | P (single)   | Output Supply 2                         |
| 22        | V DD1      |       1626.20 |        381.30 | P (single)   | Output Supply 1                         |
| 23        | OUT1       |       1648.70 |        830.10 | AO(single)   | DAC Analog Current Output 1             |
| 24        | OUT0       |       1637.85 |        993.30 | AO(single)   | DAC Analog Current Output 0             |
| 25        | V DD0      |       1626.20 |       1452.10 | P (single)   | Output Supply 0                         |
| 26        | V -        |       1364.85 |       1623.30 | P (single)   | Negative Supply Voltage                 |
| 27        | V CC       |        897.95 |       1623.30 | P (single)   | Analog Supply Voltage                   |
| 28        | MUX        |        593.70 |       1623.30 | AO(single)   | Analog Multiplexer Output               |
| 29        | IO VCC     |        158.10 |       1623.30 | P (single)   | Digital Input/Output Supply Voltage     |
| 30        | FAULT      |       -100.10 |      +1623.30 | DO(single)   | Active Low Fault Detection Pin          |

## [LTC2672-16DICE](https://www.analog.com/LTC2672-16DICE?doc=LTC2672-16DICE.PDF)

| Pad No.   | Mnemonic   |   X-Axis (µm) |   Y-Axis (µm) | Pad Type 1   | Description                         |
|-----------|------------|---------------|---------------|--------------|-------------------------------------|
| 31        | CLR        |       -549.05 |      +1623.30 | DI (single)  | Active Low Asynchronous Clear Input |
| 32A       | GND        |       -943.80 |      +1623.30 | P (double)   | Ground                              |
| 32B       | GND        |       -836.80 |      +1623.30 | P (double)   | Ground                              |

## OUTLINE DIMENSIONS

Figure 5. 32-Pad Bare Die [CHIP] (C-32-1)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSESMBLY RECOMMENDATIONS

## Table 4. Die Specifications

| Parameter                | Value                                             | Unit           |
|--------------------------|---------------------------------------------------|----------------|
| Scribe Line Width        | 70                                                | µm             |
| Die Size (Maximum)       | 3.565 (x) × 3.514 (y)                             | mm             |
| Thickness                | 0.2032                                            | mm             |
| Bond Pads (Minimum Size) | 82 × 82                                           | µm             |
| Bond Pad Composition     | Aluminum (Al) 0.5% Copper (Cu) alloy              | Not applicable |
| Backside                 | Bare Silicon (Si)                                 | Not applicable |
| Passivation              | Borophosphosilicate glass (BPSG) + Si Nitride (N) | Not applicable |
| Chip Size                | 3.495 (x) × 3.444 (y)                             | mm             |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation             |
|----------------------|----------------------------|
| Die Attach           | Silver-filled epoxy        |
| Bonding Method       | Gold ball                  |
| Bonding Sequence     | No special recommendations |

## ORDERING GUIDE

| Model              | Temperature Range   | Package Description    | Package Option   |
|--------------------|---------------------|------------------------|------------------|
| LTC2672-16DICE#6AM | 0°C to 70°C         | 32-Pad Bare Die [CHIP] | C-32-1           |

(CIRCUIT SIDE)

<!-- image -->

01-26-2021-A

## [LTC2672-16DICE](https://www.analog.com/LTC2672-16DICE?doc=LTC2672-16DICE.PDF)

## NOTES

<!-- image -->

Data Sheet