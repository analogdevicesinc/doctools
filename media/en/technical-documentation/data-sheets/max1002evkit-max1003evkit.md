<!-- lastmod 2022-08-05 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1002/MAX1003 evaluation kits (EV kits) simplify evaluation of the 60Msps MAX1002 and 90Msps MAX1003 dual, 6-bit analog-to-digital converters (ADCs). The kits include the basic components necessary to operate the on-chip oscillator as a voltage-controlled oscillator (VCO). Each board can also be easily modified to accommodate an external clocking source.

Connectors for power supplies, analog inputs, and digital outputs simplify connections to the device. The PC board features an optimized layout to ensure the best possible dynamic performance. The EV kits include a MAX1002 or MAX1003.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION            |   QTY | DESCRIPTION                                      |
|------------------------|-------|--------------------------------------------------|
| C1, C10, C11, C12      |     4 | 0.01µF, 25V min, 10% ceramic capacitors          |
| C2, C3, C6, C7         |     4 | 47pF, 25V min, 5% ceramic capacitors             |
| C4, C15                |     2 | 0.22µF, 25V min, 10% ceramic capacitors          |
| C5                     |     1 | 5pF, 10V min, 10% ceramic capacitor (MAX1003)    |
| C5                     |     1 | 22pF, 10V min, 10% ceramic capacitor (MAX1002)   |
| C8, C9, C13, C14       |     4 | 0.1µF, 10V min, 10% ceramic capacitors           |
| C16, C17               |     2 | 10µF, 10V min, 20% tantalum caps AVX TAJC106K016 |
| R1                     |     1 | 10k Ω , 5% resistor                              |
| R2, R3                 |     2 | 47k Ω , 5% resistors                             |
| R4-R7                  |     4 | 49.9 Ω , 1%resistors                             |
| L1                     |     1 | 220nH inductor Coilcraft 1008CS-221TKBC          |
| U1                     |     1 | MAX1003CAX, 90Msps MAX1002CAX, 60Msps            |
| D1                     |     1 | Varactor diode M/A-COM MA4ST079CK-287, SOT23     |
| IIN+, IIN-, QIN+, QIN- |     4 | BNC connectors                                   |
| None                   |     1 | MAX1002/MAX1003 circuit board                    |
| JU1, JU2, JU6, JU7     |     4 | 0 Ω resistors                                    |
| JU3, JU4, JU8, JU9     |     4 | 2-pin headers                                    |
| JU5                    |     1 | 3-pin header                                     |
| JU11                   |     1 | 2-pin header (MAX1002 only)                      |
| J1                     |     1 | 26-pin connector                                 |
| None                   |     1 | Shunt for JU5                                    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 5.85 Effective Number of Bits at 20MHz Analog Input Frequency
- ' Separate Analog and Digital Power and Ground Connections with Optimized PC Board Layout
- ' Matched Single-Ended or Differential Analog Inputs for Both I and Q Channels
- ' Square-Pin Header for Easy Connection of Logic Analyzer to Digital Outputs
- ' User-Selectable ADC Full-Scale Gain Ranges
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX1002EVKIT-SO | 0°C to +70°C  | Surface Mount |
| MAX1003EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER*   | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (803) 946-0690 | (803) 626-3123 |
| Coilcraft   | (847) 639-6400 | (847) 639-1469 |
| M/A-COM     | (617) 564-3100 | (617) 564-3050 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1002/MAX1003 EV kits are fully assembled and tested. Follow these steps to verify proper board operation. Do not turn on the power supplies until all connections to the EV kit are completed.

- 1) Connect a +5V power supply to the pad marked VCC. Connect this supply's ground to the pad marked GND.
- 2) Connect a +3.3V (MAX1003) or +5V (MAX1002) power supply to the pad labeled VCCO. Connect the supply ground to the pad marked OGND.
- 3) Connect a +4V power supply to the pad marked VTUNE. Connect the supply ground to the GND pad.
- 4) Remove the shunt from jumper JU5. This sets a 250mVp-p full-scale range.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## MAX1002/MAX1003 Evaluation Kits

- 5) Using an RF power splitter-combiner, connect a 250mVp-p, 20MHz sine-wave source to both analog inputs at BNC J3 and J6. The analog input impedance is 50 Ω for each channel.
- 6) Connect a logic analyzer to connector J1 to monitor the digital outputs.
- 7) Turn on all power supplies and signal sources.
- 8) Observe the digitized analog input signals with the logic analyzer.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## EV Kit Jumpers

