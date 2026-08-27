<!-- lastmod 2022-08-03 -->
## EV Kit General Description

The MAX120 evaluation kit (EV kit) provides a proven design, and a fully assembled PC board for fast and easy samplespersecond(ksps).ThekitincludesaMAX120 and6otherintegratedcircuitsmountedona6"x7" printed circuit board. It can be easily configured for any ofthe5operatingmodesdescribedinthe MAX120/MAX122 data sheet. And, prototyping space is provided for additional circuits. The board operates from ±15V supplies.

The MAX120 EV kit can be used to evaluate theMAX122. ToorderafreeMAx122samplefromMaxim,calltoll-free 1-800-998-8800,FAX408-737-7194,orreturn one of the samplerequestcards found inside everyA/DConverter Design Guide.

## Component List

| DESIGNATION                           |   QTY | DESCRIPTION                             |
|---------------------------------------|-------|-----------------------------------------|
| C1                                    |     0 | User-supplied capacitor                 |
| C2, C3, C4, C6,C8, C13, C14, C15, C16 |     9 | 0.1uF capacitors                        |
| C5                                    |     1 | 22uFradial,low-ESRelectrolyticcapacitor |
| C7,C9,C11,C12,C18                     |     5 | 15uF,radialtantalumcapacitors           |
| C10                                   |     1 | 100pFcapacitor                          |
| C17                                   |     0 | User-supplied capacitor                 |
| J1-J6                                 |     6 | BNC connectors                          |
| J7                                    |     1 | 20-pinIDCheader                         |
| JU1,JU2,JU3,JU4                       |     4 | 3-pinjumperheaders                      |
| JU5                                   |     1 | 2-pinjumperheader                       |
| None                                  |     5 | Shunts (jumpers)                        |
| R1,R3,R5,R7                           |     4 | 51Q5%resistors                          |
| R2,R4,R6                              |     3 | 300Ω5%resistors                         |
| R8                                    |     1 | 10kΩ5%resistor                          |
| R9                                    |     0 | User-supplied resistor                  |
| R10                                   |     1 | 100Ω5%resistor                          |
| R11-R22                               |    12 | 620Ω5%resistors                         |
| LED1-LED12                            |    12 | High-brightness LEDs                    |
| U1                                    |     1 | 78M055Vregulator                        |
| U2                                    |     0 | User-supplied op amp                    |
| U3                                    |     1 | MAX12012-bitADC                         |
| U4                                    |     1 | 74HCTO0quadNANDgate                     |
| U5,U6                                 |     2 | 74HCT574octallatches                    |
| U7A                                   |     1 | 8.00MHzoscillator                       |
| U7B                                   |     1 | 5.00MHzoscillator                       |
| None                                  |     1 | 14-pin,300mil socket                    |
| None                                  |     1 | 24-pin,300mil s0cket                    |
| None                                  |     1 | 3-terminalpowerconnector                |
| None                                  |     4 | Rubberfeet                              |
| None                                  |     1 | 6.00"×7.00"printedcircuit board         |
| None                                  |     1 | MAX120EVkitmanual                       |
| None                                  |     1 | MAX120/MAX122datasheet                  |

## M/IXYN/

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- Proven500ksps,12-BitADCLayout and Circuit Design
- FullyAssembledPCBoard
- LEDDisplays for Output Monitoring
- ← 5 Selectable Operating Modes
- 4SquareInches of Prototyping Area

## Ordering Information

| PART            | TEMP.RANGE   | BOARDTYPE                  |
|-----------------|--------------|----------------------------|
| MAX120EVKIT-DIP | 0℃℃ to +70°℃ | Plastic DIP - Through Hole |

## MAX120 Evaluation Kit

## Quick Reference

Verify that the board is functioning properly by operating the MAX120 in the continuous-conversion mode. Configuretheboardforcontinuousconversionsbysetting the jumpers as shown in Table 1, and then apply power. The setup given causes the MAX120 to continuously convert.Connectalow-frequencyACsignalorvariable DC source (±5V max) to the analog input J4, and verify that theLEDdisplay tracks theinput.

After setting the jumpers, connect a ±15V supply with 500mAcapabilitytothepowerconnector.Whenthe power is turned on, the LEDs indicate the MAX120's outputcode.Should theLEDsfailtorespond,turnoff the power and verify the jumper settings. Be sure to turn off thepowerbeforechanging thejumpers.

