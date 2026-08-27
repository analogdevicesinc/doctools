<!-- lastmod 2019-11-25 -->
<!-- image -->

## Known Good Die

## FEATURES

16-bit resolution

±1 LSB DNL monotonic ±1 LSB INL 2 mA full-scale current ± 20%, with VREF = 10 V 0.5 µs settling time 2-quadrant reference multiplying 6.9 MHz bandwidth Zero or midscale power-up reset Zero or midscale dynamic reset 3-wire interface 23-pad bare die package

## APPLICATIONS

Automatic test equipment Instrumentation Digitally controlled calibration Industrial control programmable logic controllers (PLCs) Programmable attenuator

## Dual, Current Output,

## Serial Input, 16-Bit DAC

[AD5545-KGD](https://www.analog.com/AD5545?doc=AD5545-KGD.pdf)

## GENERAL DESCRIPTION

The AD5545-KGD is a 16-bit, current output, digital-to-analog converter (DAC) designed to operate from a 4.5 V to 5.5 V supply range.

An external reference is needed to establish the full-scale output current. An internal feedback resistor (RFB) enhances the resistance and temperature tracking when combined with an external op amp to complete the current to voltage (I to V) conversion.

A serial data interface offers high speed, 3-wire microcontroller compatible inputs using serial data input (SDI), clock (CLK), and chip select (CS). The LDAC function allows simultaneous update operation. The internal reset logic allows power-on reset and dynamic reset at either zero or midscale, depending on the state of the MSB pin.

The AD5545-KGD is packaged in a 23-pad bare die package and can be operated from -40°C to +85°C.

Known Good Die (KGD): these die are fully guaranteed to data sheet specifications.

Additional application and technical information can be found in the AD5545 data sheet.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [AD5545-KGD](https://www.analog.com/AD5545?doc=AD5545-KGD.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |

Electrical Characteristics  ............................................................. 3

## REVISION HISTORY

11/2019-Revision 0: Initial Version

## Known Good Die

| Absolute Maximum Ratings ............................................................5          |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................5 |
| Pin Configuration and Function Descriptions..............................6                      |
| Outline Dimensions..........................................................................8   |
| Die Specifications and Assembly Recommendations ..............8                                 |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS

VDD = 5 V ± 10%, IOUTx = virtual GND, GND = 0 V , reference voltage (VREF) = 10 V , TA = full operating temperature range, unless otherwise noted.

Table 1.

| Parameter                 | Symbol   | Test Conditions/Comments                      |   Min | Typ   | Max   | Unit    |
|---------------------------|----------|-----------------------------------------------|-------|-------|-------|---------|
| STATIC PERFORMANCE 1      |          |                                               |       |       |       |         |
| Resolution                | N        | 1 LSB=V REF /2 16 = 153 µV whenV REF = 10V    |       |       | 16    | Bits    |
| Relative Accuracy         | INL      | 1 LSB=V REF /2 14 = 610 µV whenV REF = 10V    |       |       | 14 ±1 | Bits    |
| Differential Nonlinearity | DNL      | Monotonic                                     |       |       | ±1    | LSB LSB |
| Output Leakage Current    | I OUT    | Data = 0x0000, T A = 25°C                     |       |       | 10    | nA      |
| Full-Scale Gain Error     | G        | Data = 0x0000, T A =T A maximum               |       |       | 20    | nA      |
| Full-Scale                | FSE TCV  | Data = full scale                             |       | ±1    | ±4    | mV      |
| Temperature Coefficient 2 | FS       |                                               |       | 1     |       | ppm/°C  |
| REFERENCE INPUT           |          |                                               |       |       |       |         |
| Reference Voltage Range   | V REF    |                                               |   -12 |       | +12   | V       |
| Input Resistance          | R REF    |                                               |       | 5     |       | kΩ      |
| Input Capacitance 2       | C REF    |                                               |       | 5     |       | pF      |
| ANALOG OUTPUT             |          |                                               |       |       |       |         |
| Output Current            | I OUT    | 2 mAfull-scale current ± 20%, withV REF = 10V |       | 2     |       | mA      |
| Output Capacitance 2      | C OUT    | Code dependent                                |       | 200   |       | pF      |
| LOGIC INPUTSAND OUTPUT    |          |                                               |       |       |       |         |
| Logic Input LowVoltage    | V IL     |                                               |       |       | 0.8   | V       |
| Logic Input High Voltage  | V IH     |                                               |   2.4 |       |       | V       |
| Input Leakage Current     | I IL     |                                               |       |       | 10    | µA      |
| Input Capacitance 2       | C IL     |                                               |       |       | 10    | pF      |
| INTERFACETIMING 2, 3      |          | See Figure 2                                  |       |       |       |         |
| Clock Input Frequency     | f CLK    |                                               |       |       | 50    | MHz     |
| Clock Width High          | t CH     |                                               |    10 |       |       | ns      |
| Clock Width Low           | t CL     |                                               |    10 |       |       | ns      |
| CS to Clock Setup         | t CSS    |                                               |     0 |       |       | ns      |
| Clock to CS Hold          | t CSH    |                                               |    10 |       |       | ns      |
| Data Setup                | t DS     |                                               |     5 |       |       | ns      |
| Data Hold                 | t DH     |                                               |    10 |       |       | ns      |
| LDAC Setup                | t LDS    |                                               |     5 |       |       | ns      |
| Hold                      | t LDH    |                                               |    10 |       |       | ns      |
| LDACWidth                 | t LDAC   |                                               |    10 |       |       | ns      |
| SUPPLY CHARACTERISTICS    |          |                                               |       |       |       |         |
| Power Supply Range        | V DD     |                                               |   4.5 |       | 5.5   | V       |
| Positive Supply Current   | I DD     | Logic inputs = 0V                             |       |       | 10    | µA      |
| Power Dissipation         | P DISS   | Logic inputs = 0V                             |       |       | 0.055 | mW      |
| Power Supply Sensitivity  | PSS      | ∆V DD = ±5%                                   |       |       | 0.006 | %/%     |

## [AD5545-KGD](https://www.analog.com/AD5545?doc=AD5545-KGD.pdf)

| Parameter                         | Symbol       | Test Conditions/Comments                                                                                                     |   Typ | Max   | Unit   |
|-----------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------|-------|-------|--------|
| AC CHARACTERISTICS 4              |              |                                                                                                                              |       |       |        |
| Output Voltage Setting Time       | t S          | To ±0.1% full scale, data = zero scale to full scale to zero scale                                                           |   0.5 |       | µs     |
| Reference Multiplying Bandwidth 5 |              | V REF = 100 mVrms, data = full scale, C1 = 5.6 pF                                                                            |   6.9 |       | MHz    |
| DAC Glitch Impulse                | Q            | V REF = 0 V, data = midscale minus 1 to midscale                                                                             |    -2 |       | nV-sec |
| Feedthrough Error                 | V OUT /V REF | Data = zero scale,V REF = 100 mVrms, f = 1 kHz, same channel                                                                 |   -81 |       | dB     |
| Digital Feedthrough               | Q            | CS = logic high and f CLK = 1 MHz                                                                                            |     7 |       | nV-sec |
| Total Harmonic Distortion         | THD          | V REF =5Vp-p,data =fullscale,f=1kHzto10kHz                                                                                   |  -104 |       | dB     |
| Analog Crosstalk                  | C TA         | V REF B = 0 V, measure DAC B voltage output (V OUTB ) withV REF A = 5V p-p sine wave, data = full scale, f = 1 kHz to 10 kHz |   -95 |       | dB     |
| Output Spot Noise Voltage         | e N          | f = 1 kHz, bandwidth = 1 Hz                                                                                                  |    12 |       | nV/√Hz |

## Timing Diagram

Figure 2. 18-Bit Data Word Timing Diagram

<!-- image -->

20530-002

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                | Rating                  |
|------------------------------------------|-------------------------|
| V DD toGND                               | -0.3V to +8V            |
| V REF x toGND                            | -18V to +18V            |
| Logic Inputs toGND                       | -0.3V to +8V            |
| V IOUTx 1 toGND                          | -0.3V toV DD + 0.3V     |
| Input Current to Any Pin except Supplies | ±50mA                   |
| Maximum Junction Temperature (T J max)   | 150°C                   |
| Operating Temperature Range              | -40°C to +85°C          |
| Storage Temperature Range                | -65°C to +150°C         |
| Lead Temperature                         | JEDEC industry standard |
| Soldering                                | J-STD-020               |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions

|   Pad No. |   X-Axis (µm) |   Y-Axis (µm) | Mnemonic   | Description                                                                                                                                                             |
|-----------|---------------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 |           232 |          1003 | R FB A     | DAC A Feedback Resistor Connection. Establish the voltage output for DAC A by connecting this pin to an external amplifier output.                                      |
|         2 |            92 |          1003 | R FB A     | DAC A Feedback Resistor Connection. Establish the voltage output for DAC A by connecting this pin to an external amplifier output.                                      |
|         3 |          -745 |           702 | V REF A    | DAC A Reference Voltage Input Terminal.V REF A establishes the DAC A full-scale output voltage. This pin can be tied to theV DD pin.                                    |
|         4 |          -745 |           842 | V REF A    | DAC A Reference Voltage Input Terminal.V REF A establishes the DAC A full-scale output voltage. This pin can be tied to theV DD pin.                                    |
|         5 |          -745 |           257 | I OUT A    | DAC A Current Output.                                                                                                                                                   |
|         6 |          -745 |           397 | I OUT A    | DAC A Current Output.                                                                                                                                                   |
|         7 |          -745 |           115 | A GND A    | DAC A Analog Ground.                                                                                                                                                    |
|         8 |          -745 |          -115 | A GND B    | DAC B Analog Ground.                                                                                                                                                    |
|         9 |          -745 |          -397 | I OUT B    | DAC B Current Output.                                                                                                                                                   |
|        10 |          -745 |          -257 | I OUT B    | DAC B Current Output.                                                                                                                                                   |
|        11 |          -745 |          -702 | V REF B    | DAC B Reference Voltage Input Terminal.V REF B establishes DAC B full-scale output voltage. This pin can be tied to theV DD pin.                                        |
|        12 |          -745 |          -842 | V REF B    | DAC B Reference Voltage Input Terminal.V REF B establishes DAC B full-scale output voltage. This pin can be tied to theV DD pin.                                        |
|        13 |           232 |         -1003 | R FB B     | DAC B Feedback Resistor Connection. Establish the voltage output for DAC B by connecting this pin to an external amplifier output.                                      |
|        14 |            92 |         -1003 | R FB B     | DAC B Feedback Resistor Connection. Establish the voltage output for DAC B by connecting this pin to an external amplifier output.                                      |
|        15 |           513 |         -1022 | SDI        | Serial Data Input. Input data loads directly into the shift register.                                                                                                   |
|        16 |           745 |          -881 | RS         | Reset Pin, Active Low Input. Input registers and DAC registers are set to all 0s or midscale. Register data = 0x0000 when MSB = 0. Register data = 0x8000 when MSB = 1. |

## Known Good Die

|   Pad No. |   X-Axis (µm) |   Y-Axis (µm) | Mnemonic   | Description                                                                                                                                                                                                                                                          |
|-----------|---------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        17 |           745 |          -741 | CS         | Chip Select, Active Low Input. CS disables the shift register loading when high. The AD5545-KGD transfers serial register data to the input register when CS or LDAC returns high, which does not affect LDAC operation.                                             |
|        18 |           745 |           -46 | DGND       | Digital Ground Pin.                                                                                                                                                                                                                                                  |
|        19 |           745 |          -186 | DGND       | Digital Ground Pin.                                                                                                                                                                                                                                                  |
|        20 |           745 |           152 | V DD       | Positive Power Supply Input.The specified range of operation is 5 V ± 10%.                                                                                                                                                                                           |
|        21 |           745 |           741 | MSB        | Zero Scale or Midscale Output Setting. MSB sets the output to either 0 or midscale during a reset pulse (RS) or at system power-on. The output equals zero scale when MSB = 0 and midscale when MSB = 1. The MSB pin can also be tied permanently to ground orV DD . |
|        22 |           745 |           881 | LDAC       | Load DAC Register Strobe, Level Sensitive Active Low. LDAC transfers all input register data to DAC registers. LDAC is an asynchronous active low input. See the AD5545 data sheet for operation.                                                                    |
|        23 |           513 |          1022 | CLK        | Clock Input. The positive edge clocks data into the shift register.                                                                                                                                                                                                  |

## OUTLINE DIMENSIONS

Figure 4. 23-Pad Bare Die [CHIP] (C-23-2)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 4. Die Specifications

| Die Specifications Parameter   | Value                                              | Unit           |
|--------------------------------|----------------------------------------------------|----------------|
| Chip Size                      | 1690 × 2280                                        | µm             |
| Scribe Line Width              | 110 × 160                                          | µm             |
| Die Size                       | 1800 × 2440                                        | µm             |
| Thickness                      | 305                                                | µm             |
| Backside                       | Backside adhesion/backside bias                    | Not applicable |
| Passivation                    | Polyimide                                          | Not applicable |
| Thickness                      | 18                                                 | µm             |
| Bond Pads (Minimum)            | 92 × 92                                            | µm             |
| Bond Pad Composition           | Aluminum silicon (AlSi) (1.0%), copper (Cu) (0.5%) | Not applicable |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy dispense                |
| Bonding Method       | Thermosonic gold ball bonding |
| Bonding Sequence     | Bond Pad 1 (R FB A) first     |

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description                 | Package Option   |
|---------------|---------------------|-------------------------------------|------------------|
| AD5545-KGD-WP | -40°C to +85°C      | 23-Pad Bare Die [CHIP], Waffle Pack | C-23-2           |

©2019  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered  trademarks  are  the  property  of  their  respective  owners. D20530-0-11/19(0)

<!-- image -->

05-30-2019-A