The MAX1002/MAX1003 EV kits contain several jumpers that control board and part options. The following sections describe the different jumpers and their purposes. Table 1 lists the jumpers on the EV kits and their default positions.

## Table 1.  EV Kit Jumpers and Default Positions

| JUMPER(S)          | FUNCTION                                               | DEFAULT POSITION           |
|--------------------|--------------------------------------------------------|----------------------------|
| JU1, JU2, JU6, JU7 | Power-supply current- sense ports                      | Shorted with 0 Ω resistors |
| JU3, JU4, JU8, JU9 | Offset-correction amplifier enabled                    | Open                       |
| JU5                | ADC full-scale range selection                         | Open                       |
| JU11               | VCCO tied to VCC for single-supply operation (MAX1002) | Open                       |

## Power Requirements

Both the MAX1002 and the MAX1003 require +5V at about 65mA for their analog VCC supply. Power-supply requirements for the digital outputs, however, are different for  the  two  devices.  0 Ω resistors are installed at jumper sites JU1, JU2, JU6, and JU7, and can be removed to sense device power-supply currents with an ammeter.

## MAX1003 Digital Outputs Supply

The MAX1003 requires +3.3V for the VCCO supply. The current requirement from the power supply is a function of the sampling clock and analog input frequencies, as well  as  the  capacitive  loading  on  the  digital  outputs. With 15pF loads and a 20MHz analog input frequency sampled at 90Msps, the current draw is about 10mA.

## MAX1002 Digital Outputs Supply

The MAX1002 uses +5V for its VCCO supply. As with the MAX1003, the current requirement is a function of the  analog input frequency and capacitive loading on the outputs. With 15pF loads and a 20MHz analog input sampling at 60Msps, the current requirement is about 13mA. You can also use a single power supply for both the VCC and VCCO supplies by installing jumper JU11, located near the EV kit power-supply connectors. However, for best dynamic performance, use separate analog and digital power supplies.

## Analog Inputs

The analog inputs to the dual ADCs are provided through BNC connectors IIN+, IIN-, QIN+, and QIN-. The connectors are terminated with 49.9 Ω to  ground and are AC coupled to the converter's analog inputs, which are internally self-biased at 2.35V DC. A typical application circuit drives the IIN+ and QIN+ noninverting analog inputs using AC-coupled in-phase and quadrature signals. The nominal 20k Ω input resistance of the analog inputs, plus the 0.1µF AC-coupling capacitor value, sets the low-frequency corner at about 80Hz.

You can drive the analog inputs either single-ended or differentially using AC- or DC-coupled inputs. Either the inverting or the noninverting input can be driven singleended. If the inverting input is driven, then the digital output codes are inverted (complemented). Refer to the MAX1002 or MAX1003 data sheet for typical circuits.

## ADC Gain Selection

The single GAIN-select pin on the MAX1002 or MAX1003 controls the full-scale input range for both the I and the Q channels. Jumper JU5 is used to manually select the desired gain range as shown in Table 2. The EV kits are shipped with the mid-gain range selected (jumper pins open).

## Table 2.  Gain-Selection Jumper JU5 Settings

<!-- image -->

<!-- image -->

<!-- image -->

| JU5 SETTING   | CONNECTION           | ADC GAIN RANGE      |
|---------------|----------------------|---------------------|
| JU5 1 2 3     | Pins 1 and 2 shorted | Low-gain, 500mVp-p  |
| JU5 1 2 3     | No pins shorted      | Mid-gain, 250mVp-p  |
| JU5 1 2 3     | Pins 2 and 3 shorted | High-gain, 125mVp-p |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1002/MAX1003 Evaluation Kits

Table 3 lists the possible input-drive combinations for the mid-gain (250mVp-p) full-scale range selection. Drive levels are referenced to the open-circuit, common-mode voltage of the analog inputs (typically 2.35V) if  DC coupled, or to ground if AC coupling is used. If the low-gain (500mVp-p) range is selected, the input-drive requirements are twice those listed in Table 3.  If  the  high-gain  (125mVp-p)  range  is  selected,  the input-drive requirements are half those listed in Table 3.

## Table 3.  Typical Input-Drive Requirements for Mid-Gain

