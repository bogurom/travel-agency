import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, changeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: (type, value) => dispatch(changeDuration({
    from: value,
    to: value,
    // to: 2,
    // from: event.currentTarget.value,

    // from: event.currentTarget.value,
    // from: event.currentTarget.value,
    // to: props.duration.to,
  })),

  // changeDuration: (type, value) => dispatch(changeDuration(
  //   if(type="from"){
  //     from: value
  //   } else if(type = "to") {
  //     to: value
  //   }
  // )),
  changeTags: tag => dispatch(changeTags(tag)),
});


// const mapDispatchToProps = (dispatch, props) => ({
//   addColumn: title => dispatch(createAction_addColumn({
//     listId: props.match.params.id,
//     title,
//   })),
// });


export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