When operating the evaluation board with the 333ksps MAX122,the8MHzcrystaloscillatormustberemoved from its socket and replaced with the 5MHz oscillator (included).

Table1.BoardVerification (Continuous-Conversion Mode)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                   |
|----------|------------------|-------------------------------------------------------------------------------|
| JU1      | 2&3              | Setforon-boardoscillator                                                      |
| JU2      | 2&3              | MAX120MODEpingrounded. MAX120operateswithabusyout- put,continuousconversions. |
| JU3      | 2&3              | Output latch triggered by MAX120 busy output                                  |
| JU4      | 1&2              | MAX120inputdrivendirectlyfrom J4,VIN BNC connector                            |
| JU5      | 1&2              | EnablestheLEDdisplay                                                          |

Important:Cycle power toboard after jumper sections are complete,otherwiseconversionswillnotstart.

| BNC CONNECTOR   | DESCRIPTION                    | CONNECTION   |
|-----------------|--------------------------------|--------------|
| J1              | MAX120ReadInput-RD             | Open         |
| J2              | MAX120ChipSelect-CS            | Open         |
| J3              | MAX120 ConversionStart- CONVST | Open         |
| J4              | MAX120Analog Input-AIN         | ±5V max      |
| J5              | MAX120 Reference Voltage- VREF | Open         |
| 9r              | ExternalClockInput-CLKIN       | Open         |

## General Description

The MAX120 EV kit can operate the MAX120 or MAX122 in any of the 5 operating modes described in the data sheet.RefertotheMAX120/MAX122datasheetfor descriptionsoftheseoperatingmodesand their timing kit to simulate the conditions.Note that continuous-conversion mode requires only one signal generator (for the analog input), while other modes require one or more timing signal generators.

Movable jumpers on the PC board allow theuser to easily configuretheEVkitfor thevariousMAX120modes. Table 2 describes the function of each jumper.

Table 2. Jumper Functions

| JUMPER   | FUNCTION                | SHUNT   | DESCRIPTION                                                             |
|----------|-------------------------|---------|-------------------------------------------------------------------------|
| JU1      | ClockSelect             | 1&2     | User provides system clockonJ6(external clock).                         |
|          |                         | 2&3     | Clocksignal provided by on-boardoscillator.                             |
| JU2      | MAX120 MODE Pin         | Open    | MAX120 MODE pin open                                                    |
|          |                         | 1&2     | MAX120 MODE pin to VDD                                                  |
|          |                         | 2&3     | MAX120 MODE pin to GND                                                  |
| JU3      | Latch Trigger Selection | 1&2     | Latch triggered by MAX120interrupt out- 1nd                             |
|          |                         | 2&3     | Latch triggered by MAX120busyoutput                                     |
| JU4      | Input Selection         | 1&2     | MAX120 input con- nected directly to J4, VIN                            |
|          |                         | 2&3     | MAX120 input con- nected to the output of the op-amp socket on theboard |
| JU5      | LED Enable              | Open    | LEDs disabled                                                           |
|          |                         | 1&2     | LEDs display the out- put of the74HCT574 iatches.                       |

Power for the board attaches to the three-pin, screw-terminalpowerconnectornear thebottom. The board requires±15Vpowersuppliescapableof500mA.Be sure to observe the polarity markings printed on the board.A78M05regulatorprovides the+5Vsupplyfor theMAX120 and digital circuitry.

The MAx120's analog input should be driven by a lowimpedance signal souce，to avoid input noise.To facilitate evaluationofdifferent opampswiththe MAX120, the printed-circuit layout has a location (U2) reserved for a user-supplied op amp. The type used, if any, will depend on system requirements, but a highspeed op amp such as the AD711 works well in most applications. Note that a location has also been provided at the MAX120 input for a capacitor (C17), which may be addedwhendrivenbyasourcewithhighACimpedance. The value of C17 should be in the 0.01μF to 0.1μF range, provided the input source will drive the capacitive load.

Driving the LEDs adds about 1/2LSB noise when operating the MAX120 at high clock rates.It is advisable to disabletheLEDswhileperformingaccuracyornoiselevel measurements.

## MAX120 Evaluation Kit

Figure1.MAX120 EvaluationKit Schematic

<!-- image -->

WIXVW

## MAX120EvaluationKit

Figure1.MAX120EvaluationKitSchematic(continued)

<!-- image -->

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatentlicensesareimplied. Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

4