| INPUT DRIVE               | QIN+ or IIN+   | QIN- or IIN-   |   OUTPUT CODE |
|---------------------------|----------------|----------------|---------------|
| Single-Ended Noninverting | +125mV         | Open Circuit   |        111111 |
| Single-Ended Noninverting | 0              | Open Circuit   |        100000 |
| Single-Ended Noninverting | -125mV         | Open Circuit   |        000000 |
| Single-Ended Inverting    | Open Circuit   | +125mV         |        000000 |
| Single-Ended Inverting    | Open Circuit   | 0              |        011111 |
| Single-Ended Inverting    | Open Circuit   | -125mV         |        111111 |
| Differential              | +62.5mV        | -62.5mV        |        111111 |
| Differential              | 0              | 0              |        100000 |
| Differential              | -62.5mV        | +62.5mV        |        000000 |

## Offset-Correction Amplifiers

The offset-correction amplifiers included on the MAX1002 and MAX1003 are usually enabled in a typical AC-coupled application circuit. For DC-coupled applications, the amplifiers must be disabled by installing shorting blocks on jumpers JU3, JU4 (I channel);  and  JU8,  JU9  (Q  channel).  These  jumpers short device pins IOCC+ (pin 2), IOCC- (pin 3), QOCC- (pin 16),  and QOCC+ (pin 17) to ground and disable the amplifiers. The MAX1002/MAX1003 EV kits are configured with the offset-correction amplifiers enabled (jumpers open) and AC-coupled analog inputs.

Voltage-Controlled-Oscillator Operation The EV kits include a voltage-controlled-oscillator (VCO) circuit to set the analog-to-digital converter (ADC) sampling rate using an external resonant tank and a varactor diode. A voltage applied to the VTUNE pad changes the varactor diode's capacitance to adjust the tank's resonant frequency, which sets the oscillator's sampling frequency. VTUNE voltage can be varied from 0V to a maximum of 8V.

<!-- image -->

Figure 1.  MAX1002 Oscillator Frequency vs. VTUNE Control Voltage

<!-- image -->

Figure 2.  MAX1003 Oscillator Frequency vs. VTUNE Control Voltage

<!-- image -->

The EV kits are designed so that a nominal VTUNE control voltage of about 4V sets the ADC sampling rate to either 60Msps for the MAX1002 or 90Msps for the MAX1003. The VTUNE control voltage should be well filtered, as any noise on the supply contributes to jitter in  the  internal  oscillator  and  degrades  the  converters' dynamic performance. Figures 1 and 2 show the VTUNE control-voltage typical frequency-adjustment ranges for the MAX1002 and MAX1003 EV kits, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1002/MAX1003 Evaluation Kits

Table 4.  External Clock Source EV Kit Modifications

| COMPONENT       | DESCRIPTION                                       | MODIFICATION                     |
|-----------------|---------------------------------------------------|----------------------------------|
| Clock Overdrive | Clock input BNC connector                         | Add                              |
| C5              | 5pF capacitor (MAX1003), 22pF capacitor (MAX1002) | Remove                           |
| C6, C7          | 47pF capacitors                                   | Replace with 0.01µF capaci- tors |
| L1              | 220nH inductor                                    | Remove                           |
| R1              | 10k Ω resistor                                    | Remove                           |
| R2, R3          | 47k Ω resistors                                   | Replace with 49.9 Ω resistors    |
| D1              | Varactor diode                                    | Remove                           |

## External Clock Operation

The MAX1002/MAX1003 EV kits can be converted to drive the ADCs from an external clock source. This involves removing the external resonator components from the VCO circuit and adding a few new components. Table 4 lists the EV kit changes required to convert the board to accept an external clock source. The resulting schematic is shown in Figure 4.

The new 49.9 Ω value of R3 shown in Figure 4 provides proper termination for a 50 Ω external signal generator. AC-coupling capacitor C6 couples the external clock signal to the MAX1002/MAX1003 oscillator circuitry at TNK+ (pin 9). R2 and C7 ensure that the impedance at both ports of the oscillator is balanced. After all modifications are complete, connect an external clock source to  the  BNC connector on the EV kit marked CLOCK OVERDRIVE. The recommended clock amplitude is 1Vp-p; however, the ADC operates correctly with as little  as  100mVp-p or up to 2.5Vp-p on CLOCK OVERDRIVE.

