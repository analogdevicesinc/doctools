<!-- lastmod 2022-08-03 -->
## General Description

The MAX4141 evaluation kit (EV kit) simplifies the evaluationof theMAX4141wideband330MHz,4x1multiplexer.AccesstoallinputsisthroughRFstyleconnectors (SMA). A special scope-probe jack is provided for easyoutputmonitoringonanoscilloscope.Athreeposition dip switch allows simple control of the enable and addressfunctions.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| U1            |     1 | MAX4141CSD                                                                        |
| C1, C4        |     2 | 10uF,10Vtantalumcapacitors Sprague293D106X0010B2 AVXTAJB106M010                   |
| C3, C5        |     2 | 1000pFceramiccapacitors Vishay/VitramonVJ1206Y102KXX Murata-ErieGRM42-6X7R102K025 |
| C2, C6        |     2 | 0.1μFceramic capacitors Vishay/VitramonVJ1206Y104KXX Murata-ErieGRM42-6X7R104K025 |
| R1-R4         |     4 | 51Ω,5%resistors                                                                   |
| R5,R6,R7      |     3 | 10kΩ,5%resistors                                                                  |
| SW1           |     1 | 3-position dip switch                                                             |
| INO-IN3       |     4 | SMAjacks                                                                          |
| OUT           |     1 | Scope-probe jack Specialty Connectors 33JR135-1                                   |
| None          |     1 | MAX4141PCboard                                                                    |
| None          |     1 | MAX4141datasheet                                                                  |

## Component Suppliers

| SUPPLIER            | PHONE          | FAX            |
|---------------------|----------------|----------------|
| AVX Sprague         | (207) 282-5111 | (207) 283-1941 |
| Murata-Erie         | (814) 237-1431 | (814) 238-0490 |
| SpecialtyConnectors | (317) 738-2800 | (317) 738-2858 |
|                     | (603) 224-1961 | (603) 224-1430 |
| Vishay/Vitramon     | (203) 268-6261 | (203) 452-5670 |

## M/IXYN/

<!-- image -->

- 330MHz-3dBBandwidth
- ←±5V Supply Operation
- ←Logic Disable Mode: High-Z Outputs Reduced Power Consumption
- ←Fully Assembled and Tested

## Ordering Information

| PART            | TEMP.RANGE   | BOARD TYPE   |
|-----------------|--------------|--------------|
| MAX4141EVKIT-SO | +25°℃        | SurfaceMount |

## Quick Start

The MAx4141EVkit isfully assembled and tested. Followthesestepstoverifyboardoperation.Donot turn on the power supply until all connections are completed.

- 1） Thecircuitrequires±5Vsupplyvoltages.Connect the +5V supply to the VCC pad, and the -5V supply to theVEE pad.Connect power-supply ground to thepad marked GND.
- 2) On dip switch SW1,set A0 and A1 to logic 0,and set ENABLE to logic 1.
- 3) Apply a signal of ±2.5V maximum to the SMA jack input marked INO.
- 4) Insertanoscilloscopeprobeintothescope-probe connector labeled OuT.Be sure the scope ground makes contact with the outside of the connector.
- 5) Turn on the power supply and verify the output signalontheoscilloscope.Theboardshouldnotdraw more than 10mA from each supply.
- 6)Accurategain-flatnessmeasurement:
- a) Apply a signal to an input.
- b) Take the measurement with high-frequency FET probes at the pins of the IC, not at the connectors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

## MAX4141 Evaluation Kit

## Detailed Description

## Addressand Enable Control

Dip switchSW1allows simple control of the address linesA0andA1aswellastheenablefunction.Referto Table1forswitchsettings.UserpadsmarkedA0,A1, andENABLEareprovidedforusinganexternalcontroller.Note that there are 10kQpull-upresistors toVCC ontheA0,A1,andENABLElines.

## Table 1. Truth Table

Figure1.MAX4141EVKitSchematicDiagram

|   A1 |   A0 |   ENABLE |        |
|------|------|----------|--------|
|      |      |        0 | High-Z |
|    0 |    0 |        1 | INO    |
|    0 |    1 |        1 | IN1    |
|    1 |    0 |        1 | IN2    |
|    1 |    1 |        1 | IN3    |

<!-- image -->

## Layout Considerations

TheMAx4141evaluationboardlayoutisoptimizedfor high-speed signals.Input traces are50Ωtransmission linescreatedwithmicrostrip techniques.Ceramic bypasscapacitorsarelocatedasclosetothe MAX4141supplypinsaspossibletominimizeparasitic inductances.Furtherlayoutrecommendationscanbe found in the Grounding,Bypassing,and PCBoard Layoutsectionof theMAx4141datasheet.

<!-- image -->

<!-- image -->

Figure2.MAX4141EVKitComponentPlacementGuideComponentSide

<!-- image -->

Figure4.MAX4141EVKitPCBoardLayout—SolderSide

<!-- image -->

## MAX4141 Evaluation Kit

Figure3.MAX4141EVKitPCBoardLayout-ComponentSide

<!-- image -->

## MAX4141 Evaluation Kit

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatentlicensesare implied.Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

4 Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 (408) 737-7600

1995MaximIntegratedProducts