The external clock source should have low phase noise for  best  dynamic performance. A low-phase-noise sine-wave oscillator serves this purpose well. A squarewave clock source is not necessary to drive the MAX1002/MAX1003. The devices contain sufficient gain to amplify even a low-level-input sine wave to drive the ADC comparators, while ensuring excellent dynamic performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Digital Outputs

The TTL/CMOS-compatible digital outputs are presented in parallel from both I and Q channels at connector J1. The data format is offset binary with the MSB as D5 and the LSB as D0. The row of pins closest to the board edge is digital output ground (OGND), while the data bits occupy the inside row. Located in the middle of the connector is the pin for the output clock labeled DCLK. This signal can be used to latch the parallel output data for capture into a logic analyzer or external DSP circuitry. Both digital outputs are updated on DCLK's rising edge (see the timing diagram in the MAX1002 or MAX1003 data sheet).

## \_\_\_\_\_\_\_\_\_\_\_\_\_Layout Considerations

The MAX1002/MAX1003 EV kit layouts have been optimized for high-speed signals. Careful attention has been given to grounding, power-supply bypassing, and signal-path layout to minimize coupling between the analog and digital sections of the circuit. For example, the ground plane has been removed under the tank circuitry to reduce stray capacitive loading on the relatively  small  capacitors  required in the external resonant tank formed by C5, L1, and D1. Other layout considerations are detailed in the following sections.

## Power Supplies and Grounding

The EV kits feature separate analog and digital power supplies and grounds for best dynamic performance. A thin trace located on the backside of the circuit board near the VCC power-supply connector ties the analog and output ground planes together. This trace can be cut if  the  power-supply grounds are referenced elsewhere.

Referencing analog and digital grounds together at a single point usually avoids ground loops and corruption of  sensitive  analog  circuitry  by  noise  from  the  digital outputs. If the ground trace on the backside of the board is cut, observe the absolute maximum ratings between the two grounds.

## MAX1002/MAX1003 Evaluation Kits

## Bypassing

Proper bypassing is essential to achieve the best dynamic performance from the converters. The MAX1002/MAX1003 EV kits use 10µF bypass capacitors  located  close  to  the  power-supply  connectors on the board to filter low-frequency supply ripple. High-frequency bypassing is accomplished with ceramic chip capacitors located very close to the device's supply pins.

As the digital outputs toggle, transient currents in the VCCO supply can couple into sensitive analog circuitry and severely degrade the converters' effective number of bits performance. Of particular concern is effectively bypassing VCCO to OGND. For best results, locate the bypass capacitors on the same side of the board and place them close to the device. This avoids the use of through-holes and results in lower series inductance. The capacitor size chosen for the EV kits (size 0603) keeps the layout compact. Finally, the modest value (47pF) and small size result in a high self-resonant frequency for effective high-frequency bypassing.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_Applications Information

To achieve the full dynamic potential from the converters, minimize the capacitive loading on the digital outputs to reduce the transient currents at VCCO and OGND. The maximum capacitance per output bit should be less than 15pF. For example, the capacitance of the digital output traces and the J1 connector on the EV kits is about 3pF per trace. In an applications circuit,  this  could  be  further  reduced  by  locating  the digital  receiving chip very close to the MAX1002/ MAX1003 and removing the ground plane from under the output bit traces.

A logic analyzer can be connected to the J1 connector on the EV kits for evaluation purposes. The analyzer should be directly connected to the EV kit without any additional ribbon cables. Even a short length of ribbon cable can exceed the maximum recommended capacitive loading of the digital outputs. A typical high-speed logic  analyzer  probe adds about another 8pF loading per digital  bit,  which  is  acceptable  for  good  dynamic performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX1002/MAX1003 EV Kit Schematic (Voltage-Controlled-Oscillator Mode)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4.  MAX1002/MAX1003 EV Kit Schematic (External Clock Operation)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1002/MAX1003 Evaluation Kits

<!-- image -->

Figure 5.  MAX1002/MAX1003 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 7.  MAX1002/MAX1003 EV Kit PC Board LayoutComponent Side

Figure 6.  MAX1002/MAX1003 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Figure 8.  MAX1002/MAX1003 EV Kit PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600
- © 1997 Maxim Integrated Products Printed USA © 1997 Maxim Integrated Products Printed USA
- is a registered trademark of Maxim Integrated Products. is a registered trademark of Maxim Integrated